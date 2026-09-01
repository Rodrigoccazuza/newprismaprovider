const guard = window.__prismaLanguageObserverGuard
const NativeMutationObserver = guard?.NativeMutationObserver || window.MutationObserver

// The first language-switcher implementation used a document-wide observer that
// could repeatedly retrigger itself after translating text. Disconnect it and
// restore the browser observer before installing the stable UI below.
if (guard) {
  guard.instances.forEach((observer) => observer.disconnect())
  window.MutationObserver = guard.NativeMutationObserver
}

const desktopSource = document.querySelector('.nav__actions .language-switcher--desktop')
const mobileSource = document.querySelector('.mobile-nav .language-switcher--mobile')
const navActions = document.querySelector('.nav__actions')

const getLanguage = () => {
  try {
    const stored = localStorage.getItem('prisma-language')
    if (['en', 'es', 'pt'].includes(stored)) return stored
  } catch {}
  return 'en'
}

let heroObserver
let heroRefreshTimer

const connectHeroObserver = () => {
  if (!heroObserver) return
  document.querySelectorAll('.copy, .slide-label').forEach((target) => {
    heroObserver.observe(target, { subtree: true, childList: true, characterData: true })
  })
}

const disconnectHeroObserver = () => heroObserver?.disconnect()

function syncLanguageUi() {
  const lang = getLanguage()
  document.querySelectorAll('.prisma-language-option').forEach((option) => {
    const active = option.dataset.lang === lang
    option.classList.toggle('is-active', active)
    option.setAttribute('aria-selected', String(active))
  })
  const triggerLabel = document.querySelector('.prisma-language-trigger__code')
  if (triggerLabel) triggerLabel.textContent = lang.toUpperCase()
}

function applyLanguage(lang) {
  const sourceButton = desktopSource?.querySelector(`button[data-lang="${lang}"]`) || mobileSource?.querySelector(`button[data-lang="${lang}"]`)
  if (!sourceButton) return

  window.clearTimeout(heroRefreshTimer)
  disconnectHeroObserver()
  sourceButton.click()
  syncLanguageUi()
  requestAnimationFrame(connectHeroObserver)
}

if (navActions && desktopSource && !document.querySelector('.prisma-language-select')) {
  desktopSource.setAttribute('aria-hidden', 'true')
  desktopSource.classList.add('language-switcher--source')

  const select = document.createElement('div')
  select.className = 'prisma-language-select'
  select.innerHTML = `
    <button class="prisma-language-trigger" type="button" aria-haspopup="listbox" aria-expanded="false" aria-label="Change website language">
      <i class="bi bi-globe2" aria-hidden="true"></i>
      <span class="prisma-language-trigger__code">EN</span>
      <i class="bi bi-chevron-down prisma-language-trigger__chevron" aria-hidden="true"></i>
    </button>
    <div class="prisma-language-menu" role="listbox" aria-label="Website language">
      <button class="prisma-language-option" type="button" role="option" data-lang="en"><span>English</span><small>EN</small></button>
      <button class="prisma-language-option" type="button" role="option" data-lang="es"><span>Español</span><small>ES</small></button>
      <button class="prisma-language-option" type="button" role="option" data-lang="pt"><span>Português</span><small>PT</small></button>
    </div>
  `

  desktopSource.insertAdjacentElement('afterend', select)

  const trigger = select.querySelector('.prisma-language-trigger')
  const menu = select.querySelector('.prisma-language-menu')

  const close = () => {
    select.classList.remove('is-open')
    trigger.setAttribute('aria-expanded', 'false')
  }

  trigger.addEventListener('click', (event) => {
    event.stopPropagation()
    const open = !select.classList.contains('is-open')
    select.classList.toggle('is-open', open)
    trigger.setAttribute('aria-expanded', String(open))
  })

  menu.querySelectorAll('.prisma-language-option').forEach((option) => {
    option.addEventListener('click', () => {
      applyLanguage(option.dataset.lang)
      close()
    })
  })

  document.addEventListener('click', (event) => {
    if (!select.contains(event.target)) close()
  })

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') close()
  })
}

// Keep the existing mobile segmented control, but make it compact and sync the
// desktop indicator whenever a language is selected there.
mobileSource?.querySelectorAll('button[data-lang]').forEach((button) => {
  button.addEventListener('click', () => requestAnimationFrame(syncLanguageUi))
})

if (NativeMutationObserver) {
  heroObserver = new NativeMutationObserver(() => {
    const lang = getLanguage()
    if (lang === 'en') return

    window.clearTimeout(heroRefreshTimer)
    heroRefreshTimer = window.setTimeout(() => {
      disconnectHeroObserver()
      const sourceButton = desktopSource?.querySelector(`button[data-lang="${lang}"]`) || mobileSource?.querySelector(`button[data-lang="${lang}"]`)
      sourceButton?.click()
      syncLanguageUi()
      requestAnimationFrame(connectHeroObserver)
    }, 0)
  })
  connectHeroObserver()
}

if (!document.querySelector('#language-switcher-stable-styles')) {
  const style = document.createElement('style')
  style.id = 'language-switcher-stable-styles'
  style.textContent = `
    .nav__actions{gap:10px}
    .language-switcher--source{display:none!important}
    .prisma-language-select{position:relative;z-index:80;flex:none}
    .prisma-language-trigger{height:42px;min-width:70px;padding:0 11px;border:1px solid rgba(255,255,255,.25);border-radius:999px;display:inline-flex;align-items:center;justify-content:center;gap:7px;color:#e4e8eb;background:rgba(8,10,11,.58);backdrop-filter:blur(18px);-webkit-backdrop-filter:blur(18px);box-shadow:inset 0 1px rgba(255,255,255,.09);cursor:pointer;font-size:10px;font-weight:800;letter-spacing:.08em;transition:border-color .2s ease,background .2s ease,color .2s ease}
    .prisma-language-trigger:hover,.prisma-language-select.is-open .prisma-language-trigger{color:#fff;border-color:rgba(255,255,255,.46);background:rgba(255,255,255,.1)}
    .prisma-language-trigger>i:first-child{font-size:14px}.prisma-language-trigger__chevron{font-size:9px;transition:transform .2s ease}.prisma-language-select.is-open .prisma-language-trigger__chevron{transform:rotate(180deg)}
    .prisma-language-menu{position:absolute;right:0;top:calc(100% + 9px);width:174px;padding:6px;border:1px solid rgba(255,255,255,.22);border-radius:16px;background:rgba(9,11,12,.96);backdrop-filter:blur(24px);-webkit-backdrop-filter:blur(24px);box-shadow:0 22px 55px rgba(0,0,0,.5),inset 0 1px rgba(255,255,255,.08);opacity:0;visibility:hidden;transform:translateY(-5px);transition:opacity .18s ease,transform .18s ease,visibility .18s ease}
    .prisma-language-select.is-open .prisma-language-menu{opacity:1;visibility:visible;transform:translateY(0)}
    .prisma-language-option{width:100%;min-height:40px;padding:0 11px;border:0;border-radius:11px;display:flex;align-items:center;justify-content:space-between;background:transparent;color:#b6bcc2;cursor:pointer;font-size:11px;text-align:left}
    .prisma-language-option small{color:#727980;font-size:8px;font-weight:800;letter-spacing:.1em}.prisma-language-option:hover{color:#fff;background:rgba(255,255,255,.07)}.prisma-language-option.is-active{color:#0a0c0e;background:var(--lime)}.prisma-language-option.is-active small{color:#263019}
    .language-switcher--mobile{margin:16px 0 0!important;padding:4px!important;max-width:100%;background:rgba(255,255,255,.055)!important}.language-switcher--mobile button{min-width:48px!important;height:38px!important}
    @media(max-width:960px) and (min-width:721px){.prisma-language-trigger{min-width:58px;padding-inline:9px}.prisma-language-trigger>i:first-child{display:none}.nav__actions{gap:7px}.nav__actions>.button{padding-inline:18px}}
    @media(max-width:720px){.prisma-language-select{display:none}.language-switcher--mobile{display:inline-flex!important}.mobile-nav{overflow:visible}}
    @media(prefers-reduced-motion:reduce){.prisma-language-trigger,.prisma-language-trigger__chevron,.prisma-language-menu{transition:none!important}}
  `
  document.head.appendChild(style)
}

syncLanguageUi()
