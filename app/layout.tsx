import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Badgie.ai — El Director General que nunca duerme",
  description: "El agente de IA que gestiona tu escuela deportiva 24/7. Asistencia, pagos, comunicaciones, badges y reportes — todo desde WhatsApp.",
  openGraph: {
    title: "Badgie.ai — El agente de IA para escuelas deportivas",
    description: "El agente de IA que gestiona tu escuela deportiva 24/7. Asistencia, pagos, comunicaciones, badges y reportes — todo desde WhatsApp.",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}
