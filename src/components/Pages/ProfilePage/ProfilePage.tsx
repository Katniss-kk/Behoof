import ButtonLogout from "@/components/Buttons/ButtonLogout";
import ButtonSaveChange from "@/components/Buttons/ButtonSaveChange";
import { useSelector } from "@/services/store";
import avatar from "@assets/AvatarProfile.png";
import { useState } from "react";
import { NavLink } from "react-router-dom";

export default function ProfilePage() {
  const user = useSelector((state) => state.User.user);
  const [email, setEmail] = useState<string>(user?.email || "");
  const [name, setName] = useState<string>(user?.name || "");
  const [surname, setSurname] = useState<string>(user?.surname || "");
  const [city, setCity] = useState<string>(user?.city || "");

  return (
    <div className="grid gap-6 p-6 mb-14">
      <div className="grid gap-3 p-4 bg-[var(--bg-banner-color)] rounded-xl">
        <img src={avatar} alt="Аватар" className="rounded-[150px]" />
        <div className="grid gap-1.5">
          <label className="[font-family:var(--font-family)] text-[var(--label-text-color)] text-sm font-normal text-start">
            Имя
          </label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="bg-[var(--button-text-color)] border border-[var(--border-filter-button)] rounded-xl px-3 w-full h-[40px]"
          />
        </div>
        <div className="grid gap-1.5">
          <label className="[font-family:var(--font-family)] text-[var(--label-text-color)] text-sm font-normal text-start">
            Фамилия
          </label>
          <input
            type="text"
            value={surname}
            onChange={(e) => setSurname(e.target.value)}
            className="bg-[var(--button-text-color)] border border-[var(--border-filter-button)] rounded-xl px-3 w-full h-[40px]"
          />
        </div>
        <div className="grid gap-1.5">
          <label className="[font-family:var(--font-family)] text-[var(--label-text-color)] text-sm font-normal text-start">
            Электронная почта
          </label>
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="bg-[var(--button-text-color)] border border-[var(--border-filter-button)] rounded-xl px-3 w-full h-[40px]"
          />
        </div>
        <div className="grid gap-1.5">
          <label className="[font-family:var(--font-family)] text-[var(--label-text-color)] text-sm font-normal text-start">
            Город
          </label>
          <input
            type="text"
            value={city}
            onChange={(e) => setCity(e.target.value)}
            className="bg-[var(--button-text-color)] border border-[var(--border-filter-button)] rounded-xl px-3 w-full h-[40px]"
          />
        </div>
        <ButtonSaveChange
          name={name}
          surname={surname}
          email={email}
          city={city}
        />
      </div>
      <div className="grid gap-3 p-4 bg-[var(--bg-banner-color)] rounded-xl">
        <NavLink
          to={"/forgotpassword"}
          className="[font-family:var(--font-family)] text-[var(--label-text-color)] text-sm font-normal text-start"
        >
          Сбросить пароль
        </NavLink>
        <ButtonLogout />
      </div>
    </div>
  );
}
