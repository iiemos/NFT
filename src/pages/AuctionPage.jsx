import { useI18n } from "../i18n.js";

export default function AuctionPage() {
  const { t } = useI18n();

  return (
    <main className="cigr-page figma-page auction-route-page">
      <section className="nft-auction-coming route-auction-coming" style={{ "--auction-bg": "url(/images/cigr/design/auction/coming-soon.jpg)" }}>
        <strong>{t("pages.auctionComing")}</strong>
      </section>
    </main>
  );
}
