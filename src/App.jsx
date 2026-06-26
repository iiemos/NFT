import { Fragment, useEffect, useRef, useState } from "react";

const hamburgerIcon = "/images/icon-hamburguer.svg";
const closeMenuIcon = "/images/icon-close.svg";
const menuRopeImage = "/images/brand/cigr-banner.jpg";

const brandBannerImage = "/images/brand/cigr-banner.jpg";
const cigrLogoImage = "/images/cigr/logo.png";
const cigrHeroVideo = "/videos/home-banner.mp4";
const cigrWordmarkImage = "/images/cigr/home/cigr-wordmark.png";
const cigrArrowBlackImage = "/images/cigr/home/arrow-black.png";
const cigrArrowWhiteImage = "/images/cigr/home/arrow-white.png";
const aboutBannerImage = "/images/cigr/about/about-banner.jpg";
const tokenCoinsImage = "/images/cigr/design/about/coins.png";
const designHomePath = "/images/cigr/design/home";
const designAboutPath = "/images/cigr/design/about";
const designNftPath = "/images/cigr/design/nft";
const designMintPath = "/images/cigr/design/mint";
const designClubPath = "/images/cigr/design/club";
const designBrandKitPath = "/images/cigr/design/brand-kit";
const designSynthesisPath = "/images/cigr/design/synthesis";
const brandKitDownload = "/downloads/cigr-logo-kit.zip";
const nftImages = Array.from({ length: 9 }, (_, index) => `/images/nft/nft-${String(index + 1).padStart(2, "0")}.jpg`);

const mintProgressImage = brandBannerImage;
const gashaponImage =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuAtyyYtsB4BNChOt4jNwC-M7ub7kXdF_0rMraddLOyzA34-fuJu_D5y4lvqMtwWHK_GuDymxFnDFsHPqWNdcpsizkqarstEpPHMdswXBy36xuP-6tW1kLYHPXQ71mPHJwrfhd1kQeU80P9UpEmYQWVAs6gfUI34L_epq6deX6E7xGYRBwiFs9BUvSz47enDbt5EMkAJ_DXmekusG7oyEkkVo45_irEoDGeHEZEPbQNZPLh4UnsTEEVnVIGibJdNgz7Wgjda4-4niQ";
const friendsImage = nftImages[1];
const reactorImage =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuDIFSbvqMaWRGkJBU0L34N8-nr9d6FD3v4f7KVayWWYW9CFIhi6PRRDEbfPO81aKNhzq1TDxIHXV_juwSQ9QQzgFkNS0LMqrqi9OplUmVYrG7xcU5TY8UVG2v98mBZYpSxPAvhoS7D6BKBWBhuF2Rpoum1uxnP4nsfiY4rLHE495XF2Ev7_RnVbtAfoV__jfHtZW_0qILDxboFcRsfxpXrdFeSNrxPvVDQWmkp6gwML9-orueNVf5WlT4XxXCh1E-upXd1ODAtlmg";
const stakedNftImage = nftImages[2];
const farmHeroImage =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuBHrCU-CTk1VPzA5R47UYOaLUxiJ1vITRszZqtVJIzWNH7pUIGiI-0PHob3K5gNSzEv-bfXY1TJhCKOk0AGTJU57huDQgSh7D58WwzdZtihN-WEK6lzI5ppIJenzC66PqrEo4aYBEVNnomxQvBjW6Uk6r8UhDcpn7Nc7Y4O0ovXF2FAiby7KAPnEQS_NIN6NiJQ6NRDnAvJ-1y1oeItcu03h3njOp6BU8r7DXS7k6lEirPVdF_-tQCONgUJDcFWvfRgVz2seiGAwQ";
const auctionNftImage = nftImages[3];
const countdownBombImage =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuAb_aUb7r4lJG20pDFYcyQc1P4JdugkA9LLP78zXZOgfq4Ozf0h38e0h41aiV0Py7HcY0zFLlSShOxJp9S_YiN1we_CH8hZQav_7FgoDWxvos8oWX0h8xTU_cffd3Aq93WYVg7Vwgscn58_R21wQdr5nJvZ63BINLsioMj8mifwLMcHSmvcg96H0ZnOjOBuI6ilQBXM0fh45m6G0ZBqWNV4EqCj-wCCznqAQ6iSoSbXuB9SlMHyxVjP6NoYFdtN5AreJrmhqeNiow";
const passportAvatar = nftImages[4];
const passportStamps =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuBOYKpuQuqW63Ehv7DXkEw5yZNKJdNUu8s0AJ62gYyB3Y_JkRQEMWcImaXGWRuDfXHCdkhP4SAHD4CWZPWVZizH0OqvuUAzr4lqKiz6hFUcgJHpRcoR3NIzaygeqT7NGTL4InLjLTb--vP4GJjROpM-Ms8-oSivH6lG66FkxJr0ZwMs1_58Uf2ZRt7m_HwKDaah-Kl1YxekAtGz5RTaimhlxRqbKUMSfcUfOD0BZOQnOk8fibRUzb5-OWOTMg4T_YNLWMsaEuNDuQ";
const perkImage = nftImages[5];

const routeIds = ["home", "about", "club", "brand-kit", "nft", "mint", "staking", "synthesis", "auction", "perks"];
const nftRouteIds = ["nft", "mint", "staking", "synthesis", "auction", "perks"];
const navItems = [
  { id: "home", label: "首页", path: "#/" },

  {
    id: "nft",
    label: "NFT",
    path: "#/nft",
    children: [
      { label: "总览", path: "#/nft" },
      { label: "铸造", path: "#/mint" },
      { label: "质押", path: "#/staking" },
      { label: "合成", path: "#/synthesis" },
      { label: "竞拍", path: "#/auction" },
      { label: "兑换", path: "#/perks" },
    ],
  },
  { id: "club", label: "俱乐部", path: "#/club" },
  {
    id: "about",
    label: "关于",
    path: "#/about",
    children: [{ label: "代币", path: "#/about#token" }],
  },
  { id: "brand-kit", label: "品牌套件", path: "#/brand-kit" },
];

const footerColumns = [
  [
    "探索",
    [
      ["首页", "#/"],
      ["关于", "#/about"],
      ["NFT", "#/nft"],
      ["俱乐部", "#/club"],
    ],
  ],
  [
    "Resources",
    [
      ["Whitepaper", "#/about"],
      ["使用条款", "#/brand-kit"],
      ["隐私政策", "#/brand-kit"],
    ],
  ],
  ["资源中心", [["品牌套件", "#/brand-kit"]]],
];
const cigrSocials = [
  { label: "X", icon: "/images/cigr/home/social/social-1.png" },
  { label: "Instagram", icon: "/images/cigr/home/social/social-2.png" },
  { label: "Discord", icon: "/images/cigr/home/social/social-3.png" },
  { label: "Telegram", icon: "/images/cigr/home/social/social-4.png" },
];
const homeStoryVideos = [1, 2, 3, 4, 6].map((item) => `/videos/home-stories/${item}.mp4`);
const cigrCardItems = [
  { title: "烟田", label: "F card", image: "/images/cigr/home/cards/2-1.jpg" },
  { title: "窖藏", label: "A card", image: "/images/cigr/home/cards/2-2.jpg" },
  { title: "限量", label: "L card", image: "/images/cigr/home/cards/2-3.jpg" },
  { title: "孤品", label: "One card", image: "/images/cigr/home/cards/2-4.jpg" },
];
const lifestyleItems = [
  {
    title: "MEME 共识层",
    image: "/images/cigr/home/icons/3-1.png",
    text: "用全球文化符号凝聚社区共识，推动 CIGR 成为可传播、可参与的品牌叙事。",
  },
  {
    title: "NFT 资产层",
    image: "/images/cigr/home/icons/3-2.png",
    text: "每一枚 NFT 都承载身份、权益与资产映射，连接数字收藏与真实世界价值。",
  },
  {
    title: "潮牌 IP 商业",
    image: "/images/cigr/home/icons/3-3.png",
    text: "围绕 CIGR 视觉体系延展潮流周边、线下活动与跨界联名。",
  },
];
const cultureImages = Array.from({ length: 7 }, (_, index) => `/images/cigr/home/culture/6-${index + 1}.jpg`);
const futureSlots = Array.from({ length: 24 }, (_, index) => index);
const downloadColumns = Array.from({ length: 4 }, (_, column) => Array.from({ length: 8 }, (_, item) => `${column}-${item}`));
const workflowSteps = [
  ["STEP 1", "获取 NFT，成为生态会员", "获得 CIGR 数字身份与会员权益，进入品牌生态、资产映射和社区共创入口。", "/images/cigr/home/icons/8-1.png"],
  ["STEP 2", "解锁权益，享受专属服务", "会员可参与潮流联名、线下活动、资产兑换与长期社区奖励。", "/images/cigr/home/icons/8-2.png"],
  ["STEP 3", "参与共建，推动生态发展", "通过治理、传播和任务协作共同推进 CIGR 生态的全球化增长。", "/images/cigr/home/icons/8-3.png"],
  ["STEP 4", "价值共生，共享增长红利", "品牌溢价与社区价值持续沉淀，形成可循环的文化资产协议。", "/images/cigr/home/icons/8-4.png"],
];
const roadmapPhases = [
  ["第一阶段", "MEME 启动期（代币发行）", "完成社区启动、代币发行与核心叙事搭建，形成 CIGR 全球共识入口。"],
  ["第二阶段", "NFT 发售期（资产落地）", "上线首批 NFT 与权益资产，建立会员身份、实物托底和链上确权体系。"],
  ["第三阶段", "生态完善期（玩法升级）", "拓展质押、合成、竞猜、兑换等玩法，提升社区参与度和流动性。"],
  ["第四阶段", "长期成熟期（圈层深耕）", "持续推进品牌合作、线下活动和 RWA 场景拓展，沉淀长期价值。"],
];
const expansionImages = [
  ["/images/cigr/about/expansion-wine.jpg", "精品酒类"],
  ["/images/cigr/about/expansion-watch.jpg", "腕表藏品"],
  ["/images/cigr/about/expansion-jewelry.jpg", "珠宝饰品"],
];
const partnerItems = [
  [`${designAboutPath}/bitflux-logo.png`, "Bitflux Limited，持牌数字银行，为 CIGR 会员提供全球支付、资产管理等金融服务。"],
  [`${designAboutPath}/roma-logo.png`, "ROMA.US，美股上市公司，全球领先的审计机构。为 CIGR 提供创新的底层资产上链证明服务。"],
];
const mechanismItems = [
  ["国库收益回购销毁", "/images/cigr/home/icons/8-1.png", "国库通过资产增值、金融服务等获得的收益，将定期回购并销毁 $CIGR 代币。"],
  ["NFT 资金回流回购", "/images/cigr/home/icons/8-2.png", "NFT 售卖资金的 25% 和孤品 NFT 竞拍手续费，将用于二级市场回购 $CIGR。"],
  ["资产合成销毁机制", "/images/cigr/home/icons/8-3.png", "在 NFT 合成过程中，无论成功与否，都会消耗和销毁一定数量的代币，持续减少流通总量。"],
];
const createStoryColumns = [
  {
    offset: "deep",
    items: [
      { type: "video", shape: "tall", video: homeStoryVideos[0], alt: "CIGR cigar smoke story" },
      { type: "image", shape: "square", image: cigrCardItems[0].image, alt: "CIGR F card story" },
    ],
  },
  {
    offset: "low",
    items: [
      { type: "video", shape: "square", video: homeStoryVideos[1], alt: "CIGR A card story" },
      { type: "image", shape: "tall", image: cultureImages[1], alt: "CIGR culture story" },
      { type: "image", shape: "square", image: nftImages[7], alt: "CIGR crown story" },
    ],
  },
  {
    offset: "mid",
    items: [
      { type: "image", shape: "square", image: cultureImages[2], alt: "CIGR streetwear story" },
      { type: "action", shape: "square", tone: "cyan", title: "开始 Mint", href: "#/mint", mark: "+" },
      { type: "video", shape: "tall", video: homeStoryVideos[2], alt: "CIGR limited story" },
    ],
  },
  {
    offset: "top",
    items: [
      { type: "video", shape: "tall", video: homeStoryVideos[3], alt: "CIGR rare story" },
      { type: "image", shape: "tall", image: cultureImages[4], alt: "CIGR neon story" },
    ],
  },
  {
    offset: "mid",
    items: [
      { type: "image", shape: "tall", image: cigrCardItems[3].image, alt: "CIGR one card story" },
      { type: "action", shape: "square", tone: "yellow", title: "查看 Auction", href: "#/auction", mark: "↗" },
      { type: "image", shape: "square", image: cultureImages[5], alt: "CIGR sketch story" },
    ],
  },
  {
    offset: "low",
    items: [
      { type: "action", shape: "square", tone: "pink", title: "进入 Fusion", href: "#/synthesis", mark: "×" },
      { type: "video", shape: "tall", video: homeStoryVideos[4], alt: "CIGR fusion story" },
      { type: "image", shape: "square", image: cultureImages[6], alt: "CIGR collectible story" },
    ],
  },
  {
    offset: "deep",
    items: [
      { type: "image", shape: "tall", image: nftImages[3], alt: "CIGR community story" },
      { type: "action", shape: "square", tone: "black", title: "关注 CIGR", href: "#/club", mark: "C" },
    ],
  },
];
const clubIntroPoints = [
  ["人脉网络", "进入 CIGR 全球会员体系，连接文化收藏者、品牌主理人与链上玩家。"],
  ["全球通用会员卡", "会员身份与 NFT 资产绑定，可参与线上任务、权益兑换和线下活动。"],
  ["特权与服务", "优先参与联名发售、主题活动、雪茄品鉴与 Cigr House 线下体验。"],
];
const clubLocations = [
  ["香港", `${designClubPath}/hongkong.jpg`],
  ["新加坡", `${designClubPath}/singapore.jpg`],
  ["伦敦", `${designClubPath}/london.jpg`],
  ["纽约", `${designClubPath}/newyork.jpg`],
  ["巴黎", `${designClubPath}/paris.jpg`],
  ["迪拜", `${designClubPath}/dubai.jpg`],
];
const brandColorTokens = [
  { name: "CIGR Yellow", hex: "#fbc202", rgb: "251 / 194 / 2", cmyk: "2 / 24 / 100 / 0" },
  { name: "CIGR Pink", hex: "#fa3884", rgb: "250 / 56 / 132", cmyk: "0 / 90 / 16 / 0" },
  { name: "CIGR Cyan", hex: "#02c3ff", rgb: "2 / 195 / 255", cmyk: "63 / 3 / 0 / 0" },
  { name: "CIGR Black", hex: "#000000", rgb: "0 / 0 / 0", cmyk: "75 / 68 / 67 / 90" },
  { name: "CIGR White", hex: "#ffffff", rgb: "255 / 255 / 255", cmyk: "0 / 0 / 0 / 0" },
];
const brandWordmarks = [
  {
    label: "Wordmark black",
    tone: "dark",
    image: `${designBrandKitPath}/wordmark-black.jpg`,
    files: [
      ["JPG", `${designBrandKitPath}/wordmark-black.jpg`],
      ["PNG", `${designBrandKitPath}/wordmark-black.png`],
    ],
  },
  {
    label: "Wordmark white",
    tone: "light",
    image: `${designBrandKitPath}/wordmark-white.jpg`,
    files: [
      ["JPG", `${designBrandKitPath}/wordmark-white.jpg`],
      ["PNG", `${designBrandKitPath}/wordmark-white.png`],
    ],
  },
];
const nftMintStats = [
  ["10000张", "发行总量"],
  ["85USDT", "铸造价格"],
  ["3000张", "分三期发售，第一期发售数量"],
];
const nftEcosystemMetrics = [
  ["$4.2M", "Staked Value", "+12% from last week"],
  ["5,240", "Holder Count", "Verified active wallets"],
  ["1.2K SOL", "24H Volume", "Primary & Secondary"],
  ["STAGE 3", "Roadmap Phase", "Fusion Chamber Live"],
];
const nftDesignCards = [
  {
    title: "烟田 F card",
    subtitle: "新晋身份玩家",
    access: "通过铸造获得",
    status: "开放铸造",
    label: "F card",
    image: `${designNftPath}/f-card.jpg`,
    avatar: `${designNftPath}/f-avatar.png`,
    traits: [`${designNftPath}/f-trait-1.png`, `${designNftPath}/f-trait-2.png`, `${designNftPath}/f-trait-3.png`, `${designNftPath}/f-trait-4.png`],
    text: "他们沉迷烟叶、创意新人、基础权益持有者。开盲盒、合约资产、凝聚社区，都从 F 卡开始。",
    href: "#/mint",
  },
  {
    title: "窖藏 A card",
    subtitle: "资深雪茄客",
    access: "通过盲盒合成获得",
    status: "开放铸造",
    label: "A card",
    image: `${designNftPath}/a-card.jpg`,
    avatar: `${designNftPath}/a-avatar.png`,
    traits: [`${designNftPath}/a-trait-1.png`, `${designNftPath}/a-trait-2.png`, `${designNftPath}/a-trait-3.png`, `${designNftPath}/a-trait-4.png`],
    text: "他们偏爱深度收藏与长期权益。已拥有自己的圈层审美和影响力，可进一步合成解锁更高等级权益。",
    href: "#/synthesis",
  },
  {
    title: "限量 L card",
    subtitle: "稀缺资源拥有者",
    access: "通过铸造盲盒合成获得",
    status: "开放铸造",
    label: "L card",
    image: `${designNftPath}/l-card.jpg`,
    avatar: `${designNftPath}/l-avatar.png`,
    traits: [`${designNftPath}/l-trait-1.png`, `${designNftPath}/l-trait-2.png`, `${designNftPath}/l-trait-3.png`, `${designNftPath}/l-trait-4.png`],
    text: "他们是第一批稀缺资源持有者，代表高阶圈层权益、珍稀资产和优先参与资格。",
    href: "#/synthesis",
  },
  {
    title: "孤品 One card",
    subtitle: "创世珍藏级",
    access: "即将推出",
    status: "敬请期待",
    label: "One card",
    image: `${designNftPath}/one-card.jpg`,
    avatar: `${designNftPath}/one-avatar.png`,
    traits: [`${designNftPath}/one-trait-1.png`],
    text: "雪茄会所的终极收藏，掌握最稀缺权益与独立身份标识，后续权益持续开放。",
    href: "#/perks",
  },
];
const nftPerkImages = [
  [`${designNftPath}/perk-1.jpg`, "孤品级 NFT 专属兑换权益", "合成限量 NFT 后，解锁更高等级会员空间、专属活动和稀缺资产兑换资格。"],
  [`${designNftPath}/perk-2.jpg`, "高端雪茄实物权益 NFT 兑换", "将链上身份与真实雪茄资产连接，形成收藏、兑换和权益验证闭环。"],
];
const mintMethodItems = [
  [`${designMintPath}/icon-a.png`, "定向邀约白名单", "社区长和 KOL"],
  [`${designMintPath}/icon-b.png`, "持币解锁白名单", "连续 7 天日均持仓价值 ≥100U"],
];
const mintTraitBadges = ["LEGENDARY CROWN", "GOLD TEXTURE", "QUANTUM AURA"];
const mintLiveActivities = [
  ["Doge...260", "minted 3 NFTs", "Just now"],
  ["Cigr...118", "minted 1 NFT", "1 min ago"],
  ["Vault...902", "minted 2 NFTs", "3 min ago"],
  ["KOL...077", "minted 5 NFTs", "5 min ago"],
];
const synthesisGroups = [
  {
    title: "窖藏 NFT 合成",
    inputLabel: "烟田",
    inputs: [1, 2, 3, 4].map((item) => `${designSynthesisPath}/cellar/input-${item}.jpg`),
    cost: "等值 50U 的 $CIGR 代币",
    outcomes: [
      { rate: "50%", label: "合成成功", tone: "win", image: `${designSynthesisPath}/cellar/result.jpg`, text: "获得 1 张窖藏 NFT，原 NFT 完整保留。" },
      { rate: "50%", label: "合成失败", tone: "lose", image: `${designSynthesisPath}/cellar/asset.jpg`, text: "失败返还 50% 等值代币，原 NFT 完整保留。" },
    ],
  },
  {
    title: "限量 NFT 合成",
    inputLabel: "窖藏",
    inputs: [1, 2, 3, 4].map((item) => `${designSynthesisPath}/limited/input-${item}.jpg`),
    cost: "等值 100U 的 $CIGR 代币",
    outcomes: [
      {
        rate: "100%",
        label: "合成成功",
        tone: "win",
        image: `${designSynthesisPath}/limited/result.jpg`,
        gift: `${designSynthesisPath}/limited/asset.jpg`,
        text: "获得 1 张限量 NFT，空投高端雪茄礼品卡。",
      },
    ],
  },
];
const inventory = [
  { id: "402", tone: "green", traits: ["primary", "secondary"], effect: "" },
  { id: "119", tone: "blue", traits: ["tertiary", "pink"], effect: "mirror" },
  { id: "882", tone: "pink", traits: ["mint"], effect: "soft" },
  { id: "034", tone: "gray", traits: ["primary", "sky"], effect: "tilt" },
  { id: "221", tone: "mint", traits: ["ink"], effect: "" },
  { id: "506", tone: "lavender", traits: ["muted"], effect: "grayscale" },
];
const exchangeColumns = ["礼品名称", "订单状态", "订单编号", "物流公司", "物流单号", "下单时间", "操作"];
const exchangeRecords = [
  { id: "0319", status: "已完成", tone: "done", order: "1234567890123", carrier: "顺丰速运", tracking: "SF1234567890123", time: "2024-05-20 18:30:00", shipped: true },
  { id: "0420", status: "运输中", tone: "shipping", order: "1234567890123", carrier: "顺丰速运", tracking: "SF1234567890123", time: "2024-05-20 18:30:00", shipped: true },
  { id: "0521", status: "待发货", tone: "pending", order: "1234567890123", carrier: "", tracking: "", time: "2024-05-20 18:30:00", shipped: false },
  { id: "0602", status: "审核中", tone: "review", order: "1234567890123", carrier: "", tracking: "", time: "2024-05-20 18:30:00", shipped: false },
  { id: "0718", status: "已完成", tone: "done", order: "1234567890123", carrier: "顺丰速运", tracking: "SF1234567890123", time: "2024-05-20 18:30:00", shipped: true },
];

function getPageFromHash() {
  const page = window.location.hash.replace("#/", "") || "home";
  const pageId = page.split("#")[0].split("?")[0] || "home";
  return routeIds.includes(pageId) ? pageId : "home";
}

function useHashPage() {
  const [page, setPage] = useState(getPageFromHash);

  useEffect(() => {
    const updatePage = () => {
      setPage(getPageFromHash());
      const anchor = window.location.hash.split("#/")[1]?.split("#")[1];
      if (anchor) {
        window.setTimeout(() => document.getElementById(anchor)?.scrollIntoView({ behavior: "smooth", block: "start" }), 0);
      } else {
        window.scrollTo({ top: 0, behavior: "smooth" });
      }
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
  const currentHashTarget = window.location.hash.split("#/")[1]?.split("#")[1] || "";
  const isActive = (item) => {
    if (item.id === "roadmap") return currentHashTarget === "roadmap";
    if (item.id === "about" && currentHashTarget === "roadmap") return false;
    return item.id === currentPage || (item.id === "nft" && nftRouteIds.includes(currentPage));
  };

  return (
    <nav className={`nav-shell cigr-nav ${isMenuOpen ? "menu-open" : ""} ${isScrolled || currentPage !== "home" ? "scrolled" : ""}`}>
      <div className="nav-inner">
        <a className="brand cigr-brand" href="#/">
          <img src={cigrLogoImage} alt="CIGR" />
        </a>
        <div className="nav-links">
          {navItems.map((item) => (
            <div className="nav-item" key={item.id}>
              <a className={isActive(item) ? "active" : ""} href={item.path}>
                {item.label}
              </a>
              {item.children && (
                <div className="nav-dropdown">
                  {item.children.map((child) => (
                    <a href={child.path} key={child.label}>
                      {child.label}
                    </a>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
        <div className="nav-actions">
          <a className="outline-pill" href="#/mint">
            购买$CIGR
          </a>
          <button className="outline-pill wallet-button" type="button">
            连接钱包
          </button>
        </div>
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
            {navItems.map((item) => (
              <div className="mobile-nav-group" key={item.id}>
                <a className={isActive(item) ? "active" : ""} href={item.path} onClick={closeMenu}>
                  {item.label}
                </a>
                {item.children && (
                  <div className="mobile-sub-links">
                    {item.children.map((child) => (
                      <a href={child.path} key={child.label} onClick={closeMenu}>
                        {child.label}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
          <a className="mobile-ai-cta" href="#/mint" onClick={closeMenu}>
            购买$CIGR
          </a>
          <div className="mobile-socials" aria-label="Social links">
            {cigrSocials.map((item) => (
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
    <main className="cigr-page">
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

function CigrHero() {
  return (
    <section className="cigr-hero">
      <video className="cigr-hero-video" aria-label="CIGR homepage banner" autoPlay loop muted playsInline preload="metadata">
        <source src={cigrHeroVideo} type="video/mp4" />
      </video>
      <div className="cigr-hero-inner">
        <h1>CIGR · 全球首个 MEME × 文化 RWA 驱动价值协议</h1>
        <p>构建在 Solana 链上，顶级雪茄实物托底，NFT 确权链上可交易价值，MEME 凝聚全球共识，潮牌化运作释放品牌溢价</p>
        <div className="cigr-hero-actions">
          <a className="cigr-button yellow" href="#/mint">
            Enter The Chamber
          </a>
          <a className="cigr-button pink" href="#/about">
            View Collection
          </a>
        </div>
      </div>
    </section>
  );
}

function CigrCards() {
  return (
    <section className="cigr-section cigr-card-section" aria-label="CIGR cards">
      <div className="cigr-card-grid">
        {cigrCardItems.map((item) => (
          <article className="cigr-nft-card" key={item.title}>
            <img src={item.image} alt={item.title} />
            <strong>{item.title}</strong>
            <span>{item.label}</span>
          </article>
        ))}
      </div>
    </section>
  );
}

function LifestyleSection() {
  return (
    <section className="cigr-section lifestyle-section">
      <h2>我们的生活方式</h2>
      <div className="lifestyle-grid">
        {lifestyleItems.map((item, index) => (
          <article className={`lifestyle-card tone-${index}`} key={item.title}>
            <img src={item.image} alt="" aria-hidden="true" />
            <h3>{item.title}</h3>
            <p>{item.text}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

function RwaSection() {
  return (
    <section className="cigr-section rwa-section">
      <div>
        <h2>文化 RWA 新范式</h2>
        <img className="cigr-wordmark" src={cigrWordmarkImage} alt="CIGR" />
        <p>利用文化 RWA 体系，将雪茄收藏、潮流叙事与链上资产确权结合，重塑品牌从传播到价值沉淀的完整路径。</p>
      </div>
      <img className="rwa-doodle-art" src={`${designHomePath}/rwa-doodle.png`} alt="CIGR culture doodle" />
    </section>
  );
}

function CreateSection() {
  return (
    <section className="cigr-section create-section">
      <h2>与我们一起创作</h2>
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
                    <strong>{item.title}</strong>
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
  return (
    <section className="cigr-section culture-section">
      <div className="culture-copy">
        <h2>CiGR 潮流文化</h2>
        <p>CIGR 将雪茄文化、街头视觉与会员制权益融合，持续拓展实体商品、社群活动与品牌联名，推动收藏品从线上共识走向真实消费场景。</p>
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
  return (
    <section className="cigr-section future-section">
      <div className="future-copy">
        <h2>共创未来</h2>
        <p>我们将持续围绕雪茄 NFT 生态拓展会员权益、实体收藏、品牌合作和更多 RWA 场景。社区成员可参与治理、传播与共创，分享品牌成长带来的长期价值。</p>
        <a className="magic-link" href="#/about">
          <span>MAGIC</span>
          <img src={cigrArrowBlackImage} alt="" aria-hidden="true" />
        </a>
      </div>
      <div className="future-slot-grid" aria-hidden="true">
        {futureSlots.map((slot) => (
          <span key={slot}></span>
        ))}
      </div>
    </section>
  );
}

function WorkflowSection() {
  return (
    <section className="cigr-section workflow-section" id="roadmap">
      <h2>CIGR 运作流程</h2>
      <div className="workflow-grid">
        {workflowSteps.map(([step, title, text, icon]) => (
          <article className="workflow-card" key={step}>
            <img src={icon} alt="" aria-hidden="true" />
            <small>{step}</small>
            <h3>{title}</h3>
            <p>{text}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

function DownloadSection() {
  return (
    <section className="cigr-section download-section" id="download">
      <div className="download-panel">
        <div className="download-content">
          <h2>立即下载，加入潮玩社区</h2>
          <div className="download-actions">
            <a href="#/about">
              iOS 下载
              <img src={cigrArrowWhiteImage} alt="" aria-hidden="true" />
            </a>
            <a href="#/about">
              安卓下载
              <img src={cigrArrowWhiteImage} alt="" aria-hidden="true" />
            </a>
          </div>
        </div>
        <div className="download-grid" aria-hidden="true">
          {downloadColumns.map((column, columnIndex) => (
            <div className="download-column" key={columnIndex}>
              <div className="download-column-track">
                {[0, 1].map((group) => (
                  <div className="download-column-set" key={group}>
                    {column.map((slot) => (
                      <span key={`${slot}-${group}`}></span>
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

function SolanaMark() {
  return (
    <svg className="solana-logo" viewBox="0 0 398 312" role="img" aria-label="Solana">
      <defs>
        <linearGradient id="solana-gradient" x1="360" y1="-37" x2="141" y2="383" gradientUnits="userSpaceOnUse">
          <stop offset="0" stopColor="#00ffa3" />
          <stop offset="1" stopColor="#dc1fff" />
        </linearGradient>
      </defs>
      <path
        fill="url(#solana-gradient)"
        d="M64.6 237.9c2.4-2.4 5.7-3.8 9.2-3.8h317.4c5.8 0 8.7 7 4.6 11.1l-62.7 62.7c-2.4 2.4-5.7 3.8-9.2 3.8H6.5c-5.8 0-8.7-7-4.6-11.1l62.7-62.7z"
      />
      <path
        fill="url(#solana-gradient)"
        d="M64.6 3.8C67.1 1.4 70.4 0 73.8 0h317.4c5.8 0 8.7 7 4.6 11.1l-62.7 62.7c-2.4 2.4-5.7 3.8-9.2 3.8H6.5c-5.8 0-8.7-7-4.6-11.1L64.6 3.8z"
      />
      <path
        fill="url(#solana-gradient)"
        d="M333.1 120.1c-2.4-2.4-5.7-3.8-9.2-3.8H6.5c-5.8 0-8.7 7-4.6 11.1l62.7 62.7c2.4 2.4 5.7 3.8 9.2 3.8h317.4c5.8 0 8.7-7 4.6-11.1l-62.7-62.7z"
      />
    </svg>
  );
}

function AboutTokenPage() {
  const [openPhase, setOpenPhase] = useState(0);

  return (
    <main className="cigr-page about-token-page">
      <section className="about-hero cigr-section">
        <p className="page-label">关于页面</p>
        <h1>什么是 CIGR？</h1>
        <p>CIGR 是一个基于区块链的全球化潮牌生活方式会员体系，通过发行 NFT 身份凭证，构建由 MEME 驱动、共享流量和 IP 权益的兴趣社区。</p>
        <img src={aboutBannerImage} alt="CIGR global pass banner" />
      </section>

      <section className="partner-band">
        <div className="partner-inner">
          <h2>合作伙伴</h2>
          <div className="partner-cards">
            {partnerItems.map(([logo, text]) => (
              <article key={logo}>
                <img src={logo} alt="" aria-hidden="true" />
                <p>{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="cigr-section roadmap-section" id="roadmap">
        <h2>发展路线图</h2>
        <div className="roadmap-line"></div>
        <div className="roadmap-grid">
          {roadmapPhases.map(([phase, title, text], index) => (
            <article className={`roadmap-card ${openPhase === index ? "open" : ""}`} key={phase}>
              <small>{phase}</small>
              <h3>{title}</h3>
              <button type="button" onClick={() => setOpenPhase(openPhase === index ? -1 : index)}>
                了解更多
              </button>
              <p>{text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="cigr-section expansion-section">
        <h2>未来版图拓展</h2>
        <p>未来将拓展至红酒、高端腕表、珠宝艺术品等更多领域，打造全品类资产化潮流生态。</p>
        <div className="expansion-grid">
          {expansionImages.map(([image, label]) => (
            <img src={image} alt={label} key={label} />
          ))}
        </div>
      </section>

      <section className="token-section" id="token">
        <p className="page-label">代币页面</p>
        <h2>代币发行</h2>
        <div className="token-issue-grid">
          <article className="token-issue pink">
            <img className="token-issue-coins" src={tokenCoinsImage} alt="$CIGR 代币金币" />
            <div>
              <strong>代币名称: $CIGR</strong>
              <span>发行总量: 10 亿枚</span>
            </div>
          </article>
          <article className="token-issue yellow">
            <SolanaMark />
            <div>
              <strong>发行公链:</strong>
              <span>Solana</span>
            </div>
          </article>
        </div>
        <p>依托 Solana 高性能、低手续费的特性，保障交易的高效与低成本，适配生态高频应用场景。</p>
      </section>

      <section className="distribution-section">
        <div className="distribution-inner">
          <div>
            <h2>代币分配</h2>
            <div className="allocation-note left">
              <strong>10%</strong>
              <span>核心团队激励</span>
              <p>用于长期研发、运营增长和生态贡献激励。</p>
            </div>
          </div>
          <div className="donut-chart" aria-label="90% community, 10% team"></div>
          <div className="allocation-note">
            <strong>90%</strong>
            <span>社区公平发射（PumpFun）</span>
            <p>无预售、无私募、无团队预留，促进社区公平参与。</p>
          </div>
        </div>
      </section>

      <section className="cigr-section mechanism-section">
        <h2>代币通缩机制</h2>
        <div className="mechanism-grid">
          {mechanismItems.map(([title, icon, text], index) => (
            <article className={`mechanism-card tone-${index}`} key={title}>
              <img src={icon} alt="" aria-hidden="true" />
              <h3>{title}</h3>
              <p>{text}</p>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}

function SynthesisDesignCard({ group }) {
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

function NFTPage() {
  const [activeCardIndex, setActiveCardIndex] = useState(0);
  const [isExchangeOpen, setIsExchangeOpen] = useState(false);
  const activeCard = nftDesignCards[activeCardIndex];

  return (
    <main className="cigr-page figma-page nft-overview-page">
      <section className="figma-sheet cigr-section">
        <h1 className="figma-page-title">NFT页面</h1>

        <div className="nft-story">
          <h2>The Cigar Society</h2>
          <p>立足全球雪茄文化与链上身份体系，CIGR NFT 将会员、收藏、权益和实物资产连接在同一套可验证网络中。</p>
          <img className="nft-story-banner" src={`${designNftPath}/hero.jpg`} alt="The Cigar Society" />
        </div>

        <div className="nft-card-profile">
          <div className="nft-profile-dots" aria-label="NFT card levels">
            {nftDesignCards.map((card, index) => (
              <button
                aria-label={`切换到${card.title}`}
                className={activeCardIndex === index ? "active" : ""}
                key={card.title}
                onClick={() => setActiveCardIndex(index)}
                type="button"
              >
                <img src={card.avatar} alt="" aria-hidden="true" />
              </button>
            ))}
          </div>
          <img src={activeCard.image} alt={activeCard.title} />
          <div className="nft-profile-copy">
            <h3>{activeCard.title}</h3>
            <strong>{activeCard.subtitle}</strong>
            <p>{activeCard.text}</p>
            <div className="nft-trait-strip">
              {activeCard.traits.map((trait) => (
                <img src={trait} alt="" aria-hidden="true" key={trait} />
              ))}
              {Array.from({ length: Math.max(0, 4 - activeCard.traits.length) }, (_, index) => (
                <span aria-hidden="true" key={index}>
                  ?
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="nft-yellow-band">
        <div className="cigr-section">
          <h2>如何获得？</h2>
          <div className="nft-access-grid">
            {nftDesignCards.map((item) => (
              <a href={item.href} key={item.title}>
                <img src={item.image} alt={item.title} />
                <div>
                  <strong>{item.access}</strong>
                  <span className={item.status === "敬请期待" ? "soon" : ""}>{item.status}</span>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="figma-sheet cigr-section compact">
        <h2>合成限量NFT，解锁专属权益</h2>
        <div className="nft-perk-pair">
          {nftPerkImages.map(([image, title, text]) => (
            <article key={title}>
              <img src={image} alt={title} />
              <strong>{title}</strong>
              <p>{text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="mint-design-section" id="nft-mint-section">
        <h2>铸造页面</h2>
        <div className="mint-drop-hero" style={{ "--mint-bg": `url(${designMintPath}/drop-hero.jpg)` }}>
          <strong>Drop 1 Mint</strong>
        </div>
        <div className="mint-stat-row">
          <h3>烟田 NFT 发行</h3>
          {nftMintStats.map(([value, label], index) => (
            <article className={`tone-${index}`} key={value}>
              <strong>{value}</strong>
              <span>{label}</span>
            </article>
          ))}
        </div>
        <div className="mint-how-row">
          <img src={`${designMintPath}/how.jpg`} alt="CIGR drop wall" />
          <div>
            <h3>如何获得？</h3>
            <div className="mint-method-list">
              {mintMethodItems.map(([icon, title, text]) => (
                <article key={title}>
                  <img src={icon} alt="" aria-hidden="true" />
                  <div>
                    <strong>{title}</strong>
                    <p>{text}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="figma-sheet cigr-section">
        <h2>Ecosystem Metrics</h2>
        <div className="nft-metrics-grid">
          {nftEcosystemMetrics.map(([value, label, helper]) => (
            <article key={label}>
              <span>{label}</span>
              <strong>{value}</strong>
              <small>{helper}</small>
            </article>
          ))}
        </div>

        <MintIdentityPanel />
      </section>

      <section className="figma-sheet cigr-section compact" id="nft-synthesis-section">
        <h2>合成页面</h2>
        <div className="synthesis-stack">
          {synthesisGroups.map((group) => (
            <SynthesisDesignCard group={group} key={group.title} />
          ))}
          <article className="synthesis-upgrade-card">
            <div>
              <h3>FUSE. UPGRADE. EVOLVE.</h3>
              <p>Combine your CIGR assets into the fusion chamber to unlock higher rarities and identity rights.</p>
            </div>
            <a href="#/synthesis">进入合成操作</a>
          </article>
        </div>
      </section>

      <section className="nft-auction-coming" style={{ "--auction-bg": "url(/images/cigr/design/auction/coming-soon.jpg)" }}>
        <h2>竞拍页面</h2>
        <strong>即将开放</strong>
      </section>

      <section className="figma-sheet cigr-section compact" id="nft-exchange-section">
        <h2>兑换页面</h2>
        <div className="exchange-hero-row">
          <div>
            <h3>礼品兑换中心</h3>
            <p>持有指定 NFT 可参与周边、权益与线下活动兑换。</p>
            <button type="button" onClick={() => setIsExchangeOpen(true)}>
              立即兑换
            </button>
          </div>
          <img src="/images/cigr/design/exchange/gift.jpg" alt="CIGR gift center" />
        </div>
        <ExchangeRecords />
      </section>

      {isExchangeOpen && <ExchangeModal onClose={() => setIsExchangeOpen(false)} />}
    </main>
  );
}

function ExchangeRecords() {
  return (
    <div className="exchange-records">
      <h3>记录查询</h3>
      <p className="exchange-records-note">账号全量历史兑换订单集中展示，订单状态、物流明细一键可查。</p>
      <div className="exchange-search">
        <input type="text" placeholder="输入 ID" aria-label="输入订单 ID" />
        <button type="button">点击查询</button>
      </div>
      <div className="exchange-panel">
        <div className="exchange-panel-head">
          <strong>记录查询</strong>
          <div className="exchange-panel-actions">
            <button type="button" className="filter">
              筛选
            </button>
            <button type="button" className="export">
              导出
            </button>
          </div>
        </div>
        <div className="exchange-table" aria-label="兑换记录">
          <div className="exchange-row exchange-head">
            {exchangeColumns.map((column) => (
              <span key={column}>{column}</span>
            ))}
          </div>
          {exchangeRecords.map((record) => (
            <div className="exchange-row" key={record.id}>
              <span>礼品卡片</span>
              <span className={`exchange-status ${record.tone}`}>{record.status}</span>
              <span>{record.shipped ? record.order : "–"}</span>
              <span>{record.shipped ? record.carrier : "–"}</span>
              <span>{record.shipped ? record.tracking : "–"}</span>
              <span>{record.time}</span>
              <span className="exchange-ops">
                <a href="#/perks">查看物流</a>
                <a href="#/perks">详情</a>
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function ExchangeModal({ onClose }) {
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

function MintIdentityPanel() {
  const [quantity, setQuantity] = useState(10);
  const changeQuantity = (step) => setQuantity((value) => Math.min(10, Math.max(1, value + step)));

  return (
    <div className="nft-mint-identity">
      <h2>Mint Your CIGR Identity</h2>
      <p>Own a piece of the CIGR ecosystem. Each character is a unique, high-fidelity 3D asset with exclusive access to future drops and revenue sharing.</p>
      <div className="mint-widget-row mint-control-row">
        <div className="mint-preview-card">
          <img src={`${designNftPath}/f-card.jpg`} alt="CIGR identity NFT" />
          <div className="mint-trait-badges">
            {mintTraitBadges.map((item) => (
              <span key={item}>{item}</span>
            ))}
          </div>
        </div>
        <div className="mint-control-stack">
          <div className="mint-status-card">
            <div className="mint-status-head">
              <span>Mint Status</span>
              <b>Live Now</b>
            </div>
            <div className="mint-status-main">
              <strong>4200 / 10000</strong>
              <small>42% Reserved</small>
            </div>
            <i aria-hidden="true"></i>
          </div>
          <div className="mint-widget">
            <label>
              Price Per NFT
              <b>1 SOL</b>
            </label>
            <small>Select Quantity</small>
            <div className="mint-quantity-control">
              <button type="button" onClick={() => changeQuantity(-1)} aria-label="减少铸造数量">
                <Icon>remove</Icon>
              </button>
              <output>{quantity}</output>
              <button type="button" onClick={() => changeQuantity(1)} aria-label="增加铸造数量">
                <Icon>add</Icon>
              </button>
            </div>
            <label>
              Subtotal
              <b>{quantity} SOL</b>
            </label>
            <button type="button">Mint More</button>
            <p>MAX 10 PER WALLET</p>
          </div>
          <div className="mint-live-card">
            <div className="mint-live-title">
              <i aria-hidden="true"></i>
              <span>Live Activity</span>
            </div>
            <div className="mint-live-viewport">
              <div className="mint-live-track">
                {[...mintLiveActivities, ...mintLiveActivities].map(([wallet, action, time], index) => (
                  <div className="mint-live-item" key={`${wallet}-${index}`}>
                    <span>{wallet}</span>
                    <b>{action}</b>
                    <em>{time}</em>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function ClubPage() {
  return (
    <main className="cigr-page figma-page club-page">
      <section className="figma-sheet cigr-section">
        <h1 className="figma-page-title">俱乐部页面</h1>
        <div className="club-top-row">
          <img src={`${designClubPath}/hero.jpg`} alt="CIGR club lounge" />
          <div>
            <h2>全球典藏精英俱乐部</h2>
            <p>RWA 时代首个以文化资本为核心纽带的全球精英俱乐部。我们不仅以资产规模作为唯一准入标准，而以文化品味、典藏修养与价值共识作为圈层筛选的核心标尺，打造一个纯粹、私密、有底蕴的高端人文社群。</p>
          </div>
        </div>
      </section>

      <section className="club-house-band" style={{ "--club-bg": `url(${designClubPath}/house-bg.jpg)` }}>
        <div className="cigr-section">
          <h2>Cigr House 介绍</h2>
          <div className="club-house-map">
            <div className="club-house-logo">
              <img src={`${designClubPath}/house-logo.png`} alt="Cigr House" />
            </div>
            {clubIntroPoints.map(([title, text]) => (
              <article key={title}>
                <strong>{title}</strong>
                <p>{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="figma-sheet cigr-section compact">
        <h2>全球 Cigr House 线下生态网络</h2>
        <div className="club-location-grid">
          {clubLocations.map(([city, image]) => (
            <article key={city}>
              <img src={image} alt={`${city} Cigr House`} />
              <strong>{city}</strong>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}

function BrandKitPage() {
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

function MintPage() {
  return (
    <main className="cigr-page figma-page nft-operation-page mint-operation-page">
      <section className="mint-design-section mint-route-section">
        <h1 className="figma-page-title">铸造页面</h1>
        <div className="mint-drop-hero" style={{ "--mint-bg": `url(${designMintPath}/drop-hero.jpg)` }}>
          <strong>Drop 1 Mint</strong>
        </div>
        <div className="mint-stat-row">
          <h3>烟田 NFT 发行</h3>
          {nftMintStats.map(([value, label]) => (
            <article key={value}>
              <strong>{value}</strong>
              <span>{label}</span>
            </article>
          ))}
        </div>
        <div className="mint-how-row">
          <img src={`${designMintPath}/how.jpg`} alt="CIGR drop wall" />
          <div>
            <h3>如何获得？</h3>
            <div className="mint-method-list">
              {mintMethodItems.map(([icon, title, text]) => (
                <article key={title}>
                  <img src={icon} alt="" aria-hidden="true" />
                  <div>
                    <strong>{title}</strong>
                    <p>{text}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="figma-sheet cigr-section mint-operation-panel">
        <h2>Ecosystem Metrics</h2>
        <div className="nft-metrics-grid">
          {nftEcosystemMetrics.map(([value, label, helper]) => (
            <article key={label}>
              <span>{label}</span>
              <strong>{value}</strong>
              <small>{helper}</small>
            </article>
          ))}
        </div>

        <MintIdentityPanel />
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

function SynthesisSlot({ label, badge, nftId }) {
  return (
    <div className="synthesis-slot">
      <div className="slot-box">
        {nftId ? (
          <>
            <img src={nftImages[Number(nftId) % nftImages.length]} alt={`Selected Gigr #${nftId}`} />
            <strong>Gigr #{nftId}</strong>
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
          <p>Staking $CIGR in Paradise</p>
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
            <span className="label">Gigrs</span>
            <img className="trait-strip" src={stakedNftImage} alt="Recent staked traits" />
          </Panel>
          <Panel className="blue-card">
            <div className="inline-heading">
              <Icon>savings</Icon>
              <h2>Accrued Rewards</h2>
            </div>
            <strong className="display-number">{rewards.toLocaleString("en-US", { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</strong>
            <span className="label">$CIGR</span>
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
              ["Gigrs TVL", "$1.2M"],
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
          <p>Holding a Space Gigr boosts your rewards by 1.5x.</p>
        </Panel>
      </section>
    </main>
  );
}

function AuctionPage() {
  return (
    <main className="cigr-page figma-page auction-route-page">
      <h1 className="figma-page-title">竞拍页面</h1>
      <section className="nft-auction-coming route-auction-coming" style={{ "--auction-bg": "url(/images/cigr/design/auction/coming-soon.jpg)" }}>
        <strong>即将开放</strong>
      </section>
    </main>
  );
}

function PerksPage() {
  const [isExchangeOpen, setIsExchangeOpen] = useState(false);

  return (
    <main className="cigr-page figma-page exchange-route-page">
      <section className="figma-sheet cigr-section compact">
        <h1 className="figma-page-title">兑换页面</h1>
        <div className="exchange-hero-row">
          <div>
            <h3>礼品兑换中心</h3>
            <p>持有指定 NFT 可参与周边、权益与线下活动兑换。</p>
            <button type="button" onClick={() => setIsExchangeOpen(true)}>
              立即兑换
            </button>
          </div>
          <img src="/images/cigr/design/exchange/gift.jpg" alt="CIGR gift center" />
        </div>
        <ExchangeRecords />
      </section>

      {isExchangeOpen && <ExchangeModal onClose={() => setIsExchangeOpen(false)} />}
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
    <footer className="footer cigr-footer">
      <div className="footer-inner">
        <div className="footer-brand-block">
          <a className="brand cigr-footer-logo" href="#/">
            <img src={cigrLogoImage} alt="CIGR" />
          </a>
          <p>The premier culture-driven meme ecosystem on Solana, redefining what it means to be part of a digital tribe.</p>
          <small>&copy; 2026 CIGR Ecosystem. Built on Solana.</small>
        </div>
        <div className="footer-link-grid">
          {footerColumns.map(([title, links]) => (
            <div key={title}>
              <h3>{title}</h3>
              {links.map(([label, href]) => (
                <a href={href} key={label}>
                  {label}
                </a>
              ))}
            </div>
          ))}
          <div>
            <h3>Join the community</h3>
            <div className="footer-socials">
              {cigrSocials.map((item) => (
                <a href="#" key={item.label} aria-label={item.label}>
                  <img src={item.icon} alt="" aria-hidden="true" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

const pages = {
  home: <HomePage />,
  about: <AboutTokenPage />,
  nft: <NFTPage />,
  club: <ClubPage />,
  "brand-kit": <BrandKitPage />,
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
