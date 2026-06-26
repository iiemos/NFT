import { useState } from "react";
import ExchangeModal from "../components/ExchangeModal.jsx";
import ExchangeRecords from "../components/ExchangeRecords.jsx";
import MintIdentityPanel from "../components/MintIdentityPanel.jsx";
import SynthesisDesignCard from "../components/SynthesisDesignCard.jsx";
import { designMintPath, designNftPath, mintMethodItems, nftDesignCards, nftEcosystemMetrics, nftMintStats, nftPerkImages, synthesisGroups } from "../data.js";

export default function NFTPage() {
  const [activeCardIndex, setActiveCardIndex] = useState(0);
  const [isExchangeOpen, setIsExchangeOpen] = useState(false);
  const activeCard = nftDesignCards[activeCardIndex];

  return (
    <main className="cigr-page figma-page nft-overview-page">
      <section className="figma-sheet cigr-section">
        <h1 className="figma-page-title">NFT页面</h1>

        <div className="nft-story">
          <h2>The Cigar Society</h2>
          <p>立足全球雪茄文化与链上身份体系，CIGR NFT 将会员、收藏、权益和实物资产连接在同一套可验证网络中。</p>
          <img className="nft-story-banner" src={`${designNftPath}/hero.jpg`} alt="The Cigar Society" />
        </div>

        <div className="nft-card-profile">
          <div className="nft-profile-dots" aria-label="NFT card levels">
            {nftDesignCards.map((card, index) => (
              <button
                aria-label={`切换到${card.title}`}
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
            <h3>{activeCard.title}</h3>
            <strong>{activeCard.subtitle}</strong>
            <p>{activeCard.text}</p>
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
          <h2>如何获得？</h2>
          <div className="nft-access-grid">
            {nftDesignCards.map((item) => (
              <a href={item.href} key={item.title}>
                <img src={item.image} alt={item.title} />
                <div>
                  <strong>{item.access}</strong>
                  <span className={item.status === "敬请期待" ? "soon" : ""}>{item.status}</span>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="figma-sheet cigr-section compact">
        <h2>合成限量NFT，解锁专属权益</h2>
        <div className="nft-perk-pair">
          {nftPerkImages.map(([image, title, text]) => (
            <article key={title}>
              <img src={image} alt={title} />
              <strong>{title}</strong>
              <p>{text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="mint-design-section" id="nft-mint-section">
        <h2>铸造页面</h2>
        <div className="mint-drop-hero" style={{ "--mint-bg": `url(${designMintPath}/drop-hero.jpg)` }}>
          <strong>Drop 1 Mint</strong>
        </div>
        <div className="mint-stat-row">
          <h3>烟田 NFT 发行</h3>
          {nftMintStats.map(([value, label], index) => (
            <article className={`tone-${index}`} key={value}>
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

      <section className="figma-sheet cigr-section">
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

      <section className="figma-sheet cigr-section compact" id="nft-synthesis-section">
        <h2>合成页面</h2>
        <div className="synthesis-stack">
          {synthesisGroups.map((group) => (
            <SynthesisDesignCard group={group} key={group.title} />
          ))}
          <article className="synthesis-upgrade-card">
            <div>
              <h3>FUSE. UPGRADE. EVOLVE.</h3>
              <p>Combine your CIGR assets into the fusion chamber to unlock higher rarities and identity rights.</p>
            </div>
            <a href="#/synthesis">进入合成操作</a>
          </article>
        </div>
      </section>

      <section className="nft-auction-coming" style={{ "--auction-bg": "url(/images/cigr/design/auction/coming-soon.jpg)" }}>
        <h2>竞拍页面</h2>
        <strong>即将开放</strong>
      </section>

      <section className="figma-sheet cigr-section compact" id="nft-exchange-section">
        <h2>兑换页面</h2>
        <div className="exchange-hero-row">
          <div>
            <h3>礼品兑换中心</h3>
            <p>持有指定 NFT 可参与周边、权益与线下活动兑换。</p>
            <button type="button" onClick={() => setIsExchangeOpen(true)}>
              立即兑换
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
