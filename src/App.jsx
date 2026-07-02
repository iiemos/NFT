import { useEffect } from "react";
import BackgroundMusic from "./components/BackgroundMusic.jsx";
import Footer from "./components/Footer.jsx";
import Navigation from "./components/Navigation.jsx";
import { lockedNftRouteIds, useHashPage } from "./router.js";
import { useI18n } from "./i18n.js";

import HomePage from "./pages/HomePage.jsx";
import AboutTokenPage from "./pages/AboutTokenPage.jsx";
import BrandKitPage from "./pages/BrandKitPage.jsx";
import ClubPage from "./pages/ClubPage.jsx";
import NFTPage from "./pages/NFTPage.jsx";
import MintPage from "./pages/MintPage.jsx";
import StakingPage from "./pages/StakingPage.jsx";
import SynthesisPage from "./pages/SynthesisPage.jsx";
import AuctionPage from "./pages/AuctionPage.jsx";
import PerksPage from "./pages/PerksPage.jsx";

// 路由 id -> 页面组件映射
const pageComponents = {
  home: HomePage,
  about: AboutTokenPage,
  "brand-kit": BrandKitPage,
  club: ClubPage,
  nft: NFTPage,
  mint: MintPage,
  staking: StakingPage,
  synthesis: SynthesisPage,
  auction: AuctionPage,
  perks: PerksPage,
};

export default function App() {
  const page = useHashPage();
  const { t } = useI18n();
  const isLockedNftPage = lockedNftRouteIds.includes(page);
  const currentPage = isLockedNftPage ? "nft" : page;
  const PageComponent = pageComponents[currentPage] ?? HomePage;

  useEffect(() => {
    if (!isLockedNftPage) return;
    window.alert(t("pages.auctionComing"));
    window.location.hash = "#/nft";
  }, [isLockedNftPage, t]);

  return (
    <>
      <Navigation currentPage={currentPage} />
      <BackgroundMusic />
      <PageComponent />
      <Footer />
    </>
  );
}
