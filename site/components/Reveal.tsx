"use client";

import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

/**
 * Reveals au scroll (réf. data-reveal myfidpass) : chaque section marquée
 * [data-reveal] voit ses éléments clés monter en fondu, staggered.
 * À monter une fois par page.
 */
export default function Reveal() {
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const ctx = gsap.context(() => {
      gsap.utils.toArray<HTMLElement>("[data-reveal]").forEach((section) => {
        const targets = section.querySelectorAll(
          ".oc-h2, .oc-kicker, .oc-intro, .oc-card, .oc-duo-copy > *, .oc-section-cta, .oc-filter-row, .oc-form, .oc-line, .oc-mosaic-cell, .oc-imbattable-words, .oc-imbattable-price, .oc-imbattable-sub, .oc-resto-card, .oc-board",
        );
        const items = targets.length ? targets : [section];
        gsap.set(items, { opacity: 0, y: 32 });
        gsap.to(items, {
          opacity: 1,
          y: 0,
          duration: 0.6,
          stagger: targets.length ? 0.07 : 0,
          ease: "power3.out",
          scrollTrigger: {
            trigger: section,
            start: "top 85%",
            toggleActions: "play none none none",
          },
        });
      });
    });
    return () => ctx.revert();
  }, []);

  return null;
}
