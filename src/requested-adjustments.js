const styles = document.createElement('style')
styles.id = 'requested-visual-adjustments'
styles.textContent = `
  /* Keep only the Prisma symbol in the navigation. */
  .brand:after{content:none!important}

  /* Full-bleed hero with an independent silver liquid-glass navigation island. */
  .hero{
    width:100%!important;
    min-height:110svh!important;
    margin:0!important;
    padding:18px 0 26px!important;
    border:0!important;
    border-radius:0!important;
    background:#07090a!important;
    box-shadow:none!important;
    display:block!important;
  }
  .hero:after{border-radius:0!important;box-shadow:inset 0 -70px 120px rgba(3,4,5,.66)!important}
  .hero__image{inset:0!important}
  .hero__shade{
    background:linear-gradient(to top,#030405 0%,rgba(3,4,5,.98) 9%,rgba(3,4,5,.82) 28%,rgba(3,4,5,.42) 52%,rgba(3,4,5,.08) 78%,transparent 100%)!important;
  }
  .hero:before{-webkit-mask-image:linear-gradient(to top,#000,transparent 82%)!important;mask-image:linear-gradient(to top,#000,transparent 82%)!important}
  .global-nav{
    position:fixed!important;
    top:18px!important;
    left:20%!important;
    right:auto!important;
    z-index:10000!important;
    width:60%!important;
    min-height:50px!important;
    margin:0 auto!important;
    padding:0 17px!important;
    border:1px solid rgba(255,255,255,.41)!important;
    border-radius:33px!important;
    color:#111417!important;
    background:linear-gradient(145deg,rgba(247,249,251,.22),rgba(177,184,191,.195) 48%,rgba(229,233,237,.215))!important;
    backdrop-filter:blur(27px) saturate(.9)!important;
    -webkit-backdrop-filter:blur(27px) saturate(.9)!important;
    box-shadow:inset 0 1px #fff,inset 0 -1px rgba(86,93,101,.3),0 18px 45px rgba(0,0,0,.34)!important;
  }
  .global-nav:before{
    content:"";
    position:absolute;
    inset:0;
    border-radius:inherit;
    pointer-events:none;
    opacity:.31;
    background:linear-gradient(112deg,#fff9 0%,transparent 24%,transparent 56%,#fff5 72%,transparent 90%),radial-gradient(circle at 76% 0%,#fff8,transparent 28%);
  }
  .global-nav>*{position:relative;z-index:2}
  .global-nav .brand img{filter:brightness(.16) contrast(1.3)!important}
  .global-nav .brand img{width:24px!important;height:24px!important}
  .global-nav .nav__links{gap:clamp(13px,1.55vw,24px)!important;color:#373d43!important}
  .global-nav .nav__links{transform:translateX(-30px)!important}
  .global-nav .nav__links a:hover{color:#050607!important}
  .global-nav .nav__links a:after{background:#111417!important}
  .global-nav .nav__actions{gap:10px!important}
  .global-nav .nav__actions .button{min-height:38px!important;padding-inline:19px!important}
  .hero__content,.hero__footer{width:var(--shell)!important;margin-inline:auto!important}
  .hero__content{min-height:auto!important;padding:40vh 30px 60px!important;transform:none!important}
  .hero__footer{padding-inline:30px!important;transform:none!important}

  /* Keep the language selector legible on the light navigation surface. */
  .global-nav .prisma-language-trigger{color:#111417!important;border-color:rgba(17,20,23,.2)!important;background:rgba(255,255,255,.42)!important}
  .global-nav .prisma-language-trigger:hover{background:rgba(255,255,255,.68)!important}

  @media(min-width:721px) and (max-width:1100px){
    .global-nav{left:18px!important;width:calc(100% - 36px)!important;min-height:60px!important}
  }

  /* Animated / Prism Orbit control from the Dark Prism design system. */
  .prism-orbit-cta{
    isolation:isolate!important;
    z-index:0!important;
    color:#f5f7f8!important;
    border:0!important;
    background:linear-gradient(105deg,#131518f5,#07080afa)!important;
    overflow:hidden!important;
    box-shadow:inset 0 1px #ffffff26,0 14px 34px #00000052!important;
    animation:prism-button-glow 4.8s linear infinite!important;
  }
  .prism-orbit-cta>span,.prism-orbit-cta>i{position:relative;z-index:3}
  .prism-orbit-cta:before{
    content:""!important;
    position:absolute!important;
    z-index:2!important;
    inset:0!important;
    padding:1.5px!important;
    border-radius:inherit!important;
    pointer-events:none!important;
    background:conic-gradient(from var(--prism-angle),#4d8cff 0deg,#66d9ff 52deg,#c1ff72 103deg,#ffe86b 145deg,#ff805d 193deg,#f04bd4 248deg,#745bff 302deg,#4d8cff 360deg)!important;
    filter:saturate(1.14)!important;
    -webkit-mask:linear-gradient(#000 0 0) content-box,linear-gradient(#000 0 0)!important;
    -webkit-mask-composite:xor!important;
    mask:linear-gradient(#000 0 0) content-box,linear-gradient(#000 0 0)!important;
    mask-composite:exclude!important;
    animation:prism-orbit 4.8s linear infinite!important;
  }
  .prism-orbit-cta:after{
    content:""!important;
    position:absolute!important;
    z-index:-2!important;
    inset:-12px!important;
    border-radius:inherit!important;
    background:conic-gradient(from var(--prism-angle),transparent 0 12%,#437dff47 18%,transparent 26% 46%,#f549ce3d 53%,transparent 61% 76%,#c1ff7238 84%,transparent 92%)!important;
    filter:blur(13px)!important;
    animation:prism-orbit 4.8s linear infinite!important;
  }
  .prism-orbit-cta:hover{background:linear-gradient(105deg,#191c20f5,#090a0dfa)!important;box-shadow:inset 0 1px #ffffff33,0 18px 44px #0000006b!important}
  @property --prism-angle{syntax:"<angle>";inherits:false;initial-value:0deg}
  @keyframes prism-orbit{to{--prism-angle:360deg}}
  @keyframes prism-button-glow{
    0%,100%{filter:drop-shadow(-6px 0 10px #467aff14) drop-shadow(6px 0 10px #f44dca12)}
    33%{filter:drop-shadow(5px -2px 12px #c1ff721a) drop-shadow(-5px 2px 10px #467aff12)}
    66%{filter:drop-shadow(7px 0 12px #ff764e17) drop-shadow(-7px 0 11px #f44dca14)}
  }

  /* Headings remain completely static at their final size and position. */
  h1,h2,h3,h4,h5,h6{transform:none!important;transition:none!important;animation:none!important}

  /* Approximately 20% smaller type throughout the site. */
  h1{font-size:clamp(32px,3.5vw,54px)!important}
  .hero-title-group{transform:none!important;margin-bottom:clamp(30px,4vh,48px)!important}
  .hero-title-group .eyebrow{margin-bottom:20px!important}
  .display-title{font-size:58px!important}
  .reviews-heading h2,.journeys-heading h2{font-size:clamp(56px,5.6vw,86px)!important}
  .about-statement p{font-size:clamp(34px,4vw,58px)!important}
  .service-card h3{font-size:21px!important}
  .benefit-card h3{font-size:20px!important}
  .review-card blockquote,.review-card:hover blockquote{font-size:18px!important}
  .journey-card h3{font-size:34px!important}
  .process-step h3{font-size:19px!important}
  .contact-copy h2,.faq-section h2,.social-copy h2{font-size:58px!important}
  .final-cta h2{font-size:clamp(38px,4vw,58px)!important}
  .footer-contact-showcase h2{font-size:clamp(43px,4.2vw,66px)!important}
  .site-footer--silver .footer-brand h2{font-size:clamp(34px,3.2vw,51px)!important}
  .team-editorial-header h2{font-size:clamp(42px,4vw,62px)!important}
  .team-editorial-card h3{font-size:34px!important}
  p,.summary{font-size:11px!important}
  .section-heading p,.journeys-heading p,.team-editorial-header__side p{font-size:11px!important}
  .button{font-size:10px!important}
  .nav__links,.mobile-nav{font-size:8px!important}
  .global-nav .nav__links{font-size:9.2px!important}
  .eyebrow,.section__eyebrow,.reviews-kicker,.journeys-kicker{font-size:7px!important}

  /* Footer-style silver glass review cards, including hover. */
  .reviews-section .review-card,.reviews-section .review-card:hover{
    color:#111417!important;
    border:1px solid rgba(255,255,255,.72)!important;
    background:linear-gradient(145deg,rgba(246,248,250,.94),rgba(168,176,184,.86) 48%,rgba(224,228,232,.92))!important;
    backdrop-filter:blur(28px) saturate(.85)!important;
    -webkit-backdrop-filter:blur(28px) saturate(.85)!important;
    box-shadow:inset 0 1px #fff,inset 0 -1px rgba(93,100,108,.3),0 24px 54px rgba(0,0,0,.34)!important;
    transform:none!important;
  }
  .reviews-section .review-card:before,.reviews-section .review-card:hover:before{
    display:block!important;opacity:.72!important;
    background:linear-gradient(115deg,#ffffffb0 0%,transparent 20%,transparent 56%,#ffffff52 70%,transparent 86%),radial-gradient(circle at 78% 18%,#fff8,transparent 25%)!important;
  }
  .reviews-section .review-card blockquote,.reviews-section .review-card:hover blockquote,
  .reviews-section .review-card footer strong,.reviews-section .review-card:hover footer strong{color:#111417!important}
  .reviews-section .review-card footer small,.reviews-section .review-card:hover footer small{color:#4d535a!important}
  .reviews-section .review-card__stars,.reviews-section .review-card:hover .review-card__stars{color:#253129!important}
  .reviews-section .review-avatar,.reviews-section .review-card:hover .review-avatar{color:#0a0c0e!important;background:linear-gradient(145deg,#f6f7f8,#aeb5bd)!important;box-shadow:inset 0 1px #fff,0 8px 18px rgba(0,0,0,.2)!important}

  /* Smaller, centered team cards. */
  .team-editorial-track{display:grid!important;grid-template-columns:repeat(2,minmax(0,360px))!important;justify-content:center!important;gap:16px!important;overflow:visible!important;padding-bottom:0!important}
  .team-editorial-card{width:100%!important;min-height:420px!important;flex-basis:auto!important}
  .team-editorial-card__body{min-height:210px!important;padding:22px 22px 18px!important}
  .team-editorial-card__media{min-height:190px!important}
  .team-editorial-card__meta{margin-bottom:18px!important}
  .team-editorial-card p{font-size:10px!important}
  .team-editorial-controls{display:none!important}

  /* Standalone rounded silver-glass footer card. */
  .footer-contact-showcase{width:var(--shell)!important;margin-bottom:0!important}
  .site-footer.site-footer--silver{width:calc(var(--shell) - 28px)!important;margin:0 auto 24px!important;border-radius:34px!important}

  @media(max-width:720px){
    .hero{padding:10px 0 20px!important;min-height:105svh!important}
    .global-nav{top:10px!important;left:15px!important;width:calc(100% - 30px)!important;min-height:64px!important;padding:0 18px!important;border-radius:29px!important}
    .global-nav .nav__links{transform:none!important}
    .global-nav .menu span{background:#111417!important}
    .global-nav .mobile-nav{top:72px!important;color:#f5f7f8!important;background:rgba(10,12,14,.96)!important;border-color:rgba(255,255,255,.2)!important}
    .hero__content,.hero__footer{width:calc(100% - 30px)!important}
    .hero__content{padding:34vh 8px 52px!important;transform:none!important}
    .hero__footer{padding-inline:8px!important;transform:none!important}
    h1{font-size:clamp(27px,8.1vw,38px)!important}
    .hero-title-group{margin-bottom:30px!important}
    .display-title{font-size:37px!important}
    .reviews-heading h2,.journeys-heading h2{font-size:clamp(46px,14.5vw,66px)!important}
    .journey-card h3{font-size:30px!important}
    .team-editorial-header h2{font-size:35px!important}
    .team-editorial-track{grid-template-columns:1fr!important;gap:16px!important}
    .team-editorial-card{min-height:410px!important}
    .team-editorial-card__body{min-height:205px!important}
    .team-editorial-card__media{min-height:185px!important}
    .footer-contact-showcase{width:calc(100% - 30px)!important}
    .site-footer.site-footer--silver{width:calc(100% - 44px)!important;margin:0 auto 16px!important;border-radius:26px!important}
  }
  @media(prefers-reduced-motion:reduce){.prism-orbit-cta,.prism-orbit-cta:before,.prism-orbit-cta:after{animation:none!important}}
`
document.head.appendChild(styles)

const globalNav = document.querySelector('.hero .nav')
if (globalNav) {
  globalNav.classList.add('global-nav')
  document.body.appendChild(globalNav)
}

document.querySelector('.global-nav .nav__actions .button')?.classList.add('prism-orbit-cta')
document.querySelector('.contact-section .contact-form button[type="submit"]')?.classList.add('prism-orbit-cta')
document.querySelector('.footer-contact-showcase__actions .button')?.classList.add('prism-orbit-cta')
