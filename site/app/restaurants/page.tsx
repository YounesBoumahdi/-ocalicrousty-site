import type { Metadata } from "next";
import Link from "next/link";
import Reveal from "@/components/Reveal";
import RestoGallery from "@/components/RestoGallery";
import { UBER_EATS_URL, PHONE, PHONE_HREF } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Nos restaurants — Saint-Brieuc & Rennes",
  description:
    "Trouve ton O'Cali Crousty : Saint-Brieuc (55 Rue du Docteur Rahuel) et Rennes (3 Place Sainte-Anne). L'expérience croustillante près de chez toi.",
};

export default function RestaurantsPage() {
  return (
    <>
      <Reveal />
      <section className="oc-page-hero">
        <h1>
          Trouve ton
          <br />
          <em>O&rsquo;Cali Crousty</em>
        </h1>
        <p>
          Saint-Brieuc, Rennes… l&rsquo;expérience croustillante s&rsquo;installe
          dans l&rsquo;Ouest — et d&rsquo;autres adresses arrivent bientôt&nbsp;!
        </p>
      </section>

      <section className="oc-section" data-reveal>
        <div className="oc-section-inner">
          <div className="oc-cards">
            <article className="oc-card">
              <span className="oc-badge-open">Ouvert</span>
              <RestoGallery
                photos={[
                  { src: "/img/resto/stb-facade.jpg", alt: "La façade et la terrasse du O'Cali Crousty de Saint-Brieuc", pos: "50% 58%" },
                  { src: "/img/resto/stb-panda.jpg", alt: "Le mur panda O'Cali Crousty", pos: "35% 50%" },
                  { src: "/img/resto/stb-salle.jpg", alt: "La salle du restaurant", pos: "50% 40%" },
                  { src: "/img/resto/stb-salon.jpg", alt: "Le coin salon gaming", pos: "50% 55%" },
                ]}
              />
              <div className="oc-card-body">
                <h3 className="oc-card-title">O&rsquo;Cali Crousty Saint-Brieuc</h3>
                <div className="oc-resto-meta">
                  <span>📍 55 Rue du Docteur Rahuel, 22000 Saint-Brieuc</span>
                  <span>
                    🕢 <b>Lun – Ven : 11h30 – 14h30 · 18h – 22h30</b>
                  </span>
                  <span>
                    🕢 <b>Sam : 12h – 14h30 · 18h – 23h</b> — <b>Dim : 18h – 22h30</b>
                  </span>
                  <span>
                    📞 <a href={PHONE_HREF}>{PHONE}</a>
                  </span>
                </div>
                <a
                  className="oc-btn-pink"
                  href={UBER_EATS_URL}
                  target="_blank"
                  rel="noopener"
                >
                  🛵 Commander en ligne
                </a>
              </div>
            </article>

            <article className="oc-card">
              <span className="oc-badge-open">Ouvert</span>
              <RestoGallery
                photos={[
                  { src: "/img/resto/rennes-facade.jpg", alt: "La devanture du O'Cali Crousty de Rennes, place Sainte-Anne", pos: "50% 55%" },
                  { src: "/img/resto/rennes-masterclass.jpg", alt: "Le mur La Masterclass du Crousty", pos: "50% 30%" },
                  { src: "/img/resto/rennes-borne.jpg", alt: "La borne de commande", pos: "70% 40%" },
                ]}
              />
              <div className="oc-card-body">
                <h3 className="oc-card-title">O&rsquo;Cali Crousty Rennes</h3>
                <div className="oc-resto-meta">
                  <span>📍 3 Place Sainte-Anne, 35000 Rennes</span>
                  <span>
                    🕢 <b>Dim – Mer : 11h30 – 23h</b>
                  </span>
                  <span>
                    🕢 <b>Jeu – Sam : 11h30 – 23h30</b>
                  </span>
                  <span>
                    🔥 <b>Ouvert depuis avril 2026</b> — en plein centre historique
                  </span>
                </div>
                <a
                  className="oc-btn-pink"
                  href="https://deliveroo.fr/fr/menu/rennes/rennes-centre/ocali-crousty"
                  target="_blank"
                  rel="noopener"
                >
                  🛵 Commander en ligne
                </a>
              </div>
            </article>

            <article className="oc-card">
              <div className="oc-card-photo">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/img/pack-glow.jpg" alt="" loading="lazy" />
              </div>
              <div className="oc-card-body">
                <h3 className="oc-card-title">Ta ville ici&nbsp;?</h3>
                <p className="oc-card-desc">
                  Tu veux un O&rsquo;Cali Crousty près de chez toi&nbsp;?
                  Rejoins l&rsquo;aventure et ouvre ton propre restaurant.
                </p>
                <Link className="oc-btn-dark" href="/franchise">
                  Découvrir la franchise
                </Link>
              </div>
            </article>
          </div>
        </div>
      </section>
    </>
  );
}
