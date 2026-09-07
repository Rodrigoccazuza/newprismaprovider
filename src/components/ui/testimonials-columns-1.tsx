"use client";
import { motion, useReducedMotion } from 'motion/react';

export type Testimonial = { text: string; name: string; role: string; initials: string };
export function TestimonialsColumn({ testimonials, duration = 24, paused = false }: { testimonials: Testimonial[]; duration?: number; paused?: boolean }) {
  const reduce = useReducedMotion();
  const still = reduce || paused;
  return <div className="testimonial-column"><motion.div className="testimonial-loop flex flex-col gap-6 pb-6" animate={{ y: still ? 0 : '-50%' }} transition={still ? { duration: 0 } : { duration, repeat: Infinity, ease: 'linear' }}>
    {(still ? [0] : [0, 1]).map(copy => <div key={copy} className="testimonial-group flex flex-col gap-6" aria-hidden={copy === 1 || undefined}>
      {testimonials.map((item, i) => <article key={i} className="testimonial-card rounded-3xl border">
        <div className="testimonial-card__top"><span className="testimonial-avatar" aria-hidden="true">{item.initials}</span><span className="testimonial-source">{item.role}</span></div>
        <span className="testimonial-quote" aria-hidden="true">“</span><blockquote>{item.text}</blockquote>
        <footer><strong>{item.name}</strong><span>{item.role}</span></footer>
      </article>)}
    </div>)}
  </motion.div></div>;
}
