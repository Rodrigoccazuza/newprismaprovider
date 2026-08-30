import './enhancements.css'

const asset = (path) => `${import.meta.env.BASE_URL}${path}`
const instagramAvatar = 'https://ugc.production.linktr.ee/01686030-d03f-4c14-8570-68d323e26405_Logo-2024.png'

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
        <div class="phone-mockup" aria-label="Prisma Provider Instagram preview">
          <div class="phone-mockup__speaker"></div>
          <div class="phone-screen">
            <div class="ig-topbar"><strong>9:41</strong><span><i class="bi bi-wifi"></i><i class="bi bi-battery-full"></i></span></div>
            <div class="ig-profile">
              <img src="${instagramAvatar}" alt="Prisma Provider Instagram profile" />
              <div><strong>@prismaprovider</strong><small>Your Path to Citizenship</small></div>
              <i class="bi bi-three-dots"></i>
            </div>
            <div class="ig-story-row">
              <span><b>Start here</b></span><span><b>Services</b></span><span><b>Reviews</b></span><span><b>FAQ</b></span>
            </div>
            <div class="ig-post ig-post--hero"><div><small>PRISMA PROVIDER</small><strong>You focus on your life. We take care of the rest.</strong></div></div>
            <div class="ig-grid"><div>Green Card</div><div>Citizenship</div><div>VAWA</div><div>USCIS</div></div>
            <div class="ig-bottom"><i class="bi bi-house-door-fill"></i><i class="bi bi-search"></i><i class="bi bi-plus-square"></i><i class="bi bi-play-btn"></i><i class="bi bi-person-circle"></i></div>
          </div>
        </div>
      </div>
      <div class="social-copy social-copy--new">
        <span class="section__eyebrow reveal">Stay connected</span>
        <h2 class="display-title reveal">Your path does not have to feel confusing.</h2>
        <p class="reveal">Follow Prisma for practical immigration information, process updates, client stories and answers to the questions people ask us every day.</p>
        <div class="social-actions reveal">
          <a class="button button--primary" href="https://www.instagram.com/prismaprovider/" target="_blank" rel="noreferrer"><i class="bi bi-instagram"></i><span>Follow on Instagram</span></a>
          <a class="button button--outline" href="https://wa.me/19298234645" target="_blank" rel="noreferrer"><i class="bi bi-whatsapp"></i><span>Message on WhatsApp</span></a>
          <a class="button button--outline" href="mailto:contact@prismaprovider.com"><i class="bi bi-envelope"></i><span>Email Prisma</span></a>
        </div>
      </div>
    `
  }

  const footer = document.querySelector('.site-footer')
  if (footer && !document.querySelector('.footer-profile-cutout')) {
    footer.insertAdjacentHTML('beforebegin', `
      <section class="footer-profile-cutout" aria-label="Prisma Provider">
        <div class="footer-profile-cutout__glow"></div>
        <img src="${instagramAvatar}" alt="Prisma Provider" />
        <p>Your Path to Citizenship</p>
        <h2>You focus on your life. We take care of the rest.</h2>
      </section>
    `)
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
