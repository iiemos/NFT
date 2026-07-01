import { useEffect, useRef, useState } from "react";
import {
  cigrArrowBlackImage,
  cigrArrowWhiteImage,
  cigrCardItems,
  cigrHomeAudio,
  cigrHeroVideo,
  nftImages,
  cigrWordmarkImage,
  createStoryColumns,
  cultureImages,
  downloadColumns,
  futureSlots,
  lifestyleItems,
  workflowSteps,
} from "../data.js";
import { useI18n } from "../i18n.js";

function HomeBackgroundAudio() {
  const { t } = useI18n();
  const audioRef = useRef(null);
  const shouldAutoplayRef = useRef(true);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return undefined;

    audio.volume = 0.32;
    const syncPlaying = () => setIsPlaying(!audio.paused);
    const playAudio = () => {
      if (!shouldAutoplayRef.current) return;
      audio.play().catch(() => setIsPlaying(false));
    };
    const events = ["pointerdown", "touchstart", "keydown"];
    const resumeAudio = () => {
      playAudio();
      events.forEach((event) => window.removeEventListener(event, resumeAudio));
    };

    audio.addEventListener("play", syncPlaying);
    audio.addEventListener("pause", syncPlaying);
    playAudio();
    events.forEach((event) => window.addEventListener(event, resumeAudio, { once: true }));

    return () => {
      audio.removeEventListener("play", syncPlaying);
      audio.removeEventListener("pause", syncPlaying);
      events.forEach((event) => window.removeEventListener(event, resumeAudio));
    };
  }, []);

  const toggleAudio = () => {
    const audio = audioRef.current;
    if (!audio) return;

    if (isPlaying) {
      shouldAutoplayRef.current = false;
      audio.pause();
      setIsPlaying(false);
      return;
    }

    shouldAutoplayRef.current = true;
    audio.play().then(() => setIsPlaying(true)).catch(() => setIsPlaying(false));
  };

  return (
    <>
      <audio className="home-background-audio" ref={audioRef} src={cigrHomeAudio} autoPlay loop preload="auto" aria-hidden="true" />
      <button className={isPlaying ? "music-toggle is-playing" : "music-toggle"} type="button" onClick={toggleAudio} aria-label={isPlaying ? t("home.musicOff") : t("home.musicOn")}>
        <span className="material-symbols-outlined" aria-hidden="true">
          {isPlaying ? "volume_up" : "volume_off"}
        </span>
      </button>
    </>
  );
}

function CigrHero() {
  const { t } = useI18n();

  return (
    <section className="cigr-hero">
      <video className="cigr-hero-video" aria-label="CIGR homepage banner" autoPlay loop muted playsInline preload="metadata">
        <source src={cigrHeroVideo} type="video/mp4" />
      </video>
      <div className="cigr-hero-inner">
        <h1>
          <span className="hero-typewriter" aria-label={t("home.title")}>
            <span aria-hidden="true">{t("home.title")}</span>
          </span>
        </h1>
        {/* <p>{t("home.description")}</p> */}
        <div className="cigr-hero-actions">
          <a className="cigr-button yellow" href="#/mint">
            {t("home.cta.mint")}
          </a>
          <a className="cigr-button pink" href="#/about">
            {t("home.cta.collection")}
          </a>
        </div>
      </div>
    </section>
  );
}

function CigrCards() {
  const { t } = useI18n();
  return (
    <section className="cigr-section cigr-card-section" aria-label="CIGR cards">
      <div className="cigr-card-grid">
        {cigrCardItems.map((item) => (
          <article className="cigr-nft-card" key={item.title}>
            <img src={item.image} alt={item.title} />
            <strong>{t(item.title)}</strong>
            <span>{t(item.label)}</span>
          </article>
        ))}
      </div>
    </section>
  );
}

function LifestyleSection() {
  const { t } = useI18n();
  return (
    <section className="cigr-section lifestyle-section">
      <h2>{t("home.section.lifestyle")}</h2>
      <div className="lifestyle-grid">
        {lifestyleItems.map((item, index) => (
          <article className={`lifestyle-card tone-${index}`} key={item.title}>
            <img src={item.image} alt="" aria-hidden="true" />
            <h3>{t(item.title)}</h3>
            <p>{t(item.text)}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

function RwaSection() {
  const { t } = useI18n();
  return (
    <section className="cigr-section rwa-section">
      <div>
        <h2>{t("home.section.rwa")}</h2>
        <img className="cigr-wordmark" src={cigrWordmarkImage} alt="CIGR" />
        <p>{t("home.section.rwaDescription")}</p>
      </div>
      <video className="rwa-doodle-art" autoPlay loop muted playsInline preload="metadata">
        <source src="/videos/home-3-bg.mp4" type="video/mp4" />
      </video>
    </section>
  );
}

function CreateSection() {
  const { t } = useI18n();
  return (
    <section className="cigr-section create-section">
      <h2>{t("home.section.create")}</h2>
      <div className="create-masonry" aria-label="CIGR creative story waterfall">
        {createStoryColumns.map((column, columnIndex) => (
          <div className={`create-masonry-column offset-${column.offset}`} key={`create-column-${columnIndex}`}>
            {column.items.map((item, itemIndex) => {
              const cardKey = `${columnIndex}-${itemIndex}-${item.title || item.alt}`;
              const cardClass = `create-story-card shape-${item.shape}${item.type === "action" ? ` action-card tone-${item.tone}` : ""}`;

              if (item.type === "action") {
                return (
                  <a className={cardClass} href={item.href} key={cardKey}>
                    <span className="create-action-mark">{item.mark}</span>
                    <strong>{t(item.title)}</strong>
                  </a>
                );
              }

              if (item.type === "video") {
                return (
                  <figure className={cardClass} key={cardKey}>
                    <video aria-label={item.alt} autoPlay loop muted playsInline preload="metadata">
                      <source src={item.video} type="video/mp4" />
                    </video>
                  </figure>
                );
              }

              return (
                <figure className={cardClass} key={cardKey}>
                  <img src={item.image} alt={item.alt} />
                </figure>
              );
            })}
          </div>
        ))}
      </div>
    </section>
  );
}

function CultureSection() {
  const { t } = useI18n();
  return (
    <section className="cigr-section culture-section">
      <div className="culture-copy">
        <h2>{t("home.section.culture")}</h2>
        <p>{t("home.section.cultureDescription")}</p>
      </div>
      <div className="culture-gallery">
        {cultureImages.map((image, index) => (
          <img src={image} alt={`CIGR culture ${index + 1}`} key={image} />
        ))}
      </div>
    </section>
  );
}

function FutureSection() {
  const { t } = useI18n();
  const placeholderSlots = futureSlots.map((slot, index) => {
    const image = nftImages[index % nftImages.length];
    return {
      id: slot,
      image,
      alt: `placeholder-${index + 1}`,
    };
  });
  const rowSize = Math.ceil(placeholderSlots.length / 3);
  const futureRows = Array.from({ length: 3 }, (_, rowIndex) => placeholderSlots.slice(rowIndex * rowSize, rowIndex * rowSize + rowSize));

  return (
    <section className="cigr-section future-section">
      <div className="future-copy">
        <h2>{t("home.section.future")}</h2>
        <p>{t("home.section.futureDescription")}</p>
        <a className="magic-link" href="#/about">
          <span>MAGIC</span>
          <img src={cigrArrowBlackImage} alt="" aria-hidden="true" />
        </a>
      </div>
      <div className="future-slot-grid" aria-hidden="true">
        {futureRows.map((row, rowIndex) => (
          <div className={`future-slot-row ${rowIndex % 2 === 1 ? "direction-right" : ""}`} key={`future-slot-row-${rowIndex}`}>
            <div className="future-slot-track">
              {[0, 1].map((group) => (
                <div className="future-slot-track-set" key={`${rowIndex}-${group}`}>
                  {row.map((slot) => (
                    <img className="future-slot-item" src={slot.image} alt={slot.alt} key={`${slot.id}-${group}`} />
                  ))}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function WorkflowSection() {
  const { t } = useI18n();
  return (
    <section className="cigr-section workflow-section" id="roadmap">
      <h2>{t("home.section.workflow")}</h2>
      <div className="workflow-grid">
        {workflowSteps.map(([step, title, text, icon]) => (
          <article className="workflow-card" key={step}>
            <span className="workflow-icon">
              <img src={icon} alt="" aria-hidden="true" />
            </span>
            <small>{step}</small>
            <h3>{t(title)}</h3>
            <p>{t(text)}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

function DownloadSection() {
  const { t } = useI18n();
  const downloadImageColumns = downloadColumns.map((column, columnIndex) => {
    return {
      items: column.map((_, itemIndex) => ({
        id: `${columnIndex}-${itemIndex}`,
        image: nftImages[(columnIndex * downloadColumns.length + itemIndex) % nftImages.length],
      })),
    };
  });

  return (
    <section className="cigr-section download-section" id="download">
      <div className="download-panel">
        <div className="download-content">
          <h2>{t("home.section.downloadTitle")}</h2>
          <div className="download-actions">
            <a href="#/brand-kit">
              {t("home.section.startCreate")}
              <img src={cigrArrowWhiteImage} alt="" aria-hidden="true" />
            </a>
          </div>
        </div>
        <div className="download-grid" aria-hidden="true">
          {downloadImageColumns.map((column, columnIndex) => (
            <div className="download-column" key={columnIndex}>
              <div className="download-column-track">
                {[0, 1].map((group) => (
                  <div className="download-column-set" key={group}>
                    {column.items.map((slot) => (
                      <img className="download-column-item" src={slot.image} alt={`download-slot-${slot.id}`} key={`${slot.id}-${group}`} />
                    ))}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default function HomePage() {
  return (
    <main className="cigr-page">
      <HomeBackgroundAudio />
      <CigrHero />
      <CigrCards />
      <LifestyleSection />
      <RwaSection />
      <CreateSection />
      <CultureSection />
      <FutureSection />
      <WorkflowSection />
      <DownloadSection />
    </main>
  );
}
