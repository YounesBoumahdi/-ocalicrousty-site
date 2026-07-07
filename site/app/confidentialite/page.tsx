import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Politique de confidentialité",
  robots: { index: false },
};

export default function ConfidentialitePage() {
  return (
    <>
      <section className="oc-page-hero">
        <h1>Politique de confidentialité</h1>
      </section>
      <section className="oc-section">
        <div className="oc-section-inner oc-legal" style={{ maxWidth: "44rem" }}>
          <h2>1. Responsable du traitement</h2>
          <p>
            Nom commercial : O&rsquo;Cali Crousty — www.ocalicrousty.com —
            ocalicroustyfr@gmail.com
          </p>

          <h2>2. Données collectées</h2>
          <p>Notre site collecte uniquement les données suivantes :</p>
          <p>
            <b>Formulaire de candidature franchise :</b> nom, prénom, email,
            téléphone, informations sur votre projet.
          </p>
          <p>
            <b>Données de navigation :</b> statistiques de visite anonymes
            (pages vues, durée, provenance).
          </p>

          <h2>3. Utilisation des données</h2>
          <p>
            Vos données sont utilisées uniquement pour répondre à vos demandes,
            traiter les candidatures franchise et améliorer l&rsquo;expérience
            du site. Elles ne sont jamais vendues à des tiers.
          </p>

          <h2>4. Vos droits</h2>
          <p>
            Conformément au RGPD, vous disposez d&rsquo;un droit d&rsquo;accès,
            de rectification, de suppression et d&rsquo;opposition. Pour
            exercer vos droits : ocalicroustyfr@gmail.com — Réclamation :{" "}
            <a href="https://www.cnil.fr" target="_blank" rel="noopener">
              cnil.fr
            </a>
          </p>

          <h2>5. Cookies</h2>
          <p>
            Le site utilise des cookies de mesure d&rsquo;audience. Vous pouvez
            les désactiver depuis les paramètres de votre navigateur.
          </p>

          <h2>6. Sécurité</h2>
          <p>
            Nous mettons en œuvre les mesures techniques nécessaires pour
            protéger vos données contre tout accès non autorisé.
          </p>

          <p style={{ opacity: 0.6, fontSize: "0.8rem" }}>
            Dernière mise à jour : juillet 2026
          </p>
        </div>
      </section>
    </>
  );
}
