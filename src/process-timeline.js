function initProcessTimeline() {
  const timeline = document.querySelector('.process-timeline')
  if (!timeline || timeline.dataset.timelineReady === 'true') return

  const steps = [...timeline.querySelectorAll('[data-process-step]')]
  if (!steps.length) return

  timeline.dataset.timelineReady = 'true'

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
