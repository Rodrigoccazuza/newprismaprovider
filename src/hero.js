/* Hero stories — five slides, autoplay with visible progress, pause control,
   keyboard-operable tabs. Copy lives here so it can be swapped per slide and translated via t(). */
import gsap from 'gsap'
import { t, onLangChange } from './i18n.js'

const SLIDES = [
  { eyebrow: 'Immigration support, made clearer', title: 'Your immigration process deserves a clear path forward.', body: 'From the first conversation to document preparation, review, filing and follow-up, Prisma Provider helps you stay organized and understand what comes next.', cta: 'Find your service' },
  { eyebrow: 'Adjustment of status', title: 'A Green Card application is more than a stack of forms.', body: 'We help you organize the documents, prepare the package and understand each step before it moves forward.', cta: 'Explore adjustment of status' },
  { eyebrow: 'Naturalization', title: 'Ready for the next step toward U.S. citizenship?', body: 'Prepare your naturalization process with clear instructions, organized documentation and support along the way.', cta: 'Explore naturalization' },
  { eyebrow: 'Removal of conditions', title: 'Your preparation should never be last minute.', body: 'We help you understand what needs to be gathered, prepared and reviewed before filing to replace your conditional Green Card.', cta: 'Explore removal of conditions' },
  { eyebrow: 'Confidential support', title: 'Understand your options in a safe, respectful environment.', body: 'Some immigration situations are deeply personal. Our team approaches every conversation with discretion, clarity and care.', cta: 'Learn about VAWA' }
]
const DURATION = 7 // seconds per slide

export function initHero({ motion }) {
  const root = document.querySelector('.hero')
  const imgs = [...root.querySelectorAll('[data-slide-img]')]
  const tabs = [...root.querySelectorAll('.hero__tab')]
  const pauseBtn = root.querySelector('.hero__pause')
  const el = {
    eyebrow: root.querySelector('[data-hero-eyebrow]'),
    title: root.querySelector('[data-hero-title]'),
    body: root.querySelector('[data-hero-body]'),
    cta: root.querySelector('[data-hero-cta] span')
  }
  let index = 0
  let progress = null
  let userPaused = false
  let inView = true

  const load = (img) => {
    if (!img || img.getAttribute('src')) return
    img.srcset = img.dataset.srcset
    img.src = img.dataset.src
  }

  function render(i) {
    const s = SLIDES[i]
    el.eyebrow.textContent = t(s.eyebrow)
    el.title.textContent = t(s.title)
    el.body.textContent = t(s.body)
    el.cta.textContent = t(s.cta)
  }

  function go(next, { user = false } = {}) {
    if (next === index && !user) return
    const prev = index
    index = (next + SLIDES.length) % SLIDES.length
    load(imgs[index]); load(imgs[(index + 1) % imgs.length])

    imgs.forEach((img, i) => img.classList.toggle('is-active', i === index))
    tabs.forEach((tab, i) => {
      const on = i === index
      tab.classList.toggle('is-active', on)
      tab.classList.toggle('is-done', i < index)
      tab.setAttribute('aria-selected', String(on))
      tab.tabIndex = on ? 0 : -1
      if (!on) gsap.set(tab.querySelector('b'), { scaleX: i < index ? 1 : 0 })
    })

    const copy = [el.eyebrow, el.title, el.body, el.cta.parentElement]
    if (motion() && prev !== index) {
      const dir = index > prev ? 1 : -1
      gsap.timeline()
        .to(copy, { opacity: 0, y: -10 * dir, duration: .28, ease: 'power2.in', stagger: .03 })
        .add(() => render(index))
        .fromTo(copy, { opacity: 0, y: 16 * dir }, { opacity: 1, y: 0, duration: .7, ease: 'expo.out', stagger: .06 })
    } else {
      render(index)
    }
    startProgress()
  }

  function startProgress() {
    progress?.kill()
    const bar = tabs[index].querySelector('b')
    if (!motion()) { gsap.set(bar, { scaleX: 1 }); return }
    progress = gsap.fromTo(bar, { scaleX: 0 }, { scaleX: 1, duration: DURATION, ease: 'none', onComplete: () => go(index + 1) })
    syncPlayState()
  }

  function syncPlayState() {
    if (!progress) return
    const shouldRun = !userPaused && inView && !document.hidden
    shouldRun ? progress.resume() : progress.pause()
  }

  tabs.forEach((tab, i) => {
    tab.addEventListener('click', () => go(i, { user: true }))
    tab.addEventListener('keydown', (e) => {
      const map = { ArrowRight: 1, ArrowLeft: -1 }
      if (e.key in map) { e.preventDefault(); const n = (index + map[e.key] + tabs.length) % tabs.length; go(n, { user: true }); tabs[n].focus() }
      if (e.key === 'Home') { e.preventDefault(); go(0, { user: true }); tabs[0].focus() }
      if (e.key === 'End') { e.preventDefault(); go(tabs.length - 1, { user: true }); tabs.at(-1).focus() }
    })
  })

  pauseBtn.addEventListener('click', () => {
    userPaused = !userPaused
    pauseBtn.setAttribute('aria-pressed', String(userPaused))
    pauseBtn.setAttribute('aria-label', t(userPaused ? 'Play slideshow' : 'Pause slideshow'))
    pauseBtn.querySelector('use').setAttribute('href', userPaused ? '#i-play' : '#i-pause')
    syncPlayState()
  })
  // Autoplay stops for reduced-motion users; the control becomes irrelevant.
  if (!motion()) pauseBtn.hidden = true

  new IntersectionObserver(([entry]) => { inView = entry.isIntersecting; syncPlayState() }).observe(root)
  document.addEventListener('visibilitychange', syncPlayState)
  onLangChange(() => {
    render(index)
    pauseBtn.setAttribute('aria-label', t(userPaused ? 'Play slideshow' : 'Pause slideshow'))
  })

  // Warm the next image once the page is idle.
  ;(window.requestIdleCallback || setTimeout)(() => load(imgs[1]))
  render(0)
  return { start: startProgress }
}
