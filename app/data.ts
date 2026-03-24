export const PROMPTS_ROW1 = [
  "¿Quién no ha pagado la mensualidad de marzo?",
  "Envía recordatorio al grupo avanzado",
  "¿Cuántos alumnos nuevos este mes?",
  "Genera el informe de asistencia semanal",
  "Cancela la clase del jueves y avisa a todos",
  "¿Qué profesores tienen clase mañana?",
  "Dale el badge de cinturón azul a Marco García",
  "¿Cuál es el alumno con más faltas?",
  "Crea el evento de competición del 15 de abril",
  "Redacta email de bienvenida para nuevos alumnos",
];

export const PROMPTS_ROW2 = [
  "¿Cuántas plazas quedan en iniciación?",
  "Envía las notas del trimestre a los padres",
  "¿Cuándo es la próxima competición?",
  "Genera el parte de asistencia de hoy",
  "¿Qué alumno lleva más tiempo sin venir?",
  "Programa clase de recuperación para el viernes",
  "Avisa al grupo júnior del cambio de horario",
  "¿Cuánto hemos facturado este mes?",
  "¿Quién tiene la licencia pendiente de renovar?",
  "Crea el resumen mensual para el director",
];

export const INTEGRATIONS = [
  { name: "WhatsApp", emoji: "💬" },
  { name: "Gmail", emoji: "📧" },
  { name: "Google Calendar", emoji: "📅" },
  { name: "Stripe", emoji: "💳" },
  { name: "Badgie", emoji: "🏅" },
  { name: "Instagram", emoji: "📸" },
  { name: "Telegram", emoji: "✈️" },
  { name: "n8n", emoji: "⚡" },
  { name: "Zoom", emoji: "🎥" },
  { name: "GolfManager", emoji: "⛳" },
  { name: "AimHarder", emoji: "🥊" },
  { name: "Cualquier API", emoji: "🔌" },
];

export const USE_CASES = [
  {
    emoji: "🗓️",
    title: "Gestión del día a día",
    desc: "Clases, ausencias, sustituciones, eventos. Sin hojas de cálculo. Badgie.ai lo coordina todo.",
    border: "border-blue-500/30",
    bg: "bg-blue-500/5",
    badge: "Operaciones",
    badgeColor: "bg-blue-500/20 text-blue-300",
  },
  {
    emoji: "💬",
    title: "Comunicación automatizada",
    desc: "WhatsApp y email para alumnos, padres y profesores. Tú defines las reglas, el agente ejecuta.",
    border: "border-violet-500/30",
    bg: "bg-violet-500/5",
    badge: "Comunicación",
    badgeColor: "bg-violet-500/20 text-violet-300",
  },
  {
    emoji: "💰",
    title: "Control financiero",
    desc: "Cobros, morosos, facturas. Sabe quién debe y cuánto, y lo gestiona con recordatorios automáticos.",
    border: "border-emerald-500/30",
    bg: "bg-emerald-500/5",
    badge: "Finanzas",
    badgeColor: "bg-emerald-500/20 text-emerald-300",
  },
  {
    emoji: "📊",
    title: "Inteligencia de negocio",
    desc: "KPIs cada semana sin pedirlos. Alumnos activos, ingresos, asistencia, churn. Siempre informado.",
    border: "border-orange-500/30",
    bg: "bg-orange-500/5",
    badge: "Analytics",
    badgeColor: "bg-orange-500/20 text-orange-300",
  },
];

export type DemoStep = { role: "user" | "bot"; text: string; delay: number };

export const DEMO_STEPS: DemoStep[] = [
  { role: "user", text: "¿Cuántos alumnos han pagado este mes?", delay: 600 },
  {
    role: "bot",
    text: "📊 Pagos de marzo 2026:\n✅ Pagados: 87 alumnos (71%)\n⏳ Pendientes: 23 (19%)\n❌ Vencidos: 12 (10%)\n\nTotal facturado: 8.700€\n¿Envío recordatorio automático?",
    delay: 1800,
  },
  { role: "user", text: "Sí, a los que llevan más de 7 días", delay: 3200 },
  {
    role: "bot",
    text: "✅ Listo. Recordatorio enviado a 12 alumnos por WhatsApp y email.\n\nTe aviso cuando respondan 👍",
    delay: 4400,
  },
  { role: "user", text: "¿Qué clases hay mañana?", delay: 6000 },
  {
    role: "bot",
    text: "📅 Miércoles 25 mar:\n• 09:00 Iniciación — Carlos (14)\n• 13:00 Avanzado — Ana (8)\n• 16:00 Competición — Carlos (11)\n• 18:30 Principiantes — Ana (6)",
    delay: 7200,
  },
];

export const PLANS = [
  {
    name: "Starter",
    price: "199",
    period: "/mes",
    desc: "Para escuelas que empiezan a crecer",
    features: [
      "1 agente IA activo",
      "Hasta 300 alumnos",
      "WhatsApp + Email",
      "Reportes semanales",
      "Soporte prioritario 24h",
    ],
    cta: "Solicitar demo",
    highlight: false,
  },
  {
    name: "Pro",
    price: "399",
    period: "/mes",
    desc: "El más popular entre nuestros clientes",
    features: [
      "Agentes ilimitados",
      "Alumnos ilimitados",
      "Todas las integraciones",
      "Badges y certificaciones",
      "Reportes en tiempo real",
      "Onboarding personalizado",
    ],
    cta: "Solicitar demo",
    highlight: true,
  },
  {
    name: "Enterprise",
    price: "A medida",
    period: "",
    desc: "Para federaciones y grupos de escuelas",
    features: [
      "White-label completo",
      "Integración personalizada",
      "SLA garantizado",
      "Gestor dedicado",
      "Formación para el equipo",
    ],
    cta: "Hablemos",
    highlight: false,
  },
];
