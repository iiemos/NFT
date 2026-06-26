import { useState } from "react";
import SolanaMark from "../components/SolanaMark.jsx";
import { aboutBannerImage, expansionImages, mechanismItems, partnerItems, roadmapPhases, tokenCoinsImage } from "../data.js";

export default function AboutTokenPage() {
  const [openPhase, setOpenPhase] = useState(0);

  return (
    <main className="cigr-page about-token-page">
      <section className="about-hero cigr-section">
        <p className="page-label">关于页面</p>
        <h1>什么是 CIGR？</h1>
        <p>CIGR 是一个基于区块链的全球化潮牌生活方式会员体系，通过发行 NFT 身份凭证，构建由 MEME 驱动、共享流量和 IP 权益的兴趣社区。</p>
        <img src={aboutBannerImage} alt="CIGR global pass banner" />
      </section>

      <section className="partner-band">
        <div className="partner-inner">
          <h2>合作伙伴</h2>
          <div className="partner-cards">
            {partnerItems.map(([logo, text]) => (
              <article key={logo}>
                <img src={logo} alt="" aria-hidden="true" />
                <p>{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="cigr-section roadmap-section" id="roadmap">
        <h2>发展路线图</h2>
        <div className="roadmap-line"></div>
        <div className="roadmap-grid">
          {roadmapPhases.map(([phase, title, text], index) => (
            <article className={`roadmap-card ${openPhase === index ? "open" : ""}`} key={phase}>
              <small>{phase}</small>
              <h3>{title}</h3>
              <button type="button" onClick={() => setOpenPhase(openPhase === index ? -1 : index)}>
                了解更多
              </button>
              <p>{text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="cigr-section expansion-section">
        <h2>未来版图拓展</h2>
        <p>未来将拓展至红酒、高端腕表、珠宝艺术品等更多领域，打造全品类资产化潮流生态。</p>
        <div className="expansion-grid">
          {expansionImages.map(([image, label]) => (
            <img src={image} alt={label} key={label} />
          ))}
        </div>
      </section>

      <section className="token-section" id="token">
        <p className="page-label">代币页面</p>
        <h2>代币发行</h2>
        <div className="token-issue-grid">
          <article className="token-issue pink">
            <img className="token-issue-coins" src={tokenCoinsImage} alt="$CIGR 代币金币" />
            <div>
              <strong>代币名称: $CIGR</strong>
              <span>发行总量: 10 亿枚</span>
            </div>
          </article>
          <article className="token-issue yellow">
            <SolanaMark />
            <div>
              <strong>发行公链:</strong>
              <span>Solana</span>
            </div>
          </article>
        </div>
        <p>依托 Solana 高性能、低手续费的特性，保障交易的高效与低成本，适配生态高频应用场景。</p>
      </section>

      <section className="distribution-section">
        <div className="distribution-inner">
          <div>
            <h2>代币分配</h2>
            <div className="allocation-note left">
              <strong>10%</strong>
              <span>核心团队激励</span>
              <p>用于长期研发、运营增长和生态贡献激励。</p>
            </div>
          </div>
          <div className="donut-chart" aria-label="90% community, 10% team"></div>
          <div className="allocation-note">
            <strong>90%</strong>
            <span>社区公平发射（PumpFun）</span>
            <p>无预售、无私募、无团队预留，促进社区公平参与。</p>
          </div>
        </div>
      </section>

      <section className="cigr-section mechanism-section">
        <h2>代币通缩机制</h2>
        <div className="mechanism-grid">
          {mechanismItems.map(([title, icon, text], index) => (
            <article className={`mechanism-card tone-${index}`} key={title}>
              <img src={icon} alt="" aria-hidden="true" />
              <h3>{title}</h3>
              <p>{text}</p>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
