import { MenuItemProps } from "@/types/types";
import {
  HomeButton,
  SearchButton,
  FavoriteButton,
  ComparisonButton,
  ProfileButton,
} from "@constants/MobileMenuButtons";
import { NavLink } from "react-router-dom";

function MenuItem({ to, IconComponent }: MenuItemProps) {
  return (
    <NavLink to={to}>
      {({ isActive }) => (
        <div
          className={`px-[20px] py-[10px] ${
            isActive ? "bg-[var(--bg-color-buttonMenu)] rounded-[25px]" : ""
          }`}
        >
          <IconComponent
            fill={
              isActive
                ? "var(--active-button-color)"
                : "var(--menu-button-color)"
            }
          />
        </div>
      )}
    </NavLink>
  );
}

export default function MobileMenuUI() {
  return (
    <div className="flex gap-1 justify-center align-center pb-2 fixed bottom-0 left-0 right-0 z-50 bg-[var(--bg-menu-color)] border-[var(--border-menu-color)] border-solid border">
      <MenuItem to="/" IconComponent={HomeButton} />
      <MenuItem to="/search" IconComponent={SearchButton} />
      <MenuItem to="/favorite" IconComponent={FavoriteButton} />
      <MenuItem to="/comparison" IconComponent={ComparisonButton} />
      <MenuItem to="/profile" IconComponent={ProfileButton} />
    </div>
  );
}
