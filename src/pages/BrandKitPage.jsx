import { brandColorTokens, brandKitDownload, brandWordmarks, cigrLogoImage, designBrandKitPath } from "../data.js";

export default function BrandKitPage() {
  return (
    <main className="cigr-page figma-page brand-kit-page">
      <section className="figma-sheet cigr-section">
        <h1 className="figma-page-title">品牌套件页面</h1>
        <div className="brand-kit-intro">
          <div>
            <h2>CIGR 品牌套件</h2>
            <p>这里汇总 CIGR 品牌资产、标志规范、品牌颜色与基础使用方式，确保社区传播和产品界面保持统一。</p>
            <a className="brand-kit-download" href={brandKitDownload} download>
              下载品牌附件
            </a>
          </div>
          <img className="brand-kit-board" src={`${designBrandKitPath}/hero-board.png`} alt="CIGR brand kit overview" />
        </div>
      </section>

      <section className="figma-sheet cigr-section split">
        <div>
          <h2>CIGR 标志</h2>
          <p>标志由 CIGR 手写字形、喷溅色彩和雪茄角色组成，应保持比例、清晰度和安全距离。</p>
        </div>
        <div className="logo-spec-board">
          <span className="logo-spec-tag">Workmark</span>
          <div className="logo-spec-frame">
            <span className="spec-block spec-block-tl">a</span>
            <span className="spec-block spec-block-tr">a</span>
            <span className="spec-block spec-block-bl">a</span>
            <span className="spec-block spec-block-br">a</span>
            <img className="logo-spec-logo" src={cigrLogoImage} alt="CIGR 标志安全区域示意" />
          </div>
        </div>
      </section>

      <section className="figma-sheet cigr-section split">
        <div>
          <h2>品牌颜色</h2>
          <p>主色由黄色、粉色、青色、黑色和白色组成，用于强调品牌的街头感与高辨识度。</p>
        </div>
        <div className="brand-spec-color-grid">
          {brandColorTokens.map((token) => (
            <article key={token.name} style={{ "--brand-color": token.hex }}>
              <strong>{token.name}</strong>
              <span>CMYK: {token.cmyk}</span>
              <span>RGB: {token.rgb}</span>
              <span>HEX: {token.hex}</span>
            </article>
          ))}
        </div>
      </section>

      <section className="figma-sheet cigr-section split compact">
        <div>
          <h2>标志颜色</h2>
          <p>在深色或浅色背景中分别使用对应版本，避免复杂背景降低识别度。</p>
        </div>
        <div className="logo-modes-grid">
          {brandWordmarks.map((mark) => (
            <figure className={`wordmark-card ${mark.tone}`} key={mark.label}>
              <div className="wordmark-canvas" style={{ backgroundImage: `url(${mark.image})` }} role="img" aria-label={mark.label} />
              <figcaption>
                <span>{mark.label}</span>
                <div className="wordmark-actions">
                  {mark.files.map(([type, href]) => (
                    <a href={href} download key={type}>
                      {type}
                    </a>
                  ))}
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      </section>
    </main>
  );
}
