import MintIdentityPanel from "../components/MintIdentityPanel.jsx";
import { designMintPath, mintMethodItems, nftEcosystemMetrics, nftMintStats } from "../data.js";
import { useI18n } from "../i18n.js";

export default function MintPage() {
  const { t } = useI18n();
  return (
    <main className="cigr-page figma-page nft-operation-page mint-operation-page">
      <section className="figma-sheet cigr-section mint-operation-panel">
        <h2>{t("mint.pageTitle")}</h2>
        <div className="nft-metrics-grid">
          {nftEcosystemMetrics.map(([value, label, helper]) => (
            <article key={label}>
              <span>{t(label)}</span>
              <strong>{value}</strong>
              <small>{t(helper, helper)}</small>
            </article>
          ))}
        </div>

        <MintIdentityPanel />
      </section>

      <section className="mint-design-section mint-route-section">
        <div className="mint-drop-hero" style={{ "--mint-bg": `url(${designMintPath}/drop-hero.jpg)` }}>
          <strong>{t("mint.dropTitle")}</strong>
        </div>
        <div className="mint-stat-row">
          <h3>{t("mint.title")}</h3>
          {nftMintStats.map(([value, label]) => (
            <article key={value}>
              <strong>{value}</strong>
              <span>{t(label)}</span>
            </article>
          ))}
        </div>
        <div className="mint-how-row">
          <img src={`${designMintPath}/how.jpg`} alt="CIGR drop wall" />
          <div>
            <h3>{t("mint.howToGet")}</h3>
            <div className="mint-method-list">
              {mintMethodItems.map(([icon, title, text]) => (
                <article key={title}>
                  <img src={icon} alt="" aria-hidden="true" />
                  <div>
                    <strong>{t(title)}</strong>
                    <p>{t(text)}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
