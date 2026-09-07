function initProcessTimeline() {
  const timeline = document.querySelector('.process-timeline')
  if (!timeline || timeline.dataset.timelineReady === 'true') return

  const steps = [...timeline.querySelectorAll('[data-process-step]')]
  if (!steps.length) return

  timeline.dataset.timelineReady = 'true'

  // Translated copy and responsive cards change the distance between nodes.
  const rail = timeline.querySelector('.process-timeline__rail')
  const nodes = steps.map(step => step.querySelector('.process-step__node'))
  const measureRail = () => {
    if (!rail || nodes.some(node => !node)) return
    const origin = timeline.getBoundingClientRect()
    const first = nodes[0].getBoundingClientRect()
    const last = nodes.at(-1).getBoundingClientRect()
    rail.style.top = `${first.top + first.height / 2 - origin.top}px`
    rail.style.height = `${last.top + last.height / 2 - first.top - first.height / 2}px`
    rail.style.bottom = 'auto'
  }
  const resizeObserver = new ResizeObserver(measureRail)
  steps.forEach(step => resizeObserver.observe(step))
  window.addEventListener('resize', measureRail, { passive: true })
  document.fonts.ready.then(measureRail)
  measureRail()

  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    steps.forEach((step) => step.classList.add('is-visible'))
    timeline.style.setProperty('--process-progress', '100%')
    return
  }

  let furthestVisibleStep = -1
  const revealStep = (step) => {
    const index = steps.indexOf(step)
    step.classList.add('is-visible')
    furthestVisibleStep = Math.max(furthestVisibleStep, index)
    const progress = steps.length === 1 ? 100 : (furthestVisibleStep / (steps.length - 1)) * 100
    timeline.style.setProperty('--process-progress', `${progress}%`)
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return
      revealStep(entry.target)
      observer.unobserve(entry.target)
    })
  }, { threshold: 0.3, rootMargin: '0px 0px -12% 0px' })

  steps.forEach((step) => observer.observe(step))
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initProcessTimeline, { once: true })
} else {
  initProcessTimeline()
}
