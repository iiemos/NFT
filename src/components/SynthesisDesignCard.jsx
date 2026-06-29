import { Fragment } from "react";
import { useI18n } from "../i18n.js";

// 合成展示卡：材料（+ 连接）→ 代币消耗 → 合成 → 成功/失败概率分支
export default function SynthesisDesignCard({ group }) {
  const { t } = useI18n();
  return (
    <article className="synthesis-design-card">
      <h3>{t(group.title) || group.title}</h3>
      <div className="synthesis-inputs">
        {group.inputs.map((image, index) => (
          <Fragment key={image}>
            {index > 0 && (
              <span className="synthesis-plus" aria-hidden="true">
                +
              </span>
            )}
            <figure>
              <img src={image} alt={`${t(group.inputLabel) || group.inputLabel} ${index + 1}`} />
              <figcaption>{t(group.inputLabel) || group.inputLabel}</figcaption>
            </figure>
          </Fragment>
        ))}
      </div>
      <div className="synthesis-cost">
        <span aria-hidden="true">+</span>
        {group.cost}
      </div>
      <button className="synthesis-fuse-btn" type="button">
        {t("synthesis.button")}
      </button>
      <div className={`synthesis-outcomes count-${group.outcomes.length}`}>
        {group.outcomes.map((outcome) => (
          <div className={`synthesis-outcome ${outcome.tone}`} key={outcome.label}>
            <strong className="synthesis-rate">
              <em>{outcome.rate}</em> {t(outcome.label) || outcome.label}
            </strong>
            <div className="synthesis-outcome-art">
              <img src={outcome.image} alt={t(outcome.label) || outcome.label} />
              {outcome.gift && <img src={outcome.gift} alt={t("gift.cigarGiftcard", "Gift cigar card")} />}
            </div>
            <p>{t(outcome.text) || outcome.text}</p>
          </div>
        ))}
      </div>
    </article>
  );
}
