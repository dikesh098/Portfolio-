import { useEffect, useRef } from 'react';

export function useReveal(selector = '.reveal,.reveal-scale,.reveal-left,.tl-item,.pc,.cert-card') {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const root = ref.current ?? document.body;
    const els = root.querySelectorAll<HTMLElement>(selector);
    const io = new IntersectionObserver(
      entries => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('vis'); }),
      { threshold: 0.07 }
    );
    els.forEach(el => io.observe(el));
    return () => io.disconnect();
  }, [selector]);

  return ref;
}

export function useBarFill() {
  useEffect(() => {
    const fills = document.querySelectorAll<HTMLElement>('.bar-fill');
    const io = new IntersectionObserver(
      entries => {
        entries.forEach(e => {
          if (e.isIntersecting) {
            const el = e.target as HTMLElement;
            el.style.width = (el.dataset.pct ?? '0') + '%';
            io.unobserve(el);
          }
        });
      },
      { threshold: 0.4 }
    );
    fills.forEach(f => io.observe(f));
    return () => io.disconnect();
  }, []);
}
