import { useState } from "react";
import ExchangeModal from "../components/ExchangeModal.jsx";
import ExchangeRecords from "../components/ExchangeRecords.jsx";
import { useI18n } from "../i18n.js";

export default function PerksPage() {
  const [isExchangeOpen, setIsExchangeOpen] = useState(false);
  const { t } = useI18n();

  return (
    <main className="cigr-page figma-page exchange-route-page">
      <section className="figma-sheet cigr-section compact">
        <div className="exchange-hero-row">
          <div>
            <h3>{t("pages.redemptionTitle")}</h3>
            <p>{t("pages.redemptionDesc")}</p>
            <button type="button" onClick={() => setIsExchangeOpen(true)}>
              {t("pages.redemptionAction")}
            </button>
          </div>
          <img src="/images/cigr/design/exchange/gift.jpg" alt={t("pages.redemptionTitle")} />
        </div>
        <ExchangeRecords />
      </section>

      {isExchangeOpen && <ExchangeModal onClose={() => setIsExchangeOpen(false)} />}
    </main>
  );
}
