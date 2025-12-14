import { IBanners } from "@/types/types";
import { NavLink } from "react-router-dom";
import ArrowSvg from "@/constants/ArrowSVG";

export default function AdBannerUI({ Banners }: { Banners: IBanners[] }) {
  return (
    <div className="grid gap-y-3 mt-5">
      {Banners.map((Banner) => (
        <div
          key={Banner.owner}
          className="grid gap-y-[12px] bg-[var(--bg-banner-color)] py-3 ps-3 pe-11 rounded-lg"
        >
          <h1 className="[font-family:var(--font-family)] text-[var(--text-title-color)] font-semibold text-base">
            <span className="text-[var(--text-owner-color)]">
              {Banner.owner}
            </span>
            {Banner.title}
          </h1>
          <NavLink
            to={Banner.link}
            className="flex items-center justify-center gap-x-3.5 [font-family:var(--font-family)] text-[var(--button-text-color)] font-medium text-base bg-[var(--button-bg-color)] py-4 px-5 rounded-[8px] hover:opacity-90 transition-opacity"
          >
            {Banner.linkTitle}
            <ArrowSvg />
          </NavLink>
        </div>
      ))}
    </div>
  );
}
