import { useState } from "react";
import ExchangeModal from "../components/ExchangeModal.jsx";
import ExchangeRecords from "../components/ExchangeRecords.jsx";

export default function PerksPage() {
  const [isExchangeOpen, setIsExchangeOpen] = useState(false);

  return (
    <main className="cigr-page figma-page exchange-route-page">
      <section className="figma-sheet cigr-section compact">
        <h1 className="figma-page-title">兑换页面</h1>
        <div className="exchange-hero-row">
          <div>
            <h3>礼品兑换中心</h3>
            <p>持有指定 NFT 可参与周边、权益与线下活动兑换。</p>
            <button type="button" onClick={() => setIsExchangeOpen(true)}>
              立即兑换
            </button>
          </div>
          <img src="/images/cigr/design/exchange/gift.jpg" alt="CIGR gift center" />
        </div>
        <ExchangeRecords />
      </section>

      {isExchangeOpen && <ExchangeModal onClose={() => setIsExchangeOpen(false)} />}
    </main>
  );
}
