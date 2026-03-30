# 🤖 Badgie.ai — Landing Page

**Agente de inteligencia artificial para escuelas deportivas**

Landing page espectacular de marketing para `badgie.ai` — el agente de IA que gestiona escuelas y clubes deportivos.

## 📍 Proyecto

- **URL:** `badgie.ai` (próximamente)
- **Stack:** Next.js 15, React 19, Tailwind CSS v4, TypeScript
- **Ubicación:** `/Users/macmini/clawd/projects/webs/badgie-ai`
- **Diseño:** Dark mode, tipografía bold, animaciones CSS, glassmorphism sutil

## 🏃 Cómo correrlo

```bash
cd /Users/macmini/clawd/projects/webs/badgie-ai
npm run dev
```

Luego abre: **http://localhost:3000**

## 📦 Build

```bash
npm run build
npm run start  # Producción
```

## 🎨 Secciones de la Landing

### 1. **HERO** — "El Director General que nunca duerme"
- Tagline principal + subtítulo
- 2 CTAs: "Solicitar demo" + "Ver cómo funciona"
- Stats: 109+ escuelas, 24/7, 10× productividad, <5 min para empezar
- Fondo con orbes animadas (CSS)

### 2. **CARRUSEL DE PROMPTS** — Lo que Budgi puede hacer
- 2 filas de prompts en scroll infinito (marquee CSS)
- Una fila normal, otra al revés (reverse animation)
- Ejemplos reales: pagos, alumnos, clases, badges, emails, reportes

### 3. **DEMO CHAT** — Budgi en acción
- Simulación de conversación WhatsApp
- 6 pasos: usuario pregunta → bot responde
- Incluye typing indicator
- Botón "Ver demo en vivo" para iniciar
- Reinicio de demo disponible

### 4. **INTEGRACIONES** — Se conecta con todo lo que usas
- Grid de 12 integraciones: WhatsApp, Gmail, Google Calendar, Stripe, Badgie, Instagram, Telegram, n8n, Zoom, GolfManager, AimHarder, APIs personalizadas
- Emojis + nombres
- Hover effect sutil

### 5. **CASOS DE USO** — Todo lo que Budgi gestiona
- 4 bloques: Operaciones, Comunicación, Finanzas, Analytics
- Cada uno con emoji, título, descripción y badge de categoría
- Colores diferenciados (azul, violeta, verde, naranja)

### 6. **PRICING** — Planes simples y transparentes
- Starter: €199/mes (1 agente, 300 alumnos)
- **Pro: €399/mes** (destacado con ring y scale)
- Enterprise: A medida (federaciones)
- Cada plan con features list + CTA

### 7. **CTA FINAL** — "Tu escuela merece..."
- Frase de cierre motivadora
- Botón "Empieza ahora 🚀"

### 8. **FOOTER** — Minimal
- Copyright + "Powered by Badgie 💪"

## 🎭 Características de Diseño

| Característica | Detalles |
|---|---|
| **Modo oscuro** | Background `#050508`, texto blanco puro |
| **Gradientes** | Violeta → púrpura → rosa, sutiles y estratégicos |
| **Animaciones** | Marquee (prompts), orb-pulse (fondos), fade-in-up (contenido) |
| **Tipografía** | Bold en headers (600-700 weight), texto blanco/60 para descripciones |
| **Espacios** | Generosos: padding 24px+ en secciones, gaps de 4-6 |
| **Bordes** | White/10 a white/20, sutiles pero presentes |
| **Glassmorphism** | Fondo blanco/[0.02-0.05], borders white/10 |
| **Hover effects** | Transiciones suaves en botones, integraciones, cards |
| **Responsive** | Mobile-first, adapta a tablets y desktop |

## 📝 Personalización

### Cambiar copys
En `app/page.tsx`, busca las constantes de datos:
- `PROMPTS_ROW1` / `PROMPTS_ROW2` — ejemplos de prompts
- `INTEGRATIONS` — logos + nombres
- `USE_CASES` — casos de uso
- `DEMO_STEPS` — conversación demo
- Planes de pricing en la sección final

### Cambiar colores
En `globals.css` y `app/page.tsx`:
- Primary: violeta-600 / púrpura-600
- Accents: verde (finanzas), azul (operaciones), naranja (analytics)
- Buscar `bg-gradient-to-r from-violet-600 to-purple-600` para cambiar gradiente principal

### Cambiar animaciones
En `globals.css`:
- `@keyframes marquee` — scroll horizontal de prompts
- `@keyframes orb-pulse` — pulso de fondos
- `@keyframes fade-in-up` — entrada de contenido

### Añadir formulario real
Reemplazar los botones "Solicitar demo" con un form real. Opciones:
1. **Formspree** (simplest): `<form action="https://formspree.io/f/YOUR_ID" method="POST">`
2. **n8n webhook** — copiar URL de trigger y apuntar ahí
3. **Supabase** — INSERT en tabla `demo_requests`

## 🚀 Despliegue

### Vercel (recomendado)
```bash
npm install -g vercel
vercel
```

### Cambiar dominio en Vercel
1. Comprar `badgie.ai`
2. En Vercel Project → Settings → Domains
3. Añadir `badgie.ai` y apuntar nameservers

### Cloudflare (DNS)
1. Cambiar DNS del dominio a Cloudflare
2. En Vercel: añadir dominio
3. Seguir instrucciones Vercel para CNAME

## 📊 Optimizaciones Realizadas

- ✅ CSS animations en vez de librerías (Framer motion no needed)
- ✅ Single-file page.tsx (no fragmentación de componentes que entorpecen build)
- ✅ Data inlined (prompts, integraciones, cases) para rapidez
- ✅ Tailwind CSS v4 nativo (sin custom config necesario)
- ✅ Responsive mobile-first
- ✅ Semántica HTML correcta (sections, roles ARIA)
- ✅ Performance: ~95 Lighthouse score esperado

## 📈 Próximos pasos

1. ✅ Diseño landing — **HECHO**
2. ⬜ Formulario de demo real (n8n webhook)
3. ⬜ Integración Google Analytics
4. ⬜ Open Graph images (social share preview)
5. ⬜ Despliegue en Vercel
6. ⬜ Apuntar dominio badgie.ai
7. ⬜ A/B testing de CTAs
8. ⬜ Refinar copy según feedback

## 🎯 Decisiones de Diseño

**¿Por qué oscuro?**
- Agentes de IA (Claude, ChatGPT) usan dark mode
- Reduce fatiga visual
- Transmite tech, premium, sofisticación

**¿Por qué sin imágenes stock?**
- Evita lo genérico de Unsplash
- Gradientes + iconos + CSS es más moderno
- Carga más rápido
- Más control creativo

**¿Por qué una sola página?**
- Landing page debe ser scroll-to-call
- Menos clics = más conversiones
- Faster load
- Fácil de mantener

**¿Por qué Tailwind en vez de custom CSS?**
- Velocidad de desarrollo
- Consistencia visual automática
- Responsive built-in
- Fácil de tweakear

---

**Creado:** 24 Marzo 2026 | **Diseño:** Coach + Opus 4.6 | **Stack:** Next.js 15 + React 19 + Tailwind v4
