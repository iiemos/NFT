import MintIdentityPanel from "../components/MintIdentityPanel.jsx";
import { designMintPath, mintMethodItems, nftEcosystemMetrics, nftMintStats } from "../data.js";

export default function MintPage() {
  return (
    <main className="cigr-page figma-page nft-operation-page mint-operation-page">
      <section className="figma-sheet cigr-section mint-operation-panel">
        <h2>Ecosystem Metrics</h2>
        <div className="nft-metrics-grid">
          {nftEcosystemMetrics.map(([value, label, helper]) => (
            <article key={label}>
              <span>{label}</span>
              <strong>{value}</strong>
              <small>{helper}</small>
            </article>
          ))}
        </div>

        <MintIdentityPanel />
      </section>

      <section className="mint-design-section mint-route-section">
        <div className="mint-drop-hero" style={{ "--mint-bg": `url(${designMintPath}/drop-hero.jpg)` }}>
          <strong>Drop 1 Mint</strong>
        </div>
        <div className="mint-stat-row">
          <h3>烟田 NFT 发行</h3>
          {nftMintStats.map(([value, label]) => (
            <article key={value}>
              <strong>{value}</strong>
              <span>{label}</span>
            </article>
          ))}
        </div>
        <div className="mint-how-row">
          <img src={`${designMintPath}/how.jpg`} alt="CIGR drop wall" />
          <div>
            <h3>如何获得？</h3>
            <div className="mint-method-list">
              {mintMethodItems.map(([icon, title, text]) => (
                <article key={title}>
                  <img src={icon} alt="" aria-hidden="true" />
                  <div>
                    <strong>{title}</strong>
                    <p>{text}</p>
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
