/* Language switching (EN / PT / ES).
   English copy in index.html is the source of truth. Translations are keyed by the
   English string (normalised whitespace), so copy edits only need a dictionary entry.
   Nodes marked [data-i18n-skip] are rendered by their own module through t(). */
import base from './translations.json'
import extra from './translations-extra.json'

const LANGS = ['en', 'pt', 'es']
const HTML_LANG = { en: 'en', pt: 'pt-BR', es: 'es' }
const dict = {
  pt: { ...base.pt, ...extra.pt },
  es: { ...base.es, ...extra.es }
}
const ATTRS = ['placeholder', 'aria-label', 'alt']
const STORAGE_KEY = 'prisma-language'

const textOrig = new WeakMap()
const attrOrig = new WeakMap()
const listeners = new Set()
let current = 'en'

const norm = (s) => s.replace(/\s+/g, ' ').trim()

export function t(english) {
  if (current === 'en') return english
  return dict[current][norm(english)] ?? english
}
export const getLang = () => current
export const onLangChange = (fn) => listeners.add(fn)

function translateText(node) {
  if (!textOrig.has(node)) textOrig.set(node, node.nodeValue)
  const orig = textOrig.get(node)
  const key = norm(orig)
  if (!key) return
  const lead = orig.match(/^\s*/)[0]
  const trail = orig.match(/\s*$/)[0]
  node.nodeValue = current === 'en' ? orig : lead + (dict[current][key] ?? key) + trail
}

function translateAttrs(el) {
  let saved = attrOrig.get(el)
  if (!saved) { saved = {}; attrOrig.set(el, saved) }
  for (const a of ATTRS) {
    if (!el.hasAttribute(a)) continue
    if (!(a in saved)) saved[a] = el.getAttribute(a)
    el.setAttribute(a, t(saved[a]))
  }
}

export function translate(root = document.body) {
  const skip = (el) => el.closest('[data-i18n-skip], script, style, svg, [lang]:not(html)')
  const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT, {
    acceptNode: (n) => (n.nodeValue.trim() && !skip(n.parentElement) ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_REJECT)
  })
  let n
  while ((n = walker.nextNode())) translateText(n)
  root.querySelectorAll(ATTRS.map((a) => `[${a}]`).join(',')).forEach((el) => { if (!skip(el)) translateAttrs(el) })
}

export function setLang(lang, { persist = true } = {}) {
  current = LANGS.includes(lang) ? lang : 'en'
  document.documentElement.lang = HTML_LANG[current]
  translate()
  document.title = t('Prisma Provider — Immigration Support, Made Clearer')
  if (persist) { try { localStorage.setItem(STORAGE_KEY, current) } catch { /* storage blocked */ } }
  listeners.forEach((fn) => fn(current))
}

export function initialLang() {
  let saved = null
  try { saved = localStorage.getItem(STORAGE_KEY) } catch { /* storage blocked */ }
  if (LANGS.includes(saved)) return saved
  const nav = (navigator.language || 'en').slice(0, 2)
  return LANGS.includes(nav) ? nav : 'en'
}

/* Language menu (nav) */
export function initLangMenu() {
  const wrap = document.querySelector('[data-lang-menu]')
  const trigger = wrap.querySelector('.lang__trigger')
  const menu = wrap.querySelector('.lang__menu')
  const items = [...menu.querySelectorAll('[data-lang]')]
  const names = { en: 'English', pt: 'Português', es: 'Español' }

  const close = (focus) => { menu.hidden = true; trigger.setAttribute('aria-expanded', 'false'); if (focus) trigger.focus() }
  const open = () => { menu.hidden = false; trigger.setAttribute('aria-expanded', 'true'); (items.find((i) => i.getAttribute('aria-checked') === 'true') || items[0]).focus() }

  trigger.addEventListener('click', () => (menu.hidden ? open() : close()))
  items.forEach((item, i) => {
    item.addEventListener('click', () => { setLang(item.dataset.lang); close(true) })
    item.addEventListener('keydown', (e) => {
      if (e.key === 'ArrowDown') { e.preventDefault(); items[(i + 1) % items.length].focus() }
      if (e.key === 'ArrowUp') { e.preventDefault(); items[(i - 1 + items.length) % items.length].focus() }
      if (e.key === 'Tab') close()
    })
  })
  document.addEventListener('keydown', (e) => { if (e.key === 'Escape' && !menu.hidden) close(true) })
  document.addEventListener('click', (e) => { if (!wrap.contains(e.target)) close() })

  onLangChange((lang) => {
    wrap.querySelector('[data-lang-current]').textContent = lang.toUpperCase()
    trigger.setAttribute('aria-label', `${t('Language')}: ${names[lang]}`)
    items.forEach((i) => i.setAttribute('aria-checked', String(i.dataset.lang === lang)))
  })
}
