import Link from "next/link";
import { UBER_EATS_URL } from "@/lib/constants";

/**
 * Panneau final : CTA commander + footer.
 */
export default function Footer() {
  return (
    <div className="oc-dark-wrap">
      <section className="oc-cta-final">
        <h2 className="oc-h2">Une petite faim&nbsp;?</h2>
        <p className="oc-intro">
          Le crousty part vite : commande maintenant, régale-toi dans 20 minutes.
        </p>
        <div className="oc-cta-final-btns">
          <a className="oc-btn-pink" href={UBER_EATS_URL} target="_blank" rel="noopener">
            🛵 Commander sur Uber Eats
          </a>
          <Link className="oc-btn-white" href="/restaurants">
            📍 Nos restaurants
          </Link>
        </div>
      </section>

      <footer className="oc-footer">
        <div className="oc-footer-top">
          <div className="oc-footer-brand">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/img/logo-mark-t.png" alt="O'Cali Crousty" />
            <p className="oc-footer-tagline">
              L&rsquo;original
              <br />
              qui crée l&rsquo;instant.
            </p>
          </div>
          <nav className="oc-footer-cols" aria-label="Pied de page">
            <div className="oc-footer-col">
              <h3>Pages</h3>
              <ul>
                <li><Link href="/">Accueil</Link></li>
                <li><Link href="/menu">La carte</Link></li>
                <li><Link href="/restaurants">Nos restaurants</Link></li>
                <li><Link href="/franchise">La franchise</Link></li>
              </ul>
            </div>
            <div className="oc-footer-col">
              <h3>Légal</h3>
              <ul>
                <li><Link href="/mentions-legales">Mentions légales</Link></li>
                <li><Link href="/confidentialite">Confidentialité</Link></li>
              </ul>
            </div>
            <div className="oc-footer-col">
              <h3>Suivre</h3>
              <ul>
                <li><a href="https://www.instagram.com/ocalicrousty/" target="_blank" rel="noopener">Instagram</a></li>
              </ul>
            </div>
          </nav>
        </div>

        <div className="oc-footer-bottom">
          <span>© {new Date().getFullYear()} O&rsquo;Cali Crousty — Tous droits réservés</span>
          <span className="oc-footer-manger">
            Pour votre santé, mangez au moins cinq fruits et légumes par jour —{" "}
            <a href="https://www.mangerbouger.fr" target="_blank" rel="noopener">
              mangerbouger.fr
            </a>
          </span>
          <span>
            Site réalisé par{" "}
            <a href="https://yukstudio.fr" target="_blank" rel="noopener" style={{ color: "inherit" }}>
              YUK Studio
            </a>
          </span>
        </div>
      </footer>
    </div>
  );
}
