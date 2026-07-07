import type { Metadata } from "next";
import Reveal from "@/components/Reveal";
import FranchiseForm from "@/components/FranchiseForm";

export const metadata: Metadata = {
  title: "Devenir franchisé — Lance ton O'Cali Crousty",
  description:
    "Rejoins un concept unique et performant : formation, emplacement, design, marketing, approvisionnement et support 7j/7. Réponse sous 48h.",
};

const SUPPORT = [
  {
    icon: "🎓",
    title: "Formation complète",
    desc: "Formation approfondie sur nos recettes, techniques de préparation et standards de qualité.",
  },
  {
    icon: "📍",
    title: "Choix de l'emplacement",
    desc: "Aide à la recherche et validation de l'emplacement idéal selon notre zone de chalandise.",
  },
  {
    icon: "🎨",
    title: "Aménagement & design",
    desc: "Conception complète de votre restaurant selon notre charte graphique et nos standards.",
  },
  {
    icon: "📣",
    title: "Marketing & communication",
    desc: "Stratégie digitale, réseaux sociaux et campagnes de lancement clés en main.",
  },
  {
    icon: "📦",
    title: "Approvisionnement",
    desc: "Réseau de fournisseurs sélectionnés et négociés pour garantir qualité et rentabilité.",
  },
  {
    icon: "🤝",
    title: "Support continu",
    desc: "Accompagnement permanent, visites régulières et hotline dédiée 7j/7.",
  },
];

export default function FranchisePage() {
  return (
    <>
      <Reveal />
      <section className="oc-page-hero">
        <h1>
          Deviens franchisé
          <br />
          <em>O&rsquo;Cali Crousty</em>
        </h1>
        <p>
          Rejoins un concept unique et performant, avec un accompagnement
          complet à chaque étape. Investis dans une franchise qui allie
          authenticité et rentabilité.
        </p>
      </section>

      <section className="oc-section" data-reveal>
        <div className="oc-section-inner">
          <header className="oc-section-header">
            <span className="oc-kicker">Notre accompagnement</span>
            <h2 className="oc-h2">
              De l&rsquo;idée à <em>l&rsquo;ouverture</em>
            </h2>
            <p className="oc-intro">…et bien au-delà.</p>
          </header>

          <div className="oc-cards">
            {SUPPORT.map((s) => (
              <article className="oc-card" key={s.title}>
                <div className="oc-card-body" style={{ paddingTop: "1.4rem" }}>
                  <span style={{ fontSize: "1.6rem" }} aria-hidden="true">
                    {s.icon}
                  </span>
                  <h3 className="oc-card-title">{s.title}</h3>
                  <p className="oc-card-desc">{s.desc}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="oc-section" data-reveal id="candidature">
        <div className="oc-section-inner">
          <header className="oc-section-header">
            <span className="oc-kicker">Rejoins l&rsquo;aventure croustillante</span>
            <h2 className="oc-h2">
              Lance ton <em>O&rsquo;Cali</em>
            </h2>
            <p className="oc-intro">
              Notre équipe te rappelle sous 48h pour concrétiser ton projet.
            </p>
          </header>
          <FranchiseForm />
        </div>
      </section>
    </>
  );
}
