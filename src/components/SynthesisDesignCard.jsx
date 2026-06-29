import { useI18n } from "../i18n.js";

export default function SynthesisDesignCard({ group }) {
  const { t } = useI18n();
  const outcomeCount = group.outcomes.length;

  return (
    <article className={`synthesis-design-card outcome-count-${outcomeCount}`}>
      <h3>{t(group.title) || group.title}</h3>

      <div className="synthesis-input-tray">
        <div className="synthesis-input-row">
          {group.inputs.map((image, index) => (
            <figure className="synthesis-input-card" key={image}>
              <img src={image} alt={`${t(group.inputLabel) || group.inputLabel} ${index + 1}`} />
              <figcaption>{t(group.inputLabel) || group.inputLabel}</figcaption>
              {index < group.inputs.length - 1 && (
                <span className="synthesis-inline-plus" aria-hidden="true">
                  +
                </span>
              )}
            </figure>
          ))}
        </div>
        <div className="synthesis-token-cost">
          <span aria-hidden="true">+</span>
          <strong>{t(group.cost) || group.cost}</strong>
        </div>
      </div>

      <div className="synthesis-flow-lines" aria-hidden="true">
        <span className="synthesis-flow-main"></span>
        <span className="synthesis-flow-branch"></span>
        <span className="synthesis-merge-dot">{t("synthesis.merge")}</span>
      </div>

      <div className="synthesis-outcome-map">
        {group.outcomes.map((outcome) => (
          <article className={`synthesis-outcome-card ${outcome.tone}`} key={outcome.label}>
            <strong>
              <em>{outcome.rate}</em>
              {t(outcome.label) || outcome.label}
            </strong>
            <div className={outcome.gift ? "synthesis-outcome-art has-gift" : "synthesis-outcome-art"}>
              <img src={outcome.image} alt={t(outcome.label) || outcome.label} />
              {outcome.gift && <img src={outcome.gift} alt={t("gift.cigarGiftcard", "Gift cigar card")} />}
            </div>
            <p>{t(outcome.text) || outcome.text}</p>
          </article>
        ))}
      </div>
    </article>
  );
}
