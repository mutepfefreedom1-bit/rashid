import React from "react";
import { Award, Compass, MessageSquareCode, Quote, CheckCircle2 } from "lucide-react";
import { SupportedLang, translations } from "../lib/translations";

interface DirectorBioProps {
  lang?: SupportedLang;
}

export default function DirectorBio({ lang = "EN" }: DirectorBioProps) {
  const t = translations[lang].director;
  const isRtl = lang === "AR";

  const credentials = [
    {
      degree: t.degrees.linguistics,
      institution: t.institutions.khazar,
      badge: lang === "FR" ? "Linguistique" : lang === "AR" ? "اللسانيات" : "Linguistics"
    },
    {
      degree: t.degrees.arabic,
      institution: t.institutions.qatar,
      badge: lang === "FR" ? "Arabe Classique" : lang === "AR" ? "العربية الفصحى" : "Classical Arabic"
    },
    {
      degree: t.degrees.literature,
      institution: t.institutions.lome,
      badge: lang === "FR" ? "Lettres Anglaises" : lang === "AR" ? "الأدب الإنجليزي" : "English Studies"
    }
  ];

  return (
    <div className={`grid grid-cols-1 lg:grid-cols-12 gap-12 items-center ${isRtl ? "text-right" : "text-left"}`} id="director-interview-fold">
      
      {/* Left Column: Asymmetrical Warm Professional Image Box */}
      <div className="lg:col-span-5 relative group flex justify-center lg:justify-start">
        
        {/* Background decorative shadows/lines resembling elegant marble/bronze frame */}
        <div className="absolute inset-4 border border-academy-gold/40 rounded-3xl -z-10 translate-x-3 translate-y-3 transition-transform group-hover:translate-x-2 group-hover:translate-y-2"></div>
         <div className="absolute inset-0 bg-gradient-to-tr from-academy-navy/15 to-academy-gold/5 rounded-3xl -z-10 blur-sm"></div>
        
        <div className="rounded-3xl border border-academy-navy/10 overflow-hidden shadow-2xl relative bg-white shrink-0 max-w-[380px] lg:max-w-full">
          <img 
            src="/src/assets/images/director_abdou_khazar_1780768617972.png" 
            alt={lang === "FR" ? "Directeur Abdou Rachid - Khazar University" : lang === "AR" ? "المستشار العام عبد الرشيد في مكتبه بجامعة خزار" : "Director Abdou Rachid - Professional Academic Advisor in Khazar University Workspace"} 
            referrerPolicy="no-referrer"
            className="w-full h-auto object-cover aspect-[3/4] transition duration-500 scale-100 hover:scale-[1.02]"
          />
          
          {/* Quick overlay tag */}
          <div className={`absolute bottom-5 inset-x-5 bg-academy-navy/90 backdrop-blur-sm border border-white/10 p-4 rounded-2xl flex items-center justify-between ${isRtl ? "flex-row-reverse" : ""}`}>
            <div className={isRtl ? "text-right" : "text-left"}>
              <strong className="text-white text-sm font-bold block leading-none">Abdou Rachid</strong>
              <span className="text-[10px] text-academy-gold font-bold tracking-widest uppercase mt-1 block">{t.authorTitle}</span>
            </div>
            <div className="p-1 px-2.5 bg-academy-gold text-academy-navy rounded font-bold font-mono text-[9px] tracking-widest uppercase">
              {t.verified}
            </div>
          </div>
        </div>

      </div>

      {/* Right Column: Bio Copy, Story, and Checklist */}
      <div className="lg:col-span-7 space-y-6 md:space-y-8">
        
        <div className="space-y-3">
          <span className={`text-xs font-bold text-academy-gold uppercase tracking-widest block flex items-center gap-2 ${isRtl ? "flex-row-reverse" : ""}`}>
            <Compass className="w-4 h-4 text-academy-gold" />
            {t.badge}
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-semibold text-academy-navy tracking-tight leading-tight">
            {t.title}
          </h2>
        </div>

        {/* Narrative Bio Story Quote */}
        <div className="relative">
          <Quote className={`absolute -top-4 w-9 h-9 text-academy-gold/10 fill-academy-gold/5 pointer-events-none ${isRtl ? "-right-5" : "-left-5"}`} />
          <blockquote className={`text-base sm:text-lg text-academy-slate leading-relaxed font-semibold italic ${isRtl ? "pr-4 border-r-2 border-academy-gold border-l-0" : "pl-4 border-l-2 border-academy-gold"}`}>
            "{t.quote}"
          </blockquote>
        </div>

        <hr className="border-academy-navy/5" />

        {/* Credentials Checklist */}
        <div className="space-y-4">
          <h4 className="text-xs font-black uppercase tracking-widest text-academy-navy/80">
            {t.credentialsTitle}
          </h4>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {credentials.map((cred, i) => (
              <div 
                key={i}
                className={`p-4 bg-white hover:bg-academy-navy/5 border border-academy-navy/5 rounded-xl transition-all duration-300 flex items-start gap-3 shadow-sm hover:shadow-md ${isRtl ? "flex-row-reverse text-right" : "text-left"}`}
              >
                <div className="w-8 h-8 rounded-lg bg-academy-navy/5 border border-academy-navy/10 flex items-center justify-center text-academy-navy shrink-0 mt-0.5">
                  <span className="text-sm">🎓</span>
                </div>
                <div className="space-y-0.5 min-w-0">
                  <div className="flex items-center gap-1.5">
                    <strong className="text-xs text-academy-navy font-black tracking-tight block">
                      {cred.degree}
                    </strong>
                  </div>
                  <p className="text-[11px] text-academy-slate/85">{cred.institution}</p>
                </div>
              </div>
            ))}

            {/* Core Philosophy Badge Block */}
            <div className={`p-4 bg-academy-navy text-academy-ivory border border-academy-gold/20 rounded-xl flex items-center gap-3 relative overflow-hidden ${isRtl ? "flex-row-reverse text-right" : "text-left"}`}>
              <div className="absolute -right-6 -bottom-6 w-16 h-16 bg-academy-gold/10 rounded-full blur-xl"></div>
              <div className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center shrink-0">
                <Quote className="w-4 h-4 text-academy-gold fill-academy-gold/10" />
              </div>
              <div className="space-y-0.5 relative z-10">
                <span className="text-[10px] text-academy-gold font-bold uppercase tracking-widest block">{t.philosophyTitle}</span>
                <p className="text-xs font-semibold font-display italic">{t.philosophyQuote}</p>
              </div>
            </div>
          </div>
        </div>

        <div className="pt-2">
          <div className={`flex items-center gap-2.5 text-xs text-academy-slate/85 font-semibold bg-academy-navy/5 border border-academy-navy/10 px-4 py-3 rounded-xl w-fit ${isRtl ? "flex-row-reverse" : ""}`}>
            <CheckCircle2 className="w-4 h-4 text-academy-emerald shrink-0" />
            {t.directConsultNote}
          </div>
        </div>

      </div>

    </div>
  );
}
