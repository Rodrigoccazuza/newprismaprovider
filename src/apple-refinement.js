const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)')

function ensureRefinementStylesAreLast() {
  const link = document.querySelector('#apple-refinement-styles')
  if (link && link.parentNode) document.head.appendChild(link)
}

function improveFormSemantics() {
  const form = document.querySelector('.contact-form')
  if (!form) return

  const name = form.querySelector('input[name="name"]')
  const email = form.querySelector('input[name="email"]')
  const phone = form.querySelector('input[name="phone"]')
  const state = form.querySelector('input[name="state"]')

  if (name) name.autocomplete = 'name'
  if (email) {
    email.autocomplete = 'email'
    email.inputMode = 'email'
  }
  if (phone) {
    phone.autocomplete = 'tel'
    phone.inputMode = 'tel'
  }
  if (state) state.autocomplete = 'address-level1'
}

function improveHeroTabs() {
  const tabs = [...document.querySelectorAll('.progress button[role="tab"]')]
  if (!tabs.length) return

  const syncTabStops = () => {
    tabs.forEach((tab) => {
      tab.tabIndex = tab.getAttribute('aria-selected') === 'true' ? 0 : -1
    })
  }

  syncTabStops()

  tabs.forEach((tab, index) => {
    const observer = new MutationObserver(syncTabStops)
    observer.observe(tab, { attributes: true, attributeFilter: ['aria-selected'] })

    tab.addEventListener('keydown', (event) => {
      let targetIndex = null
      if (event.key === 'ArrowRight') targetIndex = (index + 1) % tabs.length
      if (event.key === 'ArrowLeft') targetIndex = (index - 1 + tabs.length) % tabs.length
      if (event.key === 'Home') targetIndex = 0
      if (event.key === 'End') targetIndex = tabs.length - 1
      if (targetIndex === null) return

      event.preventDefault()
      tabs[targetIndex].focus()
      tabs[targetIndex].click()
    })
  })
}

function addSectionWayfinding() {
  const links = [...document.querySelectorAll('.nav__links a[href^="#"]')]
  if (!links.length || !('IntersectionObserver' in window)) return

  const entries = links
    .map((link) => ({ link, section: document.querySelector(link.getAttribute('href')) }))
    .filter(({ section }) => section)

  if (!entries.length) return

  const setCurrent = (id) => {
    entries.forEach(({ link, section }) => {
      const current = section.id === id
      link.classList.toggle('is-current', current)
      if (current) link.setAttribute('aria-current', 'location')
      else link.removeAttribute('aria-current')
    })
  }

  const observer = new IntersectionObserver((observed) => {
    const visible = observed
      .filter((item) => item.isIntersecting)
      .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0]
    if (visible?.target?.id) setCurrent(visible.target.id)
  }, {
    rootMargin: '-20% 0px -58% 0px',
    threshold: [0.05, 0.25, 0.5]
  })

  entries.forEach(({ section }) => observer.observe(section))
}

function addPressFeedback() {
  if (prefersReducedMotion.matches) return

  const selector = '.button, .menu, .progress button, .service-card > a'

  document.addEventListener('pointerdown', (event) => {
    const control = event.target.closest(selector)
    if (!control) return
    control.classList.add('is-pressing')
  })

  const clear = (event) => {
    const control = event.target.closest?.(selector)
    if (control) control.classList.remove('is-pressing')
  }

  document.addEventListener('pointerup', clear)
  document.addEventListener('pointercancel', clear)
  document.addEventListener('pointerleave', clear, true)
}

function initializeAppleRefinement() {
  ensureRefinementStylesAreLast()
  document.documentElement.classList.add('apple-refined')
  improveFormSemantics()
  improveHeroTabs()
  addSectionWayfinding()
  addPressFeedback()
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initializeAppleRefinement, { once: true })
} else {
  initializeAppleRefinement()
}
