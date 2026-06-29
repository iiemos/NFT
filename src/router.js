// 轻量 hash 路由：根据 location.hash 解析当前页面，并在 hash 变化时滚动到锚点/顶部。
import { useEffect, useState } from "react";

// 所有有效页面 id（与 pages 映射、导航链接保持一致）
export const routeIds = ["home", "about", "club", "brand-kit", "nft", "mint", "staking", "synthesis", "auction", "perks"];
// 归属「NFT」一级导航的子页面 id
export const nftRouteIds = ["nft", "mint", "staking", "synthesis", "auction", "perks"];

export function getPageFromHash() {
  const page = window.location.hash.replace("#/", "") || "home";
  const pageId = page.split("#")[0].split("?")[0] || "home";
  return routeIds.includes(pageId) ? pageId : "home";
}

export function useHashPage() {
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
