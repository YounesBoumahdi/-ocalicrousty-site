"use client";

import { useState } from "react";

type Category = "crousty" | "texmex" | "dessert";

type Item = {
  name: string;
  desc: string;
  img: string;
  cat: Category;
  price: string;
  sizes?: [string, string][];
  tag?: string;
};

const ITEMS: Item[] = [
  {
    name: "Crousty Poulet",
    desc: "Poulet tendre croustillant, sublimé par la sauce tonkatsu japonaise",
    img: "/img/crousty-poulet.jpg",
    cat: "crousty",
    price: "dès 6,00 €",
    sizes: [["M", "6,00 €"], ["L", "8,50 €"], ["XL", "10,00 €"]],
    tag: "Best-seller",
  },
  {
    name: "Crousty Tempura",
    desc: "Crevettes tempura croustillantes à la japonaise",
    img: "/img/crousty-tempura.jpg",
    cat: "crousty",
    price: "dès 6,00 €",
    sizes: [["M", "6,00 €"], ["L", "8,50 €"], ["XL", "10,00 €"]],
    tag: "Signature",
  },
  {
    name: "4 Tempura",
    desc: "Crevettes tempura panées à la japonaise",
    img: "/img/tempura.jpg",
    cat: "texmex",
    price: "5,00 €",
  },
  {
    name: "4 Nems",
    desc: "Nems croustillants à la viande",
    img: "/img/nems.jpg",
    cat: "texmex",
    price: "5,00 €",
  },
  {
    name: "4 Tenders",
    desc: "Tenders de poulet croustillants façon tex-mex",
    img: "/img/tenders.jpg",
    cat: "texmex",
    price: "5,00 €",
  },
  {
    name: "Tiramisu Bueno",
    desc: "Tiramisu onctueux, revisité façon Bueno",
    img: "/img/tiramisu-bueno.png",
    cat: "dessert",
    price: "4,50 €",
    tag: "Dessert culte",
  },
  {
    name: "Tiramisu Caramel",
    desc: "Crème mascarpone caramel onctueuse",
    img: "/img/tiramisu-caramel.png",
    cat: "dessert",
    price: "4,50 €",
  },
  {
    name: "Tiramisu Pistache",
    desc: "Tiramisu onctueux à la pistache",
    img: "/img/tiramisu-pistache.png",
    cat: "dessert",
    price: "4,50 €",
  },
  {
    name: "Tarte au Daim",
    desc: "Tarte gourmande au Daim",
    img: "/img/tarte-daim.png",
    cat: "dessert",
    price: "3,50 €",
  },
];

const FILTERS: { key: Category | "all"; label: string }[] = [
  { key: "all", label: "Tout" },
  { key: "crousty", label: "Crousty" },
  { key: "texmex", label: "Tex-Mex" },
  { key: "dessert", label: "Desserts" },
];

export default function MenuGrid() {
  const [filter, setFilter] = useState<Category | "all">("all");
  const shown = ITEMS.filter((i) => filter === "all" || i.cat === filter);

  return (
    <div className="oc-section-inner">
      <div className="oc-filter-row" role="tablist" aria-label="Catégories">
        {FILTERS.map((f) => (
          <button
            key={f.key}
            className="oc-filter"
            data-active={filter === f.key}
            onClick={() => setFilter(f.key)}
            role="tab"
            aria-selected={filter === f.key}
          >
            {f.label}
          </button>
        ))}
      </div>

      <div className="oc-cards">
        {shown.map((item) => (
          <article className="oc-card" key={item.name}>
            {item.tag && <span className="oc-card-tag">{item.tag}</span>}
            <div className="oc-card-photo">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={item.img} alt={item.name} loading="lazy" decoding="async" />
            </div>
            <div className="oc-card-body">
              <div className="flex items-start justify-between gap-3">
                <h3 className="oc-card-title">{item.name}</h3>
                <span className="oc-price">{item.price}</span>
              </div>
              <p className="oc-card-desc">{item.desc}</p>
              {item.sizes && (
                <p className="oc-card-desc" style={{ fontWeight: 650 }}>
                  {item.sizes.map(([s, p]) => `${s} ${p}`).join(" · ")}
                </p>
              )}
            </div>
          </article>
        ))}
      </div>

      <p className="oc-intro" style={{ marginTop: "2rem", fontSize: "0.78rem" }}>
        * Prix en restaurant — les prix en livraison peuvent varier.
      </p>
    </div>
  );
}
