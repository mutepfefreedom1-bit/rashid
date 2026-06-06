import React, { useState } from "react";
import { SuccessBadgeItem } from "../types";
import { Milestone, Trophy, Network, Landmark, Users } from "lucide-react";
import { SupportedLang, translations } from "../lib/translations";

interface GlobalFootprintProps {
  lang?: SupportedLang;
}

export default function GlobalFootprint({ lang = "EN" }: GlobalFootprintProps) {
  const [activeTab, setActiveTab] = useState<string>("All");

  const t = translations[lang].success;
  const isRtl = lang === "AR";

  const getSuccessRecords = (): SuccessBadgeItem[] => {
    if (lang === "FR") {
      return [
        {
          id: "s1",
          country: "Arabie Saoudite",
          duration: "Promotions Placements 2019 – 2022",
          institutions: [
            "Université Islamique de Médine",
            "Université King Saud",
            "Université de Najran",
            "Université de l'Imam Mohammed bin Saud"
          ],
          desc: "Obtention de multiples bourses complètes régulières au sein des plus grandes universités publiques. Couverture totale : frais de scolarité, billet d'avion de rapatriement annuel et versement mensuel d'indemnité de vie."
        },
        {
          id: "s2",
          country: "Qatar",
          duration: "Programmes de Langue Arabe 2020 – 2022",
          studentOrigins: [
            "Togo", "Bénin", "Tchad", "Burkina Faso", "Guinée-Bissau", "Mali", "Comores", "Côte d'Ivoire", "Gambie"
          ],
          desc: "Accompagnement ciblé d'étudiants issus d'Afrique de l'Ouest et subsaharienne pour s'inscrire, se qualifier et exceller dans les programmes d'apprentissage linguistique intense financés par l'État du Qatar."
        }
      ];
    } else if (lang === "AR") {
      return [
        {
          id: "s1",
          country: "المملكة العربية السعودية",
          duration: "قبولات متميزة للأعوام ٢٠١٩ - ٢٠٢٢",
          institutions: [
            "الجامعة الإسلامية بالمدينة المنورة",
            "جامعة الملك سعود بالرياض",
            "جامعة نجران الحكومية",
            "جامعة الإمام محمد بن سعود الإسلامية"
          ],
          desc: "تأمين قبولات كاملة وتغطية تامة في أرقى الجامعات السعودية العامة بمزايا عالية الجودة للرسوم، تذاكر الطيران السنوية وتخصيص مخصصات ورواتب معيشية شهرية مجزية."
        },
        {
          id: "s2",
          country: "دولة قطر",
          duration: "دورات وبرامج اللغة العربية ٢٠٢٠ - ٢٠٢٢",
          studentOrigins: [
            "توغو", "بنين", "تشاد", "بوركينا فاسو", "غينيا بيساو", "مالي", "جزر القمر", "ساحل العاج", "غامبيا"
          ],
          desc: "تسيير ودعم المتقدمين من دول الساحل الإفريقي توغو، بنين، تشاد وغيرها للتسجيل والقبول ببرنامج دراسة اللغة العربية التنافسي الممول بالكامل بأكاديميات قطر بامتياز وتسهيل."
        }
      ];
    } else {
      return [
        {
          id: "s1",
          country: "Saudi Arabia",
          duration: "2019 – 2022 Placements",
          institutions: [
            "Islamic University of Madinah",
            "King Saud University",
            "Najran University",
            "Imam Mohammed bin Saud University"
          ],
          desc: "Secured multiple fully funded direct placements across elite public universities. Covered items include complete tuition waivers, flight routing grants, and monthly living awards."
        },
        {
          id: "s2",
          country: "Qatar",
          duration: "2020 – 2022 Arabic Programs",
          studentOrigins: [
            "Togo", "Benin", "Chad", "Burkina Faso", "Guinea-Bissau", "Mali", "Comoros", "Ivory Coast", "Gambia"
          ],
          desc: "Assisted promising scholars from diverse West African and Sub-Saharan origins to register, qualify, and excel under prestigious fully funded Arabic language acquisition programs."
        }
      ];
    }
  };

  const successRecords = getSuccessRecords();

  const filteredRecords = activeTab === "All" 
    ? successRecords 
    : successRecords.filter(r => r.country === activeTab);

  return (
    <div className="space-y-10" id="global-success-records">
      
      {/* Selector pills for countries */}
      <div className="flex flex-wrap items-center justify-center gap-2">
        <button
          onClick={() => setActiveTab("All")}
          className={`px-4 py-2 rounded-lg text-xs font-bold uppercase tracking-wider border transition-all cursor-pointer ${
            activeTab === "All"
              ? "bg-academy-navy text-academy-ivory border-academy-navy shadow-lg"
              : "bg-white text-academy-slate border-academy-navy/10 hover:border-academy-navy/25"
          }`}
        >
          {t.allLocations}
        </button>
        {successRecords.map(r => (
          <button
            key={r.id}
            onClick={() => setActiveTab(r.country)}
            className={`px-4 py-2 rounded-lg text-xs font-bold uppercase tracking-wider border transition-all cursor-pointer ${
              activeTab === r.country
                ? "bg-academy-navy text-academy-ivory border-academy-navy shadow-lg"
                : "bg-white text-academy-slate border-academy-navy/10 hover:border-academy-navy/25"
            }`}
          >
            {r.country} {t.footprintSuffix}
          </button>
        ))}
      </div>

      {/* Grid containing country badges */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
        {filteredRecords.map((rec) => (
          <div 
            key={rec.id}
            className="bg-white border border-academy-navy/10 rounded-3xl p-6 sm:p-8 flex flex-col justify-between shadow-[0_12px_45px_0_rgba(0,33,71,0.03)] hover:border-academy-gold/40 transition-all duration-300 relative overflow-hidden text-left"
          >
            {/* Top gold line accent */}
            <span className="absolute top-0 inset-x-0 h-1 bg-academy-gold"></span>

            <div className={`space-y-6 ${isRtl ? "text-right" : "text-left"}`}>
              
              {/* Header with name and calendar metric */}
              <div className={`flex justify-between items-start gap-4 ${isRtl ? "flex-row-reverse" : ""}`}>
                <div className={isRtl ? "text-right" : "text-left"}>
                  <span className="text-[10px] text-academy-gold font-bold uppercase tracking-widest block font-sans">
                    {t.cohortBadge}
                  </span>
                  <h3 className="text-xl sm:text-2xl font-display font-bold text-academy-navy mt-0.5">
                    {rec.country} {t.successTitle}
                  </h3>
                  <span className="text-xs text-academy-slate/80 font-mono font-bold mt-1 inline-block">
                    ⏱ {rec.duration}
                  </span>
                </div>
                <div className="p-3 bg-academy-gold/10 rounded-xl border border-academy-gold/20 text-academy-gold shrink-0">
                  <Trophy className="w-5 h-5 stroke-[2]" />
                </div>
              </div>

              <p className="text-xs md:text-sm text-academy-slate/85 leading-relaxed bg-academy-navy/2 p-4 rounded-xl border border-academy-navy/5 font-medium">
                {rec.desc}
              </p>

              <hr className="border-academy-navy/5" />

              {/* Specific Outcomes checklist representation */}
              {rec.institutions && (
                <div className="space-y-3 font-sans">
                  <span className={`text-[10px] text-academy-navy font-bold uppercase tracking-widest block flex items-center gap-1.5 font-sans ${isRtl ? "flex-row-reverse" : ""}`}>
                    <Landmark className="w-3.5 h-3.5 text-academy-gold" /> {t.publicInstLabel}
                  </span>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {rec.institutions.map((inst, index) => (
                      <div 
                        key={index} 
                        className={`text-xs p-2.5 font-bold text-academy-navy rounded-lg bg-academy-navy/3 border border-academy-navy/5 flex items-center gap-2 ${isRtl ? "flex-row-reverse text-right" : "text-left"}`}
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-academy-gold shrink-0"></span>
                        <span className="truncate">{inst}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {rec.studentOrigins && (
                <div className="space-y-3 font-sans">
                  <span className={`text-[10px] text-academy-navy font-bold uppercase tracking-widest block flex items-center gap-1.5 font-sans ${isRtl ? "flex-row-reverse" : ""}`}>
                    <Users className="w-3.5 h-3.5 text-academy-gold" /> {t.empowerScholarsLabel}
                  </span>
                  <div className={`flex flex-wrap gap-2 ${isRtl ? "justify-start" : ""}`}>
                    {rec.studentOrigins.map((orig, index) => (
                      <span 
                        key={index} 
                        className="px-2.5 py-1 text-xs text-academy-slate font-bold bg-academy-gold/10 border border-academy-gold/20 rounded-lg hover:bg-academy-gold hover:text-white transition-all cursor-default"
                      >
                        {orig}
                      </span>
                    ))}
                  </div>
                </div>
              )}

            </div>

            <div className={`pt-6 border-t border-academy-navy/5 mt-8 flex justify-between items-center text-xs ${isRtl ? "flex-row-reverse" : ""}`}>
              <span className={`text-academy-slate flex items-center gap-1 font-sans ${isRtl ? "flex-row-reverse" : ""}`}>
                <Network className="w-4 h-4 text-academy-gold" />
                {t.verifiedMatch}
              </span>
              <span className="text-academy-emerald font-black font-mono">
                {t.sucessRate}
              </span>
            </div>

          </div>
        ))}
      </div>

    </div>
  );
}
