// CIGR 官网集中数据：图片/视频路径常量与各页面静态数据。
// 后续对接真实接口时，可在各页面内用请求结果替换这里导出的静态数组。

// ===== 资源路径 =====
export const hamburgerIcon = "/images/icon-hamburguer.svg";
export const closeMenuIcon = "/images/icon-close.svg";
export const menuRopeImage = "/images/brand/cigr-banner.jpg";

export const cigrLogoImage = "/images/cigr/logo.png";
export const cigrHeroVideo = "/videos/home-banner.mp4";
export const cigrHomeAudio = "/audio/bg.m4a";
export const cigrWordmarkImage = "/images/cigr/home/cigr-wordmark.png";
export const cigrArrowBlackImage = "/images/cigr/home/arrow-black.png";
export const cigrArrowWhiteImage = "/images/cigr/home/arrow-white.png";
export const aboutBannerImage = "/images/cigr/about/about-banner.jpg";
export const tokenCoinsImage = "/images/cigr/design/about/coins.png";

export const designHomePath = "/images/cigr/design/home";
export const designAboutPath = "/images/cigr/design/about";
export const designNftPath = "/images/cigr/design/nft";
export const designMintPath = "/images/cigr/design/mint";
export const designClubPath = "/images/cigr/design/club";
export const designBrandKitPath = "/images/cigr/design/brand-kit";
export const designSynthesisPath = "/images/cigr/design/synthesis";
export const brandKitDownload = "/downloads/cigr-logo-kit.zip";

export const nftImages = Array.from({ length: 9 }, (_, index) => `/images/nft/nft-${String(index + 1).padStart(2, "0")}.jpg`);
export const stakedNftImage = nftImages[2];
export const farmHeroImage =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuBHrCU-CTk1VPzA5R47UYOaLUxiJ1vITRszZqtVJIzWNH7pUIGiI-0PHob3K5gNSzEv-bfXY1TJhCKOk0AGTJU57huDQgSh7D58WwzdZtihN-WEK6lzI5ppIJenzC66PqrEo4aYBEVNnomxQvBjW6Uk6r8UhDcpn7Nc7Y4O0ovXF2FAiby7KAPnEQS_NIN6NiJQ6NRDnAvJ-1y1oeItcu03h3njOp6BU8r7DXS7k6lEirPVdF_-tQCONgUJDcFWvfRgVz2seiGAwQ";

// ===== 导航 / 页脚 =====
export const navItems = [
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
  { id: "brand-kit", label: "品牌套件", path: "#/brand-kit" },
  {
    id: "about",
    label: "关于",
    path: "#/about",
  },
];

export const footerColumns = [
  [
    "探索",
    [
      ["首页", "#/"],
      ["关于", "#/about"],
      ["NFT", "#/nft"],
      ["俱乐部", "#/club"],
      ["品牌套件", "#/brand-kit"],
    ],
  ],
  [
    "Resources",
    [
      ["Whitepaper", "#/about"],
    ],
  ],
];

export const cigrSocials = [
  { label: "X", icon: "/images/cigr/home/social/social-1.png", href: "https://x.com/cigrhabana" },
  { label: "YouTube", icon: "/images/icons/icon-youtube.svg", href: "https://www.youtube.com/@cigrhabana" },
  { label: "Instagram", icon: "/images/cigr/home/social/social-2.png", href: "https://www.instagram.com/cigrhabana/" },
];

// ===== 首页 =====
export const homeStoryVideos = [1, 2, 3, 4].map((item) => `/videos/home-stories/${item}.mp4`).concat("/videos/home-stories/our-presence.mp4");
export const cigrCardItems = [
  { title: "烟田", label: "F card", image: "/images/cigr/home/cards/2-1.jpg" },
  { title: "窖藏", label: "A card", image: "/images/cigr/home/cards/2-2.jpg" },
  { title: "限量", label: "L card", image: "/images/cigr/home/cards/2-3.jpg" },
  { title: "孤品", label: "One card", image: "/images/cigr/home/cards/2-4.jpg" },
];
export const lifestyleItems = [
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
export const cultureImages = Array.from({ length: 7 }, (_, index) => `/images/cigr/home/culture/6-${index + 1}.jpg`);
export const futureSlots = Array.from({ length: 24 }, (_, index) => index);
export const downloadColumns = Array.from({ length: 4 }, (_, column) => Array.from({ length: 8 }, (_, item) => `${column}-${item}`));
export const workflowSteps = [
  ["STEP 1", "获取 NFT，成为生态会员", "获得 CIGR 数字身份与会员权益，进入品牌生态、资产映射和社区共创入口。", "/images/cigr/home/icons/8-1.png"],
  ["STEP 2", "解锁权益，享受专属服务", "会员可参与潮流联名、线下活动、资产兑换与长期社区奖励。", "/images/cigr/home/icons/8-2.png"],
  ["STEP 3", "参与共建，推动生态发展", "通过治理、传播和任务协作共同推进 CIGR 生态的全球化增长。", "/images/cigr/home/icons/8-3.png"],
  ["STEP 4", "价值共生，共享增长红利", "品牌溢价与社区价值持续沉淀，形成可循环的文化资产协议。", "/images/cigr/home/icons/8-4.png"],
];
export const createStoryColumns = [
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

// ===== 关于 / 代币 =====
export const roadmapPhases = [
  ["第一阶段", "MEME 启动期（代币发行）", "完成社区启动、代币发行与核心叙事搭建，形成 CIGR 全球共识入口，上线顶级交易所。"],
  ["第二阶段", "NFT 发售期（资产落地）", "上线首批 NFT 与权益资产，建立会员身份、实物托底和链上确权体系。"],
  ["第三阶段", "生态完善期（玩法升级）", "拓展质押、合成、竞猜、兑换等玩法，提升社区参与度和流动性。"],
  ["第四阶段", "长期成熟期（圈层深耕）", "持续推进品牌合作、线下活动和 RWA 场景拓展，沉淀长期价值。"],
];
export const expansionImages = [
  ["/images/cigr/about/expansion-wine.jpg", "精品酒类"],
  ["/images/cigr/about/expansion-watch.jpg", "腕表藏品"],
  ["/images/cigr/about/expansion-jewelry.jpg", "珠宝饰品"],
];
export const partnerItems = [
  [`${designAboutPath}/bitflux-logo.png`, "Bitflux Limited，持牌数字银行，为 CIGR 会员提供全球支付、资产管理等金融服务。"],
  [`${designAboutPath}/roma-logo.png`, "ROMA.US，美股上市公司，全球领先的审计机构。为 CIGR 提供创新的底层资产上链证明服务。"],
  [`${designAboutPath}/solana-partner.png`, "Solana ecosystem partner, supporting CIGR with high-performance on-chain infrastructure and global community reach."],
];
export const mechanismItems = [
  ["国库收益回购销毁", "/images/cigr/home/icons/8-1.png", "国库通过资产增值、金融服务等获得的收益，将定期回购并销毁 $CIGR 代币。"],
  ["NFT 资金回流回购", "/images/cigr/home/icons/8-2.png", "NFT 售卖资金的 25% 和孤品 NFT 竞拍手续费，将用于二级市场回购 $CIGR。"],
  ["资产合成销毁机制", "/images/cigr/home/icons/8-3.png", "在 NFT 合成过程中，无论成功与否，都会消耗和销毁一定数量的代币，持续减少流通总量。"],
];

// ===== 俱乐部 =====
export const clubIntroPoints = [
  ["人脉网络", "进入 CIGR 全球会员体系，连接文化收藏者、品牌主理人与链上玩家。"],
  ["全球通用会员卡", "会员身份与 NFT 资产绑定，可参与线上任务、权益兑换和线下活动。"],
  ["特权与服务", "优先参与联名发售、主题活动、雪茄品鉴与 Cigr House 线下体验。"],
];
export const clubLocations = [
  ["香港", `${designClubPath}/hongkong.jpg`],
  ["新加坡", `${designClubPath}/singapore.jpg`],
  ["伦敦", `${designClubPath}/london.jpg`],
  ["纽约", `${designClubPath}/newyork.jpg`],
  ["巴黎", `${designClubPath}/paris.jpg`],
  ["迪拜", `${designClubPath}/dubai.jpg`],
];

// ===== 品牌套件 =====
export const brandColorTokens = [
  { name: "CIGR Yellow", hex: "#fbc202", rgb: "251 / 194 / 2", cmyk: "2 / 24 / 100 / 0" },
  { name: "CIGR Pink", hex: "#fa3884", rgb: "250 / 56 / 132", cmyk: "0 / 90 / 16 / 0" },
  { name: "CIGR Cyan", hex: "#02c3ff", rgb: "2 / 195 / 255", cmyk: "63 / 3 / 0 / 0" },
  { name: "CIGR Black", hex: "#000000", rgb: "0 / 0 / 0", cmyk: "75 / 68 / 67 / 90" },
  { name: "CIGR White", hex: "#ffffff", rgb: "255 / 255 / 255", cmyk: "0 / 0 / 0 / 0" },
];
export const brandWordmarks = [
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
    image: cigrLogoImage,
    files: [
      ["JPG", `${designBrandKitPath}/wordmark-white.jpg`],
      ["PNG", cigrLogoImage],
    ],
  },
];

// ===== NFT / 铸造 =====
export const nftMintStats = [
  ["10000张", "发行总量"],
  ["85USDT", "铸造价格"],
  ["3000张", "分三期发售，第一期发售数量"],
];
export const nftEcosystemMetrics = [
  ["$4.2M", "Staked Value", "+12% from last week"],
  ["5,240", "Holder Count", "Verified active wallets"],
  ["1.2K SOL", "24H Volume", "Primary & Secondary"],
  ["STAGE 3", "Roadmap Phase", "Fusion Chamber Live"],
];
export const nftDesignCards = [
  {
    title: "烟田 F card",
    subtitle: "新晋收藏家",
    access: "通过铸造获得",
    status: "开放铸造",
    label: "F card",
    image: `${designNftPath}/f-card.jpg`,
    avatar: `${designNftPath}/f-avatar.png`,
    traits: [`${designNftPath}/f-trait-1.png`, `${designNftPath}/f-trait-2.png`, `${designNftPath}/f-trait-3.png`, `${designNftPath}/f-trait-4.png`],
    text: "他们可能是：创业新人、年轻投资者、开发者、创作者、收藏家。渴望财富、权力与认可。",
    href: "#/mint",
  },
  {
    title: "窖藏 A card",
    subtitle: "雪茄绅士",
    access: "通过盲盒合成获得",
    status: "开放铸造",
    label: "A card",
    image: `${designNftPath}/a-card.jpg`,
    avatar: `${designNftPath}/a-avatar.png`,
    traits: [`${designNftPath}/a-trait-1.png`, `${designNftPath}/a-trait-2.png`, `${designNftPath}/a-trait-3.png`, `${designNftPath}/a-trait-4.png`],
    text: "他们掌握着大部分的财富，已经在自己的领域建立影响力。每一次交易都可能影响全球经济。",
    href: "#/synthesis",
  },
  {
    title: "限量 L card",
    subtitle: "银河鉴赏家",
    access: "通过铸造盲盒合成获得",
    status: "开放铸造",
    label: "L card",
    image: `${designNftPath}/l-card.jpg`,
    avatar: `${designNftPath}/l-avatar.png`,
    traits: [`${designNftPath}/l-trait-1.png`, `${designNftPath}/l-trait-2.png`, `${designNftPath}/l-trait-3.png`, `${designNftPath}/l-trait-4.png`],
    text: "他们是第一批获得星际贸易权的人，也是首批星际资本家。控制着月球矿场、太空能源、火星贸易等。",
    href: "#/synthesis",
  },
  {
    title: "孤品 One card",
    subtitle: "创世珍藏家",
    access: "即将推出",
    status: "敬请期待",
    label: "One card",
    image: `${designNftPath}/one-card.png`,
    avatar: `${designNftPath}/one-avatar.png`,
    traits: [],
    traitLabels: ["创世身份", "最高机密", "未来决议", "稀缺权益"],
    text: "雪茄会的创始成员，掌握着组织最高秘密。他们决定世界的未来。",
    href: "#/perks",
  },
];
export const nftPerkImages = [
  [`${designNftPath}/perk-1.jpg`, "孤品级 NFT 专属兑换权益", "合成限量 NFT 后，解锁更高等级会员空间、专属活动和稀缺资产兑换资格。"],
  [`${designNftPath}/perk-2.jpg`, "高端雪茄实物权益 NFT 兑换", "将链上身份与真实雪茄资产连接，形成收藏、兑换和权益验证闭环。"],
];
export const mintMethodItems = [
  [`${designMintPath}/icon-a.png`, "定向邀约白名单", "社区长和 KOL"],
  [`${designMintPath}/icon-b.png`, "持币解锁白名单", "连续 7 天日均持仓价值 ≥100U"],
];
export const mintTraitBadges = ["LEGENDARY CROWN", "GOLD TEXTURE", "QUANTUM AURA"];
export const mintLiveActivities = [
  ["Doge...260", "minted 3 NFTs", "Just now"],
  ["Cigr...118", "minted 1 NFT", "1 min ago"],
  ["Vault...902", "minted 2 NFTs", "3 min ago"],
  ["KOL...077", "minted 5 NFTs", "5 min ago"],
];

// ===== 合成 =====
export const synthesisGroups = [
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
export const inventory = [
  { id: "402", tone: "green", traits: ["primary", "secondary"], effect: "" },
  { id: "119", tone: "blue", traits: ["tertiary", "pink"], effect: "mirror" },
  { id: "882", tone: "pink", traits: ["mint"], effect: "soft" },
  { id: "034", tone: "gray", traits: ["primary", "sky"], effect: "tilt" },
  { id: "221", tone: "mint", traits: ["ink"], effect: "" },
  { id: "506", tone: "lavender", traits: ["muted"], effect: "grayscale" },
];

// ===== 兑换 =====
export const exchangeColumns = ["礼品名称", "订单状态", "订单编号", "物流公司", "物流单号", "下单时间", "操作"];
export const exchangeRecords = [
  { id: "0319", status: "已完成", tone: "done", order: "1234567890123", carrier: "顺丰速运", tracking: "SF1234567890123", time: "2024-05-20 18:30:00", shipped: true },
  { id: "0420", status: "运输中", tone: "shipping", order: "1234567890123", carrier: "顺丰速运", tracking: "SF1234567890123", time: "2024-05-20 18:30:00", shipped: true },
  { id: "0521", status: "待发货", tone: "pending", order: "1234567890123", carrier: "", tracking: "", time: "2024-05-20 18:30:00", shipped: false },
  { id: "0602", status: "审核中", tone: "review", order: "1234567890123", carrier: "", tracking: "", time: "2024-05-20 18:30:00", shipped: false },
  { id: "0718", status: "已完成", tone: "done", order: "1234567890123", carrier: "顺丰速运", tracking: "SF1234567890123", time: "2024-05-20 18:30:00", shipped: true },
];
