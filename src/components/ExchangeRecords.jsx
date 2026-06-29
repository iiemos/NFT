import { exchangeColumns, exchangeRecords } from "../data.js";
import { useI18n } from "../i18n.js";

// 礼品兑换记录查询表
export default function ExchangeRecords() {
  const { t } = useI18n();
  return (
    <div className="exchange-records">
      <h3>{t("exchange.tableTitle")}</h3>
      <p className="exchange-records-note">{t("exchange.queryDesc")}</p>
      <div className="exchange-search">
        <input type="text" placeholder={t("exchange.queryInput")} aria-label={t("exchange.queryInput")} />
        <button type="button">{t("exchange.queryButton")}</button>
      </div>
      <div className="exchange-panel">
        <div className="exchange-panel-head">
          <strong>{t("exchange.tableTitle")}</strong>
          <div className="exchange-panel-actions">
            <button type="button" className="filter">
              {t("exchange.filter")}
            </button>
            <button type="button" className="export">
              {t("exchange.export")}
            </button>
          </div>
        </div>
        <div className="exchange-table" aria-label={t("exchange.tableTitle")}>
          <div className="exchange-row exchange-head">
            {exchangeColumns.map((column) => (
              <span key={column}>{t(column)}</span>
            ))}
          </div>
          {exchangeRecords.map((record) => (
            <div className="exchange-row" key={record.id}>
              <span>{t("exchange.giftCard")}</span>
              <span className={`exchange-status ${record.tone}`}>{t(record.status)}</span>
              <span>{record.shipped ? record.order : "–"}</span>
              <span>{record.shipped ? record.carrier : "–"}</span>
              <span>{record.shipped ? record.tracking : "–"}</span>
              <span>{record.time}</span>
              <span className="exchange-ops">
                <a href="#/perks">{t("exchange.viewLogistics")}</a>
                <a href="#/perks">{t("exchange.details")}</a>
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
