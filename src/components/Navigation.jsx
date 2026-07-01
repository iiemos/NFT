import { useEffect, useRef, useState } from "react";
import { cigrLogoImage, cigrSocials, closeMenuIcon, hamburgerIcon, menuRopeImage, navItems } from "../data.js";
import { nftRouteIds } from "../router.js";
import { useI18n } from "../i18n.js";

export default function Navigation({ currentPage }) {
  const { t, locale, setLocale } = useI18n();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuButtonSpinning, setIsMenuButtonSpinning] = useState(false);
  const [isLanguageMenuOpen, setIsLanguageMenuOpen] = useState(false);
  const menuButtonTimer = useRef(null);
  const languageMenuRef = useRef(null);

  useEffect(() => {
    const updateScroll = () => setIsScrolled(window.scrollY > 20);

    updateScroll();
    window.addEventListener("scroll", updateScroll);
    return () => window.removeEventListener("scroll", updateScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMenuOpen]);

  useEffect(() => {
    const closeOnEscape = (event) => {
      if (event.key === "Escape") {
        setIsMenuOpen(false);
        setIsLanguageMenuOpen(false);
      }
    };

    window.addEventListener("keydown", closeOnEscape);
    return () => window.removeEventListener("keydown", closeOnEscape);
  }, []);

  useEffect(() => {
    const handlePointerDown = (event) => {
      if (!languageMenuRef.current) return;
      if (!languageMenuRef.current.contains(event.target)) {
        setIsLanguageMenuOpen(false);
      }
    };

    if (!isLanguageMenuOpen) return;
    document.addEventListener("pointerdown", handlePointerDown, true);
    return () => document.removeEventListener("pointerdown", handlePointerDown, true);
  }, [isLanguageMenuOpen]);

  useEffect(() => () => clearTimeout(menuButtonTimer.current), []);

  const toggleMenu = () => {
    clearTimeout(menuButtonTimer.current);
    setIsMenuButtonSpinning(true);
    setIsMenuOpen((open) => !open);
    menuButtonTimer.current = setTimeout(() => setIsMenuButtonSpinning(false), 520);
  };

  const closeMenu = () => setIsMenuOpen(false);

  const currentHashTarget = window.location.hash.split("#/")[1]?.split("#")[1] || "";
  const isActive = (item) => {
    if (item.id === "roadmap") return currentHashTarget === "roadmap";
    if (item.id === "about" && currentHashTarget === "roadmap") return false;
    return item.id === currentPage || (item.id === "nft" && nftRouteIds.includes(currentPage));
  };

  const localeOptions = [
    { value: "en", label: t("lang.en") },
    { value: "zh-TW", label: t("lang.zh") },
  ];

  const switchLanguage = (nextLocale) => {
    setLocale(nextLocale);
    setIsLanguageMenuOpen(false);
  };

  return (
    <nav className={`nav-shell cigr-nav ${isMenuOpen ? "menu-open" : ""} ${isScrolled || currentPage !== "home" ? "scrolled" : ""}`}>
      <div className="nav-inner">
        <a className="brand cigr-brand" href="#/">
          <img src={cigrLogoImage} alt="CIGR" />
        </a>
        <div className="nav-links">
          {navItems.map((item) => (
            <div className="nav-item" key={item.id}>
              <a className={isActive(item) ? "active" : ""} href={item.path}>
                {t(item.label)}
              </a>
              {item.children && (
                <div className="nav-dropdown">
                  {item.children.map((child) => (
                    <a href={child.path} key={child.label}>
                      {t(child.label)}
                    </a>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
        <div className="nav-actions">
          <div className="language-switch" ref={languageMenuRef} aria-label={t("site.languageLabel")}>
            <button
              aria-expanded={isLanguageMenuOpen}
              aria-controls="language-menu"
              aria-haspopup="menu"
              aria-label={t("site.languageLabel")}
              className={isLanguageMenuOpen ? "language-trigger is-open" : "language-trigger"}
              onClick={() => setIsLanguageMenuOpen((prev) => !prev)}
              type="button"
            >
              <svg className="language-icon" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <path
                  d="M12 2.75C16.882 2.75 20.85 6.718 20.85 11.6C20.85 16.482 16.882 20.45 12 20.45C7.118 20.45 3.15 16.482 3.15 11.6C3.15 6.718 7.118 2.75 12 2.75Z"
                  stroke="currentColor"
                  strokeWidth="1.6"
                />
                <path
                  d="M3.6 9.2H20.4M3.6 14H20.4M12 3.2C13.86 5.02 14.92 8.04 14.92 11.6C14.92 15.16 13.86 18.18 12 20M12 3.2C10.14 5.02 9.08 8.04 9.08 11.6C9.08 15.16 10.14 18.18 12 20"
                  stroke="currentColor"
                  strokeWidth="1.4"
                  strokeLinecap="round"
                />
              </svg>
            </button>
            <div
              className={isLanguageMenuOpen ? "language-popover is-open" : "language-popover"}
              id="language-menu"
              role="menu"
              aria-hidden={!isLanguageMenuOpen}
            >
              {localeOptions.map((option) => (
                <button
                  className={locale === option.value ? "language-option is-active" : "language-option"}
                  key={option.value}
                  onClick={() => switchLanguage(option.value)}
                  role="menuitem"
                  type="button"
                >
                  {option.label}
                </button>
              ))}
            </div>
          </div>
          <a className="outline-pill" href="#/mint">
            {t("nav.buy")}
          </a>
          <button className="outline-pill wallet-button" type="button">
            {t("nav.connectWallet")}
          </button>
        </div>
        <button
          aria-expanded={isMenuOpen}
          aria-label={t(isMenuOpen ? "site.closeMenu" : "site.openMenu")}
          className={`mobile-menu-toggle ${isMenuOpen ? "is-open" : ""} ${isMenuButtonSpinning ? "is-spinning" : ""}`}
          onClick={toggleMenu}
          type="button"
        >
          <img alt={t(isMenuOpen ? "site.closeMenu" : "site.openMenu")} src={isMenuOpen ? closeMenuIcon : hamburgerIcon} />
        </button>
      </div>
      <div className="mobile-gradient-line" aria-hidden="true"></div>
      <div className={`mobile-menu ${isMenuOpen ? "open" : ""}`} aria-hidden={!isMenuOpen}>
        <div className="mobile-menu-inner">
          <div className="mobile-menu-links">
            {navItems.map((item) => (
              <div className="mobile-nav-group" key={item.id}>
                <a className={isActive(item) ? "active" : ""} href={item.path} onClick={closeMenu}>
                  {t(item.label)}
                </a>
                {item.children && (
                  <div className="mobile-sub-links">
                    {item.children.map((child) => (
                      <a href={child.path} key={child.label} onClick={closeMenu}>
                        {t(child.label)}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
          <div className="mobile-language-switch" aria-label={t("site.languageLabel")}>
            {localeOptions.map((option) => (
              <button
                className={locale === option.value ? "mobile-language-option is-active" : "mobile-language-option"}
                key={`mobile-${option.value}`}
                onClick={() => {
                  switchLanguage(option.value);
                  closeMenu();
                }}
                type="button"
              >
                {option.label}
              </button>
            ))}
          </div>
          <a className="mobile-ai-cta" href="#/mint" onClick={closeMenu}>
            {t("nav.buy")}
          </a>
          <div className="mobile-socials" aria-label={t("site.socialLinks")}>
            {cigrSocials.map((item) => (
              <a href={item.href} key={item.label} aria-label={item.label} target="_blank" rel="noreferrer" onClick={closeMenu}>
                <img src={item.icon} alt="" aria-hidden="true" />
              </a>
            ))}
          </div>
          <img className="menu-rope" src={menuRopeImage} alt="" aria-hidden="true" />
        </div>
      </div>
    </nav>
  );
}
