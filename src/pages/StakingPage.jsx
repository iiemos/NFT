import { useEffect, useState } from "react";
import { Icon, Panel, Progress } from "../components/ui.jsx";
import { farmHeroImage, stakedNftImage } from "../data.js";

export default function StakingPage() {
  const [rewards, setRewards] = useState(1245.82);

  useEffect(() => {
    const timer = setInterval(() => setRewards((value) => value + 0.01), 3000);
    return () => clearInterval(timer);
  }, []);

  return (
    <main className="staking-page">
      <section className="farm-hero">
        <img src={farmHeroImage} alt="Sunny farm staking vacation" />
        <div className="farm-hero-copy">
          <h1>Sunny Farm Vacation</h1>
          <p>Staking $CIGR in Paradise</p>
        </div>
        <div className="apy-sticker">APY: 420%</div>
      </section>

      <section className="stake-dashboard">
        <div className="stake-metrics">
          <Panel className="pink-card">
            <div className="inline-heading">
              <Icon>pets</Icon>
              <h2>My Staked NFTs</h2>
            </div>
            <strong className="display-number">12</strong>
            <span className="label">Gigrs</span>
            <img className="trait-strip" src={stakedNftImage} alt="Recent staked traits" />
          </Panel>
          <Panel className="blue-card">
            <div className="inline-heading">
              <Icon>savings</Icon>
              <h2>Accrued Rewards</h2>
            </div>
            <strong className="display-number">{rewards.toLocaleString("en-US", { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</strong>
            <span className="label">$CIGR</span>
            <Progress value={65} />
          </Panel>
        </div>
        <div className="action-row">
          <button className="jelly-button claim-button" type="button">
            Claim Rewards <Icon>celebration</Icon>
          </button>
          <button className="jelly-button neutral-button" type="button">
            Stake All
          </button>
        </div>
      </section>

      <section className="farm-stats-grid">
        <Panel className="stats-wide">
          <div className="section-title-row">
            <h3>Active Farm Stats</h3>
            <span className="pill green-pill">Live</span>
          </div>
          <div className="mini-stat-grid">
            {[
              ["Total Staked", "4,821"],
              ["Pool Share", "0.24%"],
              ["Time Staked", "14d"],
              ["Gigrs TVL", "$1.2M"],
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
          <h3>Power Up!</h3>
          <p>Holding a Space Gigr boosts your rewards by 1.5x.</p>
        </Panel>
      </section>
    </main>
  );
}
