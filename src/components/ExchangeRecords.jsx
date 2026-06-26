import { exchangeColumns, exchangeRecords } from "../data.js";

// 礼品兑换记录查询表
export default function ExchangeRecords() {
  return (
    <div className="exchange-records">
      <h3>记录查询</h3>
      <p className="exchange-records-note">账号全量历史兑换订单集中展示，订单状态、物流明细一键可查。</p>
      <div className="exchange-search">
        <input type="text" placeholder="输入 ID" aria-label="输入订单 ID" />
        <button type="button">点击查询</button>
      </div>
      <div className="exchange-panel">
        <div className="exchange-panel-head">
          <strong>记录查询</strong>
          <div className="exchange-panel-actions">
            <button type="button" className="filter">
              筛选
            </button>
            <button type="button" className="export">
              导出
            </button>
          </div>
        </div>
        <div className="exchange-table" aria-label="兑换记录">
          <div className="exchange-row exchange-head">
            {exchangeColumns.map((column) => (
              <span key={column}>{column}</span>
            ))}
          </div>
          {exchangeRecords.map((record) => (
            <div className="exchange-row" key={record.id}>
              <span>礼品卡片</span>
              <span className={`exchange-status ${record.tone}`}>{record.status}</span>
              <span>{record.shipped ? record.order : "–"}</span>
              <span>{record.shipped ? record.carrier : "–"}</span>
              <span>{record.shipped ? record.tracking : "–"}</span>
              <span>{record.time}</span>
              <span className="exchange-ops">
                <a href="#/perks">查看物流</a>
                <a href="#/perks">详情</a>
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
