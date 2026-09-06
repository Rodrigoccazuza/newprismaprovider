const asset = (path) => `${import.meta.env.BASE_URL}${path}`

const style = document.createElement('style')
style.id = 'prisma-finalization-2026'
style.textContent = `
:root{--final-lime:#c1ff72;--final-bg:#030405;--final-text:#f6f7f5}

/* 1. Navigation: readable, adaptive and intentionally weighted. */
.global-nav .nav__links a{font-weight:700!important;letter-spacing:.01em!important;transition:color .22s ease,opacity .22s ease!important}
.global-nav .nav__links a:hover{color:var(--final-lime)!important}
.global-nav.nav--on-dark .nav__links{color:#f8faf8!important}
.global-nav.nav--on-dark .brand img{filter:brightness(4) grayscale(1)!important}
.global-nav.nav--on-dark .prisma-language-trigger{color:#fff!important;border-color:#ffffff31!important;background:#090b0c5c!important}
.global-nav.nav--on-light .nav__links{color:#111417!important}
.global-nav.nav--on-light .brand img{filter:brightness(.16) contrast(1.3)!important}

/* 2. Mobile menu: fixed dropdown with a clean two-line control and slide-down motion. */
@media(max-width:720px){
  .global-nav{overflow:visible!important}
  .global-nav .menu{position:relative!important;width:40px!important;height:40px!important;border:1px solid rgba(17,20,23,.14)!important;border-radius:50%!important;background:rgba(255,255,255,.44)!important;display:grid!important;place-items:center!important}
  .global-nav .menu span{position:absolute!important;left:11px!important;width:17px!important;height:1.5px!important;border-radius:99px!important;transform-origin:center!important;transition:transform .3s cubic-bezier(.16,1,.3,1),top .3s ease!important}
  .global-nav .menu span:first-child{top:15px!important}
  .global-nav .menu span:last-child{top:22px!important}
  .global-nav .menu[aria-expanded="true"] span:first-child{top:19px!important;transform:rotate(45deg)!important}
  .global-nav .menu[aria-expanded="true"] span:last-child{top:19px!important;transform:rotate(-45deg)!important}
  .global-nav .mobile-nav{position:absolute!important;left:0!important;right:0!important;top:calc(100% + 10px)!important;width:100%!important;max-height:none!important;margin:0!important;padding:16px!important;border-radius:24px!important;display:flex!important;flex-direction:column!important;gap:4px!important;opacity:0!important;visibility:hidden!important;pointer-events:none!important;transform:translateY(-14px) scale(.985)!important;transform-origin:top!important;transition:opacity .28s ease,transform .38s cubic-bezier(.16,1,.3,1),visibility .28s!important;box-shadow:0 22px 48px rgba(0,0,0,.32)!important}
  .global-nav .mobile-nav.is-open,.global-nav .menu[aria-expanded="true"]~.mobile-nav{opacity:1!important;visibility:visible!important;pointer-events:auto!important;transform:translateY(0) scale(1)!important}
  .global-nav .mobile-nav a{width:100%!important;padding:14px 12px!important;border-radius:14px!important;font-size:12px!important;font-weight:700!important}
  .global-nav .mobile-nav a:hover{color:#101510!important;background:var(--final-lime)!important}
}

/* 3. Number/stat typography uses the same family as the rest of the system. */
.trust-strip strong,.benefit-card--stat strong,.metrics strong,.journey-metrics strong,.service-card__index,.review-card__index{font-family:Inter,system-ui,sans-serif!important;font-variant-numeric:tabular-nums!important;font-weight:650!important;letter-spacing:-.055em!important}

/* 4. Stronger heading pairing with restrained Prisma highlight treatment. */
.display-title,h1,.reviews-heading h2,.journeys-heading h2,.team-editorial-header h2{font-family:Inter,system-ui,sans-serif!important;text-wrap:balance!important}
.prisma-heading-highlight{display:inline!important;color:var(--final-lime)!important;font-style:normal!important}

/* 5. Motion system + subtle moving backgrounds. */
.section,.trust-strip{position:relative!important}
.section:before{content:"";position:absolute;inset:0;pointer-events:none;z-index:-1;background:radial-gradient(circle at var(--mx,18%) var(--my,18%),rgba(193,255,114,.055),transparent 30%),radial-gradient(circle at calc(100% - var(--mx,18%)) calc(100% - var(--my,18%)),rgba(77,140,255,.045),transparent 34%);transition:background-position .25s ease}
.final-reveal{opacity:0;transform:translateY(28px);filter:blur(5px);transition:opacity .78s ease,transform .88s cubic-bezier(.16,1,.3,1),filter .78s ease}
.final-reveal.is-final-visible{opacity:1;transform:none;filter:none}

/* 6. How it works: the rail ends exactly at the center of the last numbered node. */
.process-section .process-line.process-timeline{--rail-top:118px;--rail-bottom:125px}
.process-timeline__rail{top:var(--rail-top)!important;bottom:var(--rail-bottom)!important;overflow:hidden!important}
.process-timeline__rail span{max-height:100%!important}
.process-step--last .process-step__node{box-shadow:0 0 0 7px #030405,0 0 28px rgba(193,255,114,.34)!important}
@media(max-width:900px){.process-section .process-line.process-timeline{--rail-top:112px;--rail-bottom:125px}}
@media(max-width:680px){.process-section .process-line.process-timeline{--rail-top:45px;--rail-bottom:45px}.process-timeline__rail{top:var(--rail-top)!important;bottom:var(--rail-bottom)!important}}

/* 7. Translation-safe sizing and wrapping. */
html[lang="es"] .display-title,html[lang="pt"] .display-title{font-size:clamp(34px,4.5vw,64px)!important;line-height:.96!important}
html[lang="es"] h1,html[lang="pt"] h1{font-size:clamp(29px,4.1vw,50px)!important}
html[lang="es"] .nav__links,html[lang="pt"] .nav__links{font-size:8.4px!important;gap:clamp(9px,1.15vw,17px)!important}
html[lang="es"] .button,html[lang="pt"] .button{font-size:9px!important;padding-inline:14px!important}
html[lang="es"] .team-editorial-card h3,html[lang="pt"] .team-editorial-card h3{font-size:30px!important}
.section-heading h2,.team-editorial-header h2,.journeys-heading h2,.reviews-heading h2{overflow-wrap:anywhere!important}
@media(max-width:720px){
  html[lang="es"] .display-title,html[lang="pt"] .display-title{font-size:clamp(31px,10.5vw,44px)!important}
  html[lang="es"] h1,html[lang="pt"] h1{font-size:clamp(25px,7.5vw,34px)!important}
}

/* 8. Citizenship/path section narrowed by 10% on each side. */
.citizenship-narrow{width:min(calc(var(--shell) * .8),1150px)!important;margin-inline:auto!important;padding-inline:0!important}
@media(max-width:900px){.citizenship-narrow{width:calc(100% - 36px)!important}}

/* 9. Paperwork image becomes a true cover on desktop and mobile. */
.about-statement__image{overflow:hidden!important}
.about-statement__image img{width:100%!important;height:100%!important;object-fit:cover!important;object-position:center!important}
@media(max-width:720px){.about-statement__image{min-height:340px!important}.about-statement__image img{min-height:340px!important;object-fit:cover!important}}

/* 10. Who we are: centered heading first, then balanced founder cards. */
.team-section--editorial{padding-top:104px!important}
.team-editorial-topline{justify-content:center!important;margin-bottom:22px!important}
.team-editorial-kicker{justify-content:center!important;text-align:center!important}
.team-editorial-header{display:block!important;margin:0 auto 48px!important;text-align:center!important}
.team-editorial-header h2{max-width:880px!important;margin:0 auto!important}
.team-editorial-header__side{display:block!important;max-width:560px!important;margin:22px auto 0!important}
.team-editorial-header__side p{max-width:560px!important;margin:0 auto!important;text-align:center!important}
.team-editorial-track{max-width:790px!important;margin:0 auto!important}
.team-editorial-card{border-radius:24px!important}
.team-editorial-card__media{aspect-ratio:4/3!important;min-height:0!important}
@media(max-width:720px){.team-editorial-track{max-width:420px!important}.team-editorial-header{margin-bottom:32px!important}.team-editorial-kicker>a{display:none!important}}

/* 11. Testimonials reference: three continuously moving columns, one on mobile. */
.reviews-section{overflow:hidden!important}
.reviews-track.reviews-columns{display:grid!important;grid-template-columns:repeat(3,minmax(0,1fr))!important;gap:18px!important;max-height:720px!important;overflow:hidden!important;mask-image:linear-gradient(to bottom,transparent,#000 10%,#000 90%,transparent)!important;-webkit-mask-image:linear-gradient(to bottom,transparent,#000 10%,#000 90%,transparent)!important}
.reviews-column{display:flex!important;flex-direction:column!important;gap:18px!important;will-change:transform!important;animation:reviews-column-up var(--review-duration,18s) linear infinite!important}
.reviews-column:nth-child(2){--review-duration:22s;transform:translateY(-12%)!important}
.reviews-column:nth-child(3){--review-duration:19s}
.reviews-column .review-card{width:100%!important;min-height:250px!important;margin:0!important;flex:none!important;padding:28px!important;border-radius:24px!important}
@keyframes reviews-column-up{to{transform:translateY(-50%)}}
@media(max-width:900px){.reviews-track.reviews-columns{grid-template-columns:repeat(2,minmax(0,1fr))!important}.reviews-column:nth-child(3){display:none!important}}
@media(max-width:620px){.reviews-track.reviews-columns{grid-template-columns:1fr!important;max-height:590px!important}.reviews-column:nth-child(2),.reviews-column:nth-child(3){display:none!important}.reviews-column .review-card{min-height:220px!important}}

/* 12. Senior-audit normalization: spacing, focus, overflow and touch behavior. */
.section{scroll-margin-top:96px!important}
img{max-width:100%}
a,button{touch-action:manipulation}
a:focus-visible,button:focus-visible,input:focus-visible,select:focus-visible,textarea:focus-visible{outline:2px solid var(--final-lime)!important;outline-offset:3px!important}
.team-editorial-card,.review-card,.service-card,.benefit-card,.journey-card{min-width:0!important}
.section-heading,.about-grid,.team-editorial-header,.reviews-heading,.journeys-heading{min-width:0!important}
body{overflow-x:hidden!important}
@media(prefers-reduced-motion:reduce){.final-reveal,.reviews-column{animation:none!important;transition:none!important;transform:none!important;opacity:1!important;filter:none!important}}
`
document.head.appendChild(style)

// Adaptive navigation contrast based on what sits behind the fixed nav.
const nav = document.querySelector('.global-nav')
const syncNavContrast = () => {
  if (!nav) return
  const r = nav.getBoundingClientRect()
  const target = document.elementFromPoint(Math.max(1, r.left + r.width / 2), Math.max(1, r.bottom + 8))
  let el = target
  let bg = ''
  while (el && el !== document.body) {
    bg = getComputedStyle(el).backgroundColor
    const m = bg?.match(/rgba?\((\d+),\s*(\d+),\s*(\d+)/)
    if (m && bg !== 'rgba(0, 0, 0, 0)') {
      const lum = (Number(m[1]) * .299 + Number(m[2]) * .587 + Number(m[3]) * .114)
      nav.classList.toggle('nav--on-light', lum > 145)
      nav.classList.toggle('nav--on-dark', lum <= 145)
      return
    }
    el = el.parentElement
  }
  nav.classList.add('nav--on-dark')
}
window.addEventListener('scroll', syncNavContrast, { passive:true })
window.addEventListener('resize', syncNavContrast)
syncNavContrast()

// Normalize mobile menu state regardless of the earlier implementation details.
const menu = document.querySelector('.global-nav .menu')
const mobileNav = document.querySelector('.global-nav .mobile-nav')
if (menu && mobileNav) {
  const syncMenu = () => {
    const open = menu.getAttribute('aria-expanded') === 'true'
    mobileNav.classList.toggle('is-open', open)
    mobileNav.setAttribute('aria-hidden', open ? 'false' : 'true')
  }
  new MutationObserver(syncMenu).observe(menu,{attributes:true,attributeFilter:['aria-expanded']})
  mobileNav.querySelectorAll('a').forEach(a => a.addEventListener('click', () => {
    menu.setAttribute('aria-expanded','false')
    syncMenu()
  }))
  syncMenu()
}

// Highlight a short phrase inside major headings, without changing translations/copy.
const highlightHeading = (heading) => {
  if (!heading || heading.querySelector('.prisma-heading-highlight')) return
  const walker = document.createTreeWalker(heading, NodeFilter.SHOW_TEXT)
  const nodes=[]
  while(walker.nextNode()) if(walker.currentNode.nodeValue.trim()) nodes.push(walker.currentNode)
  const node = nodes[nodes.length-1]
  if (!node) return
  const text=node.nodeValue
  const words=text.trim().split(/\s+/)
  if(words.length<3) return
  const phrase=words.slice(-2).join(' ')
  const index=text.lastIndexOf(phrase)
  if(index<0) return
  const span=document.createElement('span')
  span.className='prisma-heading-highlight'
  span.textContent=phrase
  node.parentNode.insertBefore(document.createTextNode(text.slice(0,index)),node)
  node.parentNode.insertBefore(span,node)
  node.nodeValue=text.slice(index+phrase.length)
}
document.querySelectorAll('h1,.display-title,.reviews-heading h2,.journeys-heading h2,.team-editorial-header h2').forEach(highlightHeading)

// Translation-safe runtime marker.
const syncLang = () => document.documentElement.setAttribute('lang', document.documentElement.lang || 'en')
new MutationObserver(syncLang).observe(document.documentElement,{attributes:true,attributeFilter:['lang']})
syncLang()

// Narrow the requested citizenship/path section. Prefer literal text match, then use the naturalization story group.
const sections=[...document.querySelectorAll('section')]
const citizenshipSection=sections.find(s=>/your path to citizenship/i.test(s.textContent||'')) || sections.find(s=>/naturalization/i.test(s.textContent||'') && s.classList.contains('journeys-section'))
citizenshipSection?.classList.add('citizenship-narrow')

// Use the stronger editorial immigration image already stored with the project as the durable paperwork-section replacement.
const paperworkImage=document.querySelector('.about-statement__image img')
if(paperworkImage){
  paperworkImage.src=asset('images/editorial/F78C5C3B-92E6-44C3-997E-7B4F8D529E1B.png')
  paperworkImage.alt='Immigration document preparation support at Prisma Provider'
  paperworkImage.loading='lazy'
  paperworkImage.decoding='async'
}

// Convert the existing testimonials into the requested continuous-column presentation while preserving the real review copy.
const reviewTrack=document.querySelector('.reviews-track')
if(reviewTrack && !reviewTrack.classList.contains('reviews-columns')){
  const cards=[...reviewTrack.querySelectorAll('.review-card')].map(c=>c.cloneNode(true))
  if(cards.length){
    reviewTrack.innerHTML=''
    reviewTrack.classList.add('reviews-columns')
    for(let col=0;col<3;col++){
      const column=document.createElement('div')
      column.className='reviews-column'
      const sequence=[...cards.slice(col),...cards.slice(0,col)]
      ;[0,1].forEach(()=>sequence.forEach(card=>column.appendChild(card.cloneNode(true))))
      reviewTrack.appendChild(column)
    }
  }
}

// Section motion + mouse-position background movement.
const motionTargets=[...document.querySelectorAll('.section > *, .trust-strip__item')].filter(el=>!el.closest('.process-line'))
motionTargets.forEach(el=>el.classList.add('final-reveal'))
if(!matchMedia('(prefers-reduced-motion: reduce)').matches){
  const io=new IntersectionObserver(entries=>entries.forEach(entry=>{
    if(entry.isIntersecting){entry.target.classList.add('is-final-visible');io.unobserve(entry.target)}
  }),{threshold:.08,rootMargin:'0px 0px -8% 0px'})
  motionTargets.forEach(el=>io.observe(el))
  document.querySelectorAll('.section').forEach(section=>section.addEventListener('pointermove',e=>{
    const r=section.getBoundingClientRect()
    section.style.setProperty('--mx',`${((e.clientX-r.left)/r.width)*100}%`)
    section.style.setProperty('--my',`${((e.clientY-r.top)/r.height)*100}%`)
  },{passive:true}))
}else motionTargets.forEach(el=>el.classList.add('is-final-visible'))

// Recalculate the process rail so its visual end aligns with the last node center at every viewport size.
const fitRailToNodes=()=>{
  const timeline=document.querySelector('.process-timeline')
  const rail=timeline?.querySelector('.process-timeline__rail')
  const first=timeline?.querySelector('.process-step__node')
  const last=[...(timeline?.querySelectorAll('.process-step__node')||[])].at(-1)
  if(!timeline||!rail||!first||!last)return
  const tr=timeline.getBoundingClientRect(),fr=first.getBoundingClientRect(),lr=last.getBoundingClientRect()
  const top=Math.max(0,fr.top-tr.top+fr.height/2)
  const bottom=Math.max(0,tr.bottom-(lr.top+lr.height/2))
  timeline.style.setProperty('--rail-top',`${top}px`)
  timeline.style.setProperty('--rail-bottom',`${bottom}px`)
}
window.addEventListener('resize',fitRailToNodes)
requestAnimationFrame(()=>requestAnimationFrame(fitRailToNodes))
