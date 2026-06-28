import Footer from "./components/Footer.jsx";
import Navigation from "./components/Navigation.jsx";
import { useHashPage } from "./router.js";

import HomePage from "./pages/HomePage.jsx";
import AboutTokenPage from "./pages/AboutTokenPage.jsx";
import ClubPage from "./pages/ClubPage.jsx";
import MintPage from "./pages/MintPage.jsx";
import StakingPage from "./pages/StakingPage.jsx";
import SynthesisPage from "./pages/SynthesisPage.jsx";
import AuctionPage from "./pages/AuctionPage.jsx";
import PerksPage from "./pages/PerksPage.jsx";

// 路由 id -> 页面组件映射
const pageComponents = {
  home: HomePage,
  about: AboutTokenPage,
  club: ClubPage,
  mint: MintPage,
  staking: StakingPage,
  synthesis: SynthesisPage,
  auction: AuctionPage,
  perks: PerksPage,
};

export default function App() {
  const page = useHashPage();
  const PageComponent = pageComponents[page] ?? HomePage;

  return (
    <>
      <Navigation currentPage={page} />
      <PageComponent />
      <Footer />
    </>
  );
}
