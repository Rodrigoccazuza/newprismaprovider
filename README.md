# Prisma Provider — Website Redesign

A modern, responsive static website for Prisma Provider, designed around the existing navy/gray brand direction with a warmer accent color and a more dynamic client experience.

## Included

- Responsive HTML, CSS and JavaScript
- English, Portuguese and Spanish interface switcher
- Animated hero and client journey dashboard
- Client testimonial slider
- Five-step process timeline
- Service cards and team section
- Google Calendar booking link
- Two-step intake form that builds a prefilled WhatsApp message
- Mobile navigation, smooth scrolling and accessibility improvements

## Files

- `index.html` — page content and structure
- `styles.css` — complete responsive design system
- `script.js` — navigation, animations, translations, slider and intake form logic

## Booking integration

The booking buttons currently use Prisma's Google Calendar appointment schedule:

`https://calendar.google.com/calendar/appointments/schedules/AcZssZ0-WP04lMaC5SaGUWYBD9tX_NhOOfQaWyzdR_ME9srUCqlv6IsoM3TA3c6Plezoa6H15nwP1AV4`

Replace this URL in `index.html` if the booking calendar changes.

## Contact form behavior

The intake form validates required fields and opens WhatsApp with the visitor's answers prefilled. The visitor reviews the message before sending it to Prisma at `+1 929-823-4645`.

For server-side email storage, connect the form to a Hostinger PHP handler, Formspree, HubSpot or another CRM endpoint.

## Deployment to Hostinger

Upload these files to the target domain's `public_html` directory, or connect this repository through Hostinger's Git deployment tool.

## Important content note

Team portrait areas are branded placeholders using initials. Replace them with approved team photography when the original high-resolution images are available.
