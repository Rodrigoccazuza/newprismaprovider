const serviceIllustrationStyle = document.createElement('style')
serviceIllustrationStyle.id = 'service-illustration-centering'
serviceIllustrationStyle.textContent = `
  /* Keep every How we can help illustration visually centered in its card. */
  .services-section .service-card__art {
    left: 50% !important;
    right: auto !important;
    transform: translateX(-50%) !important;
    object-position: center center !important;
  }

  .services-section .service-card--featured .service-card__art {
    left: 50% !important;
    right: auto !important;
    transform: translateX(-50%) !important;
  }

  .services-section .service-card:hover .service-card__art {
    transform: translateX(-50%) scale(1.045) !important;
  }

  @media (max-width: 720px) {
    .services-section .service-card__art,
    .services-section .service-card--featured .service-card__art {
      left: 50% !important;
      right: auto !important;
      transform: translateX(-50%) !important;
      object-position: center center !important;
    }

    .services-section .service-card:hover .service-card__art {
      transform: translateX(-50%) scale(1.035) !important;
    }
  }
`
document.head.appendChild(serviceIllustrationStyle)
