const finalCtaImage = document.querySelector('.final-cta > img')

if (finalCtaImage) {
  finalCtaImage.src = `${import.meta.env.BASE_URL}images/editorial/C951D67C-AD2D-4933-A670-A007827FC3A5.png`
}

if (!document.querySelector('#final-cta-desktop-gradient')) {
  const desktopGradient = document.createElement('style')
  desktopGradient.id = 'final-cta-desktop-gradient'
  desktopGradient.textContent = `
    @media (min-width: 721px) {
      .final-cta__shade {
        background: linear-gradient(
          90deg,
          #030405 0%,
          rgba(3,4,5,.98) 30%,
          rgba(3,4,5,.90) 48%,
          rgba(3,4,5,.68) 64%,
          rgba(3,4,5,.32) 82%,
          rgba(3,4,5,.08) 100%
        ) !important;
      }
    }
  `
  document.head.appendChild(desktopGradient)
}
