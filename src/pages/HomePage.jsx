import {
  cigrArrowBlackImage,
  cigrArrowWhiteImage,
  cigrCardItems,
  cigrHeroVideo,
  nftImages,
  cigrWordmarkImage,
  createStoryColumns,
  cultureImages,
  designHomePath,
  downloadColumns,
  futureSlots,
  lifestyleItems,
  workflowSteps,
} from "../data.js";

function CigrHero() {
  return (
    <section className="cigr-hero">
      <video className="cigr-hero-video" aria-label="CIGR homepage banner" autoPlay loop muted playsInline preload="metadata">
        <source src={cigrHeroVideo} type="video/mp4" />
      </video>
      <div className="cigr-hero-inner">
        <h1>CIGR · 全球首个 MEME × 文化 RWA 驱动价值协议</h1>
        <p>构建在 Solana 链上，顶级雪茄实物托底，NFT 确权链上可交易价值，MEME 凝聚全球共识，潮牌化运作释放品牌溢价</p>
        <div className="cigr-hero-actions">
          <a className="cigr-button yellow" href="#/mint">
            Enter The Chamber
          </a>
          <a className="cigr-button pink" href="#/about">
            View Collection
          </a>
        </div>
      </div>
    </section>
  );
}

function CigrCards() {
  return (
    <section className="cigr-section cigr-card-section" aria-label="CIGR cards">
      <div className="cigr-card-grid">
        {cigrCardItems.map((item) => (
          <article className="cigr-nft-card" key={item.title}>
            <img src={item.image} alt={item.title} />
            <strong>{item.title}</strong>
            <span>{item.label}</span>
          </article>
        ))}
      </div>
    </section>
  );
}

function LifestyleSection() {
  return (
    <section className="cigr-section lifestyle-section">
      <h2>我们的生活方式</h2>
      <div className="lifestyle-grid">
        {lifestyleItems.map((item, index) => (
          <article className={`lifestyle-card tone-${index}`} key={item.title}>
            <img src={item.image} alt="" aria-hidden="true" />
            <h3>{item.title}</h3>
            <p>{item.text}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

function RwaSection() {
  return (
    <section className="cigr-section rwa-section">
      <div>
        <h2>文化 RWA 新范式</h2>
        <img className="cigr-wordmark" src={cigrWordmarkImage} alt="CIGR" />
        <p>利用文化 RWA 体系，将雪茄收藏、潮流叙事与链上资产确权结合，重塑品牌从传播到价值沉淀的完整路径。</p>
      </div>
      <img className="rwa-doodle-art" src={`${designHomePath}/rwa-doodle.png`} alt="CIGR culture doodle" />
    </section>
  );
}

function CreateSection() {
  return (
    <section className="cigr-section create-section">
      <h2>与我们一起创作</h2>
      <div className="create-masonry" aria-label="CIGR creative story waterfall">
        {createStoryColumns.map((column, columnIndex) => (
          <div className={`create-masonry-column offset-${column.offset}`} key={`create-column-${columnIndex}`}>
            {column.items.map((item, itemIndex) => {
              const cardKey = `${columnIndex}-${itemIndex}-${item.title || item.alt}`;
              const cardClass = `create-story-card shape-${item.shape}${item.type === "action" ? ` action-card tone-${item.tone}` : ""}`;

              if (item.type === "action") {
                return (
                  <a className={cardClass} href={item.href} key={cardKey}>
                    <span className="create-action-mark">{item.mark}</span>
                    <strong>{item.title}</strong>
                  </a>
                );
              }

              if (item.type === "video") {
                return (
                  <figure className={cardClass} key={cardKey}>
                    <video aria-label={item.alt} autoPlay loop muted playsInline preload="metadata">
                      <source src={item.video} type="video/mp4" />
                    </video>
                  </figure>
                );
              }

              return (
                <figure className={cardClass} key={cardKey}>
                  <img src={item.image} alt={item.alt} />
                </figure>
              );
            })}
          </div>
        ))}
      </div>
    </section>
  );
}

function CultureSection() {
  return (
    <section className="cigr-section culture-section">
      <div className="culture-copy">
        <h2>CiGR 潮流文化</h2>
        <p>CIGR 将雪茄文化、街头视觉与会员制权益融合，持续拓展实体商品、社群活动与品牌联名，推动收藏品从线上共识走向真实消费场景。</p>
      </div>
      <div className="culture-gallery">
        {cultureImages.map((image, index) => (
          <img src={image} alt={`CIGR culture ${index + 1}`} key={image} />
        ))}
      </div>
    </section>
  );
}

function FutureSection() {
  const placeholderSlots = futureSlots.map((slot, index) => {
    const image = nftImages[index % nftImages.length];
    return {
      id: slot,
      image,
      alt: `placeholder-${index + 1}`,
    };
  });
  const rowSize = Math.ceil(placeholderSlots.length / 3);
  const futureRows = Array.from({ length: 3 }, (_, rowIndex) => placeholderSlots.slice(rowIndex * rowSize, rowIndex * rowSize + rowSize));

  return (
    <section className="cigr-section future-section">
      <div className="future-copy">
        <h2>共创未来</h2>
        <p>我们将持续围绕雪茄 NFT 生态拓展会员权益、实体收藏、品牌合作和更多 RWA 场景。社区成员可参与治理、传播与共创，分享品牌成长带来的长期价值。</p>
        <a className="magic-link" href="#/about">
          <span>MAGIC</span>
          <img src={cigrArrowBlackImage} alt="" aria-hidden="true" />
        </a>
      </div>
      <div className="future-slot-grid" aria-hidden="true">
        {futureRows.map((row, rowIndex) => (
          <div className={`future-slot-row ${rowIndex % 2 === 1 ? "direction-right" : ""}`} key={`future-slot-row-${rowIndex}`}>
            <div className="future-slot-track">
              {[0, 1].map((group) => (
                <div className="future-slot-track-set" key={`${rowIndex}-${group}`}>
                  {row.map((slot) => (
                    <img className="future-slot-item" src={slot.image} alt={slot.alt} key={`${slot.id}-${group}`} />
                  ))}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function WorkflowSection() {
  return (
    <section className="cigr-section workflow-section" id="roadmap">
      <h2>CIGR 运作流程</h2>
      <div className="workflow-grid">
        {workflowSteps.map(([step, title, text, icon]) => (
          <article className="workflow-card" key={step}>
            <img src={icon} alt="" aria-hidden="true" />
            <small>{step}</small>
            <h3>{title}</h3>
            <p>{text}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

function DownloadSection() {
  return (
    <section className="cigr-section download-section" id="download">
      <div className="download-panel">
        <div className="download-content">
          <h2>立即下载，加入潮玩社区</h2>
          <div className="download-actions">
            <a href="#/about">
              iOS 下载
              <img src={cigrArrowWhiteImage} alt="" aria-hidden="true" />
            </a>
            <a href="#/about">
              安卓下载
              <img src={cigrArrowWhiteImage} alt="" aria-hidden="true" />
            </a>
          </div>
        </div>
        <div className="download-grid" aria-hidden="true">
          {downloadColumns.map((column, columnIndex) => (
            <div className="download-column" key={columnIndex}>
              <div className="download-column-track">
                {[0, 1].map((group) => (
                  <div className="download-column-set" key={group}>
                    {column.map((slot) => (
                      <span key={`${slot}-${group}`}></span>
                    ))}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default function HomePage() {
  return (
    <main className="cigr-page">
      <CigrHero />
      <CigrCards />
      <LifestyleSection />
      <RwaSection />
      <CreateSection />
      <CultureSection />
      <FutureSection />
      <WorkflowSection />
      <DownloadSection />
    </main>
  );
}
