import React, { useState } from "react";
import { CheckCircle2, Languages, GraduationCap, ArrowRight, HelpCircle, FileCheck2, Award, Clock } from "lucide-react";
import { SupportedLang, translations } from "../lib/translations";

interface LanguageDetail {
  code: SupportedLang;
  name: string;
  flag: string;
  slogan: string;
  description: string;
  translationChecklist: string[];
  courseHighlights: string[];
  popularExams: string[];
  notaryCoverage: string;
  duration: string;
}

interface LinguisticPrepProps {
  lang?: SupportedLang;
}

export default function LinguisticPrep({ lang = "EN" }: LinguisticPrepProps) {
  const [selectedLang, setSelectedLang] = useState<SupportedLang>("EN");

  const t = translations[lang].prep;
  const isRtl = lang === "AR";

  const getLanguageData = (): Record<SupportedLang, LanguageDetail> => {
    return {
      EN: {
        code: "EN",
        name: lang === "FR" ? "Maîtrise de la Langue Anglaise" : lang === "AR" ? "إتقان ومناهج اللغة الإنجليزية" : "English Language Mastery",
        flag: "🇬🇧",
        slogan: t.enSlogan,
        description: t.enDesc,
        translationChecklist: t.enChecklist,
        courseHighlights: t.enCourse,
        popularExams: ["IELTS Academic", "TOEFL iBT", "Duolingo English Test (DET)", "Cambridge C1/C2"],
        notaryCoverage: t.enCoverage,
        duration: lang === "FR" ? "4 à 8 semaines d’entraînement rigoureux" : lang === "AR" ? "٤ - ٨ أسابيع تدريب وتأهيل مكثف" : "4 - 8 Weeks Intensive Program"
      },
      FR: {
        code: "FR",
        name: lang === "FR" ? "Intégration Académique de Français" : lang === "AR" ? "التكامل الأكاديمي واللغة الفرنسية" : "French Academic Integration",
        flag: "🇫🇷",
        slogan: t.frSlogan,
        description: t.frDesc,
        translationChecklist: t.frChecklist,
        courseHighlights: t.frCourse,
        popularExams: ["TCF tout public", "DELF B2", "DALF C1", "TEF Academic"],
        notaryCoverage: t.frCoverage,
        duration: lang === "FR" ? "3 à 6 semaines de cycles de cours" : lang === "AR" ? "٣ - ٦ أسابيع مسارات مكثفة" : "3 - 6 Weeks Program Cycles"
      },
      AR: {
        code: "AR",
        name: lang === "FR" ? "Préparation d'Arabe Classique & Théologie" : lang === "AR" ? "تأهيل اللغة العربية الفصحى والعلوم الشرعية" : "Arabic Classical & Theology Prep",
        flag: "🇸🇦",
        slogan: t.arSlogan,
        description: t.arDesc,
        translationChecklist: t.arChecklist,
        courseHighlights: t.arCourse,
        popularExams: ["Arabic Sworn Certification", "ALPT (Arabic Proficiency)", "University Board Entrance"],
        notaryCoverage: t.arCoverage,
        duration: lang === "FR" ? "6 à 12 semaines de parcours d'arabe" : lang === "AR" ? "٦ - ١٢ أسبوع منهاج لغوي تأسيسي" : "6 - 12 Weeks Pathway Syllabus"
      }
    };
  };

  const languagesData = getLanguageData();
  const current = languagesData[selectedLang];

  return (
    <div className="space-y-12" id="linguistic-translation-suite">
      
      {/* 1. Choice Selector Pills for English, French, and Arabic */}
      <div className="flex flex-col items-center gap-4">
        <div className="flex flex-wrap justify-center items-center gap-2 bg-academy-navy/5 border border-academy-navy/10 p-1.5 rounded-2xl relative shadow-inner">
          {(["EN", "FR", "AR"] as const).map((langCode) => {
            const l = languagesData[langCode];
            const isSelected = selectedLang === langCode;
            return (
              <button
                key={langCode}
                onClick={() => setSelectedLang(langCode)}
                className={`flex items-center gap-2.5 px-4 sm:px-6 py-3 rounded-xl text-xs sm:text-sm font-bold uppercase tracking-wider transition-all duration-300 relative cursor-pointer ${
                  isSelected
                    ? "bg-academy-navy text-academy-ivory shadow-lg scale-100 animate-fadeIn"
                    : "text-academy-slate/85 hover:text-academy-navy hover:bg-academy-navy/5"
                }`}
              >
                <span className="text-lg md:text-xl">{l.flag}</span>
                <span>{langCode === "EN" ? (lang === "FR" ? "Anglais" : lang === "AR" ? "الإنجليزية" : "English") : langCode === "FR" ? (lang === "FR" ? "Français" : lang === "AR" ? "الفرنسية" : "French") : (lang === "FR" ? "Arabe" : lang === "AR" ? "العربية" : "Arabic")}</span>
                {isSelected && (
                  <span className="absolute -bottom-1 left-4 right-4 h-1 bg-academy-gold rounded-full"></span>
                )}
              </button>
            );
          })}
        </div>
        <p className="text-xs text-academy-slate/75 italic select-none">
          ✨ {t.switchNote}
        </p>
      </div>

      {/* 2. Interactive Bento Grid Comparison Box */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
        
        {/* Left Aspect: In-depth information for the active language */}
        <div className="lg:col-span-8 flex flex-col justify-between bg-white border border-academy-navy/10 rounded-3xl p-6 sm:p-8 md:p-10 shadow-[0_12px_45px_0_rgba(0,33,71,0.02)] relative overflow-hidden text-left">
          <span className="absolute top-0 left-0 right-0 h-1.5 bg-academy-gold"></span>
          
          <div className="space-y-8">
            {/* Header Title with animated flag glow */}
            <div className={`flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 ${isRtl ? "flex-row-reverse" : ""}`}>
              <div className={`space-y-1 ${isRtl ? "text-right" : "text-left"}`}>
                <span className="text-[10px] text-academy-gold font-bold uppercase tracking-widest block font-sans">
                  {lang === "FR" ? "Traductions Assermentées & Coaching" : lang === "AR" ? "الترجمة الرسمية والتطوير الدراسي" : "Sworn Translation & Academic Coaching"}
                </span>
                <h3 className="text-2xl sm:text-3xl font-display font-medium text-academy-navy leading-none flex items-center gap-3">
                  <span className="text-3xl filter drop-shadow-sm">{current.flag}</span> {current.name}
                </h3>
              </div>
              
              <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-academy-emerald/10 text-academy-emerald border border-academy-emerald/20 rounded-lg text-xs font-mono font-bold w-fit">
                <Clock className="w-3.5 h-3.5" />
                <span>{current.duration}</span>
              </div>
            </div>

            <p className={`text-xs sm:text-sm text-academy-slate/90 leading-relaxed font-semibold italic ${isRtl ? "text-right" : "text-left"}`}>
              📢 &quot;{current.slogan}&quot;
            </p>

            <p className={`text-xs sm:text-sm text-academy-slate/85 leading-relaxed ${isRtl ? "text-right" : "text-left"}`}>
              {current.description}
            </p>

            <hr className="border-academy-navy/5" />

            {/* Twin Columns Checklist (Doc translation / Intensive Course) */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
              
              {/* Pillar A: Certified Document Translations */}
              <div className="space-y-4">
                <div className={`flex items-center gap-2 ${isRtl ? "flex-row-reverse" : ""}`}>
                  <div className="p-1 px-2.5 bg-academy-navy text-academy-gold text-[10px] font-black rounded font-mono uppercase tracking-widest">
                    {t.partA}
                  </div>
                  <h4 className="text-xs font-extrabold uppercase tracking-wider text-academy-navy">{t.partATitle}</h4>
                </div>
                
                <ul className={`space-y-3.5 text-xs text-academy-slate ${isRtl ? "text-right" : "text-left"}`}>
                  {current.translationChecklist.map((item, id) => (
                    <li key={id} className={`flex gap-2.5 items-start ${isRtl ? "flex-row-reverse text-right" : "text-left"}`}>
                      <span className="w-5 h-5 rounded-full bg-academy-gold/10 text-academy-navy border border-academy-gold/20 flex items-center justify-center font-bold text-[10px] shrink-0 mt-0.5">
                        ✓
                      </span>
                      <span className="leading-relaxed font-semibold">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Pillar B: Intensive Exam Prep Course Highlights */}
              <div className="space-y-4">
                <div className={`flex items-center gap-2 ${isRtl ? "flex-row-reverse" : ""}`}>
                  <div className="p-1 px-2.5 bg-academy-gold text-[#002147] text-[10px] font-black rounded font-mono uppercase tracking-widest">
                    {t.partB}
                  </div>
                  <h4 className="text-xs font-extrabold uppercase tracking-wider text-academy-navy">{t.partBTitle}</h4>
                </div>

                <ul className={`space-y-3.5 text-xs text-academy-slate ${isRtl ? "text-right" : "text-left"}`}>
                  {current.courseHighlights.map((item, id) => (
                    <li key={id} className={`flex gap-2.5 items-start ${isRtl ? "flex-row-reverse text-right" : "text-left"}`}>
                      <span className="w-5 h-5 rounded-full bg-academy-navy/10 text-academy-navy border border-academy-navy/20 flex items-center justify-center font-bold text-[10px] shrink-0 mt-0.5">
                        ★
                      </span>
                      <span className="leading-relaxed font-bold text-academy-navy/95">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

            </div>

          </div>

          {/* Sworn Notary status badge */}
          <div className="pt-6 border-t border-academy-navy/5 mt-8 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4 bg-academy-light-bg/50 p-4 rounded-xl border border-academy-navy/5">
            <div className={`space-y-0.5 ${isRtl ? "text-right" : "text-left"}`}>
              <span className="text-[9px] uppercase font-bold text-academy-slate/60 tracking-wider">{t.validityLabel}</span>
              <p className="text-xs font-semibold text-academy-navy">
                ⚖️ {current.notaryCoverage}
              </p>
            </div>
            
            <div className="flex items-center gap-2 shrink-0 justify-center">
              <span className="p-1 px-2 bg-academy-emerald text-white rounded text-[9px] font-black uppercase tracking-widest font-mono">
                {t.validityBadge}
              </span>
            </div>
          </div>

        </div>

        {/* Right Aspect: Mini exam checker simulation/requirements widget */}
        <div className="lg:col-span-4 flex">
          <div className="w-full bg-academy-navy text-academy-ivory border border-white/5 rounded-3xl p-6 sm:p-8 flex flex-col justify-between shadow-2xl relative overflow-hidden text-left">
            <div className="absolute -right-16 -top-16 w-32 h-32 bg-academy-gold/10 rounded-full blur-xl"></div>
            
            <div className="space-y-6 relative z-10">
              <div className={`flex items-center gap-2 ${isRtl ? "flex-row-reverse" : ""}`}>
                <Languages className="w-4 h-4 text-academy-gold" />
                <span className="text-xs uppercase font-extrabold tracking-widest text-academy-gold">
                  {t.examBadge}
                </span>
              </div>

              <div className={isRtl ? "text-right" : "text-left"}>
                <h4 className="text-xl font-display font-medium text-white leading-tight">
                  {t.examTitle}
                </h4>
                <p className="text-xs text-white/70 mt-1 leading-relaxed">
                  {t.examDesc}
                </p>
              </div>

              <hr className="border-white/10" />

              {/* Dynamic Exams Badges */}
              <div className="space-y-3">
                <span className={`text-[10px] text-academy-gold font-bold uppercase tracking-wider block ${isRtl ? "text-right" : "text-left"}`}>{t.examTarget}</span>
                <div className="flex flex-wrap gap-2">
                  {current.popularExams.map((exam) => (
                    <span 
                      key={exam}
                      className="px-3 py-2 text-xs font-bold text-white bg-white/10 border border-white/10 rounded-xl hover:border-academy-gold transition-colors block"
                    >
                      🛡️ {exam}
                    </span>
                  ))}
                </div>
              </div>

              {/* Small interactive testimonial box */}
              <div className="p-4 bg-white/5 rounded-2xl border border-white/15 space-y-1.5">
                <span className={`text-[9px] uppercase font-extrabold tracking-widest text-academy-gold block ${isRtl ? "text-right" : "text-left"}`}>{t.testimonialTitle}</span>
                <p className={`text-xs text-white/90 italic leading-normal ${isRtl ? "text-right" : "text-left"}`}>
                  &quot;{t.testimonialQuote}&quot;
                </p>
                <span className={`block text-[10px] text-white/50 ${isRtl ? "text-left" : "text-right"}`}>{t.testimonialAuthor}</span>
              </div>

            </div>

            <div className="pt-6">
              <a 
                href="#apply" 
                className="w-full py-3.5 bg-academy-gold hover:bg-white hover:text-academy-navy text-academy-navy font-bold text-xs uppercase tracking-widest rounded-xl transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer shadow-lg"
              >
                <span>{t.requestCoachingBtn}</span>
                <ArrowRight className={`w-4 h-4 ${isRtl ? "rotate-180" : ""}`} />
              </a>
            </div>

          </div>
        </div>

      </div>

    </div>
  );
}
