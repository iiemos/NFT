import { useState } from "react";
import MintIdentityPanel from "../components/MintIdentityPanel.jsx";
import { designMintPath, designNftPath, mintMethodItems, nftDesignCards, nftEcosystemMetrics, nftMintStats, nftPerkImages } from "../data.js";
import { useI18n } from "../i18n.js";

export default function NFTPage() {
  const [activeCardIndex, setActiveCardIndex] = useState(0);
  const activeCard = nftDesignCards[activeCardIndex];
  const { t } = useI18n();

  return (
    <main className="cigr-page figma-page nft-overview-page">
      <section className="figma-sheet cigr-section nft-profile-section">
        {/* <h1 className="figma-page-title">{t("nft.pageTitle")}</h1> */}

        <div className="nft-story">
          <h2>The Cigar Society</h2>
          <p>{t("nft.desc")}</p>
          <img className="nft-story-banner" src={`${designNftPath}/hero.jpg`} alt="The Cigar Society" />
        </div>

        <div className="nft-card-profile">
          <div className="nft-profile-dots" aria-label="NFT card levels">
            {nftDesignCards.map((card, index) => (
              <button
                aria-label={`${t("common.switch")} ${t(card.title)}`}
                className={activeCardIndex === index ? "active" : ""}
                key={card.title}
                onClick={() => setActiveCardIndex(index)}
                type="button"
              >
                <img src={card.avatar} alt="" aria-hidden="true" />
              </button>
            ))}
          </div>
          <img src={activeCard.image} alt={activeCard.title} />
          <div className="nft-profile-copy">
            <div className="nft-profile-heading">
              <h3>{t(activeCard.title)}</h3>
              <strong>{t(activeCard.subtitle)}</strong>
            </div>
            <p>{t(activeCard.text)}</p>
            <div className={activeCard.traitLabels?.length ? "nft-trait-strip text-traits" : "nft-trait-strip"}>
              {activeCard.traitLabels?.length
                ? activeCard.traitLabels.map((trait) => <span key={trait}>{t(trait)}</span>)
                : activeCard.traits.map((trait) => <img src={trait} alt="" aria-hidden="true" key={trait} />)}
            </div>
          </div>
        </div>
      </section>

      <section className="nft-yellow-band">
        <div className="cigr-section">
          <h2>{t("nft.howToGet")}</h2>
          <div className="nft-access-grid">
            {nftDesignCards.map((item) => (
              <a href={item.href} key={item.title}>
                <img src={item.image} alt={item.title} />
                <div>
                  <strong>{t(item.access)}</strong>
                  <span className={item.status === "敬请期待" ? "soon" : ""}>{t(item.status)}</span>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="figma-sheet cigr-section compact">
        <h2>{t("nft.unlockPerks")}</h2>
        <div className="nft-perk-pair">
          {nftPerkImages.map(([image, title, text]) => (
            <article key={title}>
              <img src={image} alt={title} />
              <strong>{t(title)}</strong>
              <p>{t(text)}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="figma-sheet cigr-section">
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

      <section className="mint-design-section" id="nft-mint-section">
        <div className="mint-drop-hero" style={{ "--mint-bg": `url(${designMintPath}/drop-hero.jpg)` }}>
          <strong>Drop 1 Mint</strong>
        </div>
        <div className="mint-stat-row">
          <h3>{t("mint.title")}</h3>
          {nftMintStats.map(([value, label], index) => (
            <article className={`tone-${index}`} key={value}>
              <strong>{t(value)}</strong>
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
