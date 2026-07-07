import type { Metadata } from "next";
import { Inter, Anton, Pacifico } from "next/font/google";
import "./globals.css";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

const anton = Anton({
  variable: "--font-anton",
  subsets: ["latin"],
  weight: "400",
});

const pacifico = Pacifico({
  variable: "--font-pacifico",
  subsets: ["latin"],
  weight: "400",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://ocalicrousty.com"),
  title: {
    default: "O'Cali Crousty — Poulet croustillant japonais | Saint-Brieuc & Rennes",
    template: "%s | O'Cali Crousty",
  },
  description:
    "L'original du crousty : poulet croustillant japonais, riz chaud et sauce maison mythique. Commande en ligne à Saint-Brieuc et Rennes — franchise en expansion.",
  openGraph: {
    title: "O'Cali Crousty — L'instant O'Cali",
    description:
      "Poulet croustillant japonais, riz toujours chaud, sauce maison mythique. Saint-Brieuc, Rennes & bientôt près de chez vous.",
    type: "website",
    locale: "fr_FR",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="fr"
      className={`${inter.variable} ${anton.variable} ${pacifico.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <Nav />
        <main className="oc-landing">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
