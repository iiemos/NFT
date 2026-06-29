import { useEffect, useState } from "react";
import { Icon, Panel, Progress } from "../components/ui.jsx";
import { farmHeroImage, stakedNftImage } from "../data.js";
import { useI18n } from "../i18n.js";

export default function StakingPage() {
  const [rewards, setRewards] = useState(1245.82);
  const { t } = useI18n();

  useEffect(() => {
    const timer = setInterval(() => setRewards((value) => value + 0.01), 3000);
    return () => clearInterval(timer);
  }, []);

  return (
    <main className="staking-page">
      <section className="farm-hero">
        <img src={farmHeroImage} alt="Sunny farm staking vacation" />
        <div className="farm-hero-copy">
          <h1>{t("staking.title")}</h1>
          <p>{t("staking.subtitle")}</p>
        </div>
        <div className="apy-sticker">{t("staking.apy")}</div>
      </section>

      <section className="stake-dashboard">
        <div className="stake-metrics">
          <Panel className="pink-card">
            <div className="inline-heading">
              <Icon>pets</Icon>
              <h2>{t("staking.myNfts")}</h2>
            </div>
            <strong className="display-number">12</strong>
            <span className="label">{t("staking.gigrs")}</span>
            <img className="trait-strip" src={stakedNftImage} alt="Recent staked traits" />
          </Panel>
          <Panel className="blue-card">
            <div className="inline-heading">
              <Icon>savings</Icon>
              <h2>{t("staking.rewards")}</h2>
            </div>
            <strong className="display-number">{rewards.toLocaleString("en-US", { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</strong>
            <span className="label">$CIGR</span>
            <Progress value={65} />
          </Panel>
        </div>
        <div className="action-row">
          <button className="jelly-button claim-button" type="button">
            {t("staking.claim")} <Icon>celebration</Icon>
          </button>
          <button className="jelly-button neutral-button" type="button">
            {t("staking.stakeAll")}
          </button>
        </div>
      </section>

      <section className="farm-stats-grid">
        <Panel className="stats-wide">
          <div className="section-title-row">
            <h3>{t("staking.farmStats")}</h3>
            <span className="pill green-pill">{t("staking.live")}</span>
          </div>
          <div className="mini-stat-grid">
            {[
              [t("staking.totalStaked"), "4,821"],
              [t("staking.poolShare"), "0.24%"],
              [t("staking.timeStaked"), "14d"],
              [t("staking.tvl"), "$1.2M"],
            ].map(([label, value]) => (
              <div className="mini-stat" key={label}>
                <span>{label}</span>
                <strong>{value}</strong>
              </div>
            ))}
          </div>
        </Panel>
        <Panel className="pink-card center-card">
          <Icon>auto_awesome</Icon>
          <h3>{t("staking.powerUp")}</h3>
          <p>{t("staking.powerUpDesc")}</p>
        </Panel>
      </section>
    </main>
  );
}
