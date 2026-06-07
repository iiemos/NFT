import { useEffect, useMemo, useRef, useState } from "react";

const hamburgerIcon = "/images/icon-hamburguer.svg";
const closeMenuIcon = "https://www.doodles.app/icons/close-menu.svg";
const menuRopeImage =
  "https://www.doodles.app/_next/image?url=%2Fimages%2Frope.png&w=1920&q=100&dpl=dpl_8Y9GS5ztL2YdAwYZFWtXNUcXiJVB";

const heroImage =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuBf0CKuOO8FwmzjkeSoOSbKslN9Qrs8jbDjyGPIQJ8gZZ0N08vfwfNKFOEUkPRfZj_GaxXH236z6xijVVgEOY6d2vuPNDIcdFXrFcQlBfAvh7iUYru39GDy-710BlrmuZiqEjEU_QddDrkxOYX8ybg78jQ9HprWEy9GWlTnsdZgSwY-g-iFDAQIYVQ4av0Q5BqxN5BTgxtZWlmopBA0id_K319KM1rYPQAs6cH4TWtrVuMhJz9lRmJamMFPmc1xBcyI3mj9e_WARQ";
const traitsImage =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuBCuuShg7kZbPWRZormoWCp1GOMHBp-qr2Iz_ilAnaT0qupLpA9ixV_ytQ--2kZWWN65EOQGhbYKCy9giIe4bt3z-a6AyDMmXtRdVBmVD-PKzPesfYRKrFipznGXwlyn_JE5CWVP-RQquaieK3QLCnsSuRNQy6olpM5KoiyBHNk07C33UoPI97IQ13zYxCc_BboaGgrhygOGnoSohWJMlP3SiZW3ur3lrqNrMIizc2UN6D_ncwZBrjxzrn6BMDScLTGeA7CwLHJQg";
const mintProgressImage =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuC5jzfh4hHqZQZ2phu3nABkdZ1L4oEoXTEs9G4xW2lfQkNI4gHUj3rk6-w7PFM6NEX4idQCp2H9BIHH7lD_kJhat0XyFNjNMtwhBJHikBKXxNrf1F_xdiu10SIh9fnTv1eQIcjkAgWgTFr2thRPUyw9WKyaOzW4zZvnpMdRdIBmB6rpT1uq21gcsu4C2AUgZqbSUabprbMmcxxrjnD44D-DT4fVx0Y5920HYNYTNyk4Ni6xnsT1BwoTs1FviFsQIdWriNCDYNzUIw";
const gashaponImage =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuAtyyYtsB4BNChOt4jNwC-M7ub7kXdF_0rMraddLOyzA34-fuJu_D5y4lvqMtwWHK_GuDymxFnDFsHPqWNdcpsizkqarstEpPHMdswXBy36xuP-6tW1kLYHPXQ71mPHJwrfhd1kQeU80P9UpEmYQWVAs6gfUI34L_epq6deX6E7xGYRBwiFs9BUvSz47enDbt5EMkAJ_DXmekusG7oyEkkVo45_irEoDGeHEZEPbQNZPLh4UnsTEEVnVIGibJdNgz7Wgjda4-4niQ";
const friendsImage =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuBSVqOTRypBpd4xnL2X4zMmEreLrOOJ4kvQYukoVZ4BUljxwaozlid1LXQEf8xwkyeN8qHFTMudxumJXZ7Qp6CKnj3K3humMPMmVOBv9RKieqy2DFaT2WHs4nUJlvJ0CeJTdp7mNTWAFwM3w22ZlVgd3zFAladh0FueCvB__eIiV8xSCpEhz0Dt2EsMzUtITWkulVGVIPa3CN2ebZ44weZcFPEgM0U5x1TI1YxiIEK1JzTshnNIhitiS-VSjrLlx6EiPVA_-F17Dw";
const reactorImage =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuDIFSbvqMaWRGkJBU0L34N8-nr9d6FD3v4f7KVayWWYW9CFIhi6PRRDEbfPO81aKNhzq1TDxIHXV_juwSQ9QQzgFkNS0LMqrqi9OplUmVYrG7xcU5TY8UVG2v98mBZYpSxPAvhoS7D6BKBWBhuF2Rpoum1uxnP4nsfiY4rLHE495XF2Ev7_RnVbtAfoV__jfHtZW_0qILDxboFcRsfxpXrdFeSNrxPvVDQWmkp6gwML9-orueNVf5WlT4XxXCh1E-upXd1ODAtlmg";
const doodleTraitImage =
  "https://lh3.googleusercontent.com/aida/AP1WRLtzdgyyYqRWE_htdkaJcTX1Ja8LGTveuXeB9zMaYHmp7hy23i73TsuBvxu2C5y-7PX1VMLKhn6nsu4twzHBvyiQDylKBiebB83PFD0C8Xhdmxf8zwpWPaSp8Bw-iuKZH5ScTHnLLmMw71ti4PTqHXZu-_KX8DeKW7DuApd1eKh_LusM1oKFX6wSSVuTxDV_8L8N5RXkKxvDVgSoKhQzIOPJNSoDauTk3V9F8yypzNR3RkZYuEIIHf6W";
const farmHeroImage =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuBHrCU-CTk1VPzA5R47UYOaLUxiJ1vITRszZqtVJIzWNH7pUIGiI-0PHob3K5gNSzEv-bfXY1TJhCKOk0AGTJU57huDQgSh7D58WwzdZtihN-WEK6lzI5ppIJenzC66PqrEo4aYBEVNnomxQvBjW6Uk6r8UhDcpn7Nc7Y4O0ovXF2FAiby7KAPnEQS_NIN6NiJQ6NRDnAvJ-1y1oeItcu03h3njOp6BU8r7DXS7k6lEirPVdF_-tQCONgUJDcFWvfRgVz2seiGAwQ";
const auctionNftImage =
  "https://lh3.googleusercontent.com/aida/AP1WRLvuKTJMF0x8YM0k1aO4HcvHw1imOjIaWbZb7-EtpYA6944ag74MY6Tc15zh5mTS2pno1epvVRUuxdugqyFrVRH8GR5mAU9KVIEaC3-epQl3hrJbiokbx3eid2AmRE246EJlDcM386PKNC7hr2CGiqikl2GLkWu81f5FiF16EM12pbq8eL1HrZ-2Ar48CEolsQhCIIazc0JUCWngVZgMEXG4_wQ17ZMF1_DbyXiD3VEZ4HGzZK-tL5RFHg";
const countdownBombImage =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuAb_aUb7r4lJG20pDFYcyQc1P4JdugkA9LLP78zXZOgfq4Ozf0h38e0h41aiV0Py7HcY0zFLlSShOxJp9S_YiN1we_CH8hZQav_7FgoDWxvos8oWX0h8xTU_cffd3Aq93WYVg7Vwgscn58_R21wQdr5nJvZ63BINLsioMj8mifwLMcHSmvcg96H0ZnOjOBuI6ilQBXM0fh45m6G0ZBqWNV4EqCj-wCCznqAQ6iSoSbXuB9SlMHyxVjP6NoYFdtN5AreJrmhqeNiow";
const passportAvatar =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuANZ6VCcZ5udSOUCpLTRgY340WCNUFzmOzvPSLaeOutQHkH5jeamCNgYM-DcckWaFeAJtnHIDVIQt7Ecc4wcGTsyqmu9TPzEyukcHE89PoTFLghlL10nXas0NtBoP_yqzPt2O9GSLLc9v4Gz0OyluhSbozbC-VXpZsIdmeiZB-SIbOnf4LT36OI-WQbPBQDypfA6z47LX7EuHmgxk43nDQzQjLzeXrROk5mlMMcYVuuBQApf_-xFkchREIzyUTIfNnr9a2kCcNc2w";
const passportStamps =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuBOYKpuQuqW63Ehv7DXkEw5yZNKJdNUu8s0AJ62gYyB3Y_JkRQEMWcImaXGWRuDfXHCdkhP4SAHD4CWZPWVZizH0OqvuUAzr4lqKiz6hFUcgJHpRcoR3NIzaygeqT7NGTL4InLjLTb--vP4GJjROpM-Ms8-oSivH6lG66FkxJr0ZwMs1_58Uf2ZRt7m_HwKDaah-Kl1YxekAtGz5RTaimhlxRqbKUMSfcUfOD0BZOQnOk8fibRUzb5-OWOTMg4T_YNLWMsaEuNDuQ";
const perkImage =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuDQwPdn1rwbDsBeLu-_Zxpt7jVnZJvPopFGWfw6lTanQ_LXxlwtUqZLxv_mXHe3SFRvqJmAbiQzVM0VKJBKsbTqp-rfuIHkTddvatJ5PwYjsTKwVRDNXKeEo1pHihRHM3TN4jp21QRBqIQmf3gQ7z5PvLujUXREMIBspMFB35sf3KLCucHQkupeOZs9eSvfci6kBcdS_Fjs8oLUeFZOfADqcOmZcy7tt9tWHAS-GgPgGcNUlKFdVuQwJ2NEaOBazI0h4pdJ4T5Ang";

const routes = [
  { id: "home", label: "Home", path: "#/" },
  { id: "mint", label: "Mint", path: "#/mint" },
  { id: "staking", label: "Staking", path: "#/staking" },
  { id: "synthesis", label: "Synthesis", path: "#/synthesis" },
  { id: "auction", label: "Auction", path: "#/auction" },
  { id: "perks", label: "Perks", path: "#/perks" },
];

const socials = ["Discord", "Twitter", "OpenSea"];
const mobileSocials = [
  { label: "Instagram", icon: "/images/icons/icon-instagram.svg" },
  { label: "X", icon: "/images/icons/icon-x.svg" },
  { label: "Discord", icon: "/images/icons/icon-discord.svg" },
  { label: "TikTok", icon: "/images/icons/icon-tiktok.svg" },
  { label: "YouTube", icon: "/images/icons/icon-youtube.svg" },
];
const carouselItems = [
  { type: "image", tone: "pink", alt: "Traits grid" },
  { type: "icon", tone: "green", icon: "auto_awesome" },
  { type: "image", tone: "blue", alt: "Traits grid", effect: "grayscale" },
  { type: "icon", tone: "rose", icon: "face" },
  { type: "image", tone: "gray", alt: "Traits grid", effect: "bright" },
];
const inventory = [
  { id: "402", tone: "green", traits: ["primary", "secondary"], effect: "" },
  { id: "119", tone: "blue", traits: ["tertiary", "pink"], effect: "mirror" },
  { id: "882", tone: "pink", traits: ["mint"], effect: "soft" },
  { id: "034", tone: "gray", traits: ["primary", "sky"], effect: "tilt" },
  { id: "221", tone: "mint", traits: ["ink"], effect: "" },
  { id: "506", tone: "lavender", traits: ["muted"], effect: "grayscale" },
];

function getPageFromHash() {
  const page = window.location.hash.replace("#/", "") || "home";
  return routes.some((route) => route.id === page) ? page : "home";
}

function useHashPage() {
  const [page, setPage] = useState(getPageFromHash);

  useEffect(() => {
    const updatePage = () => {
      setPage(getPageFromHash());
      window.scrollTo({ top: 0, behavior: "smooth" });
    };

    window.addEventListener("hashchange", updatePage);
    return () => window.removeEventListener("hashchange", updatePage);
  }, []);

  return page;
}

function Icon({ children, className = "" }) {
  return <span className={`material-symbols-outlined ${className}`}>{children}</span>;
}

function Navigation({ currentPage }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuButtonSpinning, setIsMenuButtonSpinning] = useState(false);
  const menuButtonTimer = useRef(null);

  useEffect(() => {
    const updateScroll = () => setIsScrolled(window.scrollY > 20);

    updateScroll();
    window.addEventListener("scroll", updateScroll);
    return () => window.removeEventListener("scroll", updateScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMenuOpen]);

  useEffect(() => {
    const closeOnEscape = (event) => {
      if (event.key === "Escape") setIsMenuOpen(false);
    };

    window.addEventListener("keydown", closeOnEscape);
    return () => window.removeEventListener("keydown", closeOnEscape);
  }, []);

  useEffect(() => () => clearTimeout(menuButtonTimer.current), []);

  const toggleMenu = () => {
    clearTimeout(menuButtonTimer.current);
    setIsMenuButtonSpinning(true);
    setIsMenuOpen((open) => !open);
    menuButtonTimer.current = setTimeout(() => setIsMenuButtonSpinning(false), 520);
  };

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <nav className={`nav-shell ${isMenuOpen ? "menu-open" : ""} ${isScrolled || currentPage !== "home" ? "scrolled" : ""}`}>
      <div className="nav-inner">
        <a className="brand" href="#/">
          DoodleWorlds
        </a>
        <div className="nav-links">
          {routes.map((item) => (
            <a className={currentPage === item.id ? "active" : ""} href={item.path} key={item.id}>
              {item.label}
            </a>
          ))}
        </div>
        <button className="jelly-button wallet-button" type="button">
          Connect Wallet
        </button>
        <button
          aria-expanded={isMenuOpen}
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className={`mobile-menu-toggle ${isMenuOpen ? "is-open" : ""} ${isMenuButtonSpinning ? "is-spinning" : ""}`}
          onClick={toggleMenu}
          type="button"
        >
          <img alt={isMenuOpen ? "Close menu" : "Open menu"} src={isMenuOpen ? closeMenuIcon : hamburgerIcon} />
        </button>
      </div>
      <div className="mobile-gradient-line" aria-hidden="true"></div>
      <div className={`mobile-menu ${isMenuOpen ? "open" : ""}`} aria-hidden={!isMenuOpen}>
        <div className="mobile-menu-inner">
          <div className="mobile-menu-links">
            {routes.map((item) => (
              <a className={currentPage === item.id ? "active" : ""} href={item.path} key={item.id} onClick={closeMenu}>
                {item.label}
              </a>
            ))}
          </div>
          <a className="mobile-ai-cta" href="#/" onClick={closeMenu}>
            START CREATING
          </a>
          <div className="mobile-socials" aria-label="Social links">
            {mobileSocials.map((item) => (
              <a href="#" key={item.label} aria-label={item.label} onClick={closeMenu}>
                <img src={item.icon} alt="" aria-hidden="true" />
              </a>
            ))}
          </div>
          <img className="menu-rope" src={menuRopeImage} alt="" aria-hidden="true" />
        </div>
      </div>
    </nav>
  );
}

function HomePage() {
  return (
    <main>
      <div className="ambient-layer" aria-hidden="true">
        <div className="ambient one"></div>
        <div className="ambient two"></div>
      </div>
      <Hero />
      <InfiniteCarousel />
      <BentoStats />
      <Newsletter />
    </main>
  );
}

function Hero() {
  const [offset, setOffset] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMove = (event) => {
      const amount = 20;
      setOffset({
        x: (event.clientX / window.innerWidth - 0.5) * amount,
        y: (event.clientY / window.innerHeight - 0.5) * amount,
      });
    };

    window.addEventListener("mousemove", handleMove);
    return () => window.removeEventListener("mousemove", handleMove);
  }, []);

  return (
    <section className="hero-section" id="top">
      <div className="hero-copy">
        <div className="status-badge">
          <span>NOW LIVE ON ETHEREUM</span>
        </div>
        <h1>
          Enter <span>DoodleWorlds</span>
        </h1>
        <p>A whimsical collection of 10,000 unique hand-drawn friends on the blockchain. Explore a world where imagination knows no bounds!</p>
        <div className="hero-actions">
          <a className="jelly-button mint-button" href="#/mint">
            Mint a Friend
          </a>
          <a className="jelly-button collection-button" href="#/perks">
            View Collection
          </a>
        </div>
      </div>

      <div className="hero-art" style={{ "--x": `${offset.x}px`, "--y": `${offset.y}px` }}>
        <div className="hero-frame">
          <img alt="Three playful doodle characters" src={heroImage} />
        </div>
        <div className="eco-sticker">
          <Icon>potted_plant</Icon>
          <span>100% ECO-FRIENDLY</span>
        </div>
      </div>
    </section>
  );
}

function CarouselCard({ item }) {
  if (item.type === "icon") {
    return (
      <div className={`carousel-card ${item.tone}`}>
        <Icon className="large-icon">{item.icon}</Icon>
      </div>
    );
  }

  return (
    <div className={`carousel-card ${item.tone}`}>
      <img alt={item.alt} className={item.effect || ""} src={traitsImage} />
    </div>
  );
}

function InfiniteCarousel() {
  const cards = useMemo(() => [...carouselItems, ...carouselItems], []);

  return (
    <section className="carousel-section" aria-label="Collection preview">
      <div className="carousel-track">
        {cards.map((item, index) => (
          <CarouselCard item={item} key={`${item.tone}-${index}`} />
        ))}
      </div>
    </section>
  );
}

function BentoStats() {
  return (
    <section className="bento-section">
      <div className="bento-grid">
        <article className="ethos-card">
          <div>
            <h2>The Doodle Ethos</h2>
            <p>
              We're building a community-driven universe where every holder has a say. From global events to exclusive collaborations, your Doodle is your ticket to the future of fun.
            </p>
            <div className="tag-row">
              <span>DAO GOVERNANCE</span>
              <span>GLOBAL EVENTS</span>
            </div>
          </div>
          <Icon className="watermark">celebration</Icon>
        </article>

        <article className="stat-card blue">
          <div className="stat-head">
            <Icon>groups</Icon>
            <div>
              <small>HOLDERS</small>
              <strong>5.2K+</strong>
            </div>
          </div>
          <p>Growing stronger every single day through our collaborative ecosystem.</p>
        </article>

        <article className="stat-card pink">
          <div className="stat-head">
            <Icon>token</Icon>
            <div>
              <small>FLOOR PRICE</small>
              <strong>1.2 ETH</strong>
            </div>
          </div>
          <div className="trend">
            <Icon>trending_up</Icon>
            <span>UP 14% THIS WEEK</span>
          </div>
        </article>

        <article className="craft-card">
          <Icon className="craft-icon">palette</Icon>
          <h3>Hand Crafted</h3>
          <p>Each trait is uniquely illustrated for quality.</p>
        </article>
      </div>
    </section>
  );
}

function Newsletter() {
  const [message, setMessage] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    setMessage("Yay! You are on the list!");
  };

  return (
    <section className="newsletter-section">
      <div className="newsletter-card">
        <div className="mail-sticker">
          <Icon>mail</Icon>
        </div>
        <h2>Don't miss the fun!</h2>
        <p>Get notified about upcoming drops and synthesis events.</p>
        <form onSubmit={handleSubmit}>
          <input aria-label="Email address" placeholder="YOUR@EMAIL.COM" type="email" required />
          <button className="jelly-button join-button" type="submit">
            Join
          </button>
        </form>
        {message && <div className="form-message">{message}</div>}
      </div>
    </section>
  );
}

function MintPage() {
  const [count, setCount] = useState(1);

  const changeCount = (step) => setCount((value) => Math.min(5, Math.max(1, value + step)));

  return (
    <main className="page-shell mint-page">
      <section className="page-heading">
        <span className="kicker">NFT Mint</span>
        <h1>Mint Your Doodle</h1>
        <p>Public mint controls, progress, pricing, and recent reveals converted from the pasted Tailwind page into React.</p>
      </section>

      <section className="mint-grid">
        <aside className="stack">
          <Panel className="white-card">
            <h2>Mint Progress</h2>
            <img className="mint-progress-image" src={mintProgressImage} alt="Rainbow mint progress bottle" />
            <p className="label">Current supply</p>
            <strong className="display-number green-text">4,321 / 10,000</strong>
          </Panel>
          <Panel className="sky-card rotate-card">
            <h3>The Collection</h3>
            <p>Each Doodle is generated from over 200 whimsical traits. Join the most imaginative community in the metaverse.</p>
          </Panel>
        </aside>

        <section className="mint-machine">
          <img className="float-soft" src={gashaponImage} alt="Pastel gashapon mint machine" />
          <div className="quantity-control">
            <button type="button" onClick={() => changeCount(-1)} aria-label="Decrease mint quantity">
              <Icon>remove</Icon>
            </button>
            <output className="quantity-value">{count}</output>
            <button type="button" onClick={() => changeCount(1)} aria-label="Increase mint quantity">
              <Icon>add</Icon>
            </button>
          </div>
          <button className="jelly-button primary-action" type="button">
            Mint Now · {(count * 0.05).toFixed(2)} ETH
          </button>
        </section>

        <aside className="stack">
          <Panel className="mint-card">
            <div className="inline-heading">
              <Icon>star</Icon>
              <h3>Minting Live</h3>
            </div>
            <ul className="clean-list">
              <li>0.05 ETH per Doodle</li>
              <li>Max 5 per transaction</li>
              <li>Instant reveal on OpenSea</li>
            </ul>
          </Panel>
          <Panel className="white-card overflow-card">
            <p className="label">Friends forever</p>
            <img className="rounded-image" src={friendsImage} alt="Three colorful Doodle friends" />
          </Panel>
        </aside>
      </section>

      <section className="recent-grid-section">
        <h2>Recent Revelations</h2>
        <div className="reveal-grid">
          {["gray", "pink", "blue", "green"].map((tone) => (
            <div className={`reveal-card ${tone}`} key={tone}>
              <Icon>question_mark</Icon>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}

function SynthesisPage() {
  const [selected, setSelected] = useState([]);
  const [isSynthesizing, setIsSynthesizing] = useState(false);

  const toggleNft = (id) => {
    setSelected((value) => {
      if (value.includes(id)) return value.filter((item) => item !== id);
      return value.length >= 2 ? [value[1], id] : [...value, id];
    });
  };

  const beginSynthesis = () => {
    setIsSynthesizing(true);
    setTimeout(() => setIsSynthesizing(false), 700);
  };

  return (
    <main className="page-shell synthesis-page">
      <section className="page-heading center">
        <span className="kicker">NFT Synthesis</span>
        <h1>Synthesis Lab</h1>
        <p>Mix two Doodles to create rare cosmic hybrids in the fusion reactor.</p>
      </section>

      <section className="fusion-layout">
        <SynthesisSlot label="SELECT SUBJECT A" badge="INCUBATOR 01" nftId={selected[0]} />
        <div className="reactor-zone">
          <img className={isSynthesizing ? "reactor-image is-pulsing" : "reactor-image"} src={reactorImage} alt="Fusion reactor" />
          <button className="jelly-button fusion-button" type="button" onClick={beginSynthesis}>
            <Icon>auto_fix_high</Icon>
            Begin Synthesis
          </button>
        </div>
        <SynthesisSlot label="SELECT SUBJECT B" badge="INCUBATOR 02" nftId={selected[1]} />
      </section>

      <section className="inventory-section">
        <div className="section-title-row">
          <div>
            <h2>Your Collection</h2>
            <p>Select two compatible Doodles to fuse.</p>
          </div>
          <span className="pill">Balance: 12 Doodles</span>
        </div>
        <div className="inventory-grid">
          {inventory.map((item) => (
            <button className={`inventory-card ${item.tone} ${selected.includes(item.id) ? "selected" : ""}`} key={item.id} type="button" onClick={() => toggleNft(item.id)}>
              <img className={item.effect} src={doodleTraitImage} alt={`Doodle #${item.id}`} />
              <span>Doodle #{item.id}</span>
              <div className="swatches">
                {item.traits.map((trait) => (
                  <i className={trait} key={trait}></i>
                ))}
              </div>
            </button>
          ))}
        </div>
      </section>
    </main>
  );
}

function SynthesisSlot({ label, badge, nftId }) {
  return (
    <div className="synthesis-slot">
      <div className="slot-box">
        {nftId ? (
          <>
            <img src={doodleTraitImage} alt={`Selected Doodle #${nftId}`} />
            <strong>Doodle #{nftId}</strong>
          </>
        ) : (
          <>
            <div className="slot-plus">
              <Icon>add</Icon>
            </div>
            <span>{label}</span>
          </>
        )}
      </div>
      <small>{badge}</small>
    </div>
  );
}

function StakingPage() {
  const [rewards, setRewards] = useState(1245.82);

  useEffect(() => {
    const timer = setInterval(() => setRewards((value) => value + 0.01), 3000);
    return () => clearInterval(timer);
  }, []);

  return (
    <main className="staking-page">
      <section className="farm-hero">
        <img src={farmHeroImage} alt="Sunny farm staking vacation" />
        <div className="farm-hero-copy">
          <h1>Sunny Farm Vacation</h1>
          <p>Staking $DOODLE in Paradise</p>
        </div>
        <div className="apy-sticker">APY: 420%</div>
      </section>

      <section className="stake-dashboard">
        <div className="stake-metrics">
          <Panel className="pink-card">
            <div className="inline-heading">
              <Icon>pets</Icon>
              <h2>My Staked NFTs</h2>
            </div>
            <strong className="display-number">12</strong>
            <span className="label">Doodles</span>
            <img className="trait-strip" src={doodleTraitImage} alt="Recent staked traits" />
          </Panel>
          <Panel className="blue-card">
            <div className="inline-heading">
              <Icon>savings</Icon>
              <h2>Accrued Rewards</h2>
            </div>
            <strong className="display-number">{rewards.toLocaleString("en-US", { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</strong>
            <span className="label">$DOODLE</span>
            <Progress value={65} />
          </Panel>
        </div>
        <div className="action-row">
          <button className="jelly-button claim-button" type="button">
            Claim Rewards <Icon>celebration</Icon>
          </button>
          <button className="jelly-button neutral-button" type="button">
            Stake All
          </button>
        </div>
      </section>

      <section className="farm-stats-grid">
        <Panel className="stats-wide">
          <div className="section-title-row">
            <h3>Active Farm Stats</h3>
            <span className="pill green-pill">Live</span>
          </div>
          <div className="mini-stat-grid">
            {[
              ["Total Staked", "4,821"],
              ["Pool Share", "0.24%"],
              ["Time Staked", "14d"],
              ["Doodles TVL", "$1.2M"],
            ].map(([label, value]) => (
              <div className="mini-stat" key={label}>
                <span>{label}</span>
                <strong>{value}</strong>
              </div>
            ))}
          </div>
        </Panel>
        <Panel className="pink-card center-card">
          <Icon>auto_awesome</Icon>
          <h3>Power Up!</h3>
          <p>Holding a Space Doodle boosts your rewards by 1.5x.</p>
        </Panel>
      </section>
    </main>
  );
}

function AuctionPage() {
  const [seconds, setSeconds] = useState(13512);
  const [bid, setBid] = useState(4.2);

  useEffect(() => {
    const timer = setInterval(() => setSeconds((value) => Math.max(0, value - 1)), 1000);
    return () => clearInterval(timer);
  }, []);

  const time = `${String(Math.floor(seconds / 3600)).padStart(2, "0")}:${String(Math.floor((seconds % 3600) / 60)).padStart(2, "0")}:${String(seconds % 60).padStart(2, "0")}`;

  return (
    <main className="page-shell auction-page">
      <section className="auction-grid">
        <div className="auction-showcase">
          <div className="auction-frame">
            <div className="star-badge">
              <Icon>star</Icon>
            </div>
            <img src={auctionNftImage} alt="Doodle Buddies auction NFT" />
            <div className="auction-title-row">
              <div>
                <p className="label">Genesis Series</p>
                <h1>Doodle Buddies #1337</h1>
              </div>
              <div className="tag-row compact">
                <span>Rare</span>
                <span>Pastel</span>
              </div>
            </div>
          </div>
          <Panel className="story-card">
            <h3>The Story</h3>
            <p>Meet the first trio of the DoodleWorlds universe. These bouncy explorers carry the essence of pure joy and decentralized creativity.</p>
          </Panel>
        </div>

        <aside className="auction-sidebar">
          <Panel className="pink-card countdown-card">
            <img src={countdownBombImage} alt="Auction countdown bomb" />
            <div>
              <p className="label">Ends in</p>
              <strong>{time}</strong>
            </div>
          </Panel>
          <Panel className="white-card">
            <div className="section-title-row">
              <h3>Current Bid</h3>
              <span className="wallet-name">doodle_king.eth</span>
            </div>
            <div className="bid-display">
              <strong>{bid.toFixed(2)}</strong>
              <span>ETH</span>
            </div>
          </Panel>
          <div className="bid-actions">
            <button className="jelly-button neutral-button" type="button" onClick={() => setBid((value) => value + 0.1)}>
              <Icon>add_circle</Icon> +0.1 ETH
            </button>
            <button className="jelly-button neutral-button" type="button" onClick={() => setBid((value) => value + 0.5)}>
              <Icon>add_circle</Icon> +0.5 ETH
            </button>
            <button className="jelly-button claim-button place-bid" type="button">
              Place Your Bid
            </button>
          </div>
          <Panel className="history-card">
            <h3>
              <Icon>history</Icon> Bid History
            </h3>
            {["doodle_king.eth", "pastel_lover.eth", "zigzag_vault", "bubble_man"].map((name, index) => (
              <div className={`bid-bubble tone-${index}`} key={name}>
                <span>{name}</span>
                <strong>{(4.2 - index * 0.1).toFixed(2)} ETH</strong>
              </div>
            ))}
          </Panel>
        </aside>
      </section>
    </main>
  );
}

function PerksPage() {
  const [tab, setTab] = useState("Physical Merch");

  return (
    <main className="passport-page">
      <div className="floating-star one">
        <Icon>star</Icon>
      </div>
      <div className="floating-star two">
        <Icon>auto_awesome</Icon>
      </div>
      <section className="passport-book">
        <aside className="passport-profile">
          <div className="avatar-frame">
            <img src={passportAvatar} alt="Passport avatar" />
          </div>
          <h1>Diamond Explorer</h1>
          <p className="label">Passport #8821</p>
          <div className="passport-stamps">
            <div className="section-title-row">
              <span className="label">Achievement Stamps</span>
              <span className="pill">12 / 24</span>
            </div>
            <img src={passportStamps} alt="Achievement stamps" />
          </div>
          <button className="jelly-button neutral-button" type="button">
            <Icon>menu_book</Icon> View Passport History
          </button>
        </aside>

        <section className="perk-panel">
          <div className="perk-tabs">
            {["Physical Merch", "Digital Drops", "IRL Events"].map((item) => (
              <button className={tab === item ? "active" : ""} type="button" onClick={() => setTab(item)} key={item}>
                {item}
              </button>
            ))}
          </div>
          <div className="perk-list">
            <PerkCard title="Limited Edition Hoodie" status="Active" text="Exclusive chunky hoodie with embroidered Doodle logo. Worldwide shipping included." action="Claim Now" />
            <PerkCard title="Series 1 Vinyl Toy" status="Claimed" text="Collectable character toy from the inaugural DoodleWorlds physical collection." isClaimed />
            <PerkCard title="Golden Passport Cover" status="Locked" text="Reach Cosmic Voyager tier to unlock this exclusive digital passport customisation." isLocked />
          </div>
        </section>
      </section>
    </main>
  );
}

function PerkCard({ title, status, text, action, isClaimed, isLocked }) {
  return (
    <article className={`perk-card ${isClaimed ? "claimed" : ""} ${isLocked ? "locked" : ""}`}>
      <div className="perk-image">{isLocked ? <Icon>lock</Icon> : <img src={perkImage} alt={title} />}</div>
      <div>
        <div className="section-title-row">
          <h3>{title}</h3>
          <span className="pill">{status}</span>
        </div>
        <p>{text}</p>
        {action && <button className="jelly-button claim-button">{action}</button>}
        {isClaimed && <strong className="claimed-stamp">CLAIMED</strong>}
        {isLocked && <Progress value={66} />}
      </div>
    </article>
  );
}

function Panel({ children, className = "" }) {
  return <article className={`panel ${className}`}>{children}</article>;
}

function Progress({ value }) {
  return (
    <div className="progress">
      <span style={{ width: `${value}%` }}></span>
    </div>
  );
}

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-inner">
        <div>
          <a className="brand" href="#/">
            DoodleWorlds
          </a>
          <p>&copy; 2026 DoodleWorlds. All rights reserved.</p>
        </div>
        <div className="socials">
          {socials.map((item) => (
            <a href="#" key={item}>
              {item}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}

const pages = {
  home: <HomePage />,
  mint: <MintPage />,
  staking: <StakingPage />,
  synthesis: <SynthesisPage />,
  auction: <AuctionPage />,
  perks: <PerksPage />,
};

export default function App() {
  const page = useHashPage();

  return (
    <>
      <Navigation currentPage={page} />
      {pages[page]}
      <Footer />
    </>
  );
}
