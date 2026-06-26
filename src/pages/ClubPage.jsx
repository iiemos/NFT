import { clubIntroPoints, clubLocations, designClubPath } from "../data.js";

export default function ClubPage() {
  return (
    <main className="cigr-page figma-page club-page">
      <section className="figma-sheet cigr-section">
        <h1 className="figma-page-title">俱乐部页面</h1>
        <div className="club-top-row">
          <img src={`${designClubPath}/hero.jpg`} alt="CIGR club lounge" />
          <div>
            <h2>全球典藏精英俱乐部</h2>
            <p>RWA 时代首个以文化资本为核心纽带的全球精英俱乐部。我们不仅以资产规模作为唯一准入标准，而以文化品味、典藏修养与价值共识作为圈层筛选的核心标尺，打造一个纯粹、私密、有底蕴的高端人文社群。</p>
          </div>
        </div>
      </section>

      <section className="club-house-band" style={{ "--club-bg": `url(${designClubPath}/house-bg.jpg)` }}>
        <div className="cigr-section">
          <h2>Cigr House 介绍</h2>
          <div className="club-house-map">
            <div className="club-house-logo">
              <img src={`${designClubPath}/house-logo.png`} alt="Cigr House" />
            </div>
            {clubIntroPoints.map(([title, text]) => (
              <article key={title}>
                <strong>{title}</strong>
                <p>{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="figma-sheet cigr-section compact">
        <h2>全球 Cigr House 线下生态网络</h2>
        <div className="club-location-grid">
          {clubLocations.map(([city, image]) => (
            <article key={city}>
              <img src={image} alt={`${city} Cigr House`} />
              <strong>{city}</strong>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
