import type { Metadata } from "next";
import Reveal from "@/components/Reveal";
import MenuGrid from "@/components/MenuGrid";
import { UBER_EATS_URL } from "@/lib/constants";

export const metadata: Metadata = {
  title: "La carte — Crousty, Tex-Mex & Desserts",
  description:
    "Crousty Poulet, Crousty Tempura, tenders, nems et tiramisus maison. Découvre la carte O'Cali Crousty — prix en restaurant, commande sur Uber Eats.",
};

export default function MenuPage() {
  return (
    <>
      <Reveal />
      <section className="oc-page-hero">
        <h1>
          La <em>carte</em>
        </h1>
        <p>
          Une sélection ultra croustillante, préparée avec des ingrédients de
          qualité et sublimée par nos sauces maison.
        </p>
        <div className="oc-hero-ctas">
          <a className="oc-btn-dark" href={UBER_EATS_URL} target="_blank" rel="noopener">
            🛵 Commander en ligne
          </a>
        </div>
      </section>

      <section className="oc-section" data-reveal>
        <MenuGrid />
      </section>

      <section className="oc-section" style={{ paddingTop: 0 }} data-reveal>
        <div className="oc-section-inner">
          <header className="oc-section-header">
            <span className="oc-kicker">Comme au resto</span>
            <h2 className="oc-h2">
              Le board <em>officiel</em>
            </h2>
          </header>
          <div className="oc-board">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/img/board-menu.jpg"
              alt="Le menu O'Cali Crousty : Crousty Poulet et Crousty Tempura en tailles M, L et XL, boxes tenders, tempura et nems"
              loading="lazy"
              decoding="async"
            />
          </div>
        </div>
      </section>
    </>
  );
}
