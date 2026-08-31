const footerCutout = document.querySelector('.footer-profile-cutout img')

if (footerCutout) {
  footerCutout.src = `${import.meta.env.BASE_URL}images/footer/prisma-founders.jpg`
  footerCutout.alt = 'Prisma Provider founders'
  footerCutout.classList.add('footer-profile-cutout__couple')
}
