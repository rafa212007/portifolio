import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function SectionReveal({ children }) {
  const sectionRef = useRef(null);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    
    // MatchMedia to apply the cinematic feel appropriately
    
    // 1. Enter Animation (Scroll down to reveal)
    gsap.fromTo(el,
      { 
        opacity: 0, 
        y: 80, 
        filter: "blur(10px) drop-shadow(0px 0px 0px rgba(34, 211, 238, 0))" // cyan glow base
      },
      {
        opacity: 1,
        y: 0,
        filter: "blur(0px) drop-shadow(0px 10px 30px rgba(34, 211, 238, 0.08))", // cyan neon glow
        duration: 1.2,
        ease: "power4.out",
        scrollTrigger: {
          trigger: el,
          start: "top 85%", // Starts when top of section hits 85% of viewport
          toggleActions: "play none none reverse" 
        }
      }
    );

    // 2. Exit Animation (Scroll past to fade out)
    gsap.to(el, {
      opacity: 0.4,
      y: -30,
      filter: "blur(6px)",
      ease: "none",
      scrollTrigger: {
        trigger: el,
        start: "bottom 25%", // Starts fading when bottom of section is 25% near top
        end: "bottom top",   // Finishes fading when bottom of section hits top of viewport
        scrub: 1 // Ties animation directly to scroll progress
      }
    });

  }, []);

  return (
    <div ref={sectionRef} className="will-change-transform will-change-opacity will-change-filter">
      {children}
    </div>
  );
}
