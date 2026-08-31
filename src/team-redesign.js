const asset = (path) => `${import.meta.env.BASE_URL}${path}`

const teamSection = document.querySelector('.team-section')

if (teamSection) {
  teamSection.className = 'section team-section team-section--editorial'
  teamSection.innerHTML = `
    <div class="team-editorial-shell">
      <div class="team-editorial-panel">
        <div class="team-editorial-topline">
          <div class="team-editorial-kicker">
            <span>Who we are</span>
            <a href="#contact">Meet Prisma <i class="bi bi-arrow-up-right" aria-hidden="true"></i></a>
          </div>
        </div>

        <div class="team-editorial-header">
          <h2>Meet the people<br />behind Prisma</h2>
          <div class="team-editorial-header__side">
            <p>Prisma was built around a simple idea: immigration services should feel organized, transparent and human.</p>
            <div class="team-editorial-controls" aria-label="Team carousel controls">
              <button type="button" class="team-editorial-control team-editorial-control--prev" aria-label="Previous team member"><i class="bi bi-arrow-left" aria-hidden="true"></i></button>
              <button type="button" class="team-editorial-control team-editorial-control--next" aria-label="Next team member"><i class="bi bi-arrow-right" aria-hidden="true"></i></button>
            </div>
          </div>
        </div>

        <div class="team-editorial-track" tabindex="0" aria-label="Prisma team members">
          <article class="team-editorial-card team-editorial-card--featured">
            <div class="team-editorial-card__body">
              <div class="team-editorial-card__meta">
                <span>Leadership</span>
                <span>Immigration Paralegal</span>
              </div>
              <span class="team-editorial-card__mark">P</span>
              <h3>Leandro<br />Krauss</h3>
              <strong>Co-Founder · Immigration Paralegal</strong>
              <p>Leandro oversees the full client journey with a sharp eye for detail, ensuring every case is handled with clarity, care and precision.</p>
            </div>
            <div class="team-editorial-card__media">
              <img src="${asset('images/team/leandro-krauss.webp')}" alt="Leandro Krauss" />
              <a href="#contact">Get in touch <i class="bi bi-arrow-right" aria-hidden="true"></i></a>
            </div>
          </article>

          <article class="team-editorial-card">
            <div class="team-editorial-card__body">
              <div class="team-editorial-card__meta">
                <span>Leadership</span>
                <span>Immigration Paralegal</span>
              </div>
              <span class="team-editorial-card__mark">P</span>
              <h3>Jessica<br />Wisniewski</h3>
              <strong>Co-Founder · Immigration Paralegal</strong>
              <p>Jessica leads operations and quality control, bringing precision, discipline and thoughtful care to every client package.</p>
            </div>
            <div class="team-editorial-card__media">
              <img src="${asset('images/team/jessica-wisniewski.webp')}" alt="Jessica Wisniewski" />
              <a href="#contact">Get in touch <i class="bi bi-arrow-right" aria-hidden="true"></i></a>
            </div>
          </article>
        </div>
      </div>
    </div>
  `

  const style = document.createElement('style')
  style.id = 'team-editorial-redesign-styles'
  style.textContent = `
    .team-section--editorial{width:100%!important;padding:120px max(24px,calc((100% - 1440px)/2))!important;border-bottom:1px solid #ffffff17;background:#030405}
    .team-editorial-shell{position:relative;padding:5px;border:1px solid #ffffffa8;border-radius:34px;overflow:hidden;background:linear-gradient(145deg,rgba(245,247,249,.94),rgba(173,180,188,.86) 46%,rgba(224,228,232,.92));backdrop-filter:blur(28px) saturate(.85);-webkit-backdrop-filter:blur(28px) saturate(.85);box-shadow:inset 0 1px #fff,inset 0 -1px #60666d4f,0 32px 75px #0008}
    .team-editorial-shell:before{content:"";position:absolute;inset:0;pointer-events:none;background:linear-gradient(115deg,#ffffffb0 0%,transparent 20%,transparent 56%,#ffffff52 70%,transparent 86%),radial-gradient(circle at 78% 18%,#fff8,transparent 25%);opacity:.72}
    .team-editorial-shell:after{content:"";position:absolute;inset:0;pointer-events:none;opacity:.10;background-image:url("data:image/svg+xml,%3Csvg viewBox='0 0 180 180' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='.82' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='.45'/%3E%3C/svg%3E")}
    .team-editorial-panel{position:relative;z-index:1;padding:44px 44px 46px;border:1px solid rgba(255,255,255,.58);border-radius:28px;background:linear-gradient(155deg,rgba(247,249,251,.72),rgba(206,212,218,.58) 52%,rgba(238,241,244,.68));backdrop-filter:blur(20px) saturate(.88);-webkit-backdrop-filter:blur(20px) saturate(.88);color:#101315;overflow:hidden;box-shadow:inset 0 1px rgba(255,255,255,.9),inset 0 -1px rgba(96,102,109,.18)}
    .team-editorial-topline{display:flex;justify-content:space-between;align-items:center;margin-bottom:34px}.team-editorial-kicker{display:flex;align-items:center;gap:20px;color:#4d535a;font-size:14px;font-weight:600}.team-editorial-kicker>a{display:inline-flex;align-items:center;gap:9px;padding:11px 17px;border:1px solid #1b1d1f1c;border-radius:999px;color:#111417;background:#ffffff66}.team-editorial-kicker>a:hover{background:#fff}
    .team-editorial-header{display:grid;grid-template-columns:minmax(0,1.2fr) minmax(280px,.7fr);gap:70px;align-items:end;margin-bottom:42px}.team-editorial-header h2{margin:0;font-size:clamp(52px,5vw,78px);font-weight:520;line-height:.92;letter-spacing:-.065em;color:#101a1e}.team-editorial-header__side{display:flex;align-items:flex-end;justify-content:space-between;gap:28px}.team-editorial-header__side p{max-width:360px;margin:0;color:#454b50;font-size:14px;line-height:1.65}
    .team-editorial-controls{display:flex;gap:8px;flex:none}.team-editorial-control{width:48px;height:48px;border-radius:50%;border:1px solid #14171a1f;background:#ffffff70;color:#101315;display:grid;place-items:center;cursor:pointer;transition:.25s}.team-editorial-control:hover{transform:translateY(-2px);background:#fff}.team-editorial-control--next{color:#fff;background:#10171b;border-color:#10171b}.team-editorial-control--next:hover{background:#202a2f}
    .team-editorial-track{display:flex;gap:18px;overflow-x:auto;scroll-snap-type:x mandatory;scrollbar-width:none;overscroll-behavior-inline:contain;padding-bottom:2px}.team-editorial-track::-webkit-scrollbar{display:none}
    .team-editorial-card{position:relative;flex:0 0 min(430px,70vw);min-height:510px;border:1px solid #17191b1c;border-radius:28px;overflow:hidden;background:linear-gradient(145deg,rgba(245,247,249,.88),rgba(205,211,217,.82));scroll-snap-align:start;box-shadow:inset 0 1px #fff8;display:grid;grid-template-rows:auto 1fr;transition:background .32s ease,border-color .32s ease,transform .32s ease,box-shadow .32s ease}.team-editorial-card--featured{background:linear-gradient(145deg,rgba(245,247,249,.88),rgba(205,211,217,.82));border-color:#17191b1c}
    .team-editorial-card:hover,.team-editorial-card:focus-within{background:linear-gradient(145deg,#c8ff77,#aef252 76%);border-color:#b7f46c;transform:translateY(-6px);box-shadow:inset 0 1px #fff9,0 20px 44px rgba(0,0,0,.18)}
    .team-editorial-card__body{position:relative;padding:28px 28px 24px;min-height:260px}.team-editorial-card__meta{display:flex;flex-wrap:wrap;gap:7px;margin-bottom:25px}.team-editorial-card__meta span{padding:8px 12px;border-radius:999px;border:1px solid #17191b17;background:#ffffff88;font-size:10px;font-weight:650;color:#1d2225}.team-editorial-card:hover .team-editorial-card__meta span:first-child,.team-editorial-card:focus-within .team-editorial-card__meta span:first-child{background:#9edf48;border-color:#8fce3f}.team-editorial-card__mark{position:absolute;right:27px;top:28px;width:30px;height:30px;border:1px solid #1115;border-radius:50%;display:grid;place-items:center;font-size:12px;font-weight:800}.team-editorial-card h3{margin:0 0 12px;font-size:42px;font-weight:560;line-height:.9;letter-spacing:-.055em}.team-editorial-card strong{display:block;margin-bottom:9px;font-size:12px}.team-editorial-card p{max-width:330px;margin:0;color:#3f4547;font-size:12px;line-height:1.55}
    .team-editorial-card__media{position:relative;min-height:232px;margin:0 8px 8px;border-radius:22px;overflow:hidden;background:#c8c3ba}.team-editorial-card__media img{width:100%;height:100%;object-fit:cover;object-position:center top;transition:transform .55s cubic-bezier(.2,.8,.2,1),filter .35s ease}.team-editorial-card:hover .team-editorial-card__media img{transform:scale(1.025)}.team-editorial-card__media:after{content:"";position:absolute;inset:45% 0 0;background:linear-gradient(0deg,#07090aa6,transparent)}.team-editorial-card__media a{position:absolute;z-index:2;left:18px;bottom:17px;display:inline-flex;align-items:center;gap:18px;min-height:44px;padding:0 18px;border-radius:999px;color:#111;background:#f8f8f5;border:1px solid #fff8;font-size:11px;font-weight:650}.team-editorial-card__media a:hover{background:#fff}
    @media(min-width:1050px){.team-editorial-card{flex-basis:calc((100% - 18px)/2)}}
    @media(max-width:900px){.team-section--editorial{padding-inline:18px!important}.team-editorial-shell{padding:5px;border-radius:28px}.team-editorial-panel{padding:30px 24px 30px;border-radius:22px}.team-editorial-header{grid-template-columns:1fr;gap:26px}.team-editorial-header__side{align-items:center}.team-editorial-header h2{font-size:56px}}
    @media(max-width:720px){.team-section--editorial{padding:82px 14px!important}.team-editorial-shell{padding:5px;border-radius:23px}.team-editorial-panel{padding:24px 18px 22px;border-radius:17px}.team-editorial-kicker{font-size:12px;gap:12px}.team-editorial-kicker>a{padding:9px 12px}.team-editorial-header{margin-bottom:28px}.team-editorial-header h2{font-size:44px}.team-editorial-header__side{display:block}.team-editorial-header__side p{font-size:12px}.team-editorial-controls{margin-top:18px}.team-editorial-control{width:42px;height:42px}.team-editorial-card{flex-basis:88%;min-height:480px}.team-editorial-card__body{min-height:245px;padding:23px 21px 20px}.team-editorial-card__mark{right:21px;top:23px}.team-editorial-card h3{font-size:36px}.team-editorial-card__media{min-height:210px}.team-editorial-card:hover{transform:none}}
    @media(prefers-reduced-motion:reduce){.team-editorial-card__media img,.team-editorial-control,.team-editorial-card{transition:none!important;transform:none!important}}
  `
  document.head.appendChild(style)

  const track = teamSection.querySelector('.team-editorial-track')
  const prev = teamSection.querySelector('.team-editorial-control--prev')
  const next = teamSection.querySelector('.team-editorial-control--next')

  const move = (direction) => {
    const card = track?.querySelector('.team-editorial-card')
    if (!track || !card) return
    const gap = parseFloat(getComputedStyle(track).gap || '18')
    track.scrollBy({ left: direction * (card.getBoundingClientRect().width + gap), behavior: 'smooth' })
  }

  prev?.addEventListener('click', () => move(-1))
  next?.addEventListener('click', () => move(1))
}
