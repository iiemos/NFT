import { useEffect, useRef, useState } from "react";
import { cigrHomeAudio } from "../data.js";
import { useI18n } from "../i18n.js";

export default function BackgroundMusic() {
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
