import { useState } from "react";
import SolanaMark from "../components/SolanaMark.jsx";
import { aboutBannerImage, expansionImages, mechanismItems, partnerItems, roadmapPhases, tokenCoinsImage } from "../data.js";
import { useI18n } from "../i18n.js";

export default function AboutTokenPage() {
  const [openPhase, setOpenPhase] = useState(0);
  const { t } = useI18n();

  return (
    <main className="cigr-page about-token-page">
      <section className="about-hero cigr-section">
        <p className="page-label">{t("about.pageLabel")}</p>
        <h1>{t("about.title")}</h1>
        <p>{t("about.description")}</p>
        <img src={aboutBannerImage} alt="CIGR global pass banner" />
      </section>

      <section className="partner-band">
        <div className="partner-inner">
          <h2>{t("about.partners")}</h2>
          <div className="partner-cards">
            {partnerItems.map(([logo, text]) => (
              <article key={logo}>
                <img src={logo} alt="" aria-hidden="true" />
                <p>{t(text)}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="cigr-section roadmap-section" id="roadmap">
        <h2>{t("about.roadmap")}</h2>
        <div className="roadmap-line"></div>
        <div className="roadmap-grid">
          {roadmapPhases.map(([phase, title, text], index) => (
            <article className={`roadmap-card ${openPhase === index ? "open" : ""}`} key={phase}>
              <small>{t(`about.roadmap${index + 1}`)}</small>
              <h3>{t(title)}</h3>
              <button type="button" onClick={() => setOpenPhase(openPhase === index ? -1 : index)}>
                {t("about.roadmapAction")}
              </button>
              <p>{t(text)}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="cigr-section expansion-section">
        <h2>{t("about.futureExpansion")}</h2>
        <p>{t("about.futureExpansionDescription")}</p>
        <div className="expansion-grid">
          {expansionImages.map(([image, label]) => (
            <img src={image} alt={t(label)} key={label} />
          ))}
        </div>
      </section>

      <section className="token-section" id="token">
        <p className="page-label">{t("about.token")}</p>
        <h2>{t("about.tokenIssue")}</h2>
        <div className="token-issue-grid">
          <article className="token-issue pink">
            <img className="token-issue-coins" src={tokenCoinsImage} alt="$CIGR 代币金币" />
            <div>
              <strong>{t("about.tokenName")}: $CIGR</strong>
              <span>{t("about.tokenSupply")}: 10 亿枚</span>
            </div>
          </article>
          <article className="token-issue yellow">
            <SolanaMark />
            <div>
              <strong>{t("about.tokenNetwork")}:</strong>
              <span>Solana</span>
            </div>
          </article>
        </div>
        <p>{t("about.tokenDesc")}</p>
      </section>

      <section className="distribution-section">
        <div className="distribution-inner">
          <div className="distribution-copy">
            <h2>{t("about.distribution")}</h2>
            <div className="allocation-note left">
              <strong>10%</strong>
              <span>{t("about.coreTeam")}</span>
              <p>{t("about.coreTeamText")}</p>
            </div>
          </div>
          <div className="donut-chart" aria-label="90% community, 10% team"></div>
          <div className="allocation-note">
            <strong>90%</strong>
            <span>{t("about.communityLaunch")}</span>
            <p>{t("about.communityLaunchText")}</p>
          </div>
        </div>
      </section>

      <section className="cigr-section mechanism-section">
        <h2>{t("about.deflation")}</h2>
        <div className="mechanism-grid">
          {mechanismItems.map(([title, icon, text], index) => (
            <article className={`mechanism-card tone-${index}`} key={title}>
              <img src={icon} alt="" aria-hidden="true" />
              <h3>{t(title)}</h3>
              <p>{t(text)}</p>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
