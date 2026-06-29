import { useState } from "react";
import { designNftPath, mintLiveActivities, mintTraitBadges } from "../data.js";
import { Icon } from "./ui.jsx";
import { useI18n } from "../i18n.js";

export default function MintIdentityPanel() {
  const { t } = useI18n();
  const [quantity, setQuantity] = useState(10);
  const changeQuantity = (step) => setQuantity((value) => Math.min(10, Math.max(1, value + step)));

  return (
    <div className="nft-mint-identity">
      <h2>{t("mintIdentity.title")}</h2>
      <p>{t("mintIdentity.desc")}</p>
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
              <span>{t("mintIdentity.status")}</span>
              <b>{t("mintIdentity.live")}</b>
            </div>
            <div className="mint-status-main">
              <strong>4200 / 10000</strong>
              <small>42% Reserved</small>
            </div>
            <i aria-hidden="true"></i>
          </div>
          <div className="mint-widget">
            <label>
              {t("mintIdentity.priceLabel")}
              <b>1 SOL</b>
            </label>
            <small>{t("mintIdentity.quantityLabel")}</small>
            <div className="mint-quantity-control">
              <button type="button" onClick={() => changeQuantity(-1)} aria-label={t("mintIdentity.qtyDecrease")}>
                <Icon>remove</Icon>
              </button>
              <output>{quantity}</output>
              <button type="button" onClick={() => changeQuantity(1)} aria-label={t("mintIdentity.qtyIncrease")}>
                <Icon>add</Icon>
              </button>
            </div>
            <label>
              {t("mintIdentity.subtotalLabel")}
              <b>{quantity} SOL</b>
            </label>
            <button type="button">{t("mintIdentity.mintMore")}</button>
            <p>{t("mintIdentity.max")}</p>
          </div>
          <div className="mint-live-card">
            <div className="mint-live-title">
              <i aria-hidden="true"></i>
              <span>{t("mintIdentity.liveActivity")}</span>
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
