/* Consultation request wizard: service → contact → details → review.
   Delivery: opens WhatsApp with the request prefilled; the calendar link lets the
   visitor pick a real time in Prisma's Google appointment schedule. */
import gsap from 'gsap'
import { t, onLangChange } from './i18n.js'

const WHATSAPP = '19298234645'
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
const TOTAL = 4

export function initWizard({ motion }) {
  const root = document.querySelector('[data-wizard]')
  const form = root.querySelector('form')
  const panes = [...form.querySelectorAll('[data-pane]')]
  const markers = [...root.querySelectorAll('[data-wstep]')]
  const back = form.querySelector('[data-back]')
  const next = form.querySelector('[data-next]')
  const count = form.querySelector('[data-count-label]')
  const summary = form.querySelector('[data-summary]')
  const done = form.querySelector('[data-done]')
  let step = 1

  const val = (name) => (form.elements[name]?.value ?? '').trim()
  const service = () => form.querySelector('input[name="service"]:checked')?.value || 'I am not sure'

  function validate(el) {
    const v = el.value.trim()
    const ok = el.type === 'email' ? EMAIL_RE.test(v) : v !== ''
    el.closest('.field').classList.toggle('is-invalid', !ok)
    el.setAttribute('aria-invalid', String(!ok))
    return ok
  }
  form.querySelectorAll('[required]').forEach((el) => el.addEventListener('blur', () => {
    if (el.value.trim() || el.closest('.field').classList.contains('is-invalid')) validate(el)
  }))

  function renderSummary() {
    const rows = [
      ['Service', t(service())],
      ['Full name', val('name')],
      ['Email', val('email')],
      ['Phone / WhatsApp', val('phone')],
      ['State', val('state')],
      ['Preferred language', val('language')],
      ['Your situation', val('message')]
    ].filter(([, v]) => v)
    summary.replaceChildren(...rows.map(([k, v]) => {
      const row = document.createElement('div')
      const dt = document.createElement('dt'); dt.textContent = t(k)
      const dd = document.createElement('dd'); dd.textContent = v
      row.append(dt, dd); return row
    }))
  }

  function show(n, { focus = true } = {}) {
    const dir = n > step ? 1 : -1
    const from = panes[step - 1]
    step = n
    const to = panes[step - 1]
    if (step === TOTAL) renderSummary()

    markers.forEach((m, i) => { m.classList.toggle('is-current', i + 1 === step); m.classList.toggle('is-done', i + 1 < step) })
    back.hidden = step === 1
    next.hidden = step === TOTAL
    count.textContent = t('Step {n} of {total}').replace('{n}', step).replace('{total}', TOTAL)
    done.textContent = ''

    if (from !== to) {
      from.hidden = true
      to.hidden = false
      if (motion()) gsap.fromTo(to, { opacity: 0, x: 24 * dir }, { opacity: 1, x: 0, duration: .45, ease: 'expo.out', clearProps: 'transform' })
    }
    if (focus) {
      const legend = to.querySelector('legend')
      legend.tabIndex = -1
      legend.focus({ preventScroll: true })
    }
  }

  next.addEventListener('click', () => {
    if (step === 2) {
      const bad = [...panes[1].querySelectorAll('[required]')].filter((el) => !validate(el))
      if (bad.length) { bad[0].focus(); return }
    }
    show(step + 1)
  })
  back.addEventListener('click', () => show(step - 1))
  // Enter in a text field advances instead of submitting early.
  form.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' && e.target.matches('input') && step < TOTAL) { e.preventDefault(); next.click() }
  })

  form.addEventListener('submit', (e) => {
    e.preventDefault()
    const lines = [
      t('Hello Prisma Provider, I would like to book a consultation.'), '',
      `${t('Service')}: ${t(service())}`,
      `${t('Full name')}: ${val('name')}`,
      `${t('Email')}: ${val('email')}`,
      `${t('Phone / WhatsApp')}: ${val('phone')}`,
      val('state') && `${t('State')}: ${val('state')}`,
      `${t('Preferred language')}: ${val('language')}`,
      val('message') && `${t('Your situation')}: ${val('message')}`
    ].filter((l, i) => l || i === 1)
    window.open(`https://wa.me/${WHATSAPP}?text=${encodeURIComponent(lines.join('\n'))}`, '_blank', 'noopener')
    done.textContent = t('WhatsApp opened with your request. Send the message there, then choose a time in our calendar.')
  })

  // Service cards / links elsewhere on the page preselect the service.
  document.querySelectorAll('[data-service]').forEach((link) => link.addEventListener('click', () => {
    const radio = form.querySelector(`input[name="service"][value="${CSS.escape(link.dataset.service)}"]`)
    if (radio) radio.checked = true
    if (step !== 1) show(1, { focus: false })
  }))

  onLangChange(() => { count.textContent = t('Step {n} of {total}').replace('{n}', step).replace('{total}', TOTAL); if (step === TOTAL) renderSummary() })
  show(1, { focus: false })
}
