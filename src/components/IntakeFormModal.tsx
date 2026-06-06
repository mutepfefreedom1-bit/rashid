import React, { useState } from "react";
import { X, Check, Compass, MessageSquare, ShieldCheck, HelpCircle } from "lucide-react";
import { SupportedLang, translations } from "../lib/translations";

interface IntakeFormModalProps {
  isOpen: boolean;
  onClose: () => void;
  selectedContext: string;
  lang?: SupportedLang;
}

export default function IntakeFormModal({ isOpen, onClose, selectedContext, lang = "EN" }: IntakeFormModalProps) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [degree, setDegree] = useState("Master");
  const [country, setCountry] = useState("Saudi Arabia");
  const [loading, setLoading] = useState(false);

  if (!isOpen) return null;

  const t = translations[lang].intake;
  const isRtl = lang === "AR";

  const getLocalizedCountryName = (cCode: string) => {
    if (lang === "FR") {
      if (cCode === "Saudi Arabia") return "Arabie Saoudite";
      if (cCode === "Qatar") return "Qatar";
      if (cCode === "UAE") return "Émirats Arabes Unis";
      if (cCode === "Malaysia") return "Malaisie";
      if (cCode === "Brunei") return "Brunéi";
      if (cCode === "Turkey") return "Turquie";
    } else if (lang === "AR") {
      if (cCode === "Saudi Arabia") return "المملكة العربية السعودية";
      if (cCode === "Qatar") return "دولة قطر";
      if (cCode === "UAE") return "الإمارات العربية المتحدة";
      if (cCode === "Malaysia") return "جمهورية ماليزيا";
      if (cCode === "Brunei") return "بروناي";
      if (cCode === "Turkey") return "تركيا";
    }
    return cCode;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email) return;

    setLoading(true);

    // Dynamic localized WhatsApp message
    let msg = "";
    if (lang === "FR") {
      msg = encodeURIComponent(
        `Bonjour Office Abdou Rachid !\n\n` +
        `Mon nom est *${name}* (Email: ${email}).\n` +
        `Je demande assistance pour la bourse de *${degree === "Bachelor" ? t.bachelor : degree === "Master" ? t.master : t.phd}* sous le contexte (*${selectedContext || "Demande d'inscription"}*).\n` +
        `Ma destination préférée est *${getLocalizedCountryName(country)}*.\n\n` +
        `Veuillez nous guider pour l'évaluation des diplômes et critères !`
      );
    } else if (lang === "AR") {
      msg = encodeURIComponent(
        `مرحباً مكتب عبد الرشيد للاستشارات الأكاديمية!\n\n` +
        `اسمي الكامل: *${name}* (البريد الإلكتروني: ${email}).\n` +
        `أطلب التوجيه الأكاديمي لبرنامج دراسة *${degree === "Bachelor" ? t.bachelor : degree === "Master" ? t.master : t.phd}* في سياق (*${selectedContext || "طلب توجيه عام"}*).\n` +
        `الوجهة المفضلة لي هي *${getLocalizedCountryName(country)}*.\n\n` +
        `يرجى تزويدي بالاستشارات والخطوات التالية للتسجيل المباشر !`
      );
    } else {
      msg = encodeURIComponent(
        `Hello Office Abdou Rachid!\n\n` +
        `My name is *${name}* (Email: ${email}).\n` +
        `I am requesting scholarship assistance for a *${degree}* degree under context (*${selectedContext || "Default Assistance Request"}*).\n` +
        `My preferred country destination is *${country}*.\n\n` +
        `Kindly guide me regarding credentials and next registration cycles!`
      );
    }

    const whatsappUrl = `https://wa.me/22896767871?text=${msg}`;

    setTimeout(() => {
      setLoading(false);
      window.open(whatsappUrl, "_blank", "noopener,noreferrer");
      onClose();
    }, 1200);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Background layer */}
      <div 
        className="absolute inset-0 bg-academy-navy/80 backdrop-blur-sm cursor-pointer"
        onClick={onClose}
      ></div>

      {/* Box layout */}
      <div className={`relative w-full max-w-lg rounded-3xl bg-academy-ivory border border-academy-navy/10 p-6 sm:p-8 shadow-2xl relative z-10 ${isRtl ? "text-right" : "text-left"}`}>
        
        {/* Close Button with touch size constraints (44px) */}
        <button
          onClick={onClose}
          className={`absolute top-5 w-11 h-11 flex items-center justify-center text-academy-slate hover:text-academy-navy hover:bg-academy-navy/5 rounded-xl transition-colors cursor-pointer ${isRtl ? "left-5" : "right-5"}`}
          aria-label="Close form"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="space-y-6">
          
          {/* Header context */}
          <div className="space-y-1">
            <span className="text-[10px] text-academy-gold font-bold uppercase tracking-widest block font-sans">
              {lang === "FR" ? "Catégorie : " : lang === "AR" ? "الاستشارة لـ: " : "Request Category: "} {selectedContext}
            </span>
            <h3 className="text-xl sm:text-2xl font-display font-bold text-academy-navy flex items-center gap-2">
              {lang === "FR" ? "Évaluation Pré-Admissions" : lang === "AR" ? "مراجعة معايير القبول والترشح" : "Authorized Pre-Admission Intake"}
            </h3>
            <p className="text-xs text-academy-slate/80 leading-relaxed font-semibold mt-1">
              {lang === "FR" ? "Renseignez vos objectifs d'études ci-dessous pour configurer votre dossier de bourse d'études." : lang === "AR" ? "يرجى تعبئة رغباتك الأساسية لتيسير وتجهيز ملف الترشح بدقة فورًا قبل بدء المحادثة المباشرة." : "Submit your foundational details below to prefill your credentials template before starting your private consultation."}
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            
            <div className={`space-y-1 text-xs ${isRtl ? "text-right" : "text-left"}`}>
              <label className="text-academy-navy font-bold block uppercase tracking-wider">{t.fullNameLabel}</label>
              <input
                type="text"
                required
                placeholder={t.fullNamePlaceholder}
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full bg-white border border-academy-navy/10 rounded-xl px-4 py-3 text-sm text-academy-navy focus:outline-none focus:border-academy-gold transition-colors font-semibold shadow-inner"
              />
            </div>

            <div className={`space-y-1 text-xs ${isRtl ? "text-right" : "text-left"}`}>
              <label className="text-academy-navy font-bold block uppercase tracking-wider">{t.emailLabel}</label>
              <input
                type="email"
                required
                placeholder={t.emailPlaceholder}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full bg-white border border-academy-navy/10 rounded-xl px-4 py-3 text-sm text-academy-navy focus:outline-none focus:border-academy-gold transition-colors font-semibold shadow-inner"
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className={`space-y-1 text-xs ${isRtl ? "text-right" : "text-left"}`}>
                <label className="text-academy-navy font-bold block uppercase tracking-wider">{t.desiredDegreeLabel}</label>
                <select
                  value={degree}
                  onChange={(e) => setDegree(e.target.value)}
                  className="w-full bg-white border border-academy-navy/10 rounded-xl px-4 py-3 text-xs md:text-sm text-academy-navy font-semibold focus:outline-none focus:border-academy-gold transition-colors h-[46px]"
                >
                  <option value="Bachelor">{t.bachelor}</option>
                  <option value="Master">{t.master}</option>
                  <option value="PhD">{t.phd}</option>
                </select>
              </div>

              <div className={`space-y-1 text-xs ${isRtl ? "text-right" : "text-left"}`}>
                <label className="text-academy-navy font-bold block uppercase tracking-wider">{t.preferredCountryLabel}</label>
                <select
                  value={country}
                  onChange={(e) => setCountry(e.target.value)}
                  className="w-full bg-white border border-academy-navy/10 rounded-xl px-4 py-3 text-xs md:text-sm text-academy-navy font-semibold focus:outline-none focus:border-academy-gold transition-colors h-[46px]"
                >
                  <option value="Saudi Arabia">{lang === "FR" ? "Arabie Saoudite" : lang === "AR" ? "المملكة العربية السعودية" : "Saudi Arabia"}</option>
                  <option value="Qatar">{lang === "FR" ? "Qatar" : lang === "AR" ? "دولة قطر" : "Qatar"}</option>
                  <option value="UAE">{lang === "FR" ? "Émirats Arabes Unis" : lang === "AR" ? "الإمارات العربية المتحدة" : "UAE"}</option>
                  <option value="Malaysia">{lang === "FR" ? "Malaisie" : lang === "AR" ? "ماليزيا" : "Malaysia"}</option>
                  <option value="Brunei">{lang === "FR" ? "Brunéi" : lang === "AR" ? "بروناي" : "Brunei"}</option>
                  <option value="Turkey">{lang === "FR" ? "Turquie" : lang === "AR" ? "تركيا" : "Turkey"}</option>
                </select>
              </div>
            </div>

            <div className="pt-2">
              <button
                type="submit"
                disabled={loading}
                className="w-full btn bg-academy-gold text-academy-navy hover:bg-academy-navy hover:text-white py-3.5 px-5 text-xs font-bold tracking-widest uppercase rounded-xl flex items-center justify-center gap-2 transition-all cursor-pointer disabled:opacity-50 font-sans shadow"
              >
                {loading ? (
                  <>
                    <X className="w-4 h-4 animate-spin shrink-0 text-academy-navy" />
                    <span>{lang === "FR" ? "Ouverture de WhatsApp..." : lang === "AR" ? "فتح خط التواصل الآمن..." : "Opening WhatsApp Secure Stream..."}</span>
                  </>
                ) : (
                  <>
                    <MessageSquare className="w-4 h-4 fill-current stroke-none" />
                    <span>{lang === "FR" ? "Soumettre & Ouvrir WhatsApp" : lang === "AR" ? "تأكيد البيانات والمتابعة بواتساب" : "Apply & Redirect to WhatsApp"}</span>
                  </>
                )}
              </button>
            </div>

          </form>

          <hr className="border-academy-navy/5" />

          {/* Secure details tracker */}
          <div className={`flex items-center justify-between text-[11px] text-academy-slate/75 font-semibold ${isRtl ? "flex-row-reverse text-right" : ""}`}>
            <span className={`flex items-center gap-1 ${isRtl ? "flex-row-reverse" : ""}`}>
              <ShieldCheck className="w-4 h-4 text-academy-emerald" /> 
              {lang === "FR" ? "Conseils académiques indépendants" : lang === "AR" ? "تنسيق مسبق وخدمة مستقلة" : "Independent academic counsel"}
            </span>
            <span>{lang === "FR" ? "Réponse : Immédiate" : lang === "AR" ? "الاستجابة: فورية" : "Est. Response: Immediate"}</span>
          </div>

        </div>

      </div>
    </div>
  );
}
