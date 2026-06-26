import { useState } from "react";
import SynthesisDesignCard from "../components/SynthesisDesignCard.jsx";
import { Icon } from "../components/ui.jsx";
import { designNftPath, inventory, nftDesignCards, synthesisGroups } from "../data.js";

export default function SynthesisPage() {
  const [selected, setSelected] = useState([]);
  const [isSynthesizing, setIsSynthesizing] = useState(false);

  const toggleNft = (id) => {
    setSelected((value) => {
      if (value.includes(id)) return value.filter((item) => item !== id);
      return value.length >= 2 ? [value[1], id] : [...value, id];
    });
  };

  const beginSynthesis = () => {
    if (selected.length < 2) return;
    setIsSynthesizing(true);
    setTimeout(() => setIsSynthesizing(false), 700);
  };

  return (
    <main className="cigr-page figma-page synthesis-operation-page">
      <section className="figma-sheet cigr-section compact">
        <h1 className="figma-page-title">合成页面</h1>
        <div className="synthesis-stack">
          {synthesisGroups.map((group) => (
            <SynthesisDesignCard group={group} key={group.title} />
          ))}
        </div>
      </section>

      <section className="figma-sheet cigr-section synthesis-fuse-panel">
        <h2>FUSE. UPGRADE. EVOLVE.</h2>
        <p>Combine your CIGR assets into the fusion chamber to unlock higher rarities and identity rights.</p>
        <div className="synthesis-rate-toggle" aria-label="合成概率">
          <span>R → SR&nbsp;&nbsp;50%</span>
          <span>SR → SSR&nbsp;&nbsp;100%</span>
        </div>

        <div className="synthesis-operation-grid">
          <div className="synthesis-inventory-column">
            <div className="synthesis-panel-label">
              <span>INVENTORY</span>
              <b>{inventory.length} R CIGRS</b>
            </div>
            <div className="synthesis-mini-list">
              {inventory.map((item, index) => (
                <button className={selected.includes(item.id) ? "selected" : ""} key={item.id} type="button" onClick={() => toggleNft(item.id)}>
                  <img src={nftDesignCards[index % nftDesignCards.length].image} alt={`CIGR #${item.id}`} />
                  <span>#{item.id}</span>
                </button>
              ))}
            </div>
          </div>

          <div className="synthesis-chamber">
            <div className={isSynthesizing ? "synthesis-orb is-pulsing" : "synthesis-orb"} aria-hidden="true">
              <i></i>
              <i></i>
              <i></i>
              <i></i>
            </div>
            <button type="button" onClick={beginSynthesis} disabled={selected.length < 2}>
              合成
            </button>
            <small>{selected.length} / 2 selected</small>
          </div>

          <div className="synthesis-result-preview">
            <div className="synthesis-panel-label">
              <span>RESULT PREVIEW</span>
              <b>{selected.length >= 2 ? "READY" : "LOCKED"}</b>
            </div>
            <div className="synthesis-result-box">
              {selected.length >= 2 ? <img src={`${designNftPath}/a-card.jpg`} alt="合成结果预览" /> : <Icon>lock</Icon>}
            </div>
            <p>{selected.length >= 2 ? "获得 1 张窖藏 NFT，原 NFT 完整保留。" : "选择 2 张 NFT 后显示结果。"}</p>
          </div>
        </div>
      </section>
    </main>
  );
}
