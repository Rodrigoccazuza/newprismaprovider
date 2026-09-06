const asset = (path) => `${import.meta.env.BASE_URL}${path}`

const style = document.createElement('style')
style.id = 'prisma-finalization-safe-2026'
style.textContent = `
:root{--final-lime:#c1ff72}
body{overflow-x:hidden!important}
.global-nav .nav__links a{font-weight:700!important;transition:color .2s ease,opacity .2s ease!important}
.global-nav .nav__links a:hover{color:var(--final-lime)!important}
.prisma-heading-highlight{color:var(--final-lime)!important}
.display-title,h1,.reviews-heading h2,.journeys-heading h2,.team-editorial-header h2{font-family:Inter,system-ui,sans-serif!important;text-wrap:balance!important}
.trust-strip strong,.benefit-card--stat strong,.metrics strong,.journey-metrics strong,.service-card__index{font-family:Inter,system-ui,sans-serif!important;font-variant-numeric:tabular-nums!important}
.section,.trust-strip{position:relative!important}
.section:before{content:"";position:absolute;inset:0;pointer-events:none;z-index:-1;background:radial-gradient(circle at var(--mx,18%) var(--my,18%),rgba(193,255,114,.05),transparent 30%),radial-gradient(circle at calc(100% - var(--mx,18%)) calc(100% - var(--my,18%)),rgba(77,140,255,.04),transparent 34%)}
.final-reveal{opacity:0;transform:translateY(24px);filter:blur(4px);transition:opacity .7s ease,transform .8s cubic-bezier(.16,1,.3,1),filter .7s ease}
.final-reveal.is-final-visible{opacity:1;transform:none;filter:none}
.citizenship-narrow{width:min(80%,1150px)!important;margin-inline:auto!important}
.about-statement__image{overflow:hidden!important}
.about-statement__image img{width:100%!important;height:100%!important;object-fit:cover!important;object-position:center!important}
.team-editorial-topline,.team-editorial-kicker{justify-content:center!important;text-align:center!important}
.team-editorial-header{display:block!important;max-width:900px!important;margin:0 auto 48px!important;text-align:center!important}
.team-editorial-header__side{max-width:560px!important;margin:22px auto 0!important;text-align:center!important}
.team-editorial-track{max-width:800px!important;margin-inline:auto!important}
.reviews-section{overflow:hidden!important}
.reviews-track.reviews-columns{display:grid!important;grid-template-columns:repeat(3,minmax(0,1fr))!important;gap:18px!important;max-height:720px!important;overflow:hidden!important;mask-image:linear-gradient(to bottom,transparent,#000 10%,#000 90%,transparent)!important;-webkit-mask-image:linear-gradient(to bottom,transparent,#000 10%,#000 90%,transparent)!important}
.reviews-column{display:flex!important;flex-direction:column!important;gap:18px!important;animation:reviews-column-up var(--review-duration,18s) linear infinite!important;will-change:transform!important}
.reviews-column:nth-child(2){--review-duration:22s}.reviews-column:nth-child(3){--review-duration:19s}
.reviews-column .review-card{width:100%!important;min-height:240px!important;margin:0!important;flex:none!important}
@keyframes reviews-column-up{to{transform:translateY(-50%)}}
.process-timeline__rail{overflow:hidden!important}
img{max-width:100%}
a,button{touch-action:manipulation}
a:focus-visible,button:focus-visible,input:focus-visible,select:focus-visible,textarea:focus-visible{outline:2px solid var(--final-lime)!important;outline-offset:3px!important}
html[lang="es"] .display-title,html[lang="pt"] .display-title{font-size:clamp(34px,4.5vw,64px)!important;line-height:.97!important}
html[lang="es"] h1,html[lang="pt"] h1{font-size:clamp(29px,4.1vw,50px)!important}
@media(max-width:900px){.reviews-track.reviews-columns{grid-template-columns:repeat(2,minmax(0,1fr))!important}.reviews-column:nth-child(3){display:none!important}.citizenship-narrow{width:calc(100% - 36px)!important}}
@media(max-width:720px){
  .global-nav{overflow:visible!important}
  .global-nav .menu{position:relative!important;width:40px!important;height:40px!important;border-radius:50%!important;display:grid!important;place-items:center!important}
  .global-nav .menu span{position:absolute!important;left:11px!important;width:17px!important;height:1.5px!important;transition:transform .3s ease,top .3s ease!important}
  .global-nav .menu span:first-child{top:15px!important}.global-nav .menu span:last-child{top:22px!important}
  .global-nav .menu[aria-expanded="true"] span:first-child{top:19px!important;transform:rotate(45deg)!important}
  .global-nav .menu[aria-expanded="true"] span:last-child{top:19px!important;transform:rotate(-45deg)!important}
  .global-nav .mobile-nav{position:absolute!important;left:0!important;right:0!important;top:calc(100% + 10px)!important;width:100%!important;opacity:0!important;visibility:hidden!important;pointer-events:none!important;transform:translateY(-12px) scale(.985)!important;transition:opacity .25s ease,transform .35s cubic-bezier(.16,1,.3,1),visibility .25s!important}
  .global-nav .mobile-nav.is-open{opacity:1!important;visibility:visible!important;pointer-events:auto!important;transform:none!important}
  .about-statement__image,.about-statement__image img{min-height:340px!important}
  .reviews-track.reviews-columns{grid-template-columns:1fr!important;max-height:590px!important}.reviews-column:nth-child(2),.reviews-column:nth-child(3){display:none!important}
  html[lang="es"] .display-title,html[lang="pt"] .display-title{font-size:clamp(31px,10.5vw,44px)!important}
  html[lang="es"] h1,html[lang="pt"] h1{font-size:clamp(25px,7.5vw,34px)!important}
}
@media(prefers-reduced-motion:reduce){.final-reveal,.reviews-column{animation:none!important;transition:none!important;transform:none!important;opacity:1!important;filter:none!important}}
`
document.head.appendChild(style)

// Ensure a valid language marker without observing our own writes.
if (!document.documentElement.getAttribute('lang')) document.documentElement.setAttribute('lang', 'en')

const menu = document.querySelector('.global-nav .menu')
const mobileNav = document.querySelector('.global-nav .mobile-nav')
if (menu && mobileNav) {
  const syncMenu = () => {
    const open = menu.getAttribute('aria-expanded') === 'true'
    mobileNav.classList.toggle('is-open', open)
    mobileNav.setAttribute('aria-hidden', open ? 'false' : 'true')
  }
  const menuObserver = new MutationObserver(syncMenu)
  menuObserver.observe(menu, { attributes:true, attributeFilter:['aria-expanded'] })
  mobileNav.querySelectorAll('a').forEach((a) => a.addEventListener('click', () => {
    if (menu.getAttribute('aria-expanded') !== 'false') menu.setAttribute('aria-expanded', 'false')
  }))
  syncMenu()
}

const highlightHeading = (heading) => {
  if (!heading || heading.querySelector('.prisma-heading-highlight')) return
  const walker = document.createTreeWalker(heading, NodeFilter.SHOW_TEXT)
  const nodes = []
  while (walker.nextNode()) if (walker.currentNode.nodeValue.trim()) nodes.push(walker.currentNode)
  const node = nodes.at(-1)
  if (!node) return
  const text = node.nodeValue
  const words = text.trim().split(/\s+/)
  if (words.length < 3) return
  const phrase = words.slice(-2).join(' ')
  const index = text.lastIndexOf(phrase)
  if (index < 0) return
  const span = document.createElement('span')
  span.className = 'prisma-heading-highlight'
  span.textContent = phrase
  node.parentNode.insertBefore(document.createTextNode(text.slice(0,index)), node)
  node.parentNode.insertBefore(span, node)
  node.nodeValue = text.slice(index + phrase.length)
}
document.querySelectorAll('h1,.display-title,.reviews-heading h2,.journeys-heading h2,.team-editorial-header h2').forEach(highlightHeading)

const sections = [...document.querySelectorAll('section')]
const citizenshipSection = sections.find((s) => /your path to citizenship/i.test(s.textContent || '')) || sections.find((s) => /naturalization/i.test(s.textContent || '') && s.classList.contains('journeys-section'))
citizenshipSection?.classList.add('citizenship-narrow')

const paperworkImage = document.querySelector('.about-statement__image img')
if (paperworkImage) {
  paperworkImage.src = asset('images/editorial/F78C5C3B-92E6-44C3-997E-7B4F8D529E1B.png')
  paperworkImage.alt = 'Immigration document preparation support at Prisma Provider'
  paperworkImage.loading = 'lazy'
  paperworkImage.decoding = 'async'
}

const reviewTrack = document.querySelector('.reviews-track')
if (reviewTrack && !reviewTrack.classList.contains('reviews-columns')) {
  const cards = [...reviewTrack.querySelectorAll('.review-card')].map((card) => card.cloneNode(true))
  if (cards.length) {
    reviewTrack.innerHTML = ''
    reviewTrack.classList.add('reviews-columns')
    for (let col = 0; col < 3; col += 1) {
      const column = document.createElement('div')
      column.className = 'reviews-column'
      const sequence = [...cards.slice(col), ...cards.slice(0,col)]
      for (let repeat = 0; repeat < 2; repeat += 1) sequence.forEach((card) => column.appendChild(card.cloneNode(true)))
      reviewTrack.appendChild(column)
    }
  }
}

const revealItems = [...document.querySelectorAll('.section > *, .trust-strip__item')].filter((el) => !el.closest('.process-line'))
revealItems.forEach((el) => el.classList.add('final-reveal'))
if (matchMedia('(prefers-reduced-motion: reduce)').matches) {
  revealItems.forEach((el) => el.classList.add('is-final-visible'))
} else {
  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-final-visible')
        revealObserver.unobserve(entry.target)
      }
    })
  }, { threshold:.08, rootMargin:'0px 0px -8% 0px' })
  revealItems.forEach((el) => revealObserver.observe(el))
}

document.querySelectorAll('.section').forEach((section) => section.addEventListener('pointermove', (event) => {
  const rect = section.getBoundingClientRect()
  if (!rect.width || !rect.height) return
  section.style.setProperty('--mx', `${((event.clientX - rect.left) / rect.width) * 100}%`)
  section.style.setProperty('--my', `${((event.clientY - rect.top) / rect.height) * 100}%`)
}, { passive:true }))

const fitRailToNodes = () => {
  const line = document.querySelector('.process-line.process-timeline')
  const rail = line?.querySelector('.process-timeline__rail')
  const nodes = line ? [...line.querySelectorAll('.process-step__node')] : []
  if (!line || !rail || nodes.length < 2) return
  const lineRect = line.getBoundingClientRect()
  const first = nodes[0].getBoundingClientRect()
  const last = nodes[nodes.length - 1].getBoundingClientRect()
  const top = first.top + first.height / 2 - lineRect.top
  const bottom = lineRect.bottom - (last.top + last.height / 2)
  rail.style.top = `${Math.max(0, top)}px`
  rail.style.bottom = `${Math.max(0, bottom)}px`
}
requestAnimationFrame(fitRailToNodes)
window.addEventListener('resize', fitRailToNodes, { passive:true })
