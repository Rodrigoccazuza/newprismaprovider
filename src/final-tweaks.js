const asset = (path) => `${import.meta.env.BASE_URL}${path}`

function applyFinalTweaks() {
  // How we can help: use the Line Awesome plus-in-circle glyph inside each service action.
  document.querySelectorAll('.services-section .service-card > a i').forEach((icon) => {
    icon.className = 'las la-plus-circle'
  })

  // About / Meet Prisma feature card: use the supplied editorial photo as the background image.
  const aboutImage = document.querySelector('.about-statement__image img')
  if (aboutImage) {
    aboutImage.src = asset('images/editorial/F78C5C3B-92E6-44C3-997E-7B4F8D529E1B.png')
    aboutImage.alt = 'Woman holding a U.S. flag and immigration document'
  }

  if (!document.querySelector('#prisma-final-tweaks')) {
    const styles = document.createElement('style')
    styles.id = 'prisma-final-tweaks'
    styles.textContent = `
      /* Service actions: Line Awesome plus sign enclosed by a circle */
      .services-section .service-card > a i.las.la-plus-circle {
        font-size: 24px;
        line-height: 1;
        transform: none;
      }
      .services-section .service-card:hover > a {
        transform: translateY(-2px) !important;
      }
      .services-section .service-card:hover > a i.las.la-plus-circle {
        transform: scale(1.08);
      }

      /* Match the Meet Prisma card border to the prism-gradient nav CTA border */
      .about-statement {
        border: 1px solid transparent !important;
        background:
          linear-gradient(#080a0c, #080a0c) padding-box,
          var(--prism) border-box !important;
        box-shadow:
          inset 0 1px rgba(255,255,255,.16),
          0 28px 70px rgba(0,0,0,.42) !important;
      }
      .about-statement__image img {
        object-position: center 38%;
        filter: saturate(.92) contrast(1.05) brightness(.88);
      }
      .about-statement__image:after {
        background: linear-gradient(0deg, rgba(3,4,5,.95) 0%, rgba(3,4,5,.58) 32%, rgba(3,4,5,.08) 72%) !important;
      }

      @media (max-width: 720px) {
        .about-statement__image img { object-position: 58% center; }
      }

      @media (prefers-reduced-motion: reduce) {
        .services-section .service-card > a i.las.la-plus-circle { transition: none !important; transform: none !important; }
      }
    `
    document.head.appendChild(styles)
  }
}

applyFinalTweaks()
