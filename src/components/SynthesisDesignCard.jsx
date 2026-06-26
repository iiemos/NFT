import { Fragment } from "react";

// 合成展示卡：材料（+ 连接）→ 代币消耗 → 合成 → 成功/失败概率分支
export default function SynthesisDesignCard({ group }) {
  return (
    <article className="synthesis-design-card">
      <h3>{group.title}</h3>
      <div className="synthesis-inputs">
        {group.inputs.map((image, index) => (
          <Fragment key={image}>
            {index > 0 && (
              <span className="synthesis-plus" aria-hidden="true">
                +
              </span>
            )}
            <figure>
              <img src={image} alt={`${group.inputLabel}材料 ${index + 1}`} />
              <figcaption>{group.inputLabel}</figcaption>
            </figure>
          </Fragment>
        ))}
      </div>
      <div className="synthesis-cost">
        <span aria-hidden="true">+</span>
        {group.cost}
      </div>
      <button className="synthesis-fuse-btn" type="button">
        合成
      </button>
      <div className={`synthesis-outcomes count-${group.outcomes.length}`}>
        {group.outcomes.map((outcome) => (
          <div className={`synthesis-outcome ${outcome.tone}`} key={outcome.label}>
            <strong className="synthesis-rate">
              <em>{outcome.rate}</em> {outcome.label}
            </strong>
            <div className="synthesis-outcome-art">
              <img src={outcome.image} alt={outcome.label} />
              {outcome.gift && <img src={outcome.gift} alt="空投高端雪茄礼品卡" />}
            </div>
            <p>{outcome.text}</p>
          </div>
        ))}
      </div>
    </article>
  );
}
