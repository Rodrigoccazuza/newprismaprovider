const removalIllustration = document.querySelector('.services-section .service-card:nth-child(2) .service-card__art')

if (removalIllustration) {
  fetch(`${import.meta.env.BASE_URL}images/services/removal-of-conditions-attached.webp.b64`)
    .then((response) => {
      if (!response.ok) throw new Error('Could not load the Removal of Conditions illustration')
      return response.text()
    })
    .then((base64) => {
      removalIllustration.src = `data:image/webp;base64,${base64.trim()}`
    })
    .catch((error) => console.error(error))
}
