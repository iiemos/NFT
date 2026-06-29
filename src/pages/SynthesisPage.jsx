import { useMemo, useState } from "react";
import SynthesisDesignCard from "../components/SynthesisDesignCard.jsx";
import { Icon } from "../components/ui.jsx";
import { inventory, synthesisGroups } from "../data.js";
import { useI18n } from "../i18n.js";

const synthesisModes = [
  { from: "R", to: "SR", rate: "50%" },
  { from: "SR", to: "SSR", rate: "100%" },
];
const synthesisSlots = ["top", "left", "right", "bottom"];

export default function SynthesisPage() {
  const [activeMode, setActiveMode] = useState(0);
  const [selected, setSelected] = useState([]);
  const [isSynthesizing, setIsSynthesizing] = useState(false);
  const [hasSynthesized, setHasSynthesized] = useState(false);
  const { t } = useI18n();
  const group = synthesisGroups[activeMode] || synthesisGroups[0];
  const mode = synthesisModes[activeMode] || synthesisModes[0];
  const successRate = Number.parseInt(mode.rate, 10);
  const selectedCount = selected.length;
  const resultReady = selectedCount >= 4;
  const resultImage = group.outcomes[0]?.image;

  const inventoryItems = useMemo(
    () =>
      inventory.map((item, index) => ({
        ...item,
        image: group.inputs[index % group.inputs.length],
      })),
    [group],
  );

  const toggleMode = (index) => {
    if (index === activeMode) return;
    setActiveMode(index);
    setSelected([]);
    setIsSynthesizing(false);
    setHasSynthesized(false);
  };

  const toggleNft = (id) => {
    if (isSynthesizing) return;
    setHasSynthesized(false);
    setSelected((value) => {
      if (value.includes(id)) return value.filter((item) => item !== id);
      return value.length >= 4 ? value : [...value, id];
    });
  };

  const beginSynthesis = () => {
    if (!resultReady || isSynthesizing) return;
    setIsSynthesizing(true);
    setHasSynthesized(false);
    setTimeout(() => {
      setIsSynthesizing(false);
      setHasSynthesized(true);
    }, 2800);
  };

  const resultText = hasSynthesized
    ? t(group.outcomes[0]?.text, group.outcomes[0]?.text)
    : t("synthesis.resultWait", "Select 4 NFTs to display the result.");

  return (
    <main className="cigr-page figma-page synthesis-operation-page">
      <section className="figma-sheet cigr-section compact synthesis-flow-section">
        <div className="synthesis-stack">
          {synthesisGroups.map((item) => (
            <SynthesisDesignCard group={item} key={item.title} />
          ))}
        </div>
      </section>

      <section className="figma-sheet cigr-section synthesis-fuse-panel">
        <h2>{t("synthesis.subtitle")}</h2>
        <p>{t("synthesis.description")}</p>

        <div className="synthesis-rate-toggle" role="tablist" aria-label={t("synthesis.label")}>
          {synthesisGroups.map((item, index) => {
            const itemMode = synthesisModes[index] || synthesisModes[0];
            return (
              <button
                aria-selected={activeMode === index}
                className={activeMode === index ? "active" : ""}
                key={item.title}
                role="tab"
                type="button"
                onClick={() => toggleMode(index)}
              >
                {itemMode.from} → {itemMode.to} <span>{itemMode.rate}</span>
              </button>
            );
          })}
        </div>

        <div className="synthesis-operation-grid">
          <div className="synthesis-inventory-column">
            <div className="synthesis-panel-label">
              <span>{t("synthesis.inventory")}</span>
              <b>
                {inventoryItems.length} {mode.from} CIGRS
              </b>
            </div>
            <div className="synthesis-mini-list">
              {inventoryItems.map((item) => (
                <button className={selected.includes(item.id) ? "selected" : ""} key={item.id} type="button" onClick={() => toggleNft(item.id)}>
                  <img src={item.image} alt={`CIGR #${item.id}`} />
                  <span>
                    {mode.from} #{item.id}
                  </span>
                  <i aria-hidden="true">{selected.includes(item.id) ? "✓" : ""}</i>
                </button>
              ))}
            </div>
          </div>

          <div className="synthesis-chamber">
            <div className={isSynthesizing ? "synthesis-cross-grid is-fusing" : "synthesis-cross-grid"} aria-label={t("synthesis.label")}>
              {synthesisSlots.map((slot, index) => {
                const selectedItem = inventoryItems.find((item) => item.id === selected[index]);
                return (
                  <button className={selectedItem ? `synthesis-nft-card cell-${slot} filled` : `synthesis-nft-card cell-${slot}`} key={slot} type="button" onClick={() => selectedItem && toggleNft(selectedItem.id)}>
                    <span className="synthesis-glow-border" aria-hidden="true"></span>
                    {selectedItem ? <img src={selectedItem.image} alt={`CIGR #${selectedItem.id}`} /> : <Icon>add</Icon>}
                  </button>
                );
              })}
              <div className={isSynthesizing ? "synthesis-energy-core is-fusing" : "synthesis-energy-core"} aria-hidden="true">
                <span className="energy-ring ring-a"></span>
                <span className="energy-ring ring-b"></span>
                <span className="energy-arc arc-a"></span>
                <span className="energy-arc arc-b"></span>
                <span className="energy-core-label">FUSE</span>
              </div>
            </div>

            <div className="synthesis-status-bar">
              <span className={resultReady ? "done" : ""}></span>
              <b>{resultReady ? t("synthesis.readyText", "Four cards ready. Arc fusion enabled.") : t("synthesis.waitText", "Select 4 NFTs to activate fusion.")}</b>
            </div>

            <div className="synthesis-probability-panel">
              <strong>{t("synthesis.probability")}</strong>
              <div>
                <span className="success">
                  <em>{mode.rate}</em>
                  {t("合成成功")}
                </span>
                {successRate < 100 && (
                  <span>
                    <em>{100 - successRate}%</em>
                    {t("合成失败")}
                  </span>
                )}
              </div>
              <small>{t(group.cost) || group.cost}</small>
            </div>

            <button className="synthesis-fuse-action" type="button" onClick={beginSynthesis} disabled={!resultReady || isSynthesizing}>
              <span></span>
              {isSynthesizing ? t("synthesis.fusing", "Fusing...") : `${t("synthesis.button")} (${selectedCount}/4)`}
            </button>
          </div>

          <div className="synthesis-result-preview">
            <div className="synthesis-panel-label">
              <span>{t("synthesis.panelLabel")}</span>
              <b>{hasSynthesized ? t("synthesis.resultReady") : t("synthesis.resultLocked")}</b>
            </div>
            <div className={hasSynthesized ? "synthesis-result-box ready" : "synthesis-result-box"}>
              {hasSynthesized ? <img src={resultImage} alt={t("synthesis.panelLabel")} /> : <Icon>lock</Icon>}
            </div>
            <div className="synthesis-potential-tier">
              <span>{t("synthesis.potentialTier", "Potential Tier")}</span>
              <b>{mode.to} CIGRS</b>
            </div>
            <p>{resultText}</p>
            <div className="synthesis-evolution-path">
              {["R", "SR", "SSR"].map((tier) => (
                <span className={tier === mode.to ? "active" : ""} key={tier}>
                  <i></i>
                  {tier}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {isSynthesizing && (
        <div className="synthesis-overlay" aria-live="polite">
          <div className="synthesis-overlay-backdrop"></div>
          <div className="synthesis-overlay-stage">
            {synthesisSlots.map((slot, index) => {
              const selectedItem = inventoryItems.find((item) => item.id === selected[index]);
              return selectedItem ? <img className={`overlay-card overlay-${slot}`} src={selectedItem.image} alt="" aria-hidden="true" key={slot} /> : null;
            })}
            <div className="overlay-energy" aria-hidden="true">
              <span></span>
              <i></i>
            </div>
            <b>{t("synthesis.overlayLabel", "ARC FUSION IN PROGRESS")}</b>
          </div>
        </div>
      )}
    </main>
  );
}
