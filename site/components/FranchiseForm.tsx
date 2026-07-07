"use client";

import { useState } from "react";

/**
 * Formulaire de candidature franchise.
 * TODO: brancher l'envoi (Resend / route handler) — actuellement mailto de repli.
 */
export default function FranchiseForm() {
  const [sent, setSent] = useState(false);

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const body = [
      `Nom : ${data.get("nom")}`,
      `Email : ${data.get("email")}`,
      `Téléphone : ${data.get("tel")}`,
      `Ville souhaitée : ${data.get("ville")}`,
      "",
      `${data.get("message")}`,
    ].join("\n");
    window.location.href = `mailto:contact@ocalicrousty.com?subject=${encodeURIComponent(
      "Candidature franchise O'Cali Crousty",
    )}&body=${encodeURIComponent(body)}`;
    setSent(true);
  }

  if (sent) {
    return (
      <p className="oc-intro" style={{ fontWeight: 700 }}>
        ✓ Merci&nbsp;! Ton client mail vient de s&rsquo;ouvrir — envoie le
        message et notre équipe te rappelle sous 48h.
      </p>
    );
  }

  return (
    <form className="oc-form" onSubmit={onSubmit}>
      <div className="oc-form-row">
        <input className="oc-input" name="nom" placeholder="Nom & prénom" required />
        <input className="oc-input" name="email" type="email" placeholder="Email" required />
      </div>
      <div className="oc-form-row">
        <input className="oc-input" name="tel" type="tel" placeholder="Téléphone" required />
        <input className="oc-input" name="ville" placeholder="Ville souhaitée" required />
      </div>
      <textarea
        className="oc-textarea"
        name="message"
        placeholder="Parle-nous de ton projet…"
      />
      <button className="oc-btn-pink" type="submit">
        Envoyer ma candidature
      </button>
    </form>
  );
}
