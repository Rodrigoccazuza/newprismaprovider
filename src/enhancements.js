import './enhancements.css'
import './instagram-feed.css'
import './footer-showcase.css'

const asset = (path) => `${import.meta.env.BASE_URL}${path}`
const instagramAvatar = 'https://ugc.production.linktr.ee/01686030-d03f-4c14-8570-68d323e26405_Logo-2024.png'
const instagramUrl = 'https://www.instagram.com/prismaprovider/'
const instagramMobilePreview = asset('images/social/instaAdjusted.png')

function enhancePrismaSite() {
  if (!document.querySelector('#line-awesome-prisma-styles')) {
    const iconStyles = document.createElement('style')
    iconStyles.id = 'line-awesome-prisma-styles'
    iconStyles.textContent = `
      .services-section .section-cta{justify-content:flex-start}.services-section .section-cta p{max-width:760px}
      .process-step__icon{width:48px!important;height:48px!important}.process-step__icon i{font-size:22px;line-height:1;transition:transform .3s ease}.process-line .process-step:hover .process-step__icon i{transform:scale(1.06)}

      .team-section--profile{position:relative}.team-section--profile .section-heading{margin-bottom:58px}.team-profile-grid{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:28px;max-width:1040px;margin:0 auto}.team-profile-card{position:relative;min-height:690px;border:1px solid rgba(255,255,255,.5);border-radius:38px;padding:12px;background:linear-gradient(145deg,rgba(248,249,250,.92),rgba(190,196,202,.82));box-shadow:inset 0 1px rgba(255,255,255,.95),0 30px 75px rgba(0,0,0,.42);overflow:hidden;transition:transform .4s cubic-bezier(.2,.8,.2,1),box-shadow .4s ease}.team-profile-card:hover{transform:translateY(-8px);box-shadow:inset 0 1px #fff,0 38px 90px rgba(0,0,0,.5)}.team-profile-card__media{position:relative;height:100%;min-height:666px;border-radius:30px;overflow:hidden;background:#111}.team-profile-card__media img{position:absolute;inset:0;width:100%;height:100%;object-fit:cover;object-position:center top;filter:saturate(.9) contrast(1.04);transition:transform .65s cubic-bezier(.2,.8,.2,1),filter .4s ease}.team-profile-card:hover .team-profile-card__media img{transform:scale(1.035);filter:saturate(1) contrast(1.06)}.team-profile-card__shade{position:absolute;inset:0;background:linear-gradient(180deg,transparent 34%,rgba(4,6,7,.08) 48%,rgba(4,6,7,.82) 72%,rgba(4,6,7,.98) 100%)}.team-profile-card__content{position:absolute;z-index:2;left:34px;right:34px;bottom:34px;color:#fff}.team-profile-card__role{display:inline-flex;align-items:center;gap:8px;margin:0 0 12px;color:#d6d9dd;font-size:9px;font-weight:750;letter-spacing:.13em;text-transform:uppercase}.team-profile-card__name{display:flex;align-items:center;gap:10px;margin:0 0 10px;font-size:34px;font-weight:600;letter-spacing:-.045em}.team-profile-card__verified{width:20px;height:20px;border-radius:50%;display:grid;place-items:center;background:#6cb7ff;color:#fff;font-size:11px;box-shadow:0 0 0 2px rgba(255,255,255,.12)}.team-profile-card__bio{max-width:430px;margin:0;color:#d1d5d9;font-size:13px;line-height:1.62}.team-profile-card__stats{display:grid;grid-template-columns:repeat(3,1fr);gap:0;margin:24px 0 22px;padding:0}.team-profile-card__stats div{padding:0 14px;border-right:1px solid rgba(255,255,255,.2)}.team-profile-card__stats div:first-child{padding-left:0}.team-profile-card__stats div:last-child{border-right:0}.team-profile-card__stats strong{display:block;font-size:17px;font-weight:700}.team-profile-card__stats span{display:block;margin-top:4px;color:#b8bdc3;font-size:9px}.team-profile-card__actions{display:grid;grid-template-columns:1fr 54px;gap:10px}.team-profile-card__contact,.team-profile-card__save{min-height:54px;border-radius:999px;border:1px solid rgba(255,255,255,.5);display:flex;align-items:center;justify-content:center;gap:10px;transition:transform .25s ease,background .25s ease,border-color .25s ease}.team-profile-card__contact{color:#111;background:#f7f8f9;font-size:12px;font-weight:700}.team-profile-card__save{color:#fff;background:rgba(255,255,255,.1);backdrop-filter:blur(14px);-webkit-backdrop-filter:blur(14px)}.team-profile-card__contact:hover,.team-profile-card__save:hover{transform:translateY(-2px)}.team-profile-card__save:hover{background:rgba(255,255,255,.18);border-color:#fff}.team-profile-card__contact i,.team-profile-card__save i{font-size:19px}.team-profile-card--jessica .team-profile-card__media img{object-position:center 18%}

      /* Line Awesome circular arrows */
      .service-card>a i{font-size:22px;line-height:1;transition:transform .28s ease}.service-card:hover>a{transform:translateY(-2px)!important}.service-card:hover>a i{transform:translate(2px,-2px)}.hero .button i.las{font-size:20px;line-height:1}

      /* Reviews: silver glass is default; former dark default becomes hover */
      .review-card{color:#111417!important;border-color:rgba(255,255,255,.72)!important;background:linear-gradient(145deg,rgba(246,248,250,.88),rgba(168,176,184,.78) 48%,rgba(224,228,232,.84))!important;backdrop-filter:blur(26px) saturate(.86)!important;-webkit-backdrop-filter:blur(26px) saturate(.86)!important;box-shadow:inset 0 1px rgba(255,255,255,.95),inset 0 -1px rgba(93,100,108,.28),0 24px 54px rgba(0,0,0,.34)!important;transform:none!important}.review-card:before{opacity:1!important;background:linear-gradient(115deg,rgba(255,255,255,.46) 0%,rgba(255,255,255,.07) 22%,transparent 46%,rgba(219,225,231,.2) 73%,transparent 94%)!important}.review-card blockquote,.review-card footer strong{color:#111417!important}.review-card footer small{color:#4b5158!important}.review-card .review-card__stars{color:#253129!important}.review-card .review-avatar{color:#0a0c0e!important;background:linear-gradient(145deg,#f6f7f8,#aeb5bd)!important;box-shadow:inset 0 1px #fff,0 8px 18px rgba(0,0,0,.2)!important}.review-card:hover{color:#f5f7f8!important;transform:translateY(-8px) scale(1.012)!important;border-color:rgba(255,255,255,.18)!important;background:linear-gradient(145deg,rgba(255,255,255,.055),rgba(255,255,255,.018))!important;backdrop-filter:blur(10px)!important;-webkit-backdrop-filter:blur(10px)!important;box-shadow:inset 0 1px rgba(255,255,255,.08),0 24px 54px rgba(0,0,0,.4)!important}.review-card:hover:before{opacity:0!important}.review-card:hover blockquote,.review-card:hover footer strong{color:#f5f7f8!important}.review-card:hover footer small{color:#8d949c!important}.review-card:hover .review-card__stars{color:var(--lime)!important}.review-card:hover .review-avatar{color:#080a08!important;background:var(--lime)!important;box-shadow:none!important}

      @media(max-width:900px){.team-profile-grid{grid-template-columns:1fr;max-width:620px}.team-profile-card{min-height:650px}.team-profile-card__media{min-height:626px}}
      @media(max-width:720px){.process-step__icon{width:44px!important;height:44px!important}.process-step__icon i{font-size:20px}.team-section--profile .section-heading{text-align:left}.team-profile-card{min-height:590px;border-radius:30px;padding:9px}.team-profile-card__media{min-height:570px;border-radius:23px}.team-profile-card__content{left:25px;right:25px;bottom:24px}.team-profile-card__name{font-size:29px}.team-profile-card__bio{font-size:12px}.team-profile-card__stats{margin:20px 0}.team-profile-card__stats div{padding:0 9px}.team-profile-card__actions{grid-template-columns:1fr 50px}.team-profile-card__contact,.team-profile-card__save{min-height:50px}.review-card:hover{transform:none!important}}
      @media(prefers-reduced-motion:reduce){.process-step__icon i,.team-profile-card,.team-profile-card__media img,.team-profile-card__contact,.team-profile-card__save,.service-card>a i,.review-card{transition:none!important;transform:none!important}}
    `
    document.head.appendChild(iconStyles)
  }

  const trustStrip = document.querySelector('.trust-strip')
  if (trustStrip) trustStrip.remove()

  const metrics = document.querySelector('.metrics')
  if (metrics) metrics.remove()

  const metricsLegalNote = document.querySelector('.journeys-section .legal-note')
  if (metricsLegalNote) metricsLegalNote.remove()

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

  document.querySelectorAll('.services-section .service-card > a i').forEach((icon) => {
    icon.className = 'las la-arrow-circle-right'
  })

  document.querySelectorAll('.hero .button i').forEach((icon) => {
    icon.className = 'las la-arrow-circle-right'
  })

  const heroPrimaryIcon = document.querySelector('.hero .primary-cta i')
  if (heroPrimaryIcon) heroPrimaryIcon.className = 'las la-arrow-circle-down'

  const teamSection = document.querySelector('.team-section')
  if (teamSection) {
    teamSection.classList.add('team-section--profile')
    teamSection.innerHTML = `
      <div class="section-heading section-heading--split">
        <div>
          <span class="section__eyebrow reveal">Who we are</span>
          <h2 class="display-title reveal">Two founders. One careful standard.</h2>
        </div>
        <p class="reveal">Prisma was built around a simple idea: immigration services should feel organized, transparent and human.</p>
      </div>
      <div class="team-profile-grid">
        <article class="team-profile-card team-profile-card--leandro reveal">
          <div class="team-profile-card__media">
            <img src="${asset('images/team/leandro-krauss.webp')}" alt="Leandro Krauss" />
            <div class="team-profile-card__shade"></div>
            <div class="team-profile-card__content">
              <p class="team-profile-card__role">Co-Founder · Immigration Paralegal</p>
              <h3 class="team-profile-card__name">Leandro Krauss <span class="team-profile-card__verified"><i class="bi bi-check-lg" aria-hidden="true"></i></span></h3>
              <p class="team-profile-card__bio">Leandro oversees the full client journey with a sharp eye for detail, helping each case move forward with clarity, care and precision.</p>
              <div class="team-profile-card__stats" aria-label="Leandro profile highlights">
                <div><strong>50</strong><span>States served</span></div>
                <div><strong>100%</strong><span>Digital process</span></div>
                <div><strong>3+</strong><span>Languages</span></div>
              </div>
              <div class="team-profile-card__actions">
                <a class="team-profile-card__contact" href="#contact"><i class="bi bi-envelope" aria-hidden="true"></i><span>Get in touch</span></a>
                <a class="team-profile-card__save" href="#contact" aria-label="Contact Leandro"><i class="bi bi-bookmark" aria-hidden="true"></i></a>
              </div>
            </div>
          </div>
        </article>

        <article class="team-profile-card team-profile-card--jessica reveal">
          <div class="team-profile-card__media">
            <img src="${asset('images/team/jessica-wisniewski.webp')}" alt="Jessica Wisniewski" />
            <div class="team-profile-card__shade"></div>
            <div class="team-profile-card__content">
              <p class="team-profile-card__role">Co-Founder · Immigration Paralegal</p>
              <h3 class="team-profile-card__name">Jessica Wisniewski <span class="team-profile-card__verified"><i class="bi bi-check-lg" aria-hidden="true"></i></span></h3>
              <p class="team-profile-card__bio">Jessica leads operations and quality control, bringing precision, discipline and thoughtful care to every client package.</p>
              <div class="team-profile-card__stats" aria-label="Jessica profile highlights">
                <div><strong>50</strong><span>States served</span></div>
                <div><strong>100%</strong><span>Digital process</span></div>
                <div><strong>3+</strong><span>Languages</span></div>
              </div>
              <div class="team-profile-card__actions">
                <a class="team-profile-card__contact" href="#contact"><i class="bi bi-envelope" aria-hidden="true"></i><span>Get in touch</span></a>
                <a class="team-profile-card__save" href="#contact" aria-label="Contact Jessica"><i class="bi bi-bookmark" aria-hidden="true"></i></a>
              </div>
            </div>
          </div>
        </article>
      </div>
    `
  }

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
              <img class="phone-feed-image" src="${instagramMobilePreview}" alt="Prisma Provider Instagram profile and post grid" />
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
              <img src="${asset('images/footer/prismaTeam.png')}" alt="" />
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
