"use client";

import { useState } from "react";

const DEMO = [
  { r: "u", t: "¿Quién no ha pagado en marzo?" },
  { r: "a", t: "He encontrado 4 alumnos con pago pendiente:\n\n• Carlos M. — 89€ (desde el 3 mar)\n• Ana P. — 89€ (desde el 5 mar)\n• Luis R. — 129€ (desde el 1 mar)\n• Sofía K. — 89€ (desde el 8 mar)\n\n¿Quieres que les envíe recordatorio por WhatsApp?" },
  { r: "u", t: "Sí, envíaselo a todos" },
  { r: "a", t: "✅ Recordatorios enviados a los 4 alumnos por WhatsApp con enlace de pago personalizado." },
];

const P1 = ["¿Quién no ha pagado la mensualidad de marzo?","Envía recordatorio al grupo avanzado","¿Cuántos alumnos nuevos este mes?","Genera el informe de asistencia semanal","Cancela la clase del jueves y avisa a todos","¿Qué profesores tienen clase mañana?","Dale el badge de cinturón azul a Marco García","¿Cuál es el alumno con más faltas este trimestre?"];
const P2 = ["¿Cuántas plazas quedan en iniciación?","Envía las notas del trimestre a los padres","¿Cuándo es la próxima competición?","Genera el parte de asistencia de hoy","¿Qué alumno lleva más tiempo sin venir?","Avisa al grupo júnior del cambio de horario","¿Cuánto hemos facturado este mes?","Crea el resumen mensual para el director"];

const FEATURES = [
  { icon: "🏃", t: "Asistencia automática", d: "Control de presencia, alertas y comunicación con padres. Todo sin levantar un dedo." },
  { icon: "💰", t: "Gestión de pagos", d: "Detecta morosos, envía recordatorios. La tesorería en piloto automático." },
  { icon: "🏅", t: "Badges y progresión", d: "Reconoce logros automáticamente. Motiva a los alumnos con insignias digitales." },
  { icon: "📊", t: "Reportes instantáneos", d: "Cualquier dato de tu escuela en segundos. Sin Excel, sin hojas de cálculo." },
  { icon: "📣", t: "Comunicaciones masivas", d: "WhatsApp, email, Telegram. Un solo mensaje llega a todos los grupos." },
  { icon: "🗓️", t: "Gestión de calendario", d: "Crea, cancela o reprograma clases. Notifica automáticamente a alumnos y profesores." },
];

const INTEGRATIONS = [
  { name: "WhatsApp", color: "#22c55e", icon: "💬" },
  { name: "Gmail", color: "#ef4444", icon: "📧" },
  { name: "Google Calendar", color: "#3b82f6", icon: "📅" },
  { name: "Stripe", color: "#6366f1", icon: "💳" },
  { name: "Badgie", color: "#f97316", icon: "🏅" },
  { name: "Instagram", color: "#ec4899", icon: "📸" },
  { name: "Telegram", color: "#0ea5e9", icon: "✈️" },
  { name: "Zoom", color: "#2563eb", icon: "🎥" },
  { name: "Notion", color: "#374151", icon: "📝" },
  { name: "Supabase", color: "#10b981", icon: "🗄️" },
];

const PLANS = [
  { name: "Starter", price: "79", desc: "Para escuelas que empiezan con IA", f: ["Hasta 100 alumnos","WhatsApp + Email","Badges básicos","Reportes semanales","Soporte email"], cta: "Empezar gratis", hi: false },
  { name: "Pro", price: "149", desc: "La solución completa para tu escuela", f: ["Alumnos ilimitados","Todos los canales","Badges avanzados","Reportes en tiempo real","Integraciones premium","Soporte prioritario"], cta: "Prueba 14 días gratis", hi: true },
  { name: "Club", price: "299", desc: "Para clubs con múltiples disciplinas", f: ["Multi-escuela","Branding personalizado","API dedicada","Onboarding asistido","SLA garantizado","Account manager"], cta: "Hablar con ventas", hi: false },
];

function MRow({ items, rev }: { items: string[]; rev?: boolean }) {
  const all = [...items, ...items];
  return (
    <div style={{overflow:'hidden',WebkitMaskImage:'linear-gradient(to right,transparent,black 8%,black 92%,transparent)',maskImage:'linear-gradient(to right,transparent,black 8%,black 92%,transparent)'}}>
      <div className={rev ? 'marquee-track-reverse' : 'marquee-track'} style={{gap:'10px',paddingBottom:'8px'}}>
        {all.map((p,i)=><span key={i} style={{flexShrink:0,background:'#fff',border:'1px solid #e5e7eb',borderRadius:'999px',padding:'8px 18px',fontSize:'13px',color:'#374151',whiteSpace:'nowrap',boxShadow:'0 1px 4px rgba(0,0,0,0.06)'}}>{p}</span>)}
      </div>
    </div>
  );
}

function Chat() {
  const [step, setStep] = useState(0);
  const msgs = DEMO.slice(0, step + 1);
  return (
    <div style={{background:'#f8fafc',border:'1px solid #e2e8f0',borderRadius:'16px',padding:'24px',boxShadow:'0 4px 12px rgba(0,0,0,0.08)',maxWidth:'500px',margin:'0 auto'}}>
      {msgs.map((m,i)=>
        <div key={i} style={{display:'flex',justifyContent:m.r==='u'?'flex-end':'flex-start',marginBottom:i<msgs.length-1?'12px':'0'}}>
          {m.r==='a' && <div style={{width:32,height:32,borderRadius:'50%',background:'linear-gradient(135deg,#f97316,#ec4899)',display:'flex',alignItems:'center',justifyContent:'center',fontSize:'16px',marginRight:'10px',flexShrink:0,alignSelf:'flex-end'}}>🏅</div>}
          <div style={{maxWidth:'80%',padding:'12px 16px',borderRadius:m.r==='u'?'18px 18px 4px 18px':'18px 18px 18px 4px',background:m.r==='u'?'#0f172a':'white',color:m.r==='u'?'#fff':'#1e293b',fontSize:'14px',lineHeight:'1.6',whiteSpace:'pre-wrap',border:m.r==='u'?'none':'1px solid #d1d5db',boxShadow:'0 1px 3px rgba(0,0,0,0.05)'}}>
            {m.t}
          </div>
        </div>
      )}
      {step < DEMO.length - 1 && (
        <button onClick={()=>setStep(step+1)} style={{marginTop:'16px',width:'100%',padding:'10px 16px',background:'#f97316',color:'white',border:'none',borderRadius:'8px',fontSize:'14px',fontWeight:'500',cursor:'pointer',transition:'background 0.2s'}}>
          ▶ Siguiente
        </button>
      )}
    </div>
  );
}

export default function Page() {
  return (
    <div style={{background:'white',color:'#0a0a0a',fontFamily:'-apple-system,BlinkMacSystemFont,"Segoe UI",system-ui,sans-serif',lineHeight:'1.6'}}>
      {/* NAV */}
      <nav style={{display:'flex',justifyContent:'space-between',alignItems:'center',padding:'16px 40px',borderBottom:'1px solid #e5e7eb',maxWidth:'1200px',margin:'0 auto',width:'100%',boxSizing:'border-box'}}>
        <div style={{fontSize:'20px',fontWeight:'700'}}>badgie.ai</div>
        <div style={{display:'flex',gap:'32px',fontSize:'14px'}}>
          <a href="#features" style={{color:'#666',textDecoration:'none',cursor:'pointer'}}>Características</a>
          <a href="#integraciones" style={{color:'#666',textDecoration:'none',cursor:'pointer'}}>Integraciones</a>
          <a href="#precios" style={{color:'#666',textDecoration:'none',cursor:'pointer'}}>Precios</a>
        </div>
        <button style={{padding:'10px 20px',background:'#f97316',color:'white',border:'none',borderRadius:'8px',fontSize:'14px',fontWeight:'600',cursor:'pointer'}}>Solicitar demo</button>
      </nav>

      {/* HERO */}
      <section style={{padding:'80px 40px',textAlign:'center',maxWidth:'1200px',margin:'0 auto',boxSizing:'border-box'}}>
        <div style={{display:'inline-block',background:'#fff5eb',border:'1px solid #fed7aa',borderRadius:'999px',padding:'8px 16px',fontSize:'13px',color:'#92400e',marginBottom:'24px',fontWeight:'500'}}>🤖 Nuevo — Agente de IA para escuelas deportivas</div>
        <h1 style={{fontSize:'72px',fontWeight:'700',lineHeight:'1.2',marginBottom:'16px'}}>Tu escuela deportiva,<br/>en piloto automático.</h1>
        <p style={{fontSize:'20px',color:'#666',maxWidth:'700px',margin:'0 auto 40px',lineHeight:'1.6'}}>Un agente de IA que gestiona asistencia, pagos, comunicaciones y badges — 24/7. Tú entrenas. Él trabaja.</p>
        <div style={{display:'flex',gap:'16px',justifyContent:'center',marginBottom:'48px'}}>
          <button style={{padding:'12px 28px',background:'#f97316',color:'white',border:'none',borderRadius:'8px',fontSize:'16px',fontWeight:'600',cursor:'pointer'}}>Solicitar demo gratis</button>
          <button style={{padding:'12px 28px',background:'transparent',color:'#0a0a0a',border:'1px solid #d1d5db',borderRadius:'8px',fontSize:'16px',fontWeight:'600',cursor:'pointer'}}>Ver cómo funciona ↓</button>
        </div>
        <div style={{fontSize:'13px',color:'#999',marginBottom:'48px'}}>109 escuelas · 50K+ alumnos · 2M+ mensajes enviados</div>
        <div style={{background:'linear-gradient(to bottom,#fff,#f9fafb)',border:'1px solid #e5e7eb',borderRadius:'16px',padding:'40px',boxShadow:'0 8px 32px rgba(0,0,0,0.08)'}}>
          <Chat />
        </div>
      </section>

      {/* MARQUEE */}
      <section style={{padding:'60px 40px',background:'#fafafa',borderTop:'1px solid #e5e7eb',borderBottom:'1px solid #e5e7eb'}}>
        <h2 style={{fontSize:'32px',fontWeight:'700',textAlign:'center',marginBottom:'40px'}}>Pregúntale cualquier cosa</h2>
        <MRow items={P1} />
        <div style={{height:'12px'}}/>
        <MRow items={P2} rev />
      </section>

      {/* FEATURES */}
      <section style={{padding:'80px 40px',maxWidth:'1200px',margin:'0 auto',boxSizing:'border-box'}}>
        <h2 style={{fontSize:'40px',fontWeight:'700',textAlign:'center',marginBottom:'48px'}}>Todo lo que tu escuela necesita</h2>
        <div style={{display:'grid',gridTemplateColumns:'repeat(auto-fit,minmax(320px,1fr))',gap:'32px'}}>
          {FEATURES.map(f=>(
            <div key={f.t} style={{padding:'24px',background:'#f8fafc',border:'1px solid #e5e7eb',borderRadius:'12px'}}>
              <div style={{fontSize:'40px',marginBottom:'12px'}}>{f.icon}</div>
              <h3 style={{fontSize:'18px',fontWeight:'600',marginBottom:'8px'}}>{f.t}</h3>
              <p style={{fontSize:'14px',color:'#666',lineHeight:'1.6'}}>{f.d}</p>
            </div>
          ))}
        </div>
      </section>

      {/* INTEGRATIONS */}
      <section style={{padding:'80px 40px',maxWidth:'1200px',margin:'0 auto',boxSizing:'border-box'}}>
        <h2 style={{fontSize:'40px',fontWeight:'700',textAlign:'center',marginBottom:'48px'}}>Se conecta con todo lo que ya usas</h2>
        <div style={{display:'grid',gridTemplateColumns:'repeat(auto-fit,minmax(140px,1fr))',gap:'16px'}}>
          {INTEGRATIONS.map(i=>(
            <div key={i.name} style={{padding:'16px',background:'#f8fafc',border:'1px solid #e5e7eb',borderRadius:'12px',textAlign:'center',fontSize:'14px',fontWeight:'500'}}>
              <div style={{fontSize:'24px',marginBottom:'8px'}}>{i.icon}</div>
              <div style={{color:'#0a0a0a'}}>{i.name}</div>
            </div>
          ))}
        </div>
      </section>

      {/* PRICING */}
      <section style={{padding:'80px 40px',background:'#fafafa',maxWidth:'1200px',margin:'0 auto',boxSizing:'border-box'}}>
        <h2 style={{fontSize:'40px',fontWeight:'700',textAlign:'center',marginBottom:'48px'}}>Precios claros, sin sorpresas</h2>
        <div style={{display:'grid',gridTemplateColumns:'repeat(auto-fit,minmax(300px,1fr))',gap:'24px'}}>
          {PLANS.map(p=>(
            <div key={p.name} style={{padding:'32px',background:p.hi?'white':'#fff',border:p.hi?'2px solid #f97316':'1px solid #e5e7eb',borderRadius:'12px',position:'relative',transform:p.hi?'scale(1.05)':'scale(1)',transition:'all 0.2s'}}>
              {p.hi && <div style={{position:'absolute',top:'-12px',left:'16px',background:'#f97316',color:'white',padding:'4px 12px',borderRadius:'20px',fontSize:'12px',fontWeight:'600'}}>Más popular</div>}
              <h3 style={{fontSize:'20px',fontWeight:'700',marginBottom:'4px'}}>{p.name}</h3>
              <p style={{fontSize:'13px',color:'#666',marginBottom:'16px'}}>{p.desc}</p>
              <div style={{fontSize:'32px',fontWeight:'700',marginBottom:'24px'}}><span style={{fontSize:'16px',color:'#666'}}>€</span>{p.price}<span style={{fontSize:'14px',color:'#666'}}>/mes</span></div>
              <ul style={{marginBottom:'24px',fontSize:'14px',lineHeight:'2'}}>
                {p.f.map(feat=><li key={feat} style={{color:'#374151'}}>✓ {feat}</li>)}
              </ul>
              <button style={{width:'100%',padding:'12px 16px',background:p.hi?'#f97316':'white',color:p.hi?'white':'#0a0a0a',border:p.hi?'none':'1px solid #d1d5db',borderRadius:'8px',fontSize:'14px',fontWeight:'600',cursor:'pointer'}}>
                {p.cta}
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section style={{padding:'60px 40px',background:'linear-gradient(135deg,#f97316,#ec4899)',textAlign:'center'}}>
        <h2 style={{fontSize:'36px',fontWeight:'700',color:'white',marginBottom:'12px'}}>¿Listo para automatizar tu escuela?</h2>
        <p style={{fontSize:'16px',color:'rgba(255,255,255,0.9)',marginBottom:'24px'}}>Únete a 109 escuelas deportivas que ya usan Badgie.ai</p>
        <button style={{padding:'12px 32px',background:'white',color:'#f97316',border:'none',borderRadius:'8px',fontSize:'16px',fontWeight:'600',cursor:'pointer'}}>Solicitar demo gratuita →</button>
      </section>

      {/* FOOTER */}
      <footer style={{padding:'40px',textAlign:'center',borderTop:'1px solid #e5e7eb',fontSize:'13px',color:'#666'}}>
        <div style={{marginBottom:'16px',fontWeight:'600',color:'#0a0a0a'}}>badgie.ai</div>
        <div style={{display:'flex',gap:'24px',justifyContent:'center',marginBottom:'16px'}}>
          <a href="#" style={{color:'#666',textDecoration:'none'}}>Características</a>
          <a href="#" style={{color:'#666',textDecoration:'none'}}>Precios</a>
          <a href="#" style={{color:'#666',textDecoration:'none'}}>Contacto</a>
        </div>
        <div>© 2026 Badgie.ai. Todos los derechos reservados.</div>
      </footer>
    </div>
  );
}