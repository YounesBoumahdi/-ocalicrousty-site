import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Mentions légales",
  robots: { index: false },
};

export default function MentionsLegalesPage() {
  return (
    <>
      <section className="oc-page-hero">
        <h1>Mentions légales</h1>
      </section>
      <section className="oc-section">
        <div className="oc-section-inner oc-legal" style={{ maxWidth: "44rem" }}>
          <h2>1. Éditeur du site</h2>
          <p>Éditeur : Younes Boumahdi</p>
          <p>Email : younes.boumahdi35@gmail.com</p>

          <h2>2. Hébergement</h2>
          <p>
            Hébergeur : Vercel Inc. — 440 N Barranca Ave #4133, Covina, CA
            91723, USA — vercel.com
          </p>

          <h2>3. Propriété intellectuelle</h2>
          <p>
            L&rsquo;ensemble du contenu de ce site (textes, images, logo) est
            la propriété exclusive de O&rsquo;Cali Crousty. Toute reproduction
            sans autorisation est interdite.
          </p>

          <h2>4. Données personnelles</h2>
          <p>
            Conformément au RGPD, vous disposez d&rsquo;un droit d&rsquo;accès,
            de rectification et de suppression de vos données personnelles.
            Pour exercer vos droits : ocalicroustyfr@gmail.com — Réclamation :{" "}
            <a href="https://www.cnil.fr" target="_blank" rel="noopener">
              cnil.fr
            </a>
          </p>

          <h2>5. Cookies</h2>
          <p>
            Le site utilise des cookies pour améliorer votre expérience et
            réaliser des statistiques. Vous pouvez les désactiver depuis les
            paramètres de votre navigateur.
          </p>

          <p style={{ opacity: 0.6, fontSize: "0.8rem" }}>
            Dernière mise à jour : juillet 2026
          </p>
        </div>
      </section>
    </>
  );
}
