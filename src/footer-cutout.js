const footerCutout = document.querySelector('.footer-profile-cutout img')

if (footerCutout) {
  fetch(`${import.meta.env.BASE_URL}images/footer/prisma-couple-cutout.txt`)
    .then((response) => {
      if (!response.ok) throw new Error('Could not load Prisma couple cutout')
      return response.text()
    })
    .then((dataUrl) => {
      footerCutout.src = dataUrl.trim()
      footerCutout.alt = 'Prisma Provider founders'
      footerCutout.classList.add('footer-profile-cutout__couple')
    })
    .catch((error) => console.error(error))
}
