import React from "react";
import { GraduationCap, Mail, Phone, FileText, Facebook, Instagram, Linkedin, Twitter, Youtube, Send } from "lucide-react";
import { SupportedLang, translations } from "../lib/translations";

interface FooterNavigationProps {
  lang?: SupportedLang;
}

export default function FooterNavigation({ lang = "EN" }: FooterNavigationProps) {
  const t = translations[lang].footer;
  const n = translations[lang].nav;
  const isRtl = lang === "AR";

  return (
    <footer className="bg-academy-navy text-academy-ivory border-t border-white/5 relative overflow-hidden" id="academic-bottom-footer">
      
      {/* Decorative vertical blueprint lines */}
      <div className="absolute inset-0 blueprint-grid opacity-10 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16 relative z-10">
        <div className={`grid grid-cols-1 sm:grid-cols-2 md:grid-cols-12 gap-8 md:gap-12 ${isRtl ? "text-right" : "text-left"}`}>
          
          {/* Column A: Logo Brand and Vision statement */}
          <div className="md:col-span-4 space-y-4">
            <div className={`flex items-center gap-3 ${isRtl ? "flex-row-reverse" : ""}`}>
              <div className="w-10 h-10 rounded-xl bg-academy-gold text-academy-navy p-2 flex items-center justify-center">
                <GraduationCap className="w-6 h-6 stroke-[2]" />
              </div>
              <div className="flex flex-col">
                <span className="text-white font-black text-sm md:text-base tracking-tight leading-none uppercase">
                  Office Abdou Rachid
                </span>
                <span className="text-[10px] text-academy-gold font-bold tracking-widest uppercase mt-0.5">
                  {lang === "FR" ? "Bourses & Langues" : lang === "AR" ? "المنح والدورات اللغوية" : "Scholarship & Languages"}
                </span>
              </div>
            </div>
            <p className="text-xs text-white/70 max-w-sm leading-relaxed font-semibold">
              {t.brandVision}
            </p>
          </div>

          {/* Column B: Practical Shortcuts Links */}
          <div className="md:col-span-2 space-y-4">
            <h4 className="text-xs uppercase font-extrabold tracking-widest text-academy-gold">
              {t.shortcutsTitle}
            </h4>
            <ul className="space-y-2.5 text-xs text-white/80 font-semibold font-sans">
              <li>
                <a href="#scholarships" className="hover:text-academy-gold transition-colors">
                  {n.matrix}
                </a>
              </li>
              <li>
                <a href="#director" className="hover:text-academy-gold transition-colors">
                  {n.director}
                </a>
              </li>
              <li>
                <a href="#success" className="hover:text-academy-gold transition-colors">
                  {n.success}
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-academy-gold transition-colors">
                  {n.services}
                </a>
              </li>
            </ul>
          </div>

          {/* Column C: Social Media Accounts */}
          <div className="md:col-span-3 space-y-4">
            <h4 className="text-xs uppercase font-extrabold tracking-widest text-academy-gold">
              {t.socialTitle}
            </h4>
            <ul className="space-y-2.5 text-xs text-white/80 font-semibold font-sans">
              <li className={`flex items-center gap-2 group ${isRtl ? "flex-row-reverse" : ""}`}>
                <Facebook className="w-4 h-4 text-white/50 group-hover:text-academy-gold transition-all shrink-0" />
                <span className="text-white/60 font-medium">{lang === "FR" ? "Page Facebook" : lang === "AR" ? "صفحة فيسبوك :" : "Facebook page:"}</span>
                <a 
                  href="https://facebook.com" 
                  target="_blank" 
                  rel="noreferrer" 
                  className="hover:text-academy-gold transition-colors block truncate"
                >
                  Abdou-Rachid
                </a>
              </li>
              <li className={`flex items-center gap-2 group ${isRtl ? "flex-row-reverse" : ""}`}>
                <Instagram className="w-4 h-4 text-white/50 group-hover:text-academy-gold transition-all shrink-0" />
                <span className="text-white/60 font-medium">Instagram:</span>
                <a 
                  href="https://instagram.com/officeabdourachid" 
                  target="_blank" 
                  rel="noreferrer" 
                  className="hover:text-academy-gold transition-colors block truncate"
                >
                  @officeabdourachid
                </a>
              </li>
              <li className={`flex items-center gap-2 group ${isRtl ? "flex-row-reverse" : ""}`}>
                <Linkedin className="w-4 h-4 text-white/50 group-hover:text-academy-gold transition-all shrink-0" />
                <span className="text-white/60 font-medium">LinkedIn:</span>
                <a 
                  href="https://linkedin.com" 
                  target="_blank" 
                  rel="noreferrer" 
                  className="hover:text-academy-gold transition-colors block truncate"
                >
                  officeabdourachid
                </a>
              </li>
              <li className={`flex items-center gap-2 group ${isRtl ? "flex-row-reverse" : ""}`}>
                <Twitter className="w-4 h-4 text-white/50 group-hover:text-academy-gold transition-all shrink-0" />
                <span className="text-white/60 font-medium">Twitter:</span>
                <a 
                  href="https://twitter.com/officeabdourac1" 
                  target="_blank" 
                  rel="noreferrer" 
                  className="hover:text-academy-gold transition-colors block truncate"
                >
                  @officeabdourac1
                </a>
              </li>
              <li className={`flex items-center gap-2 group ${isRtl ? "flex-row-reverse" : ""}`}>
                <Send className="w-4 h-4 text-white/50 group-hover:text-academy-gold transition-all shrink-0" />
                <span className="text-white/60 font-medium">Telegram:</span>
                <a 
                  href="https://t.me" 
                  target="_blank" 
                  rel="noreferrer" 
                  className="hover:text-academy-gold transition-colors block truncate"
                >
                  Abdou Rachid
                </a>
              </li>
              <li className={`flex items-center gap-2 group ${isRtl ? "flex-row-reverse" : ""}`}>
                <Youtube className="w-4 h-4 text-white/50 group-hover:text-academy-gold transition-all shrink-0" />
                <span className="text-white/60 font-medium">YouTube:</span>
                <a 
                  href="https://youtube.com" 
                  target="_blank" 
                  rel="noreferrer" 
                  className="hover:text-academy-gold transition-colors block truncate"
                >
                  Dr Abdou Rachid
                </a>
              </li>
              <li className={`flex items-center gap-2 group ${isRtl ? "flex-row-reverse" : ""}`}>
                <span className="w-4 h-4 text-white/50 text-center font-bold text-[10px] select-none scale-110 leading-none inline-block font-sans group-hover:text-academy-gold transition-all shrink-0">
                  🎵
                </span>
                <span className="text-white/60 font-medium">TikTok:</span>
                <a 
                  href="https://tiktok.com" 
                  target="_blank" 
                  rel="noreferrer" 
                  className="hover:text-academy-gold transition-colors block truncate"
                >
                  Dr Abdou Rachid
                </a>
              </li>
            </ul>
          </div>

          {/* Column D: Admin locations */}
          <div className="md:col-span-3 space-y-4 text-xs">
            <h4 className="text-xs uppercase font-extrabold tracking-widest text-academy-gold">
              {t.hqTitle}
            </h4>
            <p className="text-white/80 max-w-xs leading-relaxed font-semibold">
              📍 Tokoin Doumassessé, près de l&apos;Église Baptiste à Adéwi — Lomé, Togo.
            </p>
            <div className="space-y-1.5 font-mono text-white/70 font-semibold">
              <a href="tel:+994553545942" className="block hover:text-white">
                📞 +994 553545942
              </a>
              <a href="https://wa.me/22896767871" target="_blank" rel="noreferrer" className="block hover:text-white">
                🟢 +228 96767871
              </a>
              <a href="mailto:officeabdourachid@gmail.com" className="block hover:text-white font-sans mt-1">
                ✉️ officeabdourachid@gmail.com
              </a>
            </div>
          </div>

        </div>

        <hr className="border-white/10 my-10" />

        {/* Disclaimer & Bottom Credits */}
        <div className="space-y-6 text-center text-xs">
          
          {/* Required legal text disclaimer */}
          <div className={`p-4 bg-white/5 rounded-2xl border border-white/5 max-w-4xl mx-auto flex items-start gap-3 ${isRtl ? "flex-row-reverse text-right" : "text-left"}`}>
            <div className="p-1.5 bg-academy-gold/20 text-academy-gold rounded-lg shrink-0 mt-0.5">
              <FileText className="w-4 h-4" />
            </div>
            <p className="text-[10px] md:text-xs text-white/60 leading-relaxed font-sans font-medium">
              <strong>{t.notaryDisclaimerTitle}</strong> {t.notaryDisclaimerDesc}
            </p>
          </div>

          <div className={`flex flex-col sm:flex-row items-center justify-between text-white/50 text-[10px] px-2 gap-4 ${isRtl ? "flex-row-reverse" : ""}`}>
            <span>
              &copy; {new Date().getFullYear()} {t.rightsReserved}
            </span>
            <div className="flex gap-4 font-semibold">
              <a href="#" className="hover:underline">{t.terms}</a>
              <span>&bull;</span>
              <a href="#" className="hover:underline">{t.privacy}</a>
            </div>
          </div>

        </div>

      </div>

    </footer>
  );
}
