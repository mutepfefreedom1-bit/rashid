import React, { useState, useEffect } from "react";
import HeaderNavigation from "./components/HeaderNavigation";
import ScholarshipMatrix from "./components/ScholarshipMatrix";
import DirectorBio from "./components/DirectorBio";
import GlobalFootprint from "./components/GlobalFootprint";
import LinguisticPrep from "./components/LinguisticPrep";
import IntakeHub from "./components/IntakeHub";
import FooterNavigation from "./components/FooterNavigation";
import IntakeFormModal from "./components/IntakeFormModal";
import { SupportedLang, translations } from "./lib/translations";
import { 
  ArrowRight, 
  Sparkles, 
  ShieldAlert, 
  GraduationCap, 
  Globe2, 
  UserCheck, 
  ChevronRight,
  BookOpen,
  Milestone
} from "lucide-react";

export default function App() {
  const [modalOpen, setModalOpen] = useState(false);
  const [modalContext, setModalContext] = useState("General Pre-Admission");
  
  // Dynamic persistent language state
  const [lang, setLang] = useState<SupportedLang>(() => {
    const saved = localStorage.getItem("abdou_rachid_lang");
    if (saved === "EN" || saved === "FR" || saved === "AR") {
      return saved as SupportedLang;
    }
    return "EN";
  });

  const handleLangChange = (newLang: SupportedLang) => {
    setLang(newLang);
    localStorage.setItem("abdou_rachid_lang", newLang);
  };

  const handleOpenModal = (context?: string) => {
    setModalContext(context || "General Core Scholarship Assistance");
    setModalOpen(true);
  };

  const isRtl = lang === "AR";
  const t = translations[lang];

  return (
    <div 
      className={`min-h-screen bg-academy-light-bg text-academy-slate flex flex-col relative ${isRtl ? "text-right" : "text-left"}`} 
      id="abdou-consultancy-workspace"
      dir={isRtl ? "rtl" : "ltr"}
    >
      
      {/* Decorative Blueprint background lines */}
      <div className="absolute inset-0 blueprint-grid opacity-30 pointer-events-none z-0"></div>

      {/* Structured Glass Navigation Header */}
      <HeaderNavigation 
        onOpenModal={() => handleOpenModal(lang === "FR" ? "Bouton d'inscription rapide" : lang === "AR" ? "زر تقديم التسجيل" : "Primary Nav Button Click")} 
        lang={lang}
        onChangeLang={handleLangChange}
      />

      <main className="relative z-10 pt-24 md:pt-32 flex-grow space-y-24 md:space-y-36">

        {/* 1. HERO SECTION (Above the fold split-screen) */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-4 md:mt-8" id="hero">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Hero text section */}
            <div className={`lg:col-span-6 space-y-6 md:space-y-8 ${isRtl ? "text-right" : "text-left"}`}>
              
              {/* Educational credibility ribbon */}
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-academy-navy/10 bg-white/80 shadow-sm text-xs font-semibold text-academy-navy select-none">
                <span className="flex h-2.5 w-2.5 rounded-full bg-academy-gold animate-pulse"></span>
                {t.hero.ribbon}
              </div>

              {/* Majestic Academic Title */}
              <div className="space-y-4">
                <h1 className="text-4xl sm:text-5xl md:text-6xl font-display font-bold text-academy-navy tracking-tight leading-[1.05]">
                  {t.hero.titleStart}
                  <span className="text-academy-gold underline decoration-academy-navy decoration-wavy underline-offset-8">
                    {t.hero.titleDecorated}
                  </span>
                  {t.hero.titleEnd}
                </h1>
                <p className="text-sm sm:text-base md:text-lg text-academy-slate/85 leading-relaxed max-w-xl font-medium">
                  {t.hero.subtitle}
                </p>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-1">
                <button 
                  onClick={() => handleOpenModal(lang === "FR" ? "Éligibilité page d'accueil" : lang === "AR" ? "التحقق من أهلية الطلب" : "Hero Main Application Call")}
                  className="px-6 py-4 bg-academy-navy hover:bg-academy-navy-light text-academy-ivory text-sm font-bold tracking-wider uppercase rounded-xl shadow-lg hover:shadow-xl transition-all duration-200 flex items-center justify-center gap-2 group cursor-pointer"
                >
                  {t.hero.checkPrequalify}
                  <ArrowRight className={`w-4 h-4 group-hover:translate-x-1 transition-transform stroke-[2] ${isRtl ? "rotate-180 group-hover:-translate-x-1" : ""}`} />
                </button>
                <a 
                  href="#scholarships" 
                  className="px-6 py-4 bg-white hover:bg-academy-navy/5 border border-academy-navy/15 text-academy-navy text-sm font-bold uppercase rounded-xl text-center transition-colors"
                >
                  {t.hero.viewMatrix}
                </a>
              </div>

              {/* Authority signals */}
              <div className={`grid grid-cols-3 gap-4 pt-6 border-t border-academy-navy/10 max-w-lg ${isRtl ? "text-right" : "text-left"}`}>
                <div className="space-y-0.5">
                  <span className="block text-2xl font-bold text-academy-navy font-mono">{t.hero.tuitionCoverage}</span>
                  <span className="block text-[10px] text-academy-slate/75 uppercase tracking-wider font-extrabold">{t.hero.tuitionDesc}</span>
                </div>
                <div className="space-y-0.5">
                  <span className="block text-2xl font-bold text-academy-gold font-mono">{t.hero.origins}</span>
                  <span className="block text-[10px] text-academy-slate/75 uppercase tracking-wider font-extrabold">{t.hero.originsDesc}</span>
                </div>
                <div className="space-y-0.5">
                  <span className="block text-2xl font-bold text-academy-navy font-mono">{t.hero.placements}</span>
                  <span className="block text-[10px] text-academy-slate/75 uppercase tracking-wider font-extrabold">{t.hero.placementsDesc}</span>
                </div>
              </div>

            </div>

            {/* Image side */}
            <div className="lg:col-span-6 flex items-center justify-center w-full relative">
              
              <div className="absolute inset-[-12px] bg-gradient-to-tr from-academy-navy/5 to-academy-gold/15 rounded-[38px] blur-sm pointer-events-none -z-10"></div>
              
              <div className="rounded-3xl border-2 border-academy-navy/10 overflow-hidden shadow-2xl relative bg-white aspect-[16/10] w-full max-w-[580px]">
                <img 
                  src="/src/assets/images/global_scholars_hero_1780765850987.png" 
                  alt={lang === "FR" ? "Groupe d'étudiants diplômés" : lang === "AR" ? "خريجون جامعيون متميزون سعيدون بفرصهم الدراسية" : "Diverse group of successful graduates cheering in front of classical university"} 
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover"
                />
                
                {/* Floating academic stat card */}
                <div className={`absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-sm border border-academy-navy/5 p-4 rounded-xl flex items-center gap-3.5 shadow-lg ${isRtl ? "flex-row-reverse text-right" : "text-left"}`}>
                  <div className="w-10 h-10 rounded-lg bg-academy-navy text-academy-gold flex items-center justify-center font-bold">
                    🎓
                  </div>
                  <div>
                    <strong className="text-academy-navy text-sm font-bold block">{t.hero.badgeTitle}</strong>
                    <span className="text-[10px] text-academy-gold font-bold uppercase tracking-wider block">{t.hero.badgeSubtitle}</span>
                  </div>
                </div>

              </div>
            </div>

          </div>
        </section>

        {/* 2. THE FUNDING MATRIX SECTION */}
        <section className="bg-white py-20 border-y border-academy-navy/5 relative scroll-mt-24" id="scholarships">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
            
            {/* Header intro */}
            <div className="text-center space-y-3 max-w-3xl mx-auto">
              <span className="text-xs font-bold text-academy-gold uppercase tracking-widest block flex items-center justify-center gap-1.5">
                <BookOpen className="w-4 h-4 text-academy-gold" />
                {t.matrix.headingBadge}
              </span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-semibold text-academy-navy tracking-tight">
                {t.matrix.headingTitle}
              </h2>
              <p className="text-xs sm:text-sm text-academy-slate/85 max-w-2xl mx-auto leading-relaxed">
                {t.matrix.headingDesc}
              </p>
            </div>

            {/* Matrix component */}
            <ScholarshipMatrix onOpenModal={handleOpenModal} lang={lang} />

          </div>
        </section>

        {/* 3. MEET THE DIRECTOR SECTION */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 scroll-mt-24" id="director">
          <DirectorBio lang={lang} />
        </section>

        {/* 4. PROVEN SUCCESS SECTIONS */}
        <section className="bg-white py-20 border-y border-academy-navy/5 scroll-mt-24" id="success">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
            
            {/* Success Section Intro Header */}
            <div className="text-center space-y-3 max-w-3xl mx-auto">
              <span className="text-xs font-bold text-academy-gold uppercase tracking-widest block flex items-center justify-center gap-1.5">
                <Milestone className="w-4 h-4 text-academy-gold" />
                {t.success.badge}
              </span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-semibold text-academy-navy tracking-tight">
                {t.success.title}
              </h2>
              <p className="text-xs sm:text-sm text-academy-slate/85 max-w-2xl mx-auto leading-relaxed">
                {t.success.desc}
              </p>
            </div>

            {/* Timelines and Badges Grid */}
            <GlobalFootprint lang={lang} />

          </div>
        </section>

        {/* 5. ACADEMIC & LINGUISTIC SERVICES */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 scroll-mt-24" id="services">
          <div className="space-y-12">
            
            {/* Services Header */}
            <div className="text-center space-y-3 max-w-3xl mx-auto">
              <span className="text-xs font-bold text-academy-gold uppercase tracking-widest block flex items-center justify-center gap-1.5">
                <BookOpen className="w-4 h-4 text-academy-gold" />
                {t.prep.badge}
              </span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-semibold text-academy-gold tracking-tight">
                {t.prep.title}
              </h2>
              <p className="text-xs sm:text-sm text-academy-slate/85 max-w-2xl mx-auto leading-relaxed">
                {t.prep.desc}
              </p>
            </div>

            {/* Dual Core Cards */}
            <LinguisticPrep lang={lang} />

          </div>
        </section>

        {/* 6. STUDENTS INTAKE HUB */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 scroll-mt-24" id="apply">
          <IntakeHub lang={lang} />
        </section>

      </main>

      {/* Structured Footer with Disclaimer */}
      <FooterNavigation lang={lang} />

      {/* Intake Pre-Qualification Modal Box */}
      <IntakeFormModal 
        isOpen={modalOpen} 
        onClose={() => setModalOpen(false)} 
        selectedContext={modalContext} 
        lang={lang}
      />

    </div>
  );
}
