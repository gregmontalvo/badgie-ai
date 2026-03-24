"use client";

import { useState, useEffect, useRef } from "react";
import {
  MessageCircle, BarChart3, Calendar,
  CreditCard, ArrowRight, CheckCircle,
  Sparkles, Mail, Star, Zap, Brain, Shield,
  ChevronDown
} from "lucide-react";

// ─── PÁGINA BUDGI.AI ────────────────────────────────────────────────────────

export default function BadgieLanding() {
  const [demoStarted, setDemoStarted] = useState(false);
  const [demoVisible, setDemoVisible] = useState<number[]>([]);

  const PROMPTS_ROW1 = [
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

  const PROMPTS_ROW2 = [
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

  const INTEGRATIONS = [
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

  const USE_CASES = [
    {
      emoji: "🗓️",
      title: "Gestión del día a día",
      desc: "Clases, ausencias, sustituciones, eventos. Sin hojas de cálculo. Badgie lo coordina todo automáticamente.",
      badge: "Operaciones",
    },
    {
      emoji: "💬",
      title: "Comunicación automatizada",
      desc: "WhatsApp y email para alumnos, padres y profesores. Tú defines las reglas, el agente ejecuta.",
      badge: "Comunicación",
    },
    {
      emoji: "💰",
      title: "Control financiero",
      desc: "Cobros, morosos, facturas. Sabe quién debe y cuánto, y lo gestiona con recordatorios automáticos.",
      badge: "Finanzas",
    },
    {
      emoji: "📊",
      title: "Inteligencia de negocio",
      desc: "KPIs cada semana sin pedirlos. Alumnos activos, ingresos, asistencia, churn. Siempre informado.",
      badge: "Analytics",
    },
  ];

  const DEMO_STEPS = [
    { role: "user" as const, text: "¿Cuántos alumnos han pagado este mes?", delay: 600 },
    {
      role: "bot" as const,
      text: "📊 Pagos de marzo 2026:\n✅ Pagados: 87 alumnos (71%)\n⏳ Pendientes: 23 (19%)\n❌ Vencidos: 12 (10%)\n\nTotal facturado: 8.700€\n¿Envío recordatorio automático?",
      delay: 1800,
    },
    { role: "user" as const, text: "Sí, a los que llevan más de 7 días", delay: 3200 },
    {
      role: "bot" as const,
      text: "✅ Listo. Recordatorio enviado a 12 alumnos por WhatsApp y email.\n\nTe aviso cuando respondan 👍",
      delay: 4400,
    },
    { role: "user" as const, text: "¿Qué clases hay mañana?", delay: 6000 },
    {
      role: "bot" as const,
      text: "📅 Miércoles 25 mar:\n• 09:00 Iniciación — Carlos (14)\n• 13:00 Avanzado — Ana (8)\n• 16:00 Competición — Carlos (11)\n• 18:30 Principiantes — Ana (6)",
      delay: 7200,
    },
  ];

  // Efecto para iniciar demo
  useEffect(() => {
    if (!demoStarted) return;
    DEMO_STEPS.forEach((_, i) => {
      setTimeout(() => {
        setDemoVisible((prev) => [...prev, i]);
      }, DEMO_STEPS[i].delay);
    });
  }, [demoStarted]);

  const resetDemo = () => {
    setDemoVisible([]);
    setDemoStarted(false);
    setTimeout(() => setDemoStarted(true), 100);
  };

  return (
    <div className="min-h-screen bg-[#050508] text-white overflow-x-hidden">
      {/* ════════════════════ HERO ════════════════════ */}
      <section className="relative min-h-screen flex flex-col items-center justify-center px-4 py-24 overflow-hidden">
        {/* Fondo animado */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-10 w-80 h-80 rounded-full bg-violet-600/10 blur-3xl animate-orb" />
          <div className="absolute bottom-20 right-20 w-96 h-96 rounded-full bg-purple-600/10 blur-3xl animate-orb" style={{ animationDelay: "2s" }} />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-violet-500/30 bg-violet-500/10 mb-8">
            <Sparkles className="w-4 h-4 text-violet-400" />
            <span className="text-sm text-violet-300">Agente de IA para escuelas deportivas</span>
          </div>

          <h1 className="text-6xl md:text-7xl font-bold mb-6 leading-tight">
            El Director General
            <br />
            <span className="bg-gradient-to-r from-violet-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              que nunca duerme
            </span>
          </h1>

          <p className="text-xl text-white/60 mb-12 max-w-2xl mx-auto leading-relaxed">
            Badgie es el agente de inteligencia artificial que gestiona tu escuela deportiva. Responde, organiza, reporta y multiplica tu equipo — 24/7, conectado con todo lo que ya usas.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <button className="px-8 py-4 bg-gradient-to-r from-violet-600 to-purple-600 hover:from-violet-500 hover:to-purple-500 rounded-full font-semibold transition-all hover:shadow-lg hover:shadow-violet-500/25">
              Solicitar demo
            </button>
            <button
              onClick={() => setDemoStarted(true)}
              className="px-8 py-4 border border-white/20 hover:border-white/40 rounded-full font-semibold transition-colors flex items-center justify-center gap-2 group"
            >
              <span>Ver cómo funciona</span>
              <ChevronDown className="w-4 h-4 group-hover:translate-y-1 transition-transform" />
            </button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 py-8 border-y border-white/10">
            <div>
              <div className="text-2xl font-bold text-violet-400">109+</div>
              <div className="text-sm text-white/50">Escuelas activas</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-violet-400">24/7</div>
              <div className="text-sm text-white/50">Disponibilidad</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-violet-400">10×</div>
              <div className="text-sm text-white/50">Más productivo</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-violet-400">&lt;5min</div>
              <div className="text-sm text-white/50">Para empezar</div>
            </div>
          </div>
        </div>
      </section>

      {/* ════════════════════ CARRUSEL DE PROMPTS ════════════════════ */}
      <section className="py-24 bg-gradient-to-b from-transparent via-violet-900/5 to-transparent px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Lo que Badgie puede hacer</h2>
            <p className="text-white/50">Cientos de tareas automatizadas. Aquí van algunos ejemplos:</p>
          </div>

          <div className="space-y-4">
            <div className="overflow-hidden rounded-2xl border border-white/5 bg-white/[0.02] py-4">
              <div className="flex gap-3 px-4">
                {[...PROMPTS_ROW1, ...PROMPTS_ROW1].map((p, i) => (
                  <div
                    key={i}
                    className="flex-shrink-0 inline-flex items-center gap-2 px-4 py-2.5 rounded-full border border-white/10 bg-white/[0.04] text-sm text-white/60 whitespace-nowrap hover:text-white/80 hover:border-white/20 transition-colors cursor-default"
                    style={{ animation: "marquee 28s linear infinite" }}
                  >
                    <span className="text-violet-400 text-xs">›</span>
                    {p}
                  </div>
                ))}
              </div>
            </div>

            <div className="overflow-hidden rounded-2xl border border-white/5 bg-white/[0.02] py-4">
              <div className="flex gap-3 px-4" style={{ animation: "marquee 38s linear infinite reverse" }}>
                {[...PROMPTS_ROW2, ...PROMPTS_ROW2].map((p, i) => (
                  <div
                    key={i}
                    className="flex-shrink-0 inline-flex items-center gap-2 px-4 py-2.5 rounded-full border border-white/10 bg-white/[0.04] text-sm text-white/60 whitespace-nowrap hover:text-white/80 hover:border-white/20 transition-colors cursor-default"
                  >
                    <span className="text-violet-400 text-xs">›</span>
                    {p}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ════════════════════ DEMO CHAT ════════════════════ */}
      <section id="demo" className="py-24 px-4 bg-gradient-to-b from-transparent to-purple-900/10">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Badgie en acción</h2>
            <p className="text-white/50">Una conversación real con Badgie. Pulse "Ver demo en vivo" para ver cómo gestiona tu escuela:</p>
          </div>

          {/* Simulación de conversación */}
          <div className="relative mx-auto max-w-sm rounded-[2.5rem] border border-white/10 bg-[#111115] overflow-hidden shadow-2xl" style={{ boxShadow: "0 0 80px rgba(139,92,246,0.15)" }}>
            {/* Phone status bar */}
            <div className="flex items-center justify-between px-6 pt-4 pb-2 bg-[#0f0f12]">
              <span className="text-xs text-white/40">9:41</span>
              <span className="text-xs text-white/40">●●●</span>
            </div>

            {/* Chat header */}
            <div className="flex items-center gap-3 px-5 py-3 bg-[#0f0f12] border-b border-white/5">
              <div className="w-9 h-9 rounded-full bg-gradient-to-br from-violet-500 to-purple-700 flex items-center justify-center text-lg">
                🤖
              </div>
              <div>
                <p className="text-sm font-semibold text-white">Badgie.ai</p>
                <p className="text-xs text-green-400">● En línea</p>
              </div>
            </div>

            {/* Messages */}
            <div className="px-4 py-4 space-y-3 min-h-[380px] max-h-[380px] overflow-y-auto bg-[#0a0a0e]">
              {!demoStarted && (
                <div className="flex flex-col items-center justify-center h-full gap-4">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-violet-500/20 to-purple-600/20 border border-violet-500/30 flex items-center justify-center text-2xl">
                    🤖
                  </div>
                  <p className="text-white/40 text-sm text-center px-4">Pulsa para ver cómo gestiona Badgie tu escuela</p>
                  <button
                    onClick={() => setDemoStarted(true)}
                    className="px-5 py-2.5 bg-violet-600 hover:bg-violet-500 text-white text-sm rounded-full font-medium transition-colors"
                  >
                    Ver demo en vivo
                  </button>
                </div>
              )}

              {demoStarted &&
                DEMO_STEPS.map((step, i) =>
                  demoVisible.includes(i) ? (
                    <div key={i} className={`flex ${step.role === "user" ? "justify-end" : "justify-start"}`}>
                      <div
                        className={`max-w-[80%] px-4 py-2.5 rounded-2xl text-sm leading-relaxed whitespace-pre-line ${
                          step.role === "user"
                            ? "bg-violet-600 text-white rounded-br-sm"
                            : "bg-white/8 text-white/90 border border-white/5 rounded-bl-sm"
                        }`}
                      >
                        {step.text}
                      </div>
                    </div>
                  ) : i === demoVisible.length && demoStarted && i < DEMO_STEPS.length ? (
                    <div key={`typing-${i}`} className="flex justify-start">
                      <div className="px-4 py-3 rounded-2xl rounded-bl-sm bg-white/[0.06] border border-white/5">
                        <div className="flex gap-1 items-center">
                          <span className="w-1.5 h-1.5 rounded-full bg-white/40 animate-bounce" />
                          <span className="w-1.5 h-1.5 rounded-full bg-white/40 animate-bounce" style={{ animationDelay: "150ms" }} />
                          <span className="w-1.5 h-1.5 rounded-full bg-white/40 animate-bounce" style={{ animationDelay: "300ms" }} />
                        </div>
                      </div>
                    </div>
                  ) : null
                )}
            </div>

            {/* Input bar */}
            <div className="px-4 py-3 bg-[#0f0f12] border-t border-white/5">
              <div className="flex items-center gap-2 px-4 py-3 rounded-full bg-white/5 border border-white/10">
                <span className="text-lg">😊</span>
                <input
                  type="text"
                  placeholder="Escribe un mensaje..."
                  readOnly
                  className="flex-1 bg-transparent outline-none text-white/60 text-sm"
                />
                <span className="text-white/40">→</span>
              </div>
            </div>
          </div>

          <div className="text-center mt-8">
            <button
              onClick={resetDemo}
              className="text-sm text-violet-400 hover:text-violet-300 transition-colors underline"
            >
              Reiniciar demo
            </button>
          </div>
        </div>
      </section>

      {/* ════════════════════ INTEGRACIONES ════════════════════ */}
      <section className="py-24 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Se conecta con todo lo que ya usas</h2>
            <p className="text-white/50">Sin cambiar tus herramientas. Sin migrar datos. Solo conectas y el agente empieza a trabajar.</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {INTEGRATIONS.map((integ) => (
              <div
                key={integ.name}
                className="p-6 rounded-2xl border border-white/10 bg-white/[0.02] hover:bg-white/[0.05] transition-colors text-center group cursor-default"
              >
                <div className="text-4xl mb-3">{integ.emoji}</div>
                <p className="text-sm font-medium text-white/70 group-hover:text-white transition-colors">{integ.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ════════════════════ CASOS DE USO ════════════════════ */}
      <section className="py-24 px-4 bg-gradient-to-b from-transparent via-violet-900/5 to-transparent">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Todo lo que Badgie gestiona</h2>
            <p className="text-white/50">Desde operaciones hasta finanzas e inteligencia de negocio</p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {USE_CASES.map((useCase, i) => (
              <div
                key={i}
                className="p-8 rounded-2xl border border-white/10 bg-white/[0.02] hover:bg-white/[0.04] transition-all group"
              >
                <div className="flex items-start gap-4">
                  <span className="text-5xl">{useCase.emoji}</span>
                  <div className="flex-1">
                    <div className="inline-flex items-center gap-2 mb-3">
                      <h3 className="text-xl font-semibold text-white">{useCase.title}</h3>
                      <span className="px-2 py-1 rounded-full text-xs bg-white/10 text-white/60">{useCase.badge}</span>
                    </div>
                    <p className="text-white/60 leading-relaxed">{useCase.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ════════════════════ PRICING ════════════════════ */}
      <section className="py-24 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Planes simples y transparentes</h2>
            <p className="text-white/50">Elige el que se ajusta a tu escuela. Sin sorpresas. Sin contratos largos.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                name: "Starter",
                price: "199",
                desc: "Para escuelas que empiezan a crecer",
                features: ["1 agente IA", "Hasta 300 alumnos", "WhatsApp + Email", "Reportes semanales", "Soporte 24h"],
                highlight: false,
              },
              {
                name: "Pro",
                price: "399",
                desc: "El más popular entre nuestros clientes",
                features: ["Agentes ilimitados", "Alumnos ilimitados", "Todas las integraciones", "Badges y certificaciones", "Reportes en tiempo real", "Onboarding personalizado"],
                highlight: true,
              },
              {
                name: "Enterprise",
                price: "A medida",
                desc: "Para federaciones y grupos",
                features: ["White-label", "Integración personalizada", "SLA garantizado", "Gestor dedicado", "Formación para el equipo"],
                highlight: false,
              },
            ].map((plan, i) => (
              <div
                key={i}
                className={`rounded-2xl p-8 border transition-all ${
                  plan.highlight
                    ? "border-violet-500/50 bg-gradient-to-b from-violet-500/10 to-transparent ring-2 ring-violet-500/20 scale-105"
                    : "border-white/10 bg-white/[0.02]"
                }`}
              >
                <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                <div className="mb-4">
                  <span className="text-4xl font-bold text-violet-400">{plan.price}</span>
                  <span className="text-white/50">/mes</span>
                </div>
                <p className="text-sm text-white/50 mb-6">{plan.desc}</p>
                <button className={`w-full py-3 rounded-full font-semibold mb-6 transition-all ${plan.highlight ? "bg-gradient-to-r from-violet-600 to-purple-600 hover:from-violet-500 hover:to-purple-500 text-white" : "border border-white/20 hover:border-white/40 text-white"}`}>
                  Solicitar demo
                </button>
                <ul className="space-y-3 text-sm">
                  {plan.features.map((f, j) => (
                    <li key={j} className="flex items-center gap-2 text-white/60">
                      <CheckCircle className="w-4 h-4 text-violet-400 flex-shrink-0" />
                      {f}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ════════════════════ CTA FINAL ════════════════════ */}
      <section className="py-24 px-4 text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-5xl font-bold mb-6">Tu escuela deportiva merece un Director General que no descansa</h2>
          <p className="text-xl text-white/60 mb-12">Badgie no es un software más. Es tu aliado en la gestión diaria de tu club.</p>
          <button className="px-10 py-5 bg-gradient-to-r from-violet-600 to-purple-600 hover:from-violet-500 hover:to-purple-500 rounded-full font-semibold text-lg transition-all hover:shadow-lg hover:shadow-violet-500/25">
            Empieza ahora 🚀
          </button>
        </div>
      </section>

      {/* ════════════════════ FOOTER ════════════════════ */}
      <footer className="border-t border-white/5 py-12 px-4">
        <div className="max-w-6xl mx-auto text-center text-white/50 text-sm">
          <p>© 2026 Badgie. Agente de IA para escuelas deportivas.</p>
          <p>Powered by Badgie 💪</p>
        </div>
      </footer>
    </div>
  );
}
