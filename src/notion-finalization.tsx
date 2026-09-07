import { createRoot } from 'react-dom/client';
import { useState, useEffect } from 'react';
import { TestimonialsColumn, type Testimonial } from '@/components/ui/testimonials-columns-1';
import css from './notion-finalization.css?inline';

// Load after legacy injected styles; keep the final design rules in one stylesheet.
const style = document.createElement('style');
style.id = 'notion-finalization';
style.textContent = css;
document.head.append(style);

const reviewSection = document.querySelector<HTMLElement>('#stories');
const reviews: Testimonial[] = [...document.querySelectorAll('.review-card')].map(card => ({
  text: card.querySelector('blockquote')?.textContent?.trim() || '',
  name: card.querySelector('footer strong')?.textContent?.trim() || '',
  role: card.querySelector('footer small')?.textContent?.trim() || 'Google review',
  initials: card.querySelector('.review-avatar')?.textContent?.trim() || 'P',
}));
function Testimonials() {
  const [paused, setPaused] = useState(false);
  const [lang, setLang] = useState(document.documentElement.lang);
  useEffect(() => {
    const observer = new MutationObserver(() => setLang(document.documentElement.lang));
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ['lang'] });
    return () => observer.disconnect();
  }, []);
  const labels = lang.startsWith('pt') ? ['O que nossos clientes dizem', 'Pausar movimento', 'Retomar movimento', 'Depoimentos'] : lang === 'es' ? ['Lo que dicen nuestros clientes', 'Pausar movimiento', 'Reanudar movimiento', 'Testimonios'] : ['What our clients say', 'Pause motion', 'Resume motion', 'Testimonials'];
  const columns = [reviews.filter((_, i) => i % 3 === 0), reviews.filter((_, i) => i % 3 === 1), reviews.filter((_, i) => i % 3 === 2)];
  return <div translate="no" className="testimonials-surface">
    <header className="testimonials-heading"><div><span className="section__eyebrow">{labels[3]}</span><h2>{labels[0]}</h2></div><button className="testimonial-pause" aria-pressed={paused} onClick={() => setPaused(!paused)}>{paused ? labels[2] : labels[1]}</button></header>
    <div className={`testimonial-columns ${paused ? 'is-paused' : ''}`}>{columns.filter(c => c.length).map((items, i) => <TestimonialsColumn key={i} testimonials={items} duration={24 + i * 4} paused={paused}/>)}</div>
  </div>;
}
if (reviewSection && reviews.length) {
  reviewSection.replaceChildren();
  createRoot(reviewSection).render(<Testimonials/>);
}

const photo = document.querySelector<HTMLImageElement>('.about-statement__image img');
if (photo) {
  photo.src = `${import.meta.env.BASE_URL}images/editorial/prisma-founders-paperwork.jpg`;
  photo.alt = 'Prisma founders Leandro and Jessica reviewing information together';
  photo.loading = 'lazy';
}

const nav = document.querySelector<HTMLElement>('.global-nav')!;
const menu = nav.querySelector<HTMLButtonElement>('.menu')!;
const mobile = nav.querySelector<HTMLElement>('.mobile-nav')!;
mobile.id = 'mobile-navigation';
menu.setAttribute('aria-controls', mobile.id);
function syncMenu() {
  const open = menu.getAttribute('aria-expanded') === 'true';
  mobile.inert = !open;
  document.body.classList.toggle('mobile-menu-open', open);
}
syncMenu();
new MutationObserver(syncMenu).observe(menu, { attributes: true, attributeFilter: ['aria-expanded'] });
document.addEventListener('pointerdown', event => {
  if (!nav.contains(event.target as Node) && menu.getAttribute('aria-expanded') === 'true') menu.click();
});
nav.addEventListener('keydown', event => {
  if (event.key === 'Escape') { if (menu.getAttribute('aria-expanded') === 'true') menu.click(); menu.focus(); }
  if (event.key !== 'Tab' || menu.getAttribute('aria-expanded') !== 'true') return;
  const controls = [menu, ...mobile.querySelectorAll<HTMLElement>('a, button')];
  const first = controls[0], last = controls.at(-1)!;
  if (event.shiftKey && document.activeElement === first) { event.preventDefault(); last.focus(); }
  if (!event.shiftKey && document.activeElement === last) { event.preventDefault(); first.focus(); }
});
window.matchMedia('(min-width: 1101px)').addEventListener('change', event => {
  if (event.matches && menu.getAttribute('aria-expanded') === 'true') menu.click();
});

// Animate bounded content groups rather than fading whole long sections.
// Existing GSAP owns legacy .reveal elements; this handles newly built surfaces.
const reduced = window.matchMedia('(prefers-reduced-motion: reduce)');
const activeAnimations = new Set<Animation>();
const observer = new IntersectionObserver(entries => entries.forEach(entry => {
  if (!entry.isIntersecting) return;
  if (!reduced.matches) {
    const element = entry.target as HTMLElement;
    const animation = element.animate(
      [{ opacity: .35, translate: '0 22px' }, { opacity: 1, translate: '0 0' }],
      { duration: 700, easing: 'cubic-bezier(.16,1,.3,1)' }
    );
    activeAnimations.add(animation);
    animation.finished.then(() => activeAnimations.delete(animation)).catch(() => activeAnimations.delete(animation));
  }
  observer.unobserve(entry.target);
}), { threshold: .08 });
document.querySelectorAll('.team-personas__heading,.founder-portrait,.founder-panel,.testimonials-surface,.footer-contact-showcase').forEach(element => observer.observe(element));
reduced.addEventListener('change', event => {
  if (event.matches) activeAnimations.forEach(animation => animation.cancel());
});
