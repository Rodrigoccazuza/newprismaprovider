const referenceStyles = document.createElement('style')
referenceStyles.id = 'reference-layout-overrides'
referenceStyles.textContent = `
  /* Shared reference-led section framing */
  .services-section,.benefits-section,.reviews-section,.journeys-section{background:#030405!important}
  .services-section .section-heading,.benefits-section .section-heading,.reviews-section .section-heading,.journeys-section .section-heading{max-width:none!important;margin:0 0 54px!important;display:grid!important;grid-template-columns:minmax(0,1.15fr) minmax(300px,.7fr)!important;gap:72px!important;align-items:end!important;text-align:left!important}
  .services-section .section-heading>div,.journeys-section .section-heading>div{min-width:0}
  .services-section .section-heading>p,.benefits-section .section-heading>p,.reviews-section .section-heading>p,.journeys-section .section-heading>p{max-width:470px!important;margin:0!important;color:#92979e!important;font-size:14px!important;line-height:1.7!important;justify-self:end!important}
  .services-section .section__eyebrow,.benefits-section .section__eyebrow,.reviews-section .section__eyebrow,.journeys-section .section__eyebrow{justify-content:flex-start!important;margin-bottom:26px!important}
  .services-section .section__eyebrow:before{content:'02'!important}
  .benefits-section .section__eyebrow:before{content:'03'!important}
  .reviews-section .section__eyebrow:before{content:'04'!important}
  .journeys-section .section__eyebrow:before{content:'05'!important}
  .services-section .section__eyebrow:before,.benefits-section .section__eyebrow:before,.reviews-section .section__eyebrow:before,.journeys-section .section__eyebrow:before{width:34px!important;height:34px!important;border-radius:50%!important;display:grid!important;place-items:center!important;background:transparent!important;border:1px solid #ffffff24!important;box-shadow:none!important;color:var(--lime)!important;font-size:9px!important;font-weight:800!important;letter-spacing:0!important}

  /* Fixed typography: no scroll-driven scaling or text movement */
  .display-title{font-size:72px!important;line-height:.92!important;transform:none!important}
  .section-heading .display-title,.about-grid .display-title,.team-editorial-header h2{transform:none!important}
  .section-heading .reveal,.section__eyebrow.reveal,.display-title.reveal{transform:none!important}

  /* HOW WE CAN HELP — 4 x 2 service catalogue inspired by the supplied What We Do reference */
  .services-section{padding-top:130px!important;padding-bottom:130px!important}
  .services-section .section-heading .display-title{max-width:660px!important}
  .services-grid{grid-template-columns:repeat(4,minmax(0,1fr))!important;gap:14px!important}
  .service-card,.service-card--featured,.service-card--last{grid-column:auto!important;min-height:455px!important;padding:24px!important;border-radius:26px!important;background:linear-gradient(150deg,#151719,#0c0f10 76%)!important;border-color:#ffffff20!important}
  .service-card:before{inset:45% 0 0!important;background:linear-gradient(0deg,#101315 30%,#101315e8 65%,transparent)!important}
  .service-card__art,.service-card--featured .service-card__art{top:54px!important;width:78%!important;height:54%!important;opacity:.94!important}
  .service-card--featured>div{max-width:none!important}
  .service-card__index{font-size:9px!important}
  .service-card>div{margin-top:auto!important}
  .service-card small{font-size:8px!important;color:#777d84!important}
  .service-card h3{font-size:26px!important;line-height:1.02!important;margin:12px 0 10px!important}
  .service-card p{font-size:11px!important;line-height:1.55!important;color:#999fa6!important}
  .service-card>a{width:44px!important;height:44px!important;right:18px!important;top:18px!important}
  .services-section .section-cta{justify-content:flex-start!important;border:0!important;padding:0!important;margin-top:30px!important}

  /* WHY CLIENTS CHOOSE PRISMA — compact modular grid from supplied Why Prisma reference */
  .benefits-section .section-heading{grid-template-columns:minmax(0,1.05fr) minmax(300px,.75fr)!important}
  .benefits-section .section-heading--center{margin-inline:0!important}
  .benefits-section .section-heading--center .section__eyebrow{justify-content:flex-start!important}
  .benefits-section .section-heading>p{display:block!important}
  .benefits-grid{grid-template-columns:repeat(4,minmax(0,1fr))!important;gap:14px!important}
  .benefit-card,.benefit-card--wide,.benefit-card--image,.benefit-card--dark{grid-column:auto!important;min-height:280px!important;padding:26px!important;border-radius:25px!important;background:linear-gradient(145deg,#141719,#0c0e10)!important;border-color:#ffffff20!important;box-shadow:inset 0 1px #ffffff0d!important}
  .benefit-card:nth-child(5),.benefit-card:nth-child(6){grid-column:span 2!important}
  .benefit-card--stat{grid-column:auto!important;background:var(--lime)!important;color:#0a0c0e!important;justify-content:center!important}
  .benefit-card--stat strong{font-size:78px!important}
  .benefit-card>span{font-size:9px!important}
  .benefit-card h3{font-size:25px!important;line-height:1.05!important}
  .benefit-card p{font-size:11px!important;color:#979da4!important}
  .benefit-card--stat span{color:#151915!important}

  /* WHAT OUR CLIENTS SAY — horizontal review cards from supplied Google Reviews reference */
  .reviews-section{text-align:left!important}
  .reviews-section .section-heading{grid-template-columns:minmax(0,1fr) minmax(300px,.8fr)!important}
  .reviews-section .section-heading--center{max-width:none!important;margin-inline:0!important;text-align:left!important}
  .reviews-section .section-heading--center .section__eyebrow{justify-content:flex-start!important}
  .reviews-section .section-heading .display-title{max-width:540px!important}
  .reviews-section .google-line{grid-column:2!important;justify-content:flex-start!important;margin:20px 0 0!important}
  .reviews-track{display:grid!important;grid-template-columns:repeat(3,minmax(0,1fr))!important;gap:14px!important}
  .review-card,.review-card:hover{min-height:300px!important;padding:28px!important;border-radius:25px!important;transform:none!important;background:linear-gradient(145deg,#141719,#0c0e10)!important;border:1px solid #ffffff20!important;color:#f5f7f8!important;box-shadow:inset 0 1px #ffffff0d!important;backdrop-filter:none!important;-webkit-backdrop-filter:none!important}
  .review-card:first-child{border-color:#c1ff725c!important}
  .review-card:before{display:none!important}
  .review-card blockquote,.review-card:hover blockquote{color:#f5f7f8!important;font-size:23px!important;line-height:1.14!important;letter-spacing:-.035em!important}
  .review-card footer strong,.review-card:hover footer strong{color:#f5f7f8!important}
  .review-card footer small,.review-card:hover footer small{color:#777d84!important}
  .review-card__stars,.review-card:hover .review-card__stars{color:var(--lime)!important}
  .review-avatar,.review-card:hover .review-avatar{background:var(--lime)!important;color:#0a0c0e!important;box-shadow:none!important}
  .reviews-link{margin-top:30px!important}

  /* REAL JOURNEYS — three editorial case cards inspired by supplied Success Stories reference */
  .journeys-section .section-heading .display-title{max-width:650px!important}
  .journeys-grid{display:grid!important;grid-template-columns:repeat(3,minmax(0,1fr))!important;gap:14px!important}
  .journey-card{min-height:520px!important;padding:30px!important;border-radius:26px!important;background:linear-gradient(155deg,#121719,#0c1011 72%)!important;border:1px solid #ffffff20!important;box-shadow:inset 0 1px #ffffff0d!important;display:flex!important;flex-direction:column!important}
  .journey-card:nth-child(1),.journey-card:nth-child(3){background:radial-gradient(circle at 90% 0,#55784226,transparent 42%),linear-gradient(155deg,#121719,#0c1011 72%)!important}
  .journey-card h3{font-size:42px!important;line-height:.98!important;letter-spacing:-.05em!important;margin:18px 0 24px!important}
  .journey-card p{color:#969ca3!important;font-size:11px!important;line-height:1.6!important}
  .journey-card a{margin-top:auto!important;color:var(--lime)!important}

  @media(max-width:1080px){
    .services-grid{grid-template-columns:repeat(2,minmax(0,1fr))!important}
    .benefits-grid{grid-template-columns:repeat(2,minmax(0,1fr))!important}
    .benefit-card:nth-child(5),.benefit-card:nth-child(6){grid-column:auto!important}
    .reviews-track,.journeys-grid{grid-template-columns:1fr 1fr!important}
    .display-title{font-size:60px!important}
  }
  @media(max-width:720px){
    .services-section,.benefits-section,.reviews-section,.journeys-section{padding-top:84px!important;padding-bottom:84px!important}
    .services-section .section-heading,.benefits-section .section-heading,.reviews-section .section-heading,.journeys-section .section-heading{grid-template-columns:1fr!important;gap:24px!important;margin-bottom:36px!important}
    .services-section .section-heading>p,.benefits-section .section-heading>p,.reviews-section .section-heading>p,.journeys-section .section-heading>p{justify-self:start!important}
    .display-title{font-size:46px!important;line-height:.94!important}
    .services-grid,.benefits-grid,.reviews-track,.journeys-grid{grid-template-columns:1fr!important}
    .service-card{min-height:420px!important}
    .benefit-card,.benefit-card--wide,.benefit-card--image,.benefit-card:nth-child(5),.benefit-card:nth-child(6){grid-column:auto!important}
    .review-card{min-height:260px!important}
    .journey-card{min-height:430px!important}
    .journey-card h3{font-size:34px!important}
  }
`
document.head.appendChild(referenceStyles)
