import { useLayoutEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

/**
 * useCurtainScroll
 *
 * Applies cinematic "stack curtain" transitions to every element marked with
 * data-panel.  The optional data-gallery and data-runway elements extend the
 * pinned duration of the gallery panel so the circular gallery can rotate
 * while pinned.
 *
 * Returns a ref to attach to the wrapper that contains all panels.
 */
export function useCurtainScroll() {
  const wrapperRef = useRef(null);

  useLayoutEffect(() => {
    // Respect reduced-motion
    if (
      window.matchMedia('(prefers-reduced-motion: reduce)').matches ||
      (navigator.deviceMemory != null && navigator.deviceMemory <= 4)
    ) return;

    const wrapper = wrapperRef.current;
    if (!wrapper) return;

    const ctx = gsap.context(() => {
      const panels = Array.from(wrapper.querySelectorAll('[data-panel]'));
      const runway = wrapper.querySelector('[data-runway]');

      panels.forEach((panel, i) => {
        // Assign stacking z-index
        panel.style.zIndex = i + 1;

        // ── Pin every panel except the last ──────────────────────────────
        if (i < panels.length - 1) {
          const isGallery = panel.hasAttribute('data-gallery');

          ScrollTrigger.create({
            trigger: panel,
            start: () =>
              panel.offsetHeight <= window.innerHeight ? 'top top' : 'bottom bottom',
            end: () =>
              '+=' + (window.innerHeight + (isGallery && runway ? runway.offsetHeight : 0)),
            pin: true,
            pinSpacing: false,
            anticipatePin: 1,
            invalidateOnRefresh: true,
          });

          // ── Scale + fade the inner wrapper as the NEXT panel enters ────
          const inner = panel.querySelector('[data-inner]');
          if (inner && panels[i + 1]) {
            gsap.to(inner, {
              scale: 0.92,
              opacity: 0.25,
              ease: 'none',
              scrollTrigger: {
                trigger: panels[i + 1],
                start: 'top bottom',
                end: 'top top',
                scrub: true,
              },
            });
          }
        }
      });

      ScrollTrigger.refresh();
    }, wrapper);

    // Also refresh when fonts load
    document.fonts?.ready.then(() => ScrollTrigger.refresh());

    return () => ctx.revert();
  }, []);

  return wrapperRef;
}
