import { clubIntroPoints, clubLocations, designClubPath } from "../data.js";
import { useI18n } from "../i18n.js";

export default function ClubPage() {
  const { t } = useI18n();
  return (
    <main className="cigr-page figma-page club-page">
      <section className="figma-sheet cigr-section">
        <h1 className="figma-page-title">{t("club.pageTitle")}</h1>
        <div className="club-top-row">
          <img src={`${designClubPath}/hero.jpg`} alt="CIGR club lounge" />
          <div>
            <h2>{t("club.heroTitle")}</h2>
            <p>{t("club.heroDescription")}</p>
          </div>
        </div>
      </section>

      <section className="club-house-band" style={{ "--club-bg": `url(${designClubPath}/house-bg.jpg)` }}>
        <div className="cigr-section">
          <h2>{t("club.houseTitle")}</h2>
          <div className="club-house-map">
            <div className="club-house-logo">
              <img src={`${designClubPath}/house-logo.png`} alt="Cigr House" />
            </div>
            {clubIntroPoints.map(([title, text]) => (
              <article key={title}>
                <strong>{t(title)}</strong>
                <p>{t(text)}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="figma-sheet cigr-section compact">
        <h2>{t("club.networkTitle")}</h2>
        <div className="club-location-grid">
          {clubLocations.map(([city, image]) => (
            <article key={city}>
              <img src={image} alt={`${city} Cigr House`} />
              <strong>{t(city)}</strong>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
