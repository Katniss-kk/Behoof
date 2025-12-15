// CatalogButton.tsx
import ArrowButtonSVG from "@/constants/ArrowButtonSVG/ArrowButtonSVG";
import ArrowSvg from "@/constants/ArrowSVG";
import OnCloseSVG from "@/constants/OnCloseSVG/OnCloseSVG";
import { CatalogButtonProps } from "@/types/types";
import { NavLink } from "react-router-dom";

export default function CatalogButton({ onBack, proops }: CatalogButtonProps) {
  return (
    <div className="grid gap-3 px-3 mt-2 mb-2">
      <div className="grid justify-between grid-flow-col items-center">
        {onBack ? (
          <button onClick={onBack} className="rotate-180">
            <ArrowSvg fill="var(--menu-button-color)" />
          </button>
        ) : (
          <div className="w-6"></div>
        )}

        <h1 className="[font-family:var(--font-family)] text-[var(--text-title-color)] text-2xl font-medium text-center">
          {proops.title}
        </h1>

        <NavLink to={"/"}>
          <OnCloseSVG fill="var(--menu-button-color)" />
        </NavLink>
      </div>

      <div className="grid gap-0 bg-[var(--bg-button-color)] rounded-2xl overflow-hidden">
        {proops.links.map((link) => {
          if (!link.svg) {
            return (
              <NavLink
                to={`/catalog/:${link.link}`}
                key={link.title}
                className="flex justify-between items-center px-3 py-3 border-[var(--border-menu-color)] border-2"
              >
                {link.title}
              </NavLink>
            );
          }
          return (
            <NavLink
              to={`/catalog/:${link.link}`}
              key={link.title}
              className="flex justify-between items-center px-3 py-3 border-[var(--border-menu-color)] border-2"
            >
              {link.title}
              <ArrowButtonSVG />
            </NavLink>
          );
        })}
      </div>
    </div>
  );
}
