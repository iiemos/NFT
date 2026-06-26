// 礼品兑换信息填写弹窗
export default function ExchangeModal({ onClose }) {
  return (
    <div className="exchange-modal-backdrop" role="dialog" aria-modal="true" aria-label="礼品兑换">
      <div className="exchange-modal">
        <button className="exchange-modal-close" type="button" onClick={onClose} aria-label="关闭兑换弹窗">
          ×
        </button>
        <img src="/images/cigr/design/exchange/modal.jpg" alt="CIGR NFT redeem preview" />
        <form className="exchange-modal-form">
          <label>
            收件姓名
            <input type="text" placeholder="请输入姓名" />
          </label>
          <label>
            联系方式
            <input type="text" placeholder="请输入电话或邮箱" />
          </label>
          <label>
            兑换地址
            <input type="text" placeholder="请输入收件地址" />
          </label>
          <button type="button">确认兑换</button>
        </form>
      </div>
    </div>
  );
}
