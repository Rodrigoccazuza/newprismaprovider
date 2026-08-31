import './enhancements.css'
import './instagram-feed.css'

const asset = (path) => `${import.meta.env.BASE_URL}${path}`
const instagramAvatar = 'https://ugc.production.linktr.ee/01686030-d03f-4c14-8570-68d323e26405_Logo-2024.png'
const instagramUrl = 'https://www.instagram.com/prismaprovider/'
const instagramFeedB64 = asset('images/social/prisma-instagram-feed.b64')

function enhancePrismaSite() {
  const trustStrip = document.querySelector('.trust-strip')
  if (trustStrip) {
    trustStrip.classList.add('achievement-bar')
    trustStrip.setAttribute('aria-label', 'Prisma Provider highlights')
    trustStrip.innerHTML = `
      <div class="trust-strip__item"><strong>2021<span>+</span></strong><small>Serving clients since</small></div>
      <div class="trust-strip__item"><strong>50<span>+</span></strong><small>States served</small></div>
      <div class="trust-strip__item"><strong>03<span>+</span></strong><small>Languages supported</small></div>
      <div class="trust-strip__item"><strong>100<span>%</span></strong><small>Digital process</small></div>
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
              <img src="${asset('images/footer/prisma-founders.jpg?v=2')}" alt="" />
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
