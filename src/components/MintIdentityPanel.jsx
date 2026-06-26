import { useState } from "react";
import { designNftPath, mintLiveActivities, mintTraitBadges } from "../data.js";
import { Icon } from "./ui.jsx";

export default function MintIdentityPanel() {
  const [quantity, setQuantity] = useState(10);
  const changeQuantity = (step) => setQuantity((value) => Math.min(10, Math.max(1, value + step)));

  return (
    <div className="nft-mint-identity">
      <h2>Mint Your CIGR Identity</h2>
      <p>Own a piece of the CIGR ecosystem. Each character is a unique, high-fidelity 3D asset with exclusive access to future drops and revenue sharing.</p>
      <div className="mint-widget-row mint-control-row">
        <div className="mint-preview-card">
          <img src={`${designNftPath}/f-card.jpg`} alt="CIGR identity NFT" />
          <div className="mint-trait-badges">
            {mintTraitBadges.map((item) => (
              <span key={item}>{item}</span>
            ))}
          </div>
        </div>
        <div className="mint-control-stack">
          <div className="mint-status-card">
            <div className="mint-status-head">
              <span>Mint Status</span>
              <b>Live Now</b>
            </div>
            <div className="mint-status-main">
              <strong>4200 / 10000</strong>
              <small>42% Reserved</small>
            </div>
            <i aria-hidden="true"></i>
          </div>
          <div className="mint-widget">
            <label>
              Price Per NFT
              <b>1 SOL</b>
            </label>
            <small>Select Quantity</small>
            <div className="mint-quantity-control">
              <button type="button" onClick={() => changeQuantity(-1)} aria-label="减少铸造数量">
                <Icon>remove</Icon>
              </button>
              <output>{quantity}</output>
              <button type="button" onClick={() => changeQuantity(1)} aria-label="增加铸造数量">
                <Icon>add</Icon>
              </button>
            </div>
            <label>
              Subtotal
              <b>{quantity} SOL</b>
            </label>
            <button type="button">Mint More</button>
            <p>MAX 10 PER WALLET</p>
          </div>
          <div className="mint-live-card">
            <div className="mint-live-title">
              <i aria-hidden="true"></i>
              <span>Live Activity</span>
            </div>
            <div className="mint-live-viewport">
              <div className="mint-live-track">
                {[...mintLiveActivities, ...mintLiveActivities].map(([wallet, action, time], index) => (
                  <div className="mint-live-item" key={`${wallet}-${index}`}>
                    <span>{wallet}</span>
                    <b>{action}</b>
                    <em>{time}</em>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
