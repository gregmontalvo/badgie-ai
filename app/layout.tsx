import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Badgie.ai — El Director General que nunca duerme",
  description: "Agente de inteligencia artificial para escuelas y clubes deportivos. Gestiona, comunica, reporta y automatiza todo tu club desde WhatsApp.",
  openGraph: {
    title: "Badgie.ai — El agente de IA para escuelas deportivas",
    description: "Gestiona tu escuela deportiva con un agente de IA que trabaja 24/7. Integraciones con WhatsApp, email, pagos y más.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" className="dark">
      <body>{children}</body>
    </html>
  );
}
