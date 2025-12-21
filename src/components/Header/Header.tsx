import { Logo } from "@components/Logo";
import { SearchInput } from "../SearchInput";
import { NavLink, useLocation } from "react-router-dom";
import ButtonBack from "@components/Buttons/ButtonBack";

export default function Header() {
  const location = useLocation();

  const showButtonBack =
    location.pathname !== "/" && location.pathname !== "/catalogmenu";

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
      <div className="grid grid-cols-[max-content] grid-flow-col gap-2 mb-2">
        {showButtonBack && <ButtonBack />}
        <SearchInput />
      </div>
      <hr />
    </div>
  );
}
