import { useEffect, useRef, useState } from "react";
import { cigrLogoImage, cigrSocials, closeMenuIcon, hamburgerIcon, menuRopeImage, navItems } from "../data.js";
import { nftRouteIds } from "../router.js";

export default function Navigation({ currentPage }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuButtonSpinning, setIsMenuButtonSpinning] = useState(false);
  const menuButtonTimer = useRef(null);

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
      if (event.key === "Escape") setIsMenuOpen(false);
    };

    window.addEventListener("keydown", closeOnEscape);
    return () => window.removeEventListener("keydown", closeOnEscape);
  }, []);

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
                {item.label}
              </a>
              {item.children && (
                <div className="nav-dropdown">
                  {item.children.map((child) => (
                    <a href={child.path} key={child.label}>
                      {child.label}
                    </a>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
        <div className="nav-actions">
          <a className="outline-pill" href="#/mint">
            购买$CIGR
          </a>
          <button className="outline-pill wallet-button" type="button">
            连接钱包
          </button>
        </div>
        <button
          aria-expanded={isMenuOpen}
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className={`mobile-menu-toggle ${isMenuOpen ? "is-open" : ""} ${isMenuButtonSpinning ? "is-spinning" : ""}`}
          onClick={toggleMenu}
          type="button"
        >
          <img alt={isMenuOpen ? "Close menu" : "Open menu"} src={isMenuOpen ? closeMenuIcon : hamburgerIcon} />
        </button>
      </div>
      <div className="mobile-gradient-line" aria-hidden="true"></div>
      <div className={`mobile-menu ${isMenuOpen ? "open" : ""}`} aria-hidden={!isMenuOpen}>
        <div className="mobile-menu-inner">
          <div className="mobile-menu-links">
            {navItems.map((item) => (
              <div className="mobile-nav-group" key={item.id}>
                <a className={isActive(item) ? "active" : ""} href={item.path} onClick={closeMenu}>
                  {item.label}
                </a>
                {item.children && (
                  <div className="mobile-sub-links">
                    {item.children.map((child) => (
                      <a href={child.path} key={child.label} onClick={closeMenu}>
                        {child.label}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
          <a className="mobile-ai-cta" href="#/mint" onClick={closeMenu}>
            购买$CIGR
          </a>
          <div className="mobile-socials" aria-label="Social links">
            {cigrSocials.map((item) => (
              <a href="#" key={item.label} aria-label={item.label} onClick={closeMenu}>
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
