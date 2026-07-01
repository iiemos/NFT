import { cigrLogoImage, cigrSocials, footerColumns } from "../data.js";
import { useI18n } from "../i18n.js";

export default function Footer() {
  const { t } = useI18n();
  return (
    <footer className="footer cigr-footer">
      <div className="footer-inner">
        <div className="footer-brand-block">
          <a className="brand cigr-footer-logo" href="#/">
            <img src={cigrLogoImage} alt="CIGR" />
          </a>
          <p>{t("footer.tagline")}</p>
          <small>&copy; 2026 CIGR Ecosystem. {t("footer.copyright")}</small>
        </div>
        <div className="footer-link-grid">
          {footerColumns.map(([title, links]) => (
            <div key={title}>
              <h3>{t(title)}</h3>
              {links.map(([label, href]) => (
                <a href={href} key={label}>
                  {t(label)}
                </a>
              ))}
            </div>
          ))}
          <div>
            <h3>{t("footer.joinCommunity")}</h3>
            <div className="footer-socials">
              {cigrSocials.map((item) => (
                <a href={item.href} key={item.label} aria-label={item.label} target="_blank" rel="noreferrer">
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
