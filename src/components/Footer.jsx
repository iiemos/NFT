import { cigrLogoImage, cigrSocials, footerColumns } from "../data.js";

export default function Footer() {
  return (
    <footer className="footer cigr-footer">
      <div className="footer-inner">
        <div className="footer-brand-block">
          <a className="brand cigr-footer-logo" href="#/">
            <img src={cigrLogoImage} alt="CIGR" />
          </a>
          <p>The premier culture-driven meme ecosystem on Solana, redefining what it means to be part of a digital tribe.</p>
          <small>&copy; 2026 CIGR Ecosystem. Built on Solana.</small>
        </div>
        <div className="footer-link-grid">
          {footerColumns.map(([title, links]) => (
            <div key={title}>
              <h3>{title}</h3>
              {links.map(([label, href]) => (
                <a href={href} key={label}>
                  {label}
                </a>
              ))}
            </div>
          ))}
          <div>
            <h3>Join the community</h3>
            <div className="footer-socials">
              {cigrSocials.map((item) => (
                <a href="#" key={item.label} aria-label={item.label}>
                  <img src={item.icon} alt="" aria-hidden="true" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
