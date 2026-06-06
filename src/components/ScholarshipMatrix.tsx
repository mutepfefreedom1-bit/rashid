import React, { useState } from "react";
import { ListChecks, Flame, ShieldAlert, Sparkles, Plane, HelpCircle, ArrowRight } from "lucide-react";
import { ScholarshipProgram } from "../types";
import { SupportedLang, translations } from "../lib/translations";

interface ScholarshipMatrixProps {
  onOpenModal: (selectedPlan?: string) => void;
  lang?: SupportedLang;
}

export default function ScholarshipMatrix({ onOpenModal, lang = "EN" }: ScholarshipMatrixProps) {
  const [activeTab, setActiveTab] = useState<"Fully Funded" | "Partially Funded">("Fully Funded");
  const [avgTicketPrice, setAvgTicketPrice] = useState(450); // Student can adjust flight estimate

  const t = translations[lang].matrix;
  const isRtl = lang === "AR";

  // Highly modular localized provisions list
  const getProvisions = (type: "Fully Funded" | "Partially Funded") => {
    if (lang === "FR") {
      return type === "Fully Funded" 
        ? [
            "Exonération totale des frais de scolarité (100%)",
            "Indemnités mensuelles d'études directes",
            "Hébergement universitaire de haut standing entièrement gratuit",
            "Billets d'avion internationaux aller-retour",
            "Honoraires de visa administratifs & accompagnement garantis"
          ]
        : [
            "Couverture totale des frais scolaires (100%)",
            "Soutien partiel aux frais de subsistance",
            "Hébergement universitaire de base gratuit",
            "Assurance maladie & accidents de base locale"
          ];
    } else if (lang === "AR") {
      return type === "Fully Funded"
        ? [
            "إعفاء كامل بنسبة 100% من الرسوم الدراسية والتسجيل",
            "مخصصات مالية شهرية معيشية للطلاب",
            "سكن جامعي رسمي مجهز ومجاني بالكامل",
            "تذاكر طيران دولية مجانية ذهاباً وإياباً",
            "تسهيلات وتغطية كاملة لرسوم تأشيرات الدخول الرسمية"
          ]
        : [
            "إعفاء كامل بنسبة 100% من الرسوم والتعليم",
            "مساهمة ومساعدات مالية معيشية جزئية",
            "سكن جامعي أساسي مجاني متوفر",
            "تأمين طبي وصحي محلي شامل للحوادث"
          ];
    } else {
      return type === "Fully Funded"
        ? [
            "100% Tuition Fees & Enrolment Costs",
            "Monthly Direct Cash Stipends for Life",
            "Free High-Standard On-Campus Accommodation",
            "Full Roundtrip International Flight Tickets",
            "Official Visa Administrative Fees & Assistances"
          ]
        : [
            "100% Tuition & Enrolment Coverage",
            "Monthly Living Expense Allowance Support",
            "Free Standard On-Campus Accommodation",
            "Local Health & Accident Medical Insurances"
          ];
    }
  };

  const getLocalizedDestinations = (destinations: string[]) => {
    return destinations.map(dest => {
      if (lang === "FR") {
        if (dest === "Saudi Arabia") return "Arabie Saoudite";
        if (dest === "Brunei") return "Brunéi";
        if (dest === "Qatar") return "Qatar";
        if (dest === "Turkey") return "Turquie";
        if (dest === "UAE") return "Émirats (EAU)";
        if (dest === "Malaysia") return "Malaisie";
      } else if (lang === "AR") {
        if (dest === "Saudi Arabia") return "المملكة العربية السعودية";
        if (dest === "Brunei") return "بروناي";
        if (dest === "Qatar") return "دولة قطر";
        if (dest === "Turkey") return "تركيا";
        if (dest === "UAE") return "الإمارات العربية المتحدة";
        if (dest === "Malaysia") return "جمهورية ماليزيا";
      }
      return dest;
    });
  };

  const programList: ScholarshipProgram[] = [
    {
      id: "p1",
      fundingType: "Fully Funded",
      destinations: ["Saudi Arabia", "Qatar", "Brunei", "Turkey"],
      whatsCovered: getProvisions("Fully Funded"),
      selfFundedNote: t.disclaimerFully,
      isPopular: true
    },
    {
      id: "p2",
      fundingType: "Partially Funded",
      destinations: ["UAE", "Malaysia"],
      whatsCovered: getProvisions("Partially Funded"),
      selfFundedNote: t.disclaimerPartially,
      isPopular: false
    }
  ];

  const currentProgram = programList.find((p) => p.fundingType === activeTab)!;

  return (
    <div className="space-y-10" id="scholarships-matrix-panel">
      
      {/* Visual selectors with high-fidelity pills */}
      <div className="flex flex-col items-center gap-4">
        <div className="flex items-center gap-2 bg-academy-navy/5 border border-academy-navy/15 px-1.5 py-1.5 rounded-full relative">
          {programList.map((prog) => (
            <button
              key={prog.id}
              onClick={() => setActiveTab(prog.fundingType)}
              className={`px-5 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider transition-all duration-300 relative cursor-pointer ${
                activeTab === prog.fundingType
                  ? "bg-academy-navy text-academy-ivory shadow-lg"
                  : "text-academy-slate/80 hover:text-academy-navy"
              }`}
            >
              {prog.fundingType === "Fully Funded" ? t.pillsFully : t.pillsPartially}
              {prog.isPopular && (
                <span className={`absolute -top-2.5 bg-academy-gold text-[#002147] text-[8px] font-black tracking-widest px-1.5 py-0.5 rounded-full uppercase border border-academy-ivory shadow ${isRtl ? "-left-2" : "-right-2"}`}>
                  {lang === "FR" ? "Populaire" : lang === "AR" ? "شائع" : "Popular"}
                </span>
              )}
            </button>
          ))}
        </div>
        <p className="text-xs text-academy-slate/75 italic">
          💡 {t.pillsSubtitle}
        </p>
      </div>

      {/* Main card grid comparison layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
        
        {/* Left Column: Interactive details of active scholarship */}
        <div className="lg:col-span-7 flex">
          <div className="w-full bg-white border border-academy-navy/10 rounded-3xl p-6 md:p-8 flex flex-col justify-between shadow-[0_12px_45px_0_rgba(0,33,71,0.03)] relative overflow-hidden">
            
            {/* Elegant visual backdrop line */}
            <span className={`absolute top-0 bottom-0 w-1.5 bg-academy-navy ${isRtl ? "right-0" : "left-0"}`}></span>

            <div className={`space-y-6 ${isRtl ? "text-right" : "text-left"}`}>
              
              {/* Header block with program information */}
              <div className="flex justify-between items-start gap-4">
                <div className={isRtl ? "text-right" : "text-left"}>
                  <span className="text-[10px] text-academy-gold font-bold uppercase tracking-widest block">
                    {lang === "FR" ? "Comparatif des bourses" : lang === "AR" ? "مصفوفة توحيد المنح" : "Funding Matrix Comparison"}
                  </span>
                  <h3 className="text-2xl md:text-3xl font-display font-bold text-academy-navy mt-1">
                    {activeTab === "Fully Funded" ? t.pillsFully : t.pillsPartially}
                  </h3>
                </div>
                <div className="p-3 bg-academy-navy/5 rounded-xl border border-academy-navy/10 text-academy-navy shrink-0">
                  <ListChecks className="w-5 h-5 stroke-[2]" />
                </div>
              </div>

              <hr className="border-academy-navy/5" />

              {/* Destination list */}
              <div className="space-y-2">
                <span className={`text-xs text-academy-slate/75 font-semibold block uppercase tracking-wider ${isRtl ? "text-right" : "text-left"}`}>
                  {t.destinationsLabel}
                </span>
                <div className="flex flex-wrap gap-2">
                  {getLocalizedDestinations(currentProgram.destinations).map((dest) => (
                    <span 
                      key={dest}
                      className="px-3 py-1.5 rounded-lg text-xs font-bold text-academy-navy bg-academy-navy/5 border border-academy-navy/10 flex items-center gap-1.5 hover:border-academy-gold transition-colors"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-academy-gold"></span>
                      {dest}
                    </span>
                  ))}
                </div>
              </div>

              {/* What is covered bullet checklist */}
              <div className={`space-y-3.5 ${isRtl ? "text-right" : "text-left"}`}>
                <span className="text-xs text-academy-slate/75 font-semibold block uppercase tracking-wider">
                  {t.provisionsLabel}
                </span>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {currentProgram.whatsCovered.map((item, idx) => (
                    <li key={idx} className={`flex gap-2.5 items-start ${isRtl ? "flex-row-reverse text-right" : "text-left"}`}>
                      <span className="w-5 h-5 rounded-full bg-academy-gold/10 text-academy-navy border border-academy-gold/20 flex items-center justify-center font-bold text-xs shrink-0 mt-0.5">
                        ✓
                      </span>
                      <span className="text-xs md:text-sm text-academy-slate leading-snug">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

            </div>

            {/* Disclaimer & button */}
            <div className={`pt-6 border-t border-academy-navy/5 mt-8 flex flex-col sm:flex-row items-center justify-between gap-4 ${isRtl ? "flex-row-reverse" : ""}`}>
              <div className={`flex items-start gap-2 max-w-md ${isRtl ? "text-right" : "text-left"}`}>
                <ShieldAlert className="w-4 h-4 text-academy-gold shrink-0 mt-0.5" />
                <p className="text-[11px] text-academy-slate/80 leading-relaxed font-semibold">
                  {currentProgram.selfFundedNote}
                </p>
              </div>

              <button
                onClick={() => onOpenModal(lang === "FR" ? `Bourse ${activeTab} Consult` : lang === "AR" ? `استشارة منحة ${activeTab}` : `${currentProgram.fundingType} Scholarship Consult`)}
                className="w-full sm:w-auto px-5 py-3 bg-academy-navy hover:bg-academy-navy-light text-academy-ivory font-bold text-xs uppercase rounded-lg tracking-wider transition-all shrink-0 cursor-pointer"
              >
                {t.requestBtn}
              </button>
            </div>

          </div>
        </div>

        {/* Right Column: Visual Academic Estimate calculator based on destinations */}
        <div className="lg:col-span-4 flex">
          <div className="w-full bg-academy-navy text-academy-ivory rounded-3xl p-6 md:p-8 flex flex-col justify-between shadow-[0_12px_45px_rgba(0,33,71,0.12)] relative overflow-hidden text-left">
            
            {/* Background design accents */}
            <div className="absolute -right-24 -bottom-24 w-48 h-48 bg-academy-gold/10 rounded-full blur-2xl"></div>

            <div className="space-y-6">
              <div className={`flex items-center gap-2 ${isRtl ? "flex-row-reverse text-right" : ""}`}>
                <span className="p-1.5 bg-academy-gold/20 text-academy-gold rounded-lg border border-academy-gold/30">
                  <Plane className="w-4 h-4" />
                </span>
                <span className="text-xs uppercase font-extrabold tracking-widest text-academy-gold">
                  {t.preTravelTitle}
                </span>
              </div>

              <div className={isRtl ? "text-right" : "text-left"}>
                <h4 className="text-xl md:text-2xl font-display font-medium text-white leading-tight">
                  {t.preTravelHeading}
                </h4>
                <p className="text-xs text-white/70 mt-1 leading-relaxed">
                  {t.preTravelDesc}
                </p>
              </div>

              <hr className="border-white/10" />

              {/* Cost Simulator for flight estimation if partially funded or prep */}
              <div className="space-y-4">
                <div className={`flex justify-between items-center text-xs ${isRtl ? "flex-row-reverse" : ""}`}>
                  <label className="text-academy-gold font-bold uppercase tracking-wider">{t.estimatedFlight}</label>
                  <span className="font-mono bg-white/10 text-white font-bold px-2 py-0.5 rounded text-xs">
                    ${avgTicketPrice} USD
                  </span>
                </div>
                
                <input
                  type="range"
                  min="200"
                  max="1200"
                  step="50"
                  value={avgTicketPrice}
                  onChange={(e) => setAvgTicketPrice(Number(e.target.value))}
                  className="w-full accent-academy-gold h-1.5 bg-white/10 rounded-lg cursor-pointer cursor-grab"
                />
                
                <div className="flex justify-between text-[10px] text-white/50 font-mono">
                  <span>$200</span>
                  <span>$700</span>
                  <span>$1,200</span>
                </div>
              </div>

              {/* Estimate Outputs */}
              <div className="space-y-3 bg-white/5 p-4 rounded-xl border border-white/10 text-xs">
                <div className={`flex justify-between ${isRtl ? "flex-row-reverse" : ""}`}>
                  <span className="text-white/75">{t.tuitionEnrol}</span>
                  <strong className="text-academy-emerald font-bold font-mono">{t.coveredLabel}</strong>
                </div>
                <div className={`flex justify-between ${isRtl ? "flex-row-reverse" : ""}`}>
                  <span className="text-white/75">{t.accommodationLabel}</span>
                  <strong className="text-academy-emerald font-bold font-mono">{t.coveredLabel}</strong>
                </div>
                <div className={`flex justify-between items-center border-t border-white/10 pt-2.5 mt-2 ${isRtl ? "flex-row-reverse" : ""}`}>
                  <span className="text-white/75 font-semibold">{t.estFlightVisa}</span>
                  <strong className="text-base text-academy-gold font-bold font-mono">
                    {activeTab === "Fully Funded" ? (lang === "FR" ? "0,00 $ (Pris en charge)" : lang === "AR" ? "0.00 $ (مغطى)" : "$0.00 (Covered)") : `$${avgTicketPrice + 120}.00`}
                  </strong>
                </div>
              </div>

              <p className={`text-[10px] text-white/60 leading-relaxed italic ${isRtl ? "text-right" : "text-left"}`}>
                {t.calcsNote}
              </p>
            </div>

            <button 
              onClick={() => onOpenModal(`${activeTab} Plan - Pre-Travel Call`)}
              className="mt-6 w-full py-3 bg-academy-gold hover:bg-white hover:text-academy-navy transition-colors text-academy-navy font-bold text-xs uppercase tracking-wider rounded-xl flex items-center justify-center gap-2 group cursor-pointer"
            >
              {t.guidanceBtn}
              <ArrowRight className={`w-4 h-4 group-hover:translate-x-1 transition-transform ${isRtl ? "rotate-180" : ""}`} />
            </button>

          </div>
        </div>

      </div>

    </div>
  );
}
