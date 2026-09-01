const whyPrisma = document.querySelector('.benefits-section')

if (whyPrisma) {
  whyPrisma.className = 'section benefits-section benefits-section--reference'
  whyPrisma.innerHTML = `
    <div class="why-prisma-reference__header">
      <div class="why-prisma-reference__title-block">
        <div class="why-prisma-reference__eyebrow"><span>03</span><b>Why Prisma</b></div>
        <h2>You should<br />know what is<br />happening with<br />your process.</h2>
      </div>
      <p class="why-prisma-reference__intro">Every file is handled the same way, whatever the category: documented, reviewed twice and explained back to you in the language you prefer.</p>
    </div>

    <div class="why-prisma-reference__grid">
      <article class="why-prisma-reference__card">
        <span class="why-prisma-reference__index">01</span>
        <div>
          <h3>You read the file first</h3>
          <p>No package is filed before you have read it in full and confirmed every detail.</p>
        </div>
      </article>

      <article class="why-prisma-reference__card">
        <span class="why-prisma-reference__index">02</span>
        <div>
          <h3>Two reviews, always</h3>
          <p>Both founders review every filing against the current USCIS requirements before it is sent.</p>
        </div>
      </article>

      <article class="why-prisma-reference__card why-prisma-reference__card--stat">
        <strong>100%</strong>
        <p>Digital process. Nothing requires you to travel to an office.</p>
      </article>

      <article class="why-prisma-reference__card">
        <span class="why-prisma-reference__index">03</span>
        <div>
          <h3>Your language</h3>
          <p>Consultations, checklists and explanations in English, Portuguese or Spanish.</p>
        </div>
      </article>

      <article class="why-prisma-reference__card">
        <span class="why-prisma-reference__index">04</span>
        <div>
          <h3>Notices answered</h3>
          <p>If USCIS sends a request, the response follows the same protocol on the same deadline.</p>
        </div>
      </article>

      <article class="why-prisma-reference__card why-prisma-reference__card--record">
        <span class="why-prisma-reference__index">05</span>
        <div>
          <h3>One record, kept</h3>
          <p>Every document, receipt number and notice stays in one place you can return to.</p>
        </div>
      </article>
    </div>
  `

  if (!document.querySelector('#why-prisma-reference-styles')) {
    const style = document.createElement('style')
    style.id = 'why-prisma-reference-styles'
    style.textContent = `
      .benefits-section--reference{
        width:var(--shell)!important;
        padding:138px 0 146px!important;
        background:#030405!important;
      }
      .why-prisma-reference__header{
        display:grid;
        grid-template-columns:minmax(0,1.08fr) minmax(360px,.92fr);
        gap:90px;
        align-items:end;
        margin-bottom:54px;
      }
      .why-prisma-reference__title-block{min-width:0}
      .why-prisma-reference__eyebrow{
        display:flex;
        align-items:center;
        gap:18px;
        margin-bottom:34px;
        color:#9a9fa5;
        font-size:9px;
        font-weight:800;
        letter-spacing:.2em;
        text-transform:uppercase;
      }
      .why-prisma-reference__eyebrow span{
        width:34px;
        height:34px;
        display:grid;
        place-items:center;
        border:1px solid rgba(255,255,255,.18);
        border-radius:50%;
        color:var(--lime);
        letter-spacing:0;
        font-size:9px;
      }
      .why-prisma-reference__eyebrow b{font:inherit}
      .why-prisma-reference__title-block h2{
        max-width:650px;
        margin:0;
        color:#f5f7f8;
        font-size:84px;
        font-weight:520;
        line-height:.89;
        letter-spacing:-.068em;
      }
      .why-prisma-reference__intro{
        max-width:520px;
        margin:0 0 8px;
        color:#9b9fa5;
        font-size:14px;
        line-height:1.72;
      }
      .why-prisma-reference__grid{
        display:grid;
        grid-template-columns:repeat(4,minmax(0,1fr));
        gap:14px;
      }
      .why-prisma-reference__card{
        position:relative;
        min-height:254px;
        padding:28px 26px 26px;
        display:flex;
        flex-direction:column;
        justify-content:space-between;
        overflow:hidden;
        border:1px solid rgba(255,255,255,.18);
        border-radius:26px;
        background:linear-gradient(145deg,#151719,#0d0f10 78%);
        box-shadow:inset 0 1px rgba(255,255,255,.04);
      }
      .why-prisma-reference__card--record{
        background:radial-gradient(circle at 100% 0,rgba(80,103,135,.22),transparent 45%),linear-gradient(145deg,#151719,#0d0f10 78%);
      }
      .why-prisma-reference__index{
        color:var(--lime);
        font-size:9px;
        font-weight:800;
        letter-spacing:.08em;
      }
      .why-prisma-reference__card h3{
        margin:0 0 12px;
        color:#f5f7f8;
        font-size:25px;
        font-weight:540;
        line-height:1.06;
        letter-spacing:-.04em;
      }
      .why-prisma-reference__card p{
        max-width:285px;
        margin:0;
        color:#9a9fa5;
        font-size:11px;
        line-height:1.55;
      }
      .why-prisma-reference__card--stat{
        justify-content:center;
        color:#090b08;
        background:var(--lime);
        border-color:var(--lime);
        box-shadow:inset 0 1px rgba(255,255,255,.5);
      }
      .why-prisma-reference__card--stat strong{
        display:block;
        margin:0 0 18px;
        color:#090b08;
        font-size:82px;
        font-weight:500;
        line-height:.82;
        letter-spacing:-.08em;
      }
      .why-prisma-reference__card--stat p{
        max-width:230px;
        color:#141714;
        font-size:10px;
        line-height:1.45;
      }

      @media(max-width:1080px){
        .why-prisma-reference__title-block h2{font-size:68px}
        .why-prisma-reference__header{grid-template-columns:1fr .85fr;gap:54px}
        .why-prisma-reference__grid{grid-template-columns:repeat(2,minmax(0,1fr))}
      }
      @media(max-width:720px){
        .benefits-section--reference{padding:84px 0 90px!important}
        .why-prisma-reference__header{grid-template-columns:1fr;gap:28px;margin-bottom:36px}
        .why-prisma-reference__title-block h2{font-size:48px;line-height:.92}
        .why-prisma-reference__intro{font-size:12px;line-height:1.65}
        .why-prisma-reference__grid{grid-template-columns:1fr;gap:12px}
        .why-prisma-reference__card{min-height:230px;padding:24px 22px;border-radius:23px}
        .why-prisma-reference__card--stat{min-height:245px}
        .why-prisma-reference__card--stat strong{font-size:72px}
      }
    `
    document.head.appendChild(style)
  }
}
