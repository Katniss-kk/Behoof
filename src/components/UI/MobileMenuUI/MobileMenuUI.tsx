import { useSelector } from "@/services/store";
import { MenuItemProps } from "@/types/types";
import {
  HomeButton,
  CatalogButton,
  FavoriteButton,
  ComparisonButton,
  ProfileButton,
} from "@constants/MobileMenuButtons";
import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

function MenuItem({ to, IconComponent, title }: MenuItemProps) {
  return (
    <NavLink to={to} end>
      {({ isActive }) => (
        <div className="grid justify-items-center gap-y-0.5">
          <IconComponent
            fill={
              isActive
                ? "var(--active-button-color)"
                : "var(--menu-button-color)"
            }
          />
          <span
            className={`[font-family:var(--font-family)] text-[10px] font-normal ${
              isActive
                ? "text-[var(--active-button-color)]"
                : "text-[var(--menu-button-color)]"
            }`}
          >
            {title}
          </span>
        </div>
      )}
    </NavLink>
  );
}

export default function MobileMenuUI() {
  const [buttonName, setButtonName] = useState<string>("Профиль");
  const userName = useSelector((state) => state.User.user?.name);
  useEffect(() => {
    if (userName !== "" && userName !== null && userName !== undefined) {
      setButtonName(userName);
    } else {
      setButtonName("Профиль");
    }
  }, [userName]);

  return (
    <div className="flex gap-x-4 justify-center items-end p-1.5 fixed min-h-12 bottom-0 left-0 right-0 z-10 bg-[var(--bg-menu-color)] border-[var(--border-menu-color)] border-solid border">
      <MenuItem to="/" IconComponent={HomeButton} title={"Главная"} />
      <MenuItem
        to="/catalogmenu"
        IconComponent={CatalogButton}
        title={"Каталог"}
      />
      <MenuItem
        to="/profile/basket"
        IconComponent={FavoriteButton}
        title={"Корзина"}
      />
      <MenuItem
        to="/profile/comparison"
        IconComponent={ComparisonButton}
        title={"Сравнения"}
      />
      <MenuItem to="/profile" IconComponent={ProfileButton} title={buttonName} />
    </div>
  );
}
