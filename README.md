# Prisma Provider — Website Redesign

A modern, responsive static website for Prisma Provider, designed around the existing navy-and-gray brand direction with warmer coral and gold accents, stronger contrast, and a more dynamic client journey.

## Included

- Responsive single-page website
- English, Portuguese and Spanish interface switcher
- Animated hero and client journey dashboard
- Client testimonial slider
- Five-step process timeline
- Service cards and team section
- Google Calendar booking integration
- Intake form that creates a prefilled WhatsApp message
- Mobile navigation, smooth scrolling and accessibility improvements

## File structure

The full website is contained in `index.html`, including the HTML structure, responsive CSS, and JavaScript interactions. This makes it simple to deploy directly to Hostinger without a build process or external dependencies beyond Google Fonts.

## Booking integration

The booking buttons currently use Prisma's Google Calendar appointment schedule:

`https://calendar.google.com/calendar/appointments/schedules/AcZssZ0-WP04lMaC5SaGUWYBD9tX_NhOOfQaWyzdR_ME9srUCqlv6IsoM3TA3c6Plezoa6H15nwP1AV4`

Replace this URL in `index.html` if the booking calendar changes.

## Contact form behavior

The intake form validates required fields and opens WhatsApp with the visitor's answers prefilled. The visitor reviews the message before sending it to Prisma at `+1 929-823-4645`.

For server-side email storage or CRM automation, connect the form to a Hostinger PHP handler, Formspree, HubSpot, or another endpoint.

## Deployment to Hostinger

Deploy `index.html` to the target domain's `public_html` directory, or connect this repository through Hostinger's Git deployment tool.

## Important content note

The team portrait areas currently use branded initial-based placeholders. Replace them with approved high-resolution team photographs when those assets are available.
