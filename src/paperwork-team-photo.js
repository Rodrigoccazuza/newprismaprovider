// Prisma paperwork section — use the founders/team photo requested by Rodrigo.
const paperworkTeamImage = document.querySelector('.about-statement__image img')

if (paperworkTeamImage) {
  paperworkTeamImage.src = `${import.meta.env.BASE_URL}images/footer/prismaTeam.png`
  paperworkTeamImage.alt = 'Prisma Provider team reviewing an immigration case together'
  paperworkTeamImage.loading = 'eager'
  paperworkTeamImage.decoding = 'async'
  paperworkTeamImage.style.objectFit = 'cover'
  paperworkTeamImage.style.objectPosition = 'center center'
}
