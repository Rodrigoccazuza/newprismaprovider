import './consultation-booking.css'

const contactSection = document.querySelector('.contact-section')

if (contactSection && !document.querySelector('#consultation')) {
  const services = [
    ['01', 'Adjustment of Status', 'Permanent residence'],
    ['02', 'Removal of Conditions', 'Conditional Green Card'],
    ['03', 'Naturalization', 'Citizenship'],
    ['04', 'VAWA', 'Confidential support'],
    ['05', 'Asylum', 'Humanitarian filing'],
    ['06', 'USCIS Requests', 'RFE · inquiries · expedites'],
    ['07', 'Translations', 'Immigration documents'],
    ['08', 'Other Services', 'EAD · travel · FOIA']
  ]
  const times = ['9:00 AM', '10:00 AM', '11:00 AM', '1:00 PM', '2:00 PM', '3:00 PM', '4:00 PM', '5:00 PM']
  const stepLabels = ['Service', 'Date and time', 'Contact information', 'Case details', 'Confirmation']
  const state = { step: 1, service: '', date: null, time: '', monthOffset: 0 }

  const section = document.createElement('section')
  section.className = 'section consultation-section'
  section.id = 'consultation'
  section.innerHTML = `
    <div class="consultation-intro reveal">
      <span class="section__eyebrow">Book a consultation</span>
      <h2 class="display-title">Five short steps.</h2>
      <p>Nothing is charged here. You choose a service and a time, tell us the basics, and we confirm by email.</p>
    </div>
    <ol class="booking-progress reveal" aria-label="Booking progress"></ol>
    <form class="booking-card reveal" novalidate>
      <div class="booking-stage" aria-live="polite"></div>
      <div class="booking-nav">
        <button class="button button--primary booking-next" type="button"><span>Continue</span><i class="bi bi-arrow-right" aria-hidden="true"></i></button>
        <button class="button button--outline booking-back" type="button"><i class="bi bi-arrow-left" aria-hidden="true"></i><span>Back</span></button>
        <p class="booking-note" role="status"></p>
      </div>
    </form>
  `
  contactSection.before(section)

  const form = section.querySelector('.booking-card')
  const stage = section.querySelector('.booking-stage')
  const progress = section.querySelector('.booking-progress')
  const next = section.querySelector('.booking-next')
  const back = section.querySelector('.booking-back')
  const note = section.querySelector('.booking-note')

  const pad = (value) => String(value).padStart(2, '0')
  const toKey = (date) => `${date.getFullYear()}-${pad(date.getMonth() + 1)}-${pad(date.getDate())}`
  const formatDate = (date) => date?.toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' }) || 'To be scheduled'

  function fieldValues() {
    return Object.fromEntries(new FormData(form).entries())
  }

  function renderProgress() {
    progress.innerHTML = stepLabels.map((label, index) => {
      const number = index + 1
      const status = number < state.step ? 'is-complete' : number === state.step ? 'is-current' : ''
      return `<li class="${status}" ${number === state.step ? 'aria-current="step"' : ''}><span>0${number}</span><strong>${label}</strong></li>`
    }).join('')
  }

  function renderServices() {
    return `
      <div class="booking-heading"><h3>Which service do you need?</h3><p>If you are unsure, choose the closest option. We will confirm the category during the call.</p></div>
      <div class="booking-services">
        ${services.map(([index, title, kicker]) => `<button class="booking-service ${state.service === title ? 'is-selected' : ''}" type="button" data-service="${title}" aria-pressed="${state.service === title}"><span>${index}</span><strong>${title}</strong><small>${kicker}</small></button>`).join('')}
      </div>`
  }

  function renderCalendar() {
    const today = new Date()
    today.setHours(0, 0, 0, 0)
    const first = new Date(today.getFullYear(), today.getMonth() + state.monthOffset, 1)
    const last = new Date(first.getFullYear(), first.getMonth() + 1, 0)
    const mondayIndex = (first.getDay() + 6) % 7
    const cells = Array.from({ length: mondayIndex }, () => '<span class="booking-day booking-day--blank" aria-hidden="true"></span>')
    for (let day = 1; day <= last.getDate(); day += 1) {
      const date = new Date(first.getFullYear(), first.getMonth(), day)
      const weekend = date.getDay() === 0 || date.getDay() === 6
      const unavailable = date < today || weekend
      const selected = state.date && toKey(state.date) === toKey(date)
      cells.push(`<button class="booking-day ${selected ? 'is-selected' : ''}" type="button" data-date="${toKey(date)}" ${unavailable ? 'disabled' : ''} aria-pressed="${selected}" aria-label="${formatDate(date)}">${day}</button>`)
    }
    return `
      <div class="booking-heading"><h3>Choose a date and time</h3><p>Consultations run 30 minutes, weekdays, in English, Portuguese or Spanish. Times are shown in Eastern Time.</p></div>
      <div class="booking-schedule">
        <div class="booking-calendar">
          <div class="booking-calendar__head"><button type="button" data-month="previous" aria-label="Previous month" ${state.monthOffset === 0 ? 'disabled' : ''}><i class="bi bi-arrow-left"></i></button><strong>${first.toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}</strong><button type="button" data-month="next" aria-label="Next month" ${state.monthOffset === 2 ? 'disabled' : ''}><i class="bi bi-arrow-right"></i></button></div>
          <div class="booking-weekdays" aria-hidden="true">${['MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT', 'SUN'].map((day) => `<span>${day}</span>`).join('')}</div>
          <div class="booking-days">${cells.join('')}</div>
        </div>
        <div class="booking-times"><strong>Available times</strong><div>${times.map((time) => `<button class="${state.time === time ? 'is-selected' : ''}" type="button" data-time="${time}" aria-pressed="${state.time === time}">${time}</button>`).join('')}</div><p>The confirmation email includes a calendar invitation with the meeting link.</p></div>
      </div>`
  }

  function renderContact() {
    return `
      <div class="booking-heading"><h3>How can we reach you?</h3><p>We use this only to confirm the consultation and send the documents checklist.</p></div>
      <div class="booking-fields">
        <label>Full name<input name="booking-name" type="text" placeholder="Your legal name" autocomplete="name" required></label>
        <label>Email<input name="booking-email" type="email" placeholder="you@email.com" autocomplete="email" required></label>
        <label>Phone or WhatsApp<input name="booking-phone" type="tel" placeholder="+1" autocomplete="tel"></label>
        <label>Preferred language<select name="booking-language"><option>English</option><option>Português</option><option>Español</option></select></label>
        <label>State of residence<input name="booking-state" type="text" placeholder="Florida" autocomplete="address-level1"></label>
        <label>How did you find us<select name="booking-source"><option>Google</option><option>A friend or family member</option><option>Instagram</option><option>WhatsApp</option><option>Another provider</option><option>Other</option></select></label>
      </div>`
  }

  function renderDetails() {
    return `
      <div class="booking-heading"><h3>Tell us what is going on</h3><p>Write it in your own words. You do not need the form numbers or the legal terms.</p></div>
      <div class="booking-fields">
        <label>Current immigration status<input name="booking-status" type="text" placeholder="For example: tourist visa, expired, pending case"></label>
        <label>Has anything been filed before<select name="booking-filed"><option>Nothing has been filed</option><option>Something was filed and is pending</option><option>A case was denied</option><option>I am not sure</option></select></label>
        <label>Any deadline or USCIS notice<input name="booking-deadline" type="text" placeholder="Date on the notice, if you have one"></label>
        <label>Documents you already have<select name="booking-docs"><option>Almost everything</option><option>Some documents</option><option>Very little</option><option>I do not know what is needed</option></select></label>
        <label class="booking-field--wide">Describe the case<textarea name="booking-details" rows="5" placeholder="What happened, what you need, and what you are worried about."></textarea></label>
      </div>
      <p class="booking-disclaimer">Prisma Provider is not a law firm and does not provide legal advice. Anything you share is kept confidential and used only to prepare your documents.</p>`
  }

  function renderConfirmation() {
    return `
      <div class="booking-confirmation">
        <span class="booking-check" aria-hidden="true"><i class="bi bi-check-lg"></i></span>
        <h3>Your consultation is requested.</h3>
        <p>You will receive a confirmation email within one business day, with the calendar invitation and the first documents checklist.</p>
        <dl><div><dt>Service</dt><dd>${state.service || 'To be confirmed in the consultation'}</dd></div><div><dt>Date</dt><dd>${formatDate(state.date)}</dd></div><div><dt>Time</dt><dd>${state.time ? `${state.time} ET` : 'To be scheduled'}</dd></div></dl>
        <button class="button button--outline booking-restart" type="button"><i class="bi bi-arrow-repeat" aria-hidden="true"></i><span>Book another consultation</span></button>
      </div>`
  }

  function updateNote(message = '') {
    if (message) { note.textContent = message; return }
    if (state.step === 1) note.textContent = state.service ? `${state.service} selected` : 'Choose one to continue'
    if (state.step === 2) note.textContent = state.date && state.time ? `${formatDate(state.date)}, ${state.time} ET` : 'Pick a weekday and a time'
    if (state.step === 3) note.textContent = 'We reply within one business day'
    if (state.step === 4) note.textContent = 'Confidential. Not legal advice.'
  }

  function render() {
    renderProgress()
    stage.innerHTML = state.step === 1 ? renderServices() : state.step === 2 ? renderCalendar() : state.step === 3 ? renderContact() : state.step === 4 ? renderDetails() : renderConfirmation()
    next.hidden = state.step === 5
    back.hidden = state.step === 1 || state.step === 5
    next.querySelector('span').textContent = state.step === 4 ? 'Request the consultation' : 'Continue'
    section.querySelector('.booking-nav').hidden = state.step === 5
    updateNote()
  }

  function validateStep() {
    if (state.step === 1 && !state.service) { updateNote('Please choose a service to continue.'); return false }
    if (state.step === 2 && (!state.date || !state.time)) { updateNote('Please choose both a weekday and a time.'); return false }
    if (state.step === 3) {
      const invalid = [...stage.querySelectorAll('input,select')].find((field) => !field.checkValidity())
      if (invalid) { invalid.reportValidity(); invalid.focus(); return false }
    }
    return true
  }

  stage.addEventListener('click', (event) => {
    const service = event.target.closest('[data-service]')
    const date = event.target.closest('[data-date]')
    const time = event.target.closest('[data-time]')
    const month = event.target.closest('[data-month]')
    if (service) state.service = service.dataset.service
    if (date) { const [year, monthValue, day] = date.dataset.date.split('-').map(Number); state.date = new Date(year, monthValue - 1, day) }
    if (time) state.time = time.dataset.time
    if (month) state.monthOffset += month.dataset.month === 'next' ? 1 : -1
    if (event.target.closest('.booking-restart')) Object.assign(state, { step: 1, service: '', date: null, time: '', monthOffset: 0 })
    render()
  })

  next.addEventListener('click', () => {
    if (!validateStep()) return
    fieldValues()
    state.step = Math.min(5, state.step + 1)
    render()
    section.scrollIntoView({ behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth', block: 'start' })
  })
  back.addEventListener('click', () => { state.step = Math.max(1, state.step - 1); render() })

  document.querySelectorAll('a').forEach((link) => {
    if (link.textContent.trim().toLowerCase() === 'book a consultation' || link.textContent.trim().toLowerCase() === 'start with a consultation') link.setAttribute('href', '#consultation')
  })

  render()
}
