// 礼品兑换信息填写弹窗
import { useI18n } from "../i18n.js";

export default function ExchangeModal({ onClose }) {
  const { t } = useI18n();
  return (
    <div className="exchange-modal-backdrop" role="dialog" aria-modal="true" aria-label={t("exchange.modalTitle")}>
      <div className="exchange-modal">
        <button className="exchange-modal-close" type="button" onClick={onClose} aria-label={t("exchange.modalClose")}>
          ×
        </button>
        <img src="/images/cigr/design/exchange/modal.jpg" alt="CIGR NFT redeem preview" />
        <form className="exchange-modal-form">
          <label>
            {t("exchange.name")}
            <input type="text" placeholder={t("exchange.namePlaceholder")} />
          </label>
          <label>
            {t("exchange.contact")}
            <input type="text" placeholder={t("exchange.contactPlaceholder")} />
          </label>
          <label>
            {t("exchange.address")}
            <input type="text" placeholder={t("exchange.addressPlaceholder")} />
          </label>
          <button type="button">{t("exchange.confirm")}</button>
        </form>
      </div>
    </div>
  );
}
