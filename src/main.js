/* Prisma Provider — entry
   1 i18n · 2 nav · 3 hero · 4 process · 5 FAQ · 6 reviews · 7 wizard · 8 motion */
import './styles.css'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { t, setLang, initialLang, initLangMenu, onLangChange } from './i18n.js'
import { initHero } from './hero.js'
import { initWizard } from './wizard.js'

gsap.registerPlugin(ScrollTrigger)

const root = document.documentElement
const $ = (s, c = document) => c.querySelector(s)
const $$ = (s, c = document) => [...c.querySelectorAll(s)]
const reduceMQ = matchMedia('(prefers-reduced-motion: reduce)')
const motion = () => !reduceMQ.matches

$('[data-year]').textContent = new Date().getFullYear()

/* ---------- 1. Language ---------- */
initLangMenu()

/* ---------- 2. Navigation ---------- */
const nav = $('#nav')
const toggle = $('.nav__toggle', nav)
const sheet = $('#mobile-nav')
const hero = $('.hero')
const waFloat = $('.wa-float')
const progressBar = $('.scroll-progress')

function setMenu(open) {
  nav.classList.toggle('is-open', open)
  toggle.setAttribute('aria-expanded', String(open))
  toggle.setAttribute('aria-label', t(open ? 'Close menu' : 'Open menu'))
  sheet.inert = !open
  if (open) $('a', sheet).focus()
}
toggle.addEventListener('click', () => setMenu(!nav.classList.contains('is-open')))
sheet.addEventListener('click', (e) => { if (e.target.closest('a')) setMenu(false) })
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && nav.classList.contains('is-open')) { setMenu(false); toggle.focus() }
})
document.addEventListener('click', (e) => { if (nav.classList.contains('is-open') && !nav.contains(e.target)) setMenu(false) })
matchMedia('(min-width: 1024px)').addEventListener('change', (e) => e.matches && setMenu(false))
onLangChange(() => toggle.setAttribute('aria-label', t(nav.classList.contains('is-open') ? 'Close menu' : 'Open menu')))

// Current-section indicator
const navLinks = $$('.nav__links a')
const sectionIO = new IntersectionObserver((entries) => entries.forEach((entry) => {
  if (!entry.isIntersecting) return
  navLinks.forEach((a) => (a.hash === `#${entry.target.id}` ? a.setAttribute('aria-current', 'true') : a.removeAttribute('aria-current')))
}), { rootMargin: '-45% 0px -50% 0px' })
;['services', 'process', 'stories', 'team', 'faq', 'about', 'why', 'book'].forEach((id) => { const s = document.getElementById(id); s && sectionIO.observe(s) })

/* ---------- 4. Process: step state from scroll position ---------- */
const steps = $$('[data-step]')
const stepsList = $('[data-steps]')
const journey = {
  num: $('[data-journey-num]'),
  title: $('[data-journey-title]'),
  status: $('[data-journey-status]'),
  bar: $('[data-journey-bar]'),
  dots: $$('[data-journey-dots] li')
}
let activeStep = 0
function setStep(n, force = false) {
  if (n === activeStep && !force) return
  const dir = n >= activeStep ? 1 : -1
  activeStep = n
  steps.forEach((s, i) => { s.classList.toggle('is-active', i + 1 === n); s.classList.toggle('is-done', i + 1 < n) })
  journey.dots.forEach((d, i) => { d.classList.toggle('is-active', i + 1 === n); d.classList.toggle('is-done', i + 1 < n) })
  const step = steps[n - 1]
  journey.num.textContent = String(n).padStart(2, '0')
  journey.title.textContent = $('h3', step).textContent
  journey.status.textContent = $('.step__kicker', step).textContent
  journey.bar.style.transform = `scaleX(${n / steps.length})`
  if (motion() && !force) {
    gsap.fromTo([journey.num, journey.title], { yPercent: 35 * dir, opacity: 0 }, { yPercent: 0, opacity: 1, duration: .55, ease: 'expo.out', stagger: .05, overwrite: true })
  }
}
onLangChange(() => setStep(activeStep || 1, true))

/* ---------- Scroll-linked UI (one rAF-throttled listener) ---------- */
let lastY = scrollY
let ticking = false
function onScroll() {
  const y = scrollY
  const max = document.documentElement.scrollHeight - innerHeight
  progressBar.style.transform = `scaleX(${max > 0 ? y / max : 0})`

  // Nav hides while reading downward, returns on any upward scroll.
  const pastHero = y > hero.offsetHeight * 0.6
  if (!nav.classList.contains('is-open') && !nav.contains(document.activeElement)) {
    if (pastHero && y > lastY + 6) nav.classList.add('is-hidden')
    else if (y < lastY - 6 || !pastHero) nav.classList.remove('is-hidden')
  }
  waFloat.classList.toggle('is-hidden', y < innerHeight * 0.5)

  // Process: active step = last step whose top crossed the viewport centre.
  const r = stepsList.getBoundingClientRect()
  if (r.top < innerHeight && r.bottom > 0) {
    const mid = innerHeight * 0.5
    let n = 1
    steps.forEach((s, i) => { if (s.getBoundingClientRect().top < mid) n = i + 1 })
    setStep(n)
    stepsList.style.setProperty('--progress', Math.min(1, Math.max(0, (mid - r.top) / r.height)).toFixed(3))
  }
  lastY = y
  ticking = false
}
addEventListener('scroll', () => { if (!ticking) { ticking = true; requestAnimationFrame(onScroll) } }, { passive: true })

/* ---------- 5. FAQ — one open at a time, animated height ---------- */
const faqItems = $$('.faq__item')
faqItems.forEach((item) => {
  const summary = $('summary', item)
  const body = $('.faq__a', item)
  summary.addEventListener('click', (e) => {
    e.preventDefault()
    const opening = !item.open
    if (opening) faqItems.forEach((other) => other !== item && other.open && closeItem(other))
    opening ? openItem(item, body) : closeItem(item)
  })
})
function openItem(item, body = $('.faq__a', item)) {
  item.open = true
  if (motion()) gsap.fromTo(body, { height: 0, opacity: 0 }, { height: 'auto', opacity: 1, duration: .45, ease: 'expo.out' })
}
function closeItem(item) {
  const body = $('.faq__a', item)
  if (!motion()) { item.open = false; return }
  gsap.to(body, { height: 0, opacity: 0, duration: .3, ease: 'power2.inOut', onComplete: () => { item.open = false; gsap.set(body, { clearProps: 'height,opacity' }) } })
}

/* ---------- 6. Reviews — vertical marquee on wide screens, static otherwise ---------- */
const cols = $('[data-marquee]')
const marqueeBtn = $('[data-marquee-toggle]')
function setupMarquee() {
  const on = motion() && innerWidth >= 900
  cols.classList.toggle('is-marquee', on)
  marqueeBtn.hidden = !on
  $$('.reviews__col', cols).forEach((col) => {
    const clones = $$('[data-clone]', col)
    if (on && !clones.length) {
      // Duplicate for a seamless loop; clones are hidden from assistive tech and focus.
      $$('.review', col).forEach((r) => { const c = r.cloneNode(true); c.dataset.clone = ''; c.setAttribute('aria-hidden', 'true'); col.append(c) })
    } else if (!on) clones.forEach((c) => c.remove())
  })
}
marqueeBtn.addEventListener('click', () => {
  const paused = cols.classList.toggle('is-paused')
  marqueeBtn.setAttribute('aria-pressed', String(paused))
  $('span', marqueeBtn).textContent = t(paused ? 'Play motion' : 'Pause motion')
  $('use', marqueeBtn).setAttribute('href', paused ? '#i-play' : '#i-pause')
})
onLangChange(() => { $('span', marqueeBtn).textContent = t(cols.classList.contains('is-paused') ? 'Play motion' : 'Pause motion') })
setupMarquee()
addEventListener('resize', () => requestAnimationFrame(setupMarquee))

/* ---------- 7. Hero + wizard ---------- */
const heroCtl = initHero({ motion })
initWizard({ motion })

/* ---------- Initial language, then first paint of scroll state ---------- */
setLang(initialLang(), { persist: false })
setStep(1, true)
onScroll()

/* ---------- About headline: plain text, or split into words when motion is on ---------- */
const ABOUT = 'Immigration paperwork can be complicated. Working through it does not have to feel that way.'
const aboutTitle = $('[data-split]')
let splitOn = false
let wordsTween
function renderAbout() {
  wordsTween?.scrollTrigger?.kill(); wordsTween?.kill()
  const text = t(ABOUT)
  if (!splitOn) { aboutTitle.removeAttribute('aria-label'); aboutTitle.textContent = text; return }
  aboutTitle.setAttribute('aria-label', text)
  aboutTitle.innerHTML = text.split(/\s+/).map((w) => `<span class="w" aria-hidden="true">${w.replace(/&/g, '&amp;').replace(/</g, '&lt;')}</span>`).join(' ')
  wordsTween = gsap.fromTo(aboutTitle.querySelectorAll('.w'), { opacity: .14 }, { opacity: 1, stagger: .1, ease: 'none', scrollTrigger: { trigger: aboutTitle, start: 'top 80%', end: 'bottom 45%', scrub: .6 } })
}
onLangChange(() => { renderAbout(); ScrollTrigger.refresh() })
renderAbout()

/* ---------- 8. Motion system (GSAP + ScrollTrigger) ---------- */
const mm = gsap.matchMedia()
mm.add({ motion: '(prefers-reduced-motion: no-preference)', desktop: '(min-width: 1024px)' }, (ctx) => {
  const { motion: ok, desktop } = ctx.conditions
  if (!ok) { root.classList.remove('motion'); return }
  root.classList.add('motion')
  const ease = 'expo.out'

  // Hero entrance — one timeline: image settles, copy rises in reading order, chrome follows.
  gsap.timeline({ defaults: { ease } })
    .fromTo('.hero__img.is-active', { scale: 1.12 }, { scale: 1, duration: 2.2, ease: 'power2.out', clearProps: 'transform' }, 0)
    .fromTo('.hero__copy > *', { opacity: 0, y: 28 }, { opacity: 1, y: 0, duration: 1.1, stagger: .09 }, .2)
    .fromTo('.rating', { opacity: 0, y: 20, scale: .97 }, { opacity: 1, y: 0, scale: 1, duration: 1 }, .55)
    .fromTo('.hero__footer', { opacity: 0 }, { opacity: 1, duration: .8 }, .7)
    .add(() => heroCtl.start(), .7)

  // Hero exit — content recedes as the page moves on (depth, not decoration).
  gsap.to('.hero__content', { yPercent: -8, opacity: .15, ease: 'none', scrollTrigger: { trigger: '.hero', start: '35% top', end: 'bottom top', scrub: true } })

  // Section reveals — batched so siblings stagger together.
  ScrollTrigger.batch('[data-reveal]', {
    start: 'top 88%', once: true,
    onEnter: (batch) => gsap.fromTo(batch, { opacity: 0, y: 32 }, { opacity: 1, y: 0, duration: 1, ease, stagger: .08, overwrite: true })
  })

  // Stats count up once.
  $$('[data-count]').forEach((el) => {
    const target = +el.dataset.count
    const obj = { v: 0 }
    gsap.to(obj, { v: target, duration: 1.6, ease: 'power3.out', scrollTrigger: { trigger: el, start: 'top 92%', once: true }, onUpdate: () => { el.textContent = Math.round(obj.v) } })
  })

  // About headline — words light up at reading pace.
  splitOn = true
  renderAbout()

  // Image parallax inside fixed frames.
  $$('[data-parallax]').forEach((img) => {
    gsap.fromTo(img, { yPercent: -8 }, { yPercent: 0, ease: 'none', scrollTrigger: { trigger: img.parentElement, start: 'top bottom', end: 'bottom top', scrub: true } })
  })

  // Founder portraits — the frame opens from its centre, image settles.
  $$('[data-mask]').forEach((fig) => {
    gsap.timeline({ scrollTrigger: { trigger: fig, start: 'top 80%', once: true } })
      .to(fig, { clipPath: 'inset(0% 0% 0% 0% round 36px)', duration: 1.3, ease: 'expo.inOut' })
      .from(fig.querySelector('img'), { scale: 1.18, duration: 1.6, ease: 'expo.out' }, .15)
  })

  // Closing prism — light slowly rotates with scroll.
  gsap.fromTo('[data-drift]', { rotate: -8 }, { rotate: 6, ease: 'none', scrollTrigger: { trigger: '.closing', start: 'top bottom', end: 'bottom top', scrub: true } })

  // Service art lifts slightly as cards pass (desktop only; keeps phones calm).
  if (desktop) {
    gsap.utils.toArray('.service__art').forEach((art) => gsap.fromTo(art, { y: 14 }, { y: -6, ease: 'none', scrollTrigger: { trigger: art, start: 'top bottom', end: 'bottom top', scrub: true } }))
  }

  return () => { splitOn = false; wordsTween?.scrollTrigger?.kill(); wordsTween?.kill(); renderAbout() }
})

// Fonts shift line lengths — recompute trigger positions once they land.
document.fonts?.ready.then(() => ScrollTrigger.refresh())
