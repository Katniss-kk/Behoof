import { Logo } from "@components/Logo";
import { SearchInput } from "../SearchInput";
import { NavLink } from "react-router-dom";

export default function Header() {
  return (
    <div className="px-4 h-min pt-[12px]">
      <div className="flex items-center gap-x-2.5 h-min mb-2">
        <NavLink to={"/"}>
          <Logo />
        </NavLink>
        <h4 className="text-[var(--text-color-title)] [font-family:var(--font-family)] font-normal text-xs">
          Лучшие цены
          <br />в интернет-магазинах
        </h4>
      </div>
      <SearchInput />
      <hr />
    </div>
  );
}
