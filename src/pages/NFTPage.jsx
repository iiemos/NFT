import { useState } from "react";
import ExchangeModal from "../components/ExchangeModal.jsx";
import ExchangeRecords from "../components/ExchangeRecords.jsx";
import MintIdentityPanel from "../components/MintIdentityPanel.jsx";
import SynthesisDesignCard from "../components/SynthesisDesignCard.jsx";
import { designMintPath, designNftPath, mintMethodItems, nftDesignCards, nftEcosystemMetrics, nftMintStats, nftPerkImages, synthesisGroups } from "../data.js";
import { useI18n } from "../i18n.js";

export default function NFTPage() {
  const [activeCardIndex, setActiveCardIndex] = useState(0);
  const [isExchangeOpen, setIsExchangeOpen] = useState(false);
  const [activeRouteIndex, setActiveRouteIndex] = useState(0);
  const displayedSynthesis = synthesisGroups[activeRouteIndex];
  const activeCard = nftDesignCards[activeCardIndex];
  const { t } = useI18n();

  return (
    <main className="cigr-page figma-page nft-overview-page">
      <section className="figma-sheet cigr-section">
        <h1 className="figma-page-title">{t("nft.pageTitle")}</h1>

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
            <h3>{t(activeCard.title)}</h3>
            <strong>{t(activeCard.subtitle)}</strong>
            <p>{t(activeCard.text)}</p>
            <div className="nft-trait-strip">
              {activeCard.traits.map((trait) => (
                <img src={trait} alt="" aria-hidden="true" key={trait} />
              ))}
              {Array.from({ length: Math.max(0, 4 - activeCard.traits.length) }, (_, index) => (
                <span aria-hidden="true" key={index}>
                  ?
                </span>
              ))}
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

      <section className="figma-sheet cigr-section compact" id="nft-synthesis-section">
        <h2>{t("synthesis.title")}</h2>
        <div className="synthesis-stack">
          <article className="synthesis-upgrade-card">
            <div>
              <h3>{t("synthesis.subtitle")}</h3>
              <p>{t("synthesis.description")}</p>
            </div>
            <a href="#/synthesis">{t("nft.toSynthesis")}</a>
          </article>
          <div className="synthesis-rate-toggle" aria-label={t("synthesis.probability")}>
            <button type="button" className={activeRouteIndex === 0 ? "active" : ""} onClick={() => setActiveRouteIndex(0)}>
              R → SR&nbsp;&nbsp;50%
            </button>
            <button type="button" className={activeRouteIndex === 1 ? "active" : ""} onClick={() => setActiveRouteIndex(1)}>
              SR → SSR&nbsp;&nbsp;100%
            </button>
          </div>
          <SynthesisDesignCard group={displayedSynthesis} />
        </div>
      </section>

      <section className="nft-auction-coming" style={{ "--auction-bg": "url(/images/cigr/design/auction/coming-soon.jpg)" }}>
        <h2>{t("pages.auction")}</h2>
        <strong>{t("pages.auctionComing")}</strong>
      </section>

      <section className="figma-sheet cigr-section compact" id="nft-exchange-section">
        <h2>{t("pages.perks")}</h2>
        <div className="exchange-hero-row">
          <div>
            <h3>{t("pages.redemptionTitle")}</h3>
            <p>{t("pages.redemptionDesc")}</p>
            <button type="button" onClick={() => setIsExchangeOpen(true)} aria-label={t("pages.redemptionAction")}>
              {t("pages.redemptionAction")}
            </button>
          </div>
          <img src="/images/cigr/design/exchange/gift.jpg" alt="CIGR gift center" />
        </div>
        <ExchangeRecords />
      </section>

      {isExchangeOpen && <ExchangeModal onClose={() => setIsExchangeOpen(false)} />}
    </main>
  );
}
