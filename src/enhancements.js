import './enhancements.css'
import './instagram-feed.css'
import './footer-showcase.css'

const asset = (path) => `${import.meta.env.BASE_URL}${path}`
const instagramAvatar = 'https://ugc.production.linktr.ee/01686030-d03f-4c14-8570-68d323e26405_Logo-2024.png'
const instagramUrl = 'https://www.instagram.com/prismaprovider/'
const instagramFeedB64 = asset('images/social/prisma-instagram-feed.b64')

function enhancePrismaSite() {
  if (!document.querySelector('#line-awesome-prisma-styles')) {
    const iconStyles = document.createElement('style')
    iconStyles.id = 'line-awesome-prisma-styles'
    iconStyles.textContent = `
      .services-section .section-cta{justify-content:flex-start}.services-section .section-cta p{max-width:760px}
      .service-card__line-icon{position:absolute;z-index:0;right:34px;top:58px;font-size:112px;line-height:1;color:rgba(235,239,243,.14);filter:drop-shadow(0 18px 30px rgba(0,0,0,.28));transition:transform .5s cubic-bezier(.2,.8,.2,1),color .35s ease,filter .35s ease}.service-card--featured .service-card__line-icon{right:54px;top:72px;font-size:154px}.service-card:hover .service-card__line-icon{transform:translateY(-5px) scale(1.06);color:rgba(226,232,237,.32);filter:drop-shadow(0 22px 36px rgba(0,0,0,.34))}.service-card--featured:hover .service-card__line-icon{color:rgba(193,255,114,.42)}
      .process-step__icon{width:48px!important;height:48px!important}.process-step__icon i{font-size:22px;line-height:1;transition:transform .3s ease}.process-line .process-step:hover .process-step__icon i{transform:scale(1.06)}
      @media(max-width:1020px){.service-card__line-icon{font-size:92px;right:24px;top:62px}.service-card--featured .service-card__line-icon{font-size:116px;right:34px}}
      @media(max-width:720px){.service-card__line-icon{font-size:78px;right:20px;top:60px}.service-card--featured .service-card__line-icon{font-size:90px;right:22px;top:68px}.process-step__icon{width:44px!important;height:44px!important}.process-step__icon i{font-size:20px}}
      @media(prefers-reduced-motion:reduce){.service-card__line-icon,.process-step__icon i{transition:none!important;transform:none!important}}
    `
    document.head.appendChild(iconStyles)
  }

  const trustStrip = document.querySelector('.trust-strip')
  if (trustStrip) trustStrip.remove()

  const metrics = document.querySelector('.metrics')
  if (metrics) metrics.remove()

  const metricsLegalNote = document.querySelector('.journeys-section .legal-note')
  if (metricsLegalNote) metricsLegalNote.remove()

  const serviceIcons = [
    'las la-passport',
    'las la-id-card',
    'las la-landmark',
    'las la-hand-holding-heart',
    'las la-hands-helping',
    'las la-file-alt',
    'las la-language',
    'las la-layer-group'
  ]

  document.querySelectorAll('.services-section .service-card').forEach((card, index) => {
    const artwork = card.querySelector('.service-card__art')
    if (artwork) artwork.remove()
    if (!card.querySelector('.service-card__line-icon')) {
      card.insertAdjacentHTML('afterbegin', `<i class="service-card__line-icon ${serviceIcons[index] || 'las la-file-alt'}" aria-hidden="true"></i>`)
    }
  })

  const servicesCtaButton = document.querySelector('.services-section .section-cta .button')
  if (servicesCtaButton) servicesCtaButton.remove()

  const processIcons = [
    'las la-comments',
    'las la-search',
    'las la-clipboard-check',
    'las la-folder-open',
    'las la-edit',
    'las la-check-double',
    'las la-paper-plane',
    'las la-hourglass-half',
    'las la-flag'
  ]

  document.querySelectorAll('.process-line .process-step').forEach((step, index) => {
    const badge = step.querySelector(':scope > span')
    if (badge) {
      badge.classList.add('process-step__icon')
      badge.innerHTML = `<i class="${processIcons[index] || 'las la-check'}" aria-hidden="true"></i>`
      badge.setAttribute('aria-label', `Step ${index + 1}`)
    }
  })

  const socialSection = document.querySelector('.social-section')
  if (socialSection) {
    socialSection.innerHTML = `
      <div class="social-showcase reveal">
        <div class="social-showcase__orbit social-showcase__orbit--one"></div>
        <div class="social-showcase__orbit social-showcase__orbit--two"></div>
        <div class="social-showcase__avatar social-showcase__avatar--one"><img src="${asset('images/team/leandro-krauss.webp')}" alt="" /></div>
        <div class="social-showcase__avatar social-showcase__avatar--two"><img src="${asset('images/team/jessica-wisniewski.webp')}" alt="" /></div>
        <a class="phone-feed-link" href="${instagramUrl}" target="_blank" rel="noreferrer" aria-label="Open Prisma Provider on Instagram">
          <div class="phone-mockup" aria-label="Prisma Provider Instagram feed preview">
            <div class="phone-mockup__speaker"></div>
            <div class="phone-screen phone-screen--feed">
              <img class="phone-feed-image" alt="Prisma Provider Instagram profile and post grid" />
              <span class="phone-feed-hint"><i class="bi bi-instagram"></i> Tap to open Instagram</span>
            </div>
          </div>
        </a>
      </div>
      <div class="social-copy social-copy--new">
        <span class="section__eyebrow reveal">Stay connected</span>
        <h2 class="display-title reveal">Your path does not have to feel confusing.</h2>
        <p class="reveal">Follow Prisma for practical immigration information, process updates, client stories and answers to the questions people ask us every day.</p>
        <div class="social-actions reveal">
          <a class="button button--primary" href="${instagramUrl}" target="_blank" rel="noreferrer"><i class="bi bi-instagram"></i><span>Follow on Instagram</span></a>
          <a class="button button--outline" href="https://wa.me/19298234645" target="_blank" rel="noreferrer"><i class="bi bi-whatsapp"></i><span>Message on WhatsApp</span></a>
          <a class="button button--outline" href="mailto:contact@prismaprovider.com"><i class="bi bi-envelope"></i><span>Email Prisma</span></a>
        </div>
      </div>
    `

    const feedImage = socialSection.querySelector('.phone-feed-image')
    if (feedImage) {
      fetch(instagramFeedB64)
        .then((response) => {
          if (!response.ok) throw new Error('Could not load Instagram feed screenshot')
          return response.text()
        })
        .then((base64) => {
          feedImage.src = `data:image/jpeg;base64,${base64.trim()}`
        })
        .catch((error) => console.error(error))
    }
  }

  const footer = document.querySelector('.site-footer')
  if (footer) {
    footer.classList.add('site-footer--silver')

    if (!document.querySelector('.footer-contact-showcase')) {
      footer.insertAdjacentHTML('beforebegin', `
        <section class="footer-contact-showcase" aria-label="Contact Prisma Provider">
          <div class="footer-contact-showcase__inner">
            <div class="footer-contact-showcase__copy reveal">
              <span class="footer-contact-showcase__eyebrow">Your path to citizenship</span>
              <h2>Ready for your next step?</h2>
              <p>Tell us where you are in your immigration process. We will help you understand what comes next, organize what is needed and keep the process moving.</p>
              <div class="footer-contact-showcase__actions">
                <a class="button button--primary" href="#contact"><span>Book a consultation</span><i class="bi bi-arrow-up-right" aria-hidden="true"></i></a>
                <a class="footer-contact-showcase__email" href="mailto:contact@prismaprovider.com">contact@prismaprovider.com</a>
              </div>
            </div>
            <div class="footer-contact-showcase__portrait" aria-hidden="true">
              <div class="footer-contact-showcase__halo"></div>
              <img src="${asset('images/footer/trasparentTeam.png')}" alt="" />
            </div>
          </div>
        </section>
      `)
    }
  }

  if (!document.querySelector('.floating-whatsapp')) {
    document.body.insertAdjacentHTML('beforeend', `
      <a class="floating-whatsapp" href="https://wa.me/19298234645" target="_blank" rel="noreferrer" aria-label="Chat with Prisma Provider on WhatsApp">
        <i class="bi bi-whatsapp" aria-hidden="true"></i>
        <span>WhatsApp</span>
      </a>
    `)
  }
}

enhancePrismaSite()
