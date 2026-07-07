"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { NAV_LINKS, UBER_EATS_URL } from "@/lib/constants";

export default function Nav() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <>
      <header className="oc-nav">
        <Link href="/" className="oc-nav-logo" aria-label="O'Cali Crousty — Accueil">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/img/logo-mark-t.png" alt="O'Cali Crousty" />
        </Link>

        <nav className="oc-nav-links" aria-label="Navigation principale">
          {NAV_LINKS.map((l) => (
            <Link key={l.href} href={l.href} data-active={pathname === l.href}>
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <a className="oc-nav-cta" href={UBER_EATS_URL} target="_blank" rel="noopener">
            🛵 Commander
          </a>
          <button
            className="oc-nav-burger"
            onClick={() => setOpen(true)}
            aria-label="Ouvrir le menu"
          >
            <svg width="18" height="14" viewBox="0 0 18 14" aria-hidden="true">
              <path
                d="M1 1h16M1 7h16M1 13h16"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
          </button>
        </div>
      </header>

      {open && (
        <div className="oc-mobile-menu" role="dialog" aria-modal="true">
          <button
            className="oc-mobile-close"
            onClick={() => setOpen(false)}
            aria-label="Fermer le menu"
          >
            ✕
          </button>
          <nav>
            {NAV_LINKS.map((l) => (
              <Link key={l.href} href={l.href} onClick={() => setOpen(false)}>
                {l.label}
              </Link>
            ))}
            <a href={UBER_EATS_URL} target="_blank" rel="noopener" style={{ color: "#ff7ac1" }}>
              Commander →
            </a>
          </nav>
        </div>
      )}
    </>
  );
}
