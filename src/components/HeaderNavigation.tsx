import React, { useState, useEffect } from "react";
import { GraduationCap, Menu, X, Phone, Globe, MessageSquare } from "lucide-react";
import { SupportedLang, translations } from "../lib/translations";

interface HeaderNavigationProps {
  onOpenModal: () => void;
  lang: SupportedLang;
  onChangeLang: (lang: SupportedLang) => void;
}

export default function HeaderNavigation({ onOpenModal, lang, onChangeLang }: HeaderNavigationProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const closeMenu = () => setIsOpen(false);

  const t = translations[lang].nav;
  const h = translations[lang].hero;

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled 
          ? "bg-white/95 backdrop-blur-md border-b border-academy-navy/10 py-3 shadow-[0_4px_24px_rgba(0,33,71,0.06)]" 
          : "bg-transparent py-5 border-b border-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-4">
          
          {/* Logo Brand */}
          <a href="#" className="flex items-center gap-2.5 sm:gap-3 group shrink-0">
            <div className="w-10 h-10 rounded-xl bg-academy-navy text-academy-gold p-2 flex items-center justify-center transition-transform group-hover:scale-105 shadow-[0_4px_12px_rgba(0,33,71,0.15)]">
              <GraduationCap className="w-6 h-6 stroke-[1.8]" />
            </div>
            <div className="flex flex-col text-left">
              <span className="text-academy-navy font-black text-xs sm:text-sm md:text-base tracking-tight leading-none uppercase">
                Office Abdou Rachid
              </span>
              <span className="text-[9px] md:text-[10px] text-academy-gold font-bold tracking-widest uppercase mt-0.5">
                {lang === "FR" ? "GUIDE D'ÉDUCATION GLOBALE" : lang === "AR" ? "مرشد التعليم العالمي" : "Global Education Guide"}
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden xl:flex items-center gap-6 text-xs lg:text-sm font-semibold text-academy-slate">
            <a href="#scholarships" className="hover:text-academy-gold transition-colors duration-200">
              {t.matrix}
            </a>
            <a href="#director" className="hover:text-academy-gold transition-colors duration-200">
              {t.director}
            </a>
            <a href="#success" className="hover:text-academy-gold transition-colors duration-200">
              {t.success}
            </a>
            <a href="#services" className="hover:text-academy-gold transition-colors duration-200">
              {t.services}
            </a>
          </nav>

          {/* Quick CTAs + Languages */}
          <div className="hidden lg:flex items-center gap-3 xl:gap-5">
            
            {/* Elegant Language Selector */}
            <div className="flex items-center gap-1 bg-academy-navy/5 border border-academy-navy/10 p-1.5 rounded-xl">
              {(["EN", "FR", "AR"] as const).map((langOption) => (
                <button
                  key={langOption}
                  onClick={() => onChangeLang(langOption)}
                  className={`px-2 py-1 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                    lang === langOption
                      ? "bg-academy-navy text-white shadow-sm"
                      : "text-academy-slate/80 hover:text-academy-navy hover:bg-academy-navy/5"
                  }`}
                  title={langOption === "EN" ? "English" : langOption === "FR" ? "Français" : "العربية"}
                >
                  <span className="mr-1">{langOption === "EN" ? "🇬🇧" : langOption === "FR" ? "🇫🇷" : "🇸🇦"}</span>
                  <span>{langOption}</span>
                </button>
              ))}
            </div>

            <a 
              href="https://wa.me/22896767871" 
              target="_blank" 
              rel="noreferrer"
              className="flex items-center gap-1.5 text-xs font-semibold text-academy-navy hover:text-academy-gold transition-colors"
            >
              <div className="p-1 px-2 bg-emerald-500/10 text-emerald-600 rounded-lg flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
                <span>WhatsApp</span>
              </div>
            </a>

            <button 
              onClick={onOpenModal}
              className="px-4 py-2.5 min-h-[40px] bg-academy-navy hover:bg-academy-navy-light text-academy-ivory text-xs font-bold tracking-wider uppercase rounded-lg shadow-md hover:shadow-lg transition-all duration-200 transform hover:-translate-y-0.5 cursor-pointer"
            >
              {t.applyBtn}
            </button>
          </div>

          {/* Fallback language trigger for md visual viewport only (where lg/xl is hidden) */}
          <div className="flex lg:hidden items-center gap-2">
            <div className="flex items-center bg-academy-navy/5 border border-academy-navy/10 p-1 rounded-lg shrink-0">
              {(["EN", "FR", "AR"] as const).map((langOption) => (
                <button
                  key={langOption}
                  onClick={() => onChangeLang(langOption)}
                  className={`px-1.5 py-0.5 rounded text-[10px] font-black transition-all cursor-pointer ${
                    lang === langOption
                      ? "bg-academy-navy text-white shadow-xs"
                      : "text-academy-slate hover:text-academy-navy"
                  }`}
                >
                  {langOption === "EN" ? "🇬🇧" : langOption === "FR" ? "🇫🇷" : "🇸🇦"}
                </button>
              ))}
            </div>

            {/* Mobile drawer trigger */}
            <button 
              onClick={() => setIsOpen(!isOpen)}
              className="flex items-center justify-center w-10 h-10 rounded-lg border border-academy-navy/10 text-academy-navy hover:bg-academy-navy/5 transition-colors"
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer Overlay */}
      {isOpen && (
        <div className="fixed inset-0 top-[65px] z-40 bg-white md:hidden animate-fadeIn border-t border-academy-navy/5">
          <div className="p-6 flex flex-col justify-between h-[calc(100vh-80px)] overflow-y-auto">
            <nav className="flex flex-col gap-3 text-base font-bold text-academy-slate text-left">
              <a 
                href="#scholarships" 
                onClick={closeMenu}
                className="p-3 rounded-lg hover:bg-academy-light-bg transition-all"
              >
                {t.matrix}
              </a>
              <a 
                href="#director" 
                onClick={closeMenu}
                className="p-3 rounded-lg hover:bg-academy-light-bg transition-all"
              >
                {t.director}
              </a>
              <a 
                href="#success" 
                onClick={closeMenu}
                className="p-3 rounded-lg hover:bg-academy-light-bg transition-all"
              >
                {t.success}
              </a>
              <a 
                href="#services" 
                onClick={closeMenu}
                className="p-3 rounded-lg hover:bg-academy-light-bg transition-all"
              >
                {t.services}
              </a>
            </nav>

            <div className="space-y-4 pt-4 border-t border-academy-navy/5 pb-10">
              {/* Language picker again for emphasis */}
              <div className="flex flex-col items-center gap-2 bg-academy-navy/5 p-3 rounded-xl border border-academy-navy/10">
                <span className="text-[10px] text-academy-navy font-bold uppercase tracking-wider">
                  {lang === "FR" ? "Traduire le site :" : lang === "AR" ? "ترجمة الموقع الحالي :" : "Translate Website :"}
                </span>
                <div className="flex gap-2">
                  {(["EN", "FR", "AR"] as const).map((langOption) => (
                    <button
                      key={langOption}
                      onClick={() => {
                        onChangeLang(langOption);
                      }}
                      className={`px-4 py-2 rounded-lg text-xs font-bold transition-all cursor-pointer flex items-center gap-1.5 ${
                        lang === langOption
                          ? "bg-academy-navy text-white shadow-xs"
                          : "bg-white text-academy-slate border border-academy-navy/5 hover:bg-academy-navy/5"
                      }`}
                    >
                      <span>{langOption === "EN" ? "🇬🇧 English" : langOption === "FR" ? "🇫🇷 Français" : "🇸🇦 العربية"}</span>
                    </button>
                  ))}
                </div>
              </div>

              <button 
                onClick={() => {
                  closeMenu();
                  onOpenModal();
                }}
                className="w-full bg-academy-navy hover:bg-academy-navy-light text-white py-3.5 rounded-xl font-bold flex items-center justify-center gap-2 shadow-lg transition-colors cursor-pointer"
              >
                <GraduationCap className="w-5 h-5" />
                {t.applyBtn}
              </button>
              
              <div className="flex flex-col gap-2.5 items-center justify-center text-xs text-academy-slate/85 font-semibold">
                <a 
                  href="https://wa.me/22896767871" 
                  target="_blank" 
                  rel="noreferrer" 
                  className="flex items-center gap-2 text-emerald-600 hover:underline"
                >
                  <MessageSquare className="w-4 h-4" /> {t.whatsapp}: +228 96767871
                </a>
                <a 
                  href="tel:+994553545942" 
                  className="flex items-center gap-2 text-academy-navy hover:underline"
                >
                  <Phone className="w-4 h-4" /> {t.phone}: +994 553545942
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
