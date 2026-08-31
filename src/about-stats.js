const aboutSection = document.querySelector('.about-section')

if (aboutSection && !document.querySelector('.about-stats')) {
  const section = document.createElement('section')
  section.className = 'about-stats'
  section.setAttribute('aria-label', 'Prisma Provider highlights')
  section.innerHTML = `
    <div class="about-stats__item">
      <strong><span class="about-stats__number" data-target="200">0</span><em>+</em></strong>
      <span>Case load</span>
    </div>
    <div class="about-stats__item">
      <strong><span class="about-stats__number" data-target="100">0</span><em>%</em></strong>
      <span>Approval Rate</span>
    </div>
    <div class="about-stats__item">
      <strong><span class="about-stats__number" data-target="50">0</span><em>+</em></strong>
      <span>States</span>
    </div>
    <div class="about-stats__item">
      <strong><span class="about-stats__number" data-target="8">0</span><em>+</em></strong>
      <span>Services Provided</span>
    </div>
  `
  aboutSection.insertAdjacentElement('beforebegin', section)

  const styles = document.createElement('style')
  styles.id = 'about-stats-styles'
  styles.textContent = `
    .about-stats{
      width:min(1180px,calc(100% - 96px));
      margin:82px auto 42px;
      padding:34px 44px;
      display:grid;
      grid-template-columns:repeat(4,minmax(0,1fr));
      gap:10px;
      border:1px solid rgba(255,255,255,.52);
      border-radius:38px;
      background:linear-gradient(145deg,rgba(91,101,99,.72),rgba(62,70,68,.78));
      backdrop-filter:blur(20px) saturate(.82);
      -webkit-backdrop-filter:blur(20px) saturate(.82);
      box-shadow:inset 0 1px rgba(255,255,255,.18),0 24px 60px rgba(0,0,0,.28);
    }
    .about-stats__item{
      min-width:0;
      padding:4px 20px;
      display:flex;
      flex-direction:column;
      align-items:flex-start;
      justify-content:center;
    }
    .about-stats__item strong{
      display:flex;
      align-items:flex-start;
      gap:4px;
      margin:0;
      color:#fff;
      font-size:clamp(40px,4vw,62px);
      font-weight:760;
      line-height:.92;
      letter-spacing:-.06em;
    }
    .about-stats__item strong em{
      margin-top:10px;
      color:#39f15d;
      font-size:.5em;
      font-style:normal;
      font-weight:760;
      letter-spacing:-.02em;
    }
    .about-stats__item>span{
      margin-top:8px;
      color:#f3f3ef;
      font-family:Georgia,'Times New Roman',serif;
      font-size:clamp(18px,1.65vw,28px);
      line-height:1.05;
      white-space:nowrap;
    }
    @media(max-width:900px){
      .about-stats{width:calc(100% - 48px);grid-template-columns:repeat(2,minmax(0,1fr));gap:24px;padding:30px;border-radius:30px}
      .about-stats__item{padding:8px 14px}
    }
    @media(max-width:560px){
      .about-stats{width:calc(100% - 30px);margin:58px auto 28px;grid-template-columns:1fr 1fr;gap:22px 12px;padding:24px 18px;border-radius:26px}
      .about-stats__item{padding:4px 8px}
      .about-stats__item strong{font-size:38px}
      .about-stats__item>span{font-size:16px;white-space:normal}
    }
  `
  document.head.appendChild(styles)

  const numbers = [...section.querySelectorAll('.about-stats__number')]
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
  let hasAnimated = false

  const setFinalValues = () => {
    numbers.forEach((node) => {
      node.textContent = node.dataset.target
    })
  }

  const animateNumbers = () => {
    if (hasAnimated) return
    hasAnimated = true

    if (reduceMotion) {
      setFinalValues()
      return
    }

    const duration = 1500
    const start = performance.now()

    const tick = (now) => {
      const progress = Math.min((now - start) / duration, 1)
      const eased = 1 - Math.pow(1 - progress, 3)

      numbers.forEach((node) => {
        const target = Number(node.dataset.target) || 0
        node.textContent = Math.round(target * eased).toString()
      })

      if (progress < 1) requestAnimationFrame(tick)
      else setFinalValues()
    }

    requestAnimationFrame(tick)
  }

  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver((entries) => {
      if (entries.some((entry) => entry.isIntersecting)) {
        animateNumbers()
        observer.disconnect()
      }
    }, { threshold: 0.35 })
    observer.observe(section)
  } else {
    animateNumbers()
  }
}
