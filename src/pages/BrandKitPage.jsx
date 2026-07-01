import { brandColorTokens, brandKitDownload, brandWordmarks, cigrLogoImage, designBrandKitPath } from "../data.js";
import { useI18n } from "../i18n.js";

export default function BrandKitPage() {
  const { t } = useI18n();
  return (
    <main className="cigr-page figma-page brand-kit-page">
      <section className="figma-sheet cigr-section">
        <h1 className="figma-page-title">{t("pages.brandKit")}</h1>
        <div className="brand-kit-intro">
          <div>
            <h2>{t("brandKit.title")}</h2>
            <p>{t("brandKit.description")}</p>
            <a className="brand-kit-download" href={brandKitDownload} download>
              {t("brandKit.download")}
            </a>
          </div>
          <img className="brand-kit-board" src={`${designBrandKitPath}/hero-board.png`} alt="CIGR brand kit overview" />
        </div>
      </section>

      <section className="figma-sheet cigr-section split">
        <div>
          <h2>{t("brandKit.logoTitle")}</h2>
          <p>{t("brandKit.logoDescription")}</p>
        </div>
        <div className="logo-spec-board">
          <span className="logo-spec-tag">{t("brandKit.logoTag")}</span>
          <div className="logo-spec-frame">
            <span className="spec-block spec-block-tl">a</span>
            <span className="spec-block spec-block-tr">a</span>
            <span className="spec-block spec-block-bl">a</span>
            <span className="spec-block spec-block-br">a</span>
            <img className="logo-spec-logo" src={cigrLogoImage} alt={t("brandKit.logoSafeArea")} />
          </div>
        </div>
      </section>

      <section className="figma-sheet cigr-section split">
        <div>
          <h2>{t("brandKit.colorsTitle")}</h2>
          <p>{t("brandKit.colorsDescription")}</p>
        </div>
        <div className="brand-spec-color-grid">
          {brandColorTokens.map((token) => (
            <article key={token.name} style={{ "--brand-color": token.hex }}>
              <strong>{token.name}</strong>
              <span>CMYK: {token.cmyk}</span>
              <span>RGB: {token.rgb}</span>
              <span>HEX: {token.hex}</span>
            </article>
          ))}
        </div>
      </section>

      <section className="figma-sheet cigr-section split compact">
        <div>
          <h2>{t("brandKit.colorVariantsTitle")}</h2>
          <p>{t("brandKit.colorVariantsDescription")}</p>
        </div>
        <div className="logo-modes-grid">
          {brandWordmarks.map((mark) => (
            <figure className={`wordmark-card ${mark.tone}`} key={mark.label}>
              <div className="wordmark-canvas">
                <img src={mark.image} alt={mark.label} />
              </div>
              <figcaption>
                <span>{mark.label}</span>
                <div className="wordmark-actions">
                  {mark.files.map(([type, href]) => (
                    <a href={href} download key={type}>
                      {type}
                    </a>
                  ))}
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      </section>
    </main>
  );
}
