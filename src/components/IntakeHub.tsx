import React, { useState } from "react";
import { Phone, Mail, MapPin, MessageSquare, ShieldCheck, Sparkles, Send, Check } from "lucide-react";
import { SupportedLang, translations } from "../lib/translations";

interface IntakeHubProps {
  lang?: SupportedLang;
}

export default function IntakeHub({ lang = "EN" }: IntakeHubProps) {
  const t = translations[lang].intake;
  const isRtl = lang === "AR";

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    degree: "Master",
    country: "Saudi Arabia",
    background: ""
  });
  const [success, setSuccess] = useState(false);

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
    if (!formData.name || !formData.email) return;

    // Compile dynamic message for WhatsApp
    const prefix = "https://wa.me/22896767871";
    let textMsg = "";

    if (lang === "FR") {
      textMsg = encodeURIComponent(
        `Bonjour Office Abdou Rachid !\n\n` +
        `Mon nom est *${formData.name}* (Email: ${formData.email}).\n` +
        `Je suis intéressé par une bourse de *${formData.degree === "Bachelor" ? t.bachelor : formData.degree === "Master" ? t.master : t.phd}* au pays : *${getLocalizedCountryName(formData.country)}*.\n` +
        `Mon parcours scolaire : ${formData.background || "N/A"}.\n\n` +
        `S'il vous plaît, fournissez-moi des conseils d'admission et l'assistance !`
      );
    } else if (lang === "AR") {
      textMsg = encodeURIComponent(
        `مرحباً مكتب عبد الرشيد للاستشارات الأكاديمية!\n\n` +
        `اسمي الكامل: *${formData.name}* (البريد الإلكتروني: ${formData.email}).\n` +
        `أنا مهتم بالتقديم والحصول على منحة لدراسة *${formData.degree === "Bachelor" ? t.bachelor : formData.degree === "Master" ? t.master : t.phd}* في دولة: *${getLocalizedCountryName(formData.country)}*.\n` +
        `مؤهلاتي العلمية الحالية: ${formData.background || "لا يوجد"}.\n\n` +
        `يرجى تزويدي بالاستشارة الأكاديمية والمساعدة في التقديم المباشر!`
      );
    } else {
      textMsg = encodeURIComponent(
        `Hello Office Abdou Rachid!\n\n` +
        `My name is *${formData.name}* (Email: ${formData.email}).\n` +
        `I am interested in applying for a *${formData.degree}* degree scholarship in *${formData.country}*.\n` +
        `My academic background: ${formData.background || "N/A"}.\n\n` +
        `Please provide me with consultation syllabus and assistance!`
      );
    }

    const fullUrl = `${prefix}?text=${textMsg}`;
    
    // Smooth simulated workflow success
    setSuccess(true);
    setTimeout(() => {
      window.open(fullUrl, "_blank", "noopener,noreferrer");
      setSuccess(false);
    }, 1500);
  };

  return (
    <div className={`grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch ${isRtl ? "text-right" : "text-left"}`} id="students-intake-form-box">
      
      {/* Left Column: Direct Access Details & Google Maps Placeholder */}
      <div className="lg:col-span-5 space-y-6 md:space-y-8 text-left bg-academy-navy text-academy-ivory rounded-3xl p-6 sm:p-8 flex flex-col justify-between shadow-xl relative overflow-hidden">
        
        {/* Background ambient orbs */}
        <div className="absolute -left-20 -top-20 w-48 h-48 bg-academy-gold/10 rounded-full blur-2xl"></div>

        <div className={`space-y-6 relative z-10 ${isRtl ? "text-right" : "text-left"}`}>
          <div>
            <span className="text-xs uppercase font-extrabold tracking-widest text-academy-gold">
              {t.contactBadge}
            </span>
            <h4 className="text-2xl md:text-3xl font-display font-medium text-white leading-tight mt-1">
              {t.contactTitle}
            </h4>
            <p className="text-xs text-white/70 mt-1 leading-relaxed font-semibold">
              {t.contactDesc}
            </p>
          </div>

          <hr className="border-white/10" />

          {/* Contact Methods list */}
          <div className="space-y-4">
            
            {/* Cell 1: Telephone / Whats */}
            <div className={`flex items-start gap-4 ${isRtl ? "flex-row-reverse" : ""}`}>
              <div className="w-10 h-10 rounded-xl bg-white/10 text-academy-gold flex items-center justify-center shrink-0 border border-white/5">
                <Phone className="w-5 h-5" />
              </div>
              <div className={isRtl ? "text-right" : "text-left"}>
                <span className="text-[10px] text-white/50 uppercase font-sans font-bold block">{t.hotlinesLabel}</span>
                <a 
                  href="https://wa.me/22896767871" 
                  target="_blank" 
                  rel="noreferrer" 
                  className="font-mono text-sm font-bold text-academy-gold hover:underline block"
                >
                  🟢 +228 96767871 (WhatsApp Primary)
                </a>
                <a 
                  href="tel:+994553545942" 
                  className="font-mono text-xs font-semibold text-white/85 hover:underline block mt-0.5"
                >
                  📞 +994 553545942 (Academic Advisor)
                </a>
              </div>
            </div>

            {/* Cell 2: Email */}
            <div className={`flex items-start gap-4 ${isRtl ? "flex-row-reverse" : ""}`}>
              <div className="w-10 h-10 rounded-xl bg-white/10 text-academy-gold flex items-center justify-center shrink-0 border border-white/5">
                <Mail className="w-5 h-5" />
              </div>
              <div className={`min-w-0 ${isRtl ? "text-right" : "text-left"}`}>
                <span className="text-[10px] text-white/50 uppercase font-sans font-bold block">{t.officialComms}</span>
                <a 
                  href="mailto:officeabdourachid@gmail.com" 
                  className="text-sm font-bold text-white hover:underline truncate block"
                >
                  officeabdourachid@gmail.com
                </a>
              </div>
            </div>

            {/* Cell 3: Location */}
            <div className={`flex items-start gap-4 ${isRtl ? "flex-row-reverse" : ""}`}>
              <div className="w-10 h-10 rounded-xl bg-white/10 text-academy-gold flex items-center justify-center shrink-0 border border-white/5">
                <MapPin className="w-5 h-5" />
              </div>
              <div className={isRtl ? "text-right" : "text-left"}>
                <span className="text-[10px] text-white/50 uppercase font-sans font-bold block">{t.headquartersTitle}</span>
                <p className="text-xs text-white/85 leading-relaxed font-semibold">
                  {t.headquartersAddress}
                </p>
              </div>
            </div>

          </div>
        </div>

        {/* Dynamic Trust bar */}
        <div className={`pt-6 border-t border-white/10 mt-8 flex items-center gap-2.5 text-xs text-white/80 font-medium relative z-10 ${isRtl ? "flex-row-reverse text-right" : ""}`}>
          <ShieldCheck className="w-5 h-5 text-academy-emerald shrink-0" />
          <span>{t.trustBar}</span>
        </div>

      </div>

      {/* Right Column: Mini Intake Form */}
      <div className="lg:col-span-7 flex">
        <div className="w-full bg-white border border-academy-navy/10 rounded-3xl p-6 sm:p-8 flex flex-col justify-between shadow-[0_12px_45px_0_rgba(0,33,71,0.03)] text-left relative">
          
          <div className="space-y-5">
            <div className={isRtl ? "text-right" : "text-left"}>
              <span className="text-[10px] text-academy-gold font-bold uppercase tracking-widest block font-sans">
                {t.formBadge}
              </span>
              <h4 className="text-2xl md:text-3xl font-display font-medium text-academy-navy mt-0.5">
                {t.formTitle}
              </h4>
              <p className="text-xs text-academy-slate/85 mt-1 leading-relaxed">
                {t.formDesc}
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className={`space-y-1 text-xs ${isRtl ? "text-right" : "text-left"}`}>
                <label className="text-academy-navy font-bold block uppercase tracking-wider">{t.fullNameLabel}</label>
                <input
                  type="text"
                  required
                  placeholder={t.fullNamePlaceholder}
                  value={formData.name}
                  onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                  className="w-full bg-academy-light-bg border border-academy-navy/10 rounded-xl px-4 py-3 text-sm text-academy-navy focus:outline-none focus:border-academy-gold transition-colors font-semibold"
                />
              </div>

              <div className={`space-y-1 text-xs ${isRtl ? "text-right" : "text-left"}`}>
                <label className="text-academy-navy font-bold block uppercase tracking-wider">{t.emailLabel}</label>
                <input
                  type="email"
                  required
                  placeholder={t.emailPlaceholder}
                  value={formData.email}
                  onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                  className="w-full bg-academy-light-bg border border-academy-navy/10 rounded-xl px-4 py-3 text-sm text-academy-navy focus:outline-none focus:border-academy-gold transition-colors font-semibold"
                  referrerPolicy="no-referrer"
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className={`space-y-1 text-xs ${isRtl ? "text-right" : "text-left"}`}>
                  <label className="text-academy-navy font-bold block uppercase tracking-wider">{t.desiredDegreeLabel}</label>
                  <select
                    value={formData.degree}
                    onChange={(e) => setFormData(prev => ({ ...prev, degree: e.target.value }))}
                    className="w-full bg-academy-light-bg border border-academy-navy/10 rounded-xl px-4 py-3 text-xs md:text-sm text-academy-navy font-bold focus:outline-none focus:border-academy-gold transition-colors h-[46px]"
                  >
                    <option value="Bachelor">{t.bachelor}</option>
                    <option value="Master">{t.master}</option>
                    <option value="PhD">{t.phd}</option>
                  </select>
                </div>

                <div className={`space-y-1 text-xs ${isRtl ? "text-right" : "text-left"}`}>
                  <label className="text-academy-navy font-bold block uppercase tracking-wider">{t.preferredCountryLabel}</label>
                  <select
                    value={formData.country}
                    onChange={(e) => setFormData(prev => ({ ...prev, country: e.target.value }))}
                    className="w-full bg-academy-light-bg border border-academy-navy/10 rounded-xl px-4 py-3 text-xs md:text-sm text-academy-navy font-bold focus:outline-none focus:border-academy-gold transition-colors h-[46px]"
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

              <div className={`space-y-1 text-xs font-sans ${isRtl ? "text-right" : "text-left"}`}>
                <label className="text-academy-navy font-bold block uppercase tracking-wider">{t.academicBgLabel}</label>
                <textarea
                  placeholder={t.academicBgPlaceholder}
                  value={formData.background}
                  onChange={(e) => setFormData(prev => ({ ...prev, background: e.target.value }))}
                  className="w-full bg-academy-light-bg border border-academy-navy/10 rounded-xl px-4 py-2.5 text-xs text-academy-navy focus:outline-none focus:border-academy-gold transition-colors min-h-[60px] font-semibold"
                />
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  disabled={success}
                  className="w-full btn bg-academy-gold text-academy-navy hover:bg-academy-navy hover:text-white py-3.5 px-5 text-sm font-bold tracking-wider uppercase rounded-xl flex items-center justify-center gap-2 group transition-all duration-300 shadow-md cursor-pointer disabled:opacity-50"
                >
                  {success ? (
                    <>
                      <Check className="w-5 h-5 text-academy-emerald animate-bounce shrink-0" />
                      <span>{t.redirecting}</span>
                    </>
                  ) : (
                    <>
                      <MessageSquare className="w-4 h-4 fill-current stroke-none shrink-0" />
                      <span>{t.submitBtn}</span>
                    </>
                  )}
                </button>
              </div>

            </form>
          </div>

        </div>
      </div>

    </div>
  );
}
