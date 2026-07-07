import Image from "next/image";
import Link from "next/link";
import Reveal from "@/components/Reveal";
import { UBER_EATS_URL } from "@/lib/constants";

/* ============ HERO food plein écran ============ */
function Hero() {
  return (
    <section className="oc-hero">
      <div className="oc-hero-bg" aria-hidden="true">
        <Image src="/img/hero-food.jpg" alt="" fill priority sizes="100vw" />
      </div>

      <div className="oc-hero-content">
        <span className="oc-hero-script">La Masterclass du Crousty</span>
        <h1 className="oc-hero-h1">
          L&rsquo;original.
          <br />
          Le vrai <em>crousty</em>.
        </h1>
        <p className="oc-hero-lead">
          Poulet ultra croustillant, riz toujours chaud, sauce tonkatsu maison.
          Depuis Saint-Brieuc, l&rsquo;instant O&rsquo;Cali met tout le monde
          d&rsquo;accord.
        </p>
        <div className="oc-hero-ctas">
          <a className="oc-btn-pink" href={UBER_EATS_URL} target="_blank" rel="noopener">
            🛵 Commander maintenant
          </a>
          <Link className="oc-btn-dark" href="/menu">
            Voir la carte
          </Link>
        </div>
      </div>

      <Ticker />
    </section>
  );
}

/* ============ Ticker néon ============ */
const TICKER_WORDS = [
  "Crousty Poulet",
  "★",
  "Riz toujours chaud",
  "★",
  "Sauce maison",
  "★",
  "Crousty Tempura",
  "★",
  "Saint-Brieuc & Rennes",
  "★",
  "Tiramisu Bueno",
  "★",
];

function Ticker({ flat = false }: { flat?: boolean }) {
  const track = [...TICKER_WORDS, ...TICKER_WORDS];
  return (
    <div className={`oc-ticker${flat ? " oc-ticker--flat" : ""}`} aria-hidden="true">
      <div className="oc-ticker-track">
        {track.map((w, i) => (
          <span key={i}>{w}</span>
        ))}
      </div>
    </div>
  );
}

/* ============ Manifeste (gros statements) ============ */
function Statements() {
  return (
    <section className="oc-section" data-reveal>
      <div className="oc-section-inner oc-statements">
        <span
          className="oc-sticker"
          style={{ left: "-2%", top: "-8%", width: "clamp(80px,12vw,170px)", transform: "rotate(-14deg)" }}
          aria-hidden="true"
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/img/st-sauce.png" alt="" style={{ width: "100%" }} />
        </span>
        <span
          className="oc-sticker"
          style={{ right: "-1%", bottom: "-4%", width: "clamp(90px,14vw,200px)", transform: "rotate(10deg)" }}
          aria-hidden="true"
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/img/st-poulet.png" alt="" style={{ width: "100%" }} />
        </span>

        <span className="oc-line oc-intro-line">Une barquette généreuse.</span>
        <span className="oc-line">
          Un poulet <em>ultra crousty</em>.
        </span>
        <span className="oc-line">Un riz fondant.</span>
        <span className="oc-line">
          Une sauce <em>mythique</em>.
        </span>
        <span className="oc-line oc-line--script">…et l&rsquo;instant O&rsquo;Cali fait le reste.</span>
      </div>
    </section>
  );
}

/* ============ Prêt à craquer ? — les signatures ============ */
const STARS = [
  {
    img: "/img/crousty-poulet.jpg",
    tag: "Best-seller",
    title: "Crousty Poulet",
    desc: "Poulet tendre croustillant, riz chaud, sublimé par la sauce tonkatsu japonaise.",
    price: "dès 6,00 €",
  },
  {
    img: "/img/crousty-tempura.jpg",
    tag: "Signature",
    title: "Crousty Tempura",
    desc: "Crevettes tempura croustillantes à la japonaise, panure légère et dorée.",
    price: "dès 6,00 €",
  },
  {
    img: "/img/tiramisu-bueno.png",
    tag: "Dessert culte",
    title: "Tiramisu Bueno",
    desc: "Tiramisu onctueux revisité façon Bueno — la fin de repas parfaite.",
    price: "4,50 €",
  },
];

function Incontournables() {
  return (
    <section className="oc-section" id="incontournables" data-reveal>
      <div className="oc-section-inner">
        <header className="oc-section-header">
          <span className="oc-kicker">Les incontournables</span>
          <h2 className="oc-h2">
            Prêt à <em>craquer</em>&nbsp;?
          </h2>
          <p className="oc-intro">
            Des recettes ultra croustillantes, préparées avec soin et des
            saveurs authentiques. De l&rsquo;entrée au dessert.
          </p>
        </header>

        <div className="oc-cards">
          {STARS.map((s) => (
            <article className="oc-card" key={s.title}>
              <span className="oc-card-tag">{s.tag}</span>
              <div className="oc-card-photo">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={s.img} alt={s.title} loading="lazy" decoding="async" />
              </div>
              <div className="oc-card-body">
                <div className="flex items-start justify-between gap-3">
                  <h3 className="oc-card-title">{s.title}</h3>
                  <span className="oc-price">{s.price}</span>
                </div>
                <p className="oc-card-desc">{s.desc}</p>
              </div>
            </article>
          ))}
        </div>

        <div className="oc-section-cta">
          <Link className="oc-btn-dark" href="/menu">
            Découvrir toute la carte
          </Link>
        </div>
      </div>
    </section>
  );
}

/* ============ Comment goûter — 3 étapes ============ */
const STEPS = [
  {
    n: "1",
    title: "Trouve ton O'Cali",
    desc: "Direction le centre-ville de Saint-Brieuc — ou l'app Uber Eats si le canapé gagne.",
  },
  {
    n: "2",
    title: "Commande ta barquette",
    desc: "Crousty Poulet ou Tempura, taille M, L ou XL. Ajoute un tiramisu, tu nous remercieras.",
  },
  {
    n: "3",
    title: "Savoure l'instant",
    desc: "Riz chaud, poulet crousty, sauce maison. C'est ça, l'instant O'Cali.",
  },
];

function Steps() {
  return (
    <section className="oc-section" data-reveal>
      <div className="oc-section-inner">
        <header className="oc-section-header">
          <span className="oc-kicker">Comment goûter</span>
          <h2 className="oc-h2">
            Trois étapes. <em>Zéro regret.</em>
          </h2>
        </header>
        <div className="oc-steps">
          {STEPS.map((s) => (
            <div className="oc-step oc-card" key={s.n}>
              <span className="oc-step-num">{s.n}</span>
              <h3>{s.title}</h3>
              <p>{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ============ Mosaïque virale + réseaux ============ */
const MOSAIC = [
  { img: "/img/crousty-poulet.jpg", tall: true },
  { img: "/img/crousty-tempura.jpg" },
  { img: "/img/tenders.jpg" },
  { img: "/img/nems.jpg" },
  { img: "/img/tiramisu-bueno.png" },
  { img: "/img/pack-banner.jpg" },
  { img: "/img/tarte-daim.png" },
];

function Mosaic() {
  return (
    <section className="oc-section" data-reveal>
      <div className="oc-section-inner">
        <header className="oc-section-header">
          <span className="oc-kicker">Vu partout, goûté ici</span>
          <h2 className="oc-h2">
            Le crousty qui <em>affole</em> les réseaux
          </h2>
        </header>

        <div className="oc-mosaic">
          {MOSAIC.map((m, i) => (
            <span className={`oc-mosaic-cell${m.tall ? " oc-mosaic-cell--tall" : ""}`} key={i}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={m.img} alt="" loading="lazy" decoding="async" />
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ============ Section Instagram ============ */
const INSTA_URL = "https://www.instagram.com/ocalicrousty/";

const INSTA_SHOTS = [
  "/img/crousty-poulet.jpg",
  "/img/pack-glow.jpg",
  "/img/crousty-tempura.jpg",
];

function Insta() {
  return (
    <section className="oc-insta" data-reveal>
      <div className="oc-section-inner">
        <span className="oc-kicker" style={{ color: "#ffd9ec" }}>
          Coulisses, nouveautés, concours
        </span>
        <h2 className="oc-h2" style={{ color: "#fff" }}>
          @ocalicrousty
        </h2>
        <p className="oc-intro" style={{ color: "rgba(255,245,250,0.92)" }}>
          Le crousty se vit en vidéo : tout le contenu, les ouvertures et les
          surprises sont sur Instagram. Rejoins la commu.
        </p>

        <div className="oc-insta-shots" aria-hidden="true">
          {INSTA_SHOTS.map((src, i) => (
            <a className="oc-insta-shot" href={INSTA_URL} target="_blank" rel="noopener" key={i} tabIndex={-1}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={src} alt="" loading="lazy" decoding="async" />
              <span className="oc-insta-heart">❤</span>
            </a>
          ))}
        </div>

        <div className="oc-section-cta">
          <a className="oc-btn-white" href={INSTA_URL} target="_blank" rel="noopener">
            Suivre @ocalicrousty →
          </a>
        </div>
      </div>
    </section>
  );
}

/* ============ Trouve ton O'Cali ============ */
function Restaurants() {
  return (
    <section className="oc-section" data-reveal>
      <div className="oc-duo oc-duo--dark oc-section-inner">
        <div className="oc-duo-media">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/img/pack-glow.jpg" alt="Les barquettes O'Cali Crousty" loading="lazy" />
        </div>
        <div className="oc-duo-copy">
          <p className="oc-duo-kicker">Nos adresses</p>
          <h2 className="oc-duo-h2">
            Trouve ton
            <br />
            O&rsquo;Cali Crousty
          </h2>
          <div className="oc-duo-stat">Saint-Brieuc & Rennes</div>
          <p className="oc-duo-p">
            L&rsquo;original à Saint-Brieuc, le petit nouveau place
            Sainte-Anne à Rennes — l&rsquo;expérience croustillante
            s&rsquo;installe dans tout l&rsquo;Ouest.
          </p>
          <Link className="oc-btn-white" href="/restaurants">
            Voir nos restaurants
          </Link>
        </div>
      </div>
    </section>
  );
}

/* ============ Franchise sunset ============ */
function Franchise() {
  return (
    <section className="oc-franchise-band" data-reveal>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src="/img/cali-sunset.png" alt="" loading="lazy" />
      <div className="oc-section-inner">
        <span className="oc-kicker">Franchise</span>
        <h2 className="oc-h2">
          Rejoins <em>l&rsquo;aventure</em>
        </h2>
        <p className="oc-intro" style={{ color: "rgba(255,245,250,0.9)" }}>
          Envie d&rsquo;entreprendre&nbsp;? Lance ton restaurant avec
          O&rsquo;Cali Crousty : un concept clé en main, performant et en
          pleine expansion, avec un accompagnement complet à chaque étape.
        </p>
        <div className="oc-section-cta">
          <Link className="oc-btn-pink" href="/franchise">
            Découvrir la franchise
          </Link>
        </div>
      </div>
    </section>
  );
}

export default function Home() {
  return (
    <>
      <Reveal />
      <Hero />
      <Statements />
      <Incontournables />
      <Steps />
      <Mosaic />
      <Insta />
      <Restaurants />
      <Franchise />
    </>
  );
}
