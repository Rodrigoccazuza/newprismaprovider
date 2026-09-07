const asset = (path) => `${import.meta.env.BASE_URL}${path}`
const team = document.querySelector('#team')
const people = [
  {name: 'Leandro Krauss', image: 'leandro-krauss.webp', description: 'Leandro oversees the full client journey with a sharp eye for detail, ensuring every case is handled with clarity, care and precision.', focus: ['Client journey', 'Clear communication', 'Document preparation']},
  {name: 'Jessica Wisniewski', image: 'jessica-wisniewski.webp', description: 'Jessica leads operations and quality control, bringing precision, discipline and thoughtful care to every client package.', focus: ['Operations', 'Quality control', 'Careful review']}
]
if (team) {
  team.className = 'section team-section team-personas'
  team.innerHTML = `
    <header class="team-personas__heading"><span class="section__eyebrow">Who we are</span><h2>Meet the people<br><em>behind Prisma</em></h2><p>Prisma was built around a simple idea: immigration services should feel organized, transparent and human.</p></header>
    ${people.map((person, i) => `<article class="founder-row ${i ? 'founder-row--reverse' : ''}">
      <div class="founder-portrait"><img src="${asset('images/team/' + person.image)}" alt="${person.name}" loading="lazy" width="600" height="720"><div class="founder-caption"><h3>${person.name}</h3><span>Co-Founder · Immigration Paralegal</span></div></div>
      <div class="founder-details"><div class="founder-panel"><i class="bi bi-person" aria-hidden="true"></i><h3>${person.name}</h3><p>${person.description}</p></div><div class="founder-panel"><i class="bi bi-bullseye" aria-hidden="true"></i><h3>Focus</h3><ul>${person.focus.map(f => `<li>${f}</li>`).join('')}</ul></div><div class="founder-panel"><i class="bi bi-chat-square-text" aria-hidden="true"></i><h3>Human communication</h3><p>Questions come up. We explain the process in language that makes sense.</p><a class="inline-link" href="#book">Get in touch <i class="bi bi-arrow-up-right" aria-hidden="true"></i></a></div></div>
    </article>`).join('')}`
}
