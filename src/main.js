import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import './styles.css'
import './process-timeline.css'

gsap.registerPlugin(ScrollTrigger)

const asset = (path) => `${import.meta.env.BASE_URL}${path}`

const slides = [
  {
    label: 'Your path forward',
    eyebrow: 'Immigration support, made clearer',
    title: 'Your immigration process deserves a clear path forward.',
    body: 'From the first conversation to document preparation, review, filing and follow-up, Prisma Provider helps you stay organized and understand what comes next.',
    cta: 'Find your service',
    image: asset('images/hero/approval.jpg'),
    position: 'center 42%',
    tabletPosition: '62% 30%',
    mobilePosition: '58% 24%'
  },
  {
    label: 'Adjustment of status',
    eyebrow: 'Adjustment of status',
    title: 'A Green Card application is more than a stack of forms.',
    body: 'We help you organize the documents, prepare the package and understand each step before it moves forward.',
    cta: 'Explore adjustment of status',
    image: asset('images/hero/adjustment.jpg'),
    position: 'center 40%',
    tabletPosition: '52% 28%',
    mobilePosition: '51% 24%'
  },
  {
    label: 'Naturalization',
    eyebrow: 'Naturalization',
    title: 'Ready for the next step toward U.S. citizenship?',
    body: 'Prepare your naturalization process with clear instructions, organized documentation and support along the way.',
    cta: 'Explore naturalization',
    image: asset('images/hero/naturalization.jpg'),
    position: 'center 45%',
    tabletPosition: '50% 29%',
    mobilePosition: '50% 24%'
  },
  {
    label: 'Removal of conditions',
    eyebrow: 'Removal of conditions',
    title: 'Your preparation should never be last minute.',
    body: 'We help you understand what needs to be gathered, prepared and reviewed before filing to replace your conditional Green Card.',
    cta: 'Explore removal of conditions',
    image: asset('images/hero/removal.jpg'),
    position: 'center 36%',
    tabletPosition: '52% 29%',
    mobilePosition: '52% 25%'
  },
  {
    label: 'Humanitarian cases',
    eyebrow: 'Confidential support',
    title: 'Understand your options in a safe, respectful environment.',
    body: 'Some immigration situations are deeply personal. Our team approaches every conversation with discretion, clarity and care.',
    cta: 'Learn about VAWA',
    image: asset('images/hero/humanitarian.jpg'),
    position: 'center 42%',
    tabletPosition: '70% 28%',
    mobilePosition: '72% 23%'
  }
]

document.querySelector('#app').innerHTML = `
  <main class="hero" aria-label="Prisma Provider introduction">
    <div class="hero__image" aria-hidden="true"></div>
    <div class="hero__image hero__image--incoming" aria-hidden="true"></div>
    <div class="hero__shade"></div>
    <header class="nav glass-shell">
      <a class="brand" href="#" aria-label="Prisma Provider home">
        <img src="${asset('brand/original/prisma-mark.png')}" alt="Prisma Provider" />
      </a>
      <nav class="nav__links" aria-label="Primary navigation">
        <a href="#services">Services</a>
        <a href="#stories">Success stories</a>
        <a href="#about">About</a>
        <a href="#faq">FAQ</a>
      </nav>
      <div class="nav__actions">
        <a class="button button--light" href="#contact">Book a consultation <i class="bi bi-arrow-up-right" aria-hidden="true"></i></a>
        <button class="menu" aria-label="Open menu" aria-expanded="false"><span></span><span></span></button>
      </div>
      <div class="mobile-nav" aria-hidden="true">
        <a href="#services">Services</a>
        <a href="#stories">Success stories</a>
        <a href="#about">About</a>
        <a href="#faq">FAQ</a>
        <a class="mobile-nav__cta" href="#book">Book a consultation</a>
      </div>
    </header>

    <section class="hero__content">
      <div class="copy">
        <div class="hero-title-group">
          <p class="eyebrow"><span></span></p>
          <h1></h1>
        </div>
        <p class="summary"></p>
        <div class="copy__actions">
          <a class="button button--primary primary-cta" href="#services"><span></span><i class="bi bi-arrow-down-right" aria-hidden="true"></i></a>
          <a class="button button--outline" href="#contact">Book a consultation <i class="bi bi-arrow-up-right" aria-hidden="true"></i></a>
        </div>
      </div>

      <aside class="rating glass-panel" aria-label="Client rating">
        <div class="rating__avatars" aria-hidden="true"><i>G</i><i>P</i><i>★</i></div>
        <span class="rating__caption">Trusted by clients<br />across all 50 states</span>
        <strong>Google</strong>
        <span class="stars" aria-label="5 out of 5 stars">★★★★★</span>
        <small>Verified Google reviews</small>
      </aside>
    </section>

    <footer class="hero__footer">
      <div class="trust"><span class="trust__pulse"></span> Fully digital <i>•</i> Nationwide <i>•</i> Multilingual</div>
      <div class="slider-nav">
        <div class="progress" role="tablist" aria-label="Hero stories"></div>
      </div>
      <p class="slide-label"></p>
    </footer>
  </main>

  <section class="trust-strip" aria-label="Prisma service highlights">
    <div class="trust-strip__item"><strong>100%</strong><span>Digital process</span></div>
    <div class="trust-strip__item"><strong>50</strong><span>States served</span></div>
    <div class="trust-strip__item"><strong>03</strong><span>Languages</span></div>
    <div class="trust-strip__item"><strong>Clear</strong><span>Communication</span></div>
  </section>

  <section class="section about-section" id="about">
    <div class="section__eyebrow reveal">About Prisma</div>
    <div class="about-grid">
      <h2 class="display-title reveal">Immigration paperwork can be complicated. Working through it does not have to feel that way.</h2>
      <div class="about-copy reveal">
        <p>Prisma Provider is a digital immigration services company focused on helping clients prepare and organize USCIS documentation with greater clarity and confidence.</p>
        <p>We turn forms, documents, deadlines and requirements into a process you can actually understand.</p>
        <a class="inline-link" href="#team">Meet Prisma <i class="bi bi-arrow-up-right" aria-hidden="true"></i></a>
      </div>
    </div>
    <div class="about-statement reveal">
      <div class="about-statement__image"><img src="${asset('images/editorial/prism.jpg')}" alt="Light passing through a glass prism" /></div>
      <p><span>The paperwork matters.</span> So does the person behind it.</p>
    </div>
  </section>

  <section class="section services-section" id="services">
    <div class="section-heading section-heading--split">
      <div>
        <span class="section__eyebrow reveal">How we can help</span>
        <h2 class="display-title reveal">Start with where you are today.</h2>
      </div>
      <p class="reveal">Every immigration journey is different. Explore the service that best matches your situation and understand what the process may involve.</p>
    </div>
    <div class="services-grid">
      <article class="service-card service-card--featured reveal">
        <img class="service-card__art" src="${asset('images/services/adjustment-of-status.svg')}" alt="" />
        <span class="service-card__index">01</span>
        <div><small>Permanent residence</small><h3>Adjustment of Status</h3><p>Applying for permanent residency from inside the United States?</p></div>
        <a href="#contact" aria-label="Explore Adjustment of Status"><i class="bi bi-arrow-up-right" aria-hidden="true"></i></a>
      </article>
      <article class="service-card reveal"><img class="service-card__art" src="${asset('images/services/removal-of-conditions.svg')}" alt="" /><span class="service-card__index">02</span><div><small>Conditional Green Card</small><h3>Removal of Conditions</h3><p>Prepare the evidence and documentation involved in the I-751 process.</p></div><a href="#contact" aria-label="Explore Removal of Conditions"><i class="bi bi-arrow-up-right" aria-hidden="true"></i></a></article>
      <article class="service-card reveal"><img class="service-card__art" src="${asset('images/services/naturalization.svg')}" alt="" /><span class="service-card__index">03</span><div><small>Citizenship</small><h3>Naturalization</h3><p>Prepare your naturalization process with clear instructions and support.</p></div><a href="#contact" aria-label="Explore Naturalization"><i class="bi bi-arrow-up-right" aria-hidden="true"></i></a></article>
      <article class="service-card reveal"><img class="service-card__art" src="${asset('images/services/vawa.svg')}" alt="" /><span class="service-card__index">04</span><div><small>Confidential support</small><h3>VAWA</h3><p>Respectful and discreet document preparation for qualifying cases.</p></div><a href="#contact" aria-label="Explore VAWA"><i class="bi bi-arrow-up-right" aria-hidden="true"></i></a></article>
      <article class="service-card reveal"><img class="service-card__art" src="${asset('images/services/asylum.svg')}" alt="" /><span class="service-card__index">05</span><div><small>Humanitarian filing</small><h3>Asylum</h3><p>Understand the documentation and preparation involved before filing.</p></div><a href="#contact" aria-label="Explore Asylum"><i class="bi bi-arrow-up-right" aria-hidden="true"></i></a></article>
      <article class="service-card reveal"><img class="service-card__art" src="${asset('images/services/uscis-requests.svg')}" alt="" /><span class="service-card__index">06</span><div><small>RFE · Inquiries · Expedites</small><h3>USCIS Requests</h3><p>Document preparation support for requests and related USCIS matters.</p></div><a href="#contact" aria-label="Explore USCIS Requests"><i class="bi bi-arrow-up-right" aria-hidden="true"></i></a></article>
      <article class="service-card reveal"><img class="service-card__art" src="${asset('images/services/translations.svg')}" alt="" /><span class="service-card__index">07</span><div><small>Immigration documents</small><h3>Translations</h3><p>Translation support for documents prepared for immigration-related use.</p></div><a href="#contact" aria-label="Explore Translations"><i class="bi bi-arrow-up-right" aria-hidden="true"></i></a></article>
      <article class="service-card service-card--last reveal"><img class="service-card__art" src="${asset('images/services/other-services.svg')}" alt="" /><span class="service-card__index">08</span><div><small>EAD · Travel · FOIA</small><h3>Other Services</h3><p>Additional immigration document preparation services built around your needs.</p></div><a href="#contact" aria-label="Explore Other Services"><i class="bi bi-arrow-up-right" aria-hidden="true"></i></a></article>
    </div>
    <div class="section-cta reveal"><p><strong>Not sure which service fits?</strong> Tell us what is happening and we can help identify the next step.</p><a class="button button--primary" href="#contact"><span>Book a consultation</span><i class="bi bi-arrow-up-right" aria-hidden="true"></i></a></div>
  </section>

  <section class="section benefits-section">
    <div class="section-heading section-heading--center">
      <span class="section__eyebrow reveal">Why clients choose Prisma</span>
      <h2 class="display-title reveal">You should know what is happening with your process.</h2>
      <p class="reveal">Immigration paperwork often comes with uncertainty. Our role is to bring structure to it.</p>
    </div>
    <div class="benefits-grid">
      <article class="benefit-card benefit-card--intro reveal"><span>01</span><h3>Clear next steps</h3><p>Know what we need, what is missing and what happens after each stage.</p><a href="#process">See our process <i class="bi bi-arrow-down-right" aria-hidden="true"></i></a></article>
      <article class="benefit-card benefit-card--wide reveal"><span>02</span><h3>Organized document preparation</h3><p>Scattered documents become a structured package ready for careful review.</p></article>
      <article class="benefit-card benefit-card--stat reveal"><strong>50</strong><span>States served through one fully digital process.</span></article>
      <article class="benefit-card benefit-card--dark reveal"><span>03</span><h3>Human communication</h3><p>Questions come up. We explain the process in language that makes sense.</p></article>
      <article class="benefit-card benefit-card--wide benefit-card--image reveal"><div><span>04</span><h3>A process that works around your life.</h3><p>Send documents and communicate with our team without needing to be in the same city.</p></div></article>
      <article class="benefit-card reveal"><span>05</span><h3>Careful review</h3><p>Information and documentation move through a structured review before finalization.</p></article>
    </div>
  </section>

  <section class="section reviews-section" id="stories">
    <div class="reviews-heading">
      <div class="reviews-heading__title">
        <span class="reviews-kicker reveal"><b>04</b> Google reviews</span>
        <h2 class="reveal">In their<br>own words.</h2>
      </div>
      <p class="reviews-note reveal">Reviews are published as written, in the language they were written in.</p>
    </div>
    <div class="reviews-track">
      <article class="review-card review-card--active reveal"><div class="review-card__stars">★★★★★</div><blockquote>Meu approval chegou mais rápido que o esperado. Pela primeira vez eu sabia o que estava no meu processo.</blockquote><footer><span class="review-avatar">AR</span><div><strong>Ana R.</strong><small>Google review</small></div></footer></article>
      <article class="review-card reveal"><div class="review-card__stars">★★★★★</div><blockquote>They explained every document before it was sent. I never felt like I was guessing.</blockquote><footer><span class="review-avatar">MJ</span><div><strong>Marcus J.</strong><small>Google review</small></div></footer></article>
      <article class="review-card reveal"><div class="review-card__stars">★★★★★</div><blockquote>Respondieron cada pregunta en mi idioma, sin apuro y sin promesas falsas.</blockquote><footer><span class="review-avatar">JS</span><div><strong>Julia S.</strong><small>Google review</small></div></footer></article>
      <article class="review-card reveal"><div class="review-card__stars">★★★★★</div><blockquote>The RFE arrived and they had the response organized in eleven days. Nine days early.</blockquote><footer><span class="review-avatar">RT</span><div><strong>Rafael T.</strong><small>Google review</small></div></footer></article>
    </div>
  </section>

  <section class="section journeys-section">
    <div class="journeys-heading">
      <div>
        <span class="journeys-kicker reveal"><b>05</b> Success stories</span>
        <h2 class="reveal">Anonymized<br>cases, start<br>to decision.</h2>
      </div>
      <p class="reveal">Each story records what the file looked like when it arrived, what we prepared, and what USCIS decided. Case results vary based on individual circumstances and USCIS decisions.</p>
    </div>
    <div class="journey-grid">
      <article class="journey-card journey-card--green reveal">
        <small>Adjustment of Status</small>
        <h3>Approved after a notice asked for the documents nobody had gathered</h3>
        <p>A married couple came to us three weeks before an RFE deadline, with a filing prepared elsewhere and no copy of what had been sent.</p>
        <ul><li>Notice broken into items</li><li>Record rebuilt</li><li>Two reviews and a client read</li><li>Filed with nine days to spare</li></ul>
        <div class="journey-outcome"><span>Outcome</span><strong>Approved</strong><a href="#contact">Read the case</a></div>
      </article>
      <article class="journey-card journey-card--blue reveal">
        <small>Naturalization</small>
        <h3>A travel history that looked disqualifying, documented properly</h3>
        <p>Frequent trips home for a family illness raised a continuous residence question. The record answered it.</p>
        <ul><li>Eligibility checked first</li><li>Absences explained</li><li>Interview preparation</li><li>One interview</li></ul>
        <div class="journey-outcome"><span>Outcome</span><strong>Naturalized</strong><a href="#contact">Read the case</a></div>
      </article>
      <article class="journey-card journey-card--green reveal">
        <small>VAWA</small>
        <h3>A self-petition prepared without a single letter arriving at home</h3>
        <p>The filing had to be invisible at a shared address. Every communication was routed away from it.</p>
        <ul><li>Safe channels first</li><li>Declaration built in stages</li><li>Evidence without police records</li><li>Filed confidentially</li></ul>
        <div class="journey-outcome"><span>Outcome</span><strong>Approved</strong><a href="#contact">Read the case</a></div>
      </article>
    </div>
    <div class="metrics journey-metrics reveal"><div><strong>46</strong><span>Documents indexed in the largest response</span></div><div><strong>09</strong><span>Days of margin on the tightest deadline</span></div><div><strong>05</strong><span>Filing categories in the published stories</span></div><div><strong>00</strong><span>Letters sent to a client home without consent</span></div></div>
  </section>

  <section class="section team-section" id="team">
    <div class="section-heading section-heading--split">
      <div><span class="section__eyebrow reveal">Who we are</span><h2 class="display-title reveal">Two founders. One careful standard.</h2></div>
      <p class="reveal">Prisma was built around a simple idea: immigration services should feel organized, transparent and human.</p>
    </div>
    <div class="team-grid">
      <article class="team-card reveal"><div class="team-card__image"><img src="${asset('images/team/leandro-krauss.webp')}" alt="Leandro Krauss" /></div><div class="team-card__copy"><small>Co-Founder · Immigration Paralegal</small><h3>Leandro Krauss</h3><p>Leandro oversees the full client journey with a sharp eye for detail, ensuring every case is handled with clarity, care and precision.</p></div></article>
      <article class="team-card team-card--reverse reveal"><div class="team-card__image"><img src="${asset('images/team/jessica-wisniewski.webp')}" alt="Jessica Wisniewski" /></div><div class="team-card__copy"><small>Co-Founder · Immigration Paralegal</small><h3>Jessica Wisniewski</h3><p>Jessica leads operations and quality control, bringing precision, discipline and thoughtful care to every client package.</p></div></article>
    </div>
  </section>

  <section class="section process-section" id="process">
    <div class="section-heading section-heading--split process-section__heading">
      <div><span class="section__eyebrow reveal">How it works</span><h2 class="display-title reveal">From the first conversation to the final package, you will know what comes next.</h2></div>
      <p class="reveal">A clear path, broken into manageable steps.</p>
    </div>
    <div class="process-line process-timeline" aria-label="Prisma service process" role="list">
      <div class="process-timeline__rail" aria-hidden="true"><span></span></div>
      <article class="process-step process-step--timeline process-step--left" data-process-step role="listitem"><div class="process-step__card"><div class="process-step__meta"><small>Start</small><span>Step 01</span></div><h3>Tell us about your situation</h3><p>Book a consultation and share what you need help with.</p></div><div class="process-step__node" aria-hidden="true"><span>01</span></div></article>
      <article class="process-step process-step--timeline process-step--right" data-process-step role="listitem"><div class="process-step__card"><div class="process-step__meta"><small>Understand</small><span>Step 02</span></div><h3>We understand your case</h3><p>We review your situation and identify an appropriate service.</p></div><div class="process-step__node" aria-hidden="true"><span>02</span></div></article>
      <article class="process-step process-step--timeline process-step--left" data-process-step role="listitem"><div class="process-step__card"><div class="process-step__meta"><small>Choose</small><span>Step 03</span></div><h3>Choose your service</h3><p>We explain scope, payment and next steps before you move forward.</p></div><div class="process-step__node" aria-hidden="true"><span>03</span></div></article>
      <article class="process-step process-step--timeline process-step--right" data-process-step role="listitem"><div class="process-step__card"><div class="process-step__meta"><small>Gather</small><span>Step 04</span></div><h3>Gather your documents</h3><p>You receive a clear checklist of what needs to be provided.</p></div><div class="process-step__node" aria-hidden="true"><span>04</span></div></article>
      <article class="process-step process-step--timeline process-step--left" data-process-step role="listitem"><div class="process-step__card"><div class="process-step__meta"><small>Prepare</small><span>Step 05</span></div><h3>We prepare your package</h3><p>Our team organizes forms and supporting documentation.</p></div><div class="process-step__node" aria-hidden="true"><span>05</span></div></article>
      <article class="process-step process-step--timeline process-step--right" data-process-step role="listitem"><div class="process-step__card"><div class="process-step__meta"><small>Review</small><span>Step 06</span></div><h3>Structured review</h3><p>You confirm the information before the package is finalized.</p></div><div class="process-step__node" aria-hidden="true"><span>06</span></div></article>
      <article class="process-step process-step--timeline process-step--left" data-process-step role="listitem"><div class="process-step__card"><div class="process-step__meta"><small>File</small><span>Step 07</span></div><h3>Ready to file</h3><p>Final documentation is prepared for the appropriate filing process.</p></div><div class="process-step__node" aria-hidden="true"><span>07</span></div></article>
      <article class="process-step process-step--timeline process-step--right" data-process-step role="listitem"><div class="process-step__card"><div class="process-step__meta"><small>Stay connected</small><span>Step 08</span></div><h3>Now you wait. We stay connected.</h3><p>We help you understand updates related to the service provided.</p></div><div class="process-step__node" aria-hidden="true"><span>08</span></div></article>
      <article class="process-step process-step--timeline process-step--left process-step--last" data-process-step role="listitem"><div class="process-step__card"><div class="process-step__meta"><small>Next chapter</small><span>Step 09</span></div><h3>Careful preparation moves the journey forward.</h3><a href="#contact">Start with a consultation <i class="bi bi-arrow-up-right" aria-hidden="true"></i></a></div><div class="process-step__node" aria-hidden="true"><span>09</span></div></article>
    </div>
  </section>

  <section class="section contact-section" id="contact">
    <div class="contact-panel reveal">
      <div class="contact-copy"><span class="section__eyebrow">Have a question?</span><h2 class="display-title">Tell us what is going on.</h2><p>You do not need to know the exact name of the form or service before contacting us. Tell us a little about your situation and our team will help you understand where to start.</p><div class="contact-detail"><small>Prefer to talk?</small><a href="https://wa.me/19298234645">WhatsApp · +1 929 823 4645</a><a href="mailto:contact@prismaprovider.com">contact@prismaprovider.com</a></div></div>
      <form class="contact-form">
        <label>Full name<input name="name" type="text" placeholder="Your name" required /></label>
        <div class="form-row"><label>Email<input name="email" type="email" placeholder="you@email.com" required /></label><label>Phone / WhatsApp<input name="phone" type="tel" placeholder="(000) 000-0000" /></label></div>
        <div class="form-row"><label>State<input name="state" type="text" placeholder="Your state" /></label><label>Preferred language<select name="language"><option>English</option><option>Português</option><option>Español</option></select></label></div>
        <label>What would you like help with?<select name="service"><option>I am not sure</option><option>Adjustment of Status</option><option>Removal of Conditions</option><option>Naturalization</option><option>VAWA</option><option>Asylum</option><option>RFE / USCIS Request</option><option>Translation</option><option>Other</option></select></label>
        <label>Tell us briefly about your situation<textarea name="message" rows="4" placeholder="You do not need to include sensitive personal information here."></textarea></label>
        <button class="button button--primary" type="submit"><span>Send my information</span><i class="bi bi-send" aria-hidden="true"></i></button>
        <p class="form-status" role="status"></p>
      </form>
    </div>
  </section>

  <section class="section faq-section" id="faq">
    <div class="faq-intro"><span class="section__eyebrow reveal">Frequently asked questions</span><h2 class="display-title reveal">A few answers before we talk.</h2><p class="reveal">Still have a question?</p><a class="inline-link reveal" href="#contact">Talk to Prisma <i class="bi bi-arrow-up-right" aria-hidden="true"></i></a></div>
    <div class="faq-list">
      <details class="faq-item reveal" open><summary>Do I need to live in New York to work with Prisma?<span></span></summary><p>No. Prisma Provider operates digitally and works with clients across the United States.</p></details>
      <details class="faq-item reveal"><summary>I do not know which service I need. Can I still contact you?<span></span></summary><p>Yes. Tell us about your situation and we can help identify which Prisma service may fit your needs.</p></details>
      <details class="faq-item reveal"><summary>How do I send my documents?<span></span></summary><p>Our process is digital. Once you begin a service, our team explains how to securely provide the documents and information needed.</p></details>
      <details class="faq-item reveal"><summary>Can Prisma help with a Request for Evidence?<span></span></summary><p>Prisma offers preparation support for certain RFEs and USCIS requests. Schedule a consultation so we can understand what you received.</p></details>
      <details class="faq-item reveal"><summary>How long will my immigration process take?<span></span></summary><p>Processing times vary by application type, location and individual circumstances. USCIS determines government timelines and final decisions.</p></details>
      <details class="faq-item reveal"><summary>Can you guarantee my case will be approved?<span></span></summary><p>No immigration service can guarantee a USCIS decision. Our role is to prepare and organize your documentation carefully and clearly.</p></details>
    </div>
  </section>

  <section class="section social-section">
    <div class="social-orbit reveal">
      <div class="social-orbit__center"><img src="${asset('brand/original/prisma-mark.png')}" alt="" /><span>Prisma</span></div>
      <a class="social-node social-node--instagram" href="https://www.instagram.com/prismaprovider/" target="_blank" rel="noreferrer">Instagram</a>
      <a class="social-node social-node--whatsapp" href="https://wa.me/19298234645" target="_blank" rel="noreferrer">WhatsApp</a>
      <a class="social-node social-node--email" href="mailto:contact@prismaprovider.com">Email</a>
    </div>
    <div class="social-copy"><span class="section__eyebrow reveal">Stay connected</span><h2 class="display-title reveal">Immigration information should be easier to understand.</h2><p class="reveal">Follow Prisma for practical explanations, process updates, client stories and answers to common immigration questions.</p></div>
  </section>

  <section class="final-cta">
    <img src="${asset('images/editorial/prism.jpg')}" alt="" />
    <div class="final-cta__shade"></div>
    <div class="final-cta__content reveal"><span class="section__eyebrow">Your next step</span><h2>You do not have to figure out every step before asking for help.</h2><p>Tell us where you are in your immigration process. We will help you understand what comes next.</p><div><a class="button button--primary" href="#contact"><span>Book a consultation</span><i class="bi bi-arrow-up-right" aria-hidden="true"></i></a><a class="button button--outline" href="#services">Explore services <i class="bi bi-arrow-up-right" aria-hidden="true"></i></a></div></div>
  </section>

  <footer class="site-footer">
    <div class="footer-brand"><img src="${asset('brand/original/prisma-mark.png')}" alt="Prisma Provider" /><h2>Clear immigration support for the journey ahead.</h2><p>Fully digital, structured and human-centered immigration document preparation.</p></div>
    <div class="footer-links"><div><strong>Services</strong><a href="#services">Adjustment of Status</a><a href="#services">Naturalization</a><a href="#services">VAWA</a><a href="#services">USCIS Requests</a></div><div><strong>Prisma</strong><a href="#about">About</a><a href="#stories">Success stories</a><a href="#process">Our process</a><a href="#faq">FAQ</a></div><div><strong>Connect</strong><a href="https://www.instagram.com/prismaprovider/">Instagram</a><a href="https://wa.me/19298234645">WhatsApp</a><a href="mailto:contact@prismaprovider.com">Email</a></div></div>
    <div class="footer-bottom"><p>Prisma Provider is not a law firm and does not provide legal representation. Information on this website is general and is not legal advice.</p><span>© 2026 Prisma Provider</span></div>
  </footer>
`

const els = {
  bg: document.querySelector('.hero__image:not(.hero__image--incoming)'),
  incoming: document.querySelector('.hero__image--incoming'),
  eyebrow: document.querySelector('.eyebrow span'),
  title: document.querySelector('h1'),
  summary: document.querySelector('.summary'),
  cta: document.querySelector('.primary-cta span'),
  label: document.querySelector('.slide-label'),
  progress: document.querySelector('.progress')
}

let active = 0
let timer
let locked = false

function setImageFocus(element, slide) {
  element.style.setProperty('--desktop-position', slide.position)
  element.style.setProperty('--tablet-position', slide.tabletPosition)
  element.style.setProperty('--mobile-position', slide.mobilePosition)
}

slides.forEach((slide, index) => {
  const button = document.createElement('button')
  button.setAttribute('role', 'tab')
  button.setAttribute('aria-label', `Show story ${index + 1}: ${slide.label}`)
  button.innerHTML = '<span></span>'
  button.addEventListener('click', () => changeSlide(index))
  els.progress.appendChild(button)
})

function setContent(index) {
  const slide = slides[index]
  els.eyebrow.textContent = slide.eyebrow
  els.title.textContent = slide.title
  els.summary.textContent = slide.body
  els.cta.textContent = slide.cta
  els.label.textContent = slide.label
  document.querySelectorAll('.progress button').forEach((button, i) => {
    button.classList.toggle('is-active', i === index)
    button.setAttribute('aria-selected', i === index)
  })
}

function changeSlide(index, immediate = false) {
  if (locked || index === active && !immediate) return
  locked = true
  window.clearTimeout(timer)
  const nextIndex = (index + slides.length) % slides.length
  const slide = slides[nextIndex]
  els.incoming.style.backgroundImage = `url('${slide.image}')`
  setImageFocus(els.incoming, slide)

  const copyTargets = [els.eyebrow, els.title, els.summary, '.copy__actions', els.label]
  if (immediate) {
    els.bg.style.backgroundImage = `url('${slide.image}')`
    setImageFocus(els.bg, slide)
    setContent(nextIndex)
    gsap.from(['.nav', '.copy > *', '.rating', '.hero__footer'], { y: 24, opacity: 0, duration: 1.05, stagger: 0.07, ease: 'power3.out' })
    locked = false
  } else {
    const tl = gsap.timeline({
      onComplete: () => {
        els.bg.style.backgroundImage = `url('${slide.image}')`
        setImageFocus(els.bg, slide)
        gsap.set(els.incoming, { opacity: 0, scale: 1.04 })
        locked = false
      }
    })
    tl.to(copyTargets, { y: -18, opacity: 0, duration: 0.3, stagger: 0.025, ease: 'power2.in' })
      .to(els.incoming, { opacity: 1, scale: 1, duration: 1.15, ease: 'power2.inOut' }, 0)
      .add(() => setContent(nextIndex), 0.42)
      .fromTo(copyTargets, { y: 24, opacity: 0 }, { y: 0, opacity: 1, duration: 0.72, stagger: 0.045, ease: 'power3.out' }, 0.5)
  }
  active = nextIndex
  timer = window.setTimeout(() => changeSlide(active + 1), 7000)
}

document.addEventListener('keydown', (event) => {
  if (event.key === 'ArrowRight') changeSlide(active + 1)
  if (event.key === 'ArrowLeft') changeSlide(active - 1)
  if (event.key === 'Escape') closeMenu()
})

const menuButton = document.querySelector('.menu')
const mobileNav = document.querySelector('.mobile-nav')

function closeMenu() {
  document.querySelector('.nav').classList.remove('menu-open')
  menuButton.setAttribute('aria-expanded', 'false')
  menuButton.setAttribute('aria-label', 'Open menu')
  mobileNav.setAttribute('aria-hidden', 'true')
}

menuButton.addEventListener('click', () => {
  const willOpen = !document.querySelector('.nav').classList.contains('menu-open')
  document.querySelector('.nav').classList.toggle('menu-open', willOpen)
  menuButton.setAttribute('aria-expanded', String(willOpen))
  menuButton.setAttribute('aria-label', willOpen ? 'Close menu' : 'Open menu')
  mobileNav.setAttribute('aria-hidden', String(!willOpen))
})

mobileNav.querySelectorAll('a').forEach((link) => link.addEventListener('click', closeMenu))

changeSlide(0, true)

if (!window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
  gsap.utils.toArray('.reveal:not(h1):not(h2):not(h3):not(h4):not(h5):not(h6)').forEach((element) => {
    gsap.from(element, {
      y: 34,
      opacity: 0,
      duration: .9,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: element,
        start: 'top 88%',
        once: true
      }
    })
  })

}

document.querySelectorAll('.faq-item').forEach((item) => {
  const icon = item.querySelector('summary span')
  icon.className = item.open ? 'bi bi-x-lg' : 'bi bi-plus-lg'
  item.addEventListener('toggle', () => {
    icon.className = item.open ? 'bi bi-x-lg' : 'bi bi-plus-lg'
    if (!item.open) return
    document.querySelectorAll('.faq-item').forEach((other) => {
      if (other !== item) other.removeAttribute('open')
    })
  })
})

document.querySelector('.contact-form').addEventListener('submit', (event) => {
  event.preventDefault()
  const status = event.currentTarget.querySelector('.form-status')
  status.textContent = 'Thank you. This prototype is ready to connect to Prisma’s form service.'
})
