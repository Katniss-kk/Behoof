import ButtonLogin from "@/components/Buttons/ButtonLogin";
import ButtonRegisterLink from "@/components/Buttons/ButtonRegisterLink";
import { useState } from "react";
import { NavLink } from "react-router-dom";

export default function LoginPage() {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  return (
    <div className="px-4 py-5 mb-14">
      <div className="grid gap-7 grid-flow-row p-6 bg-[var(--bg-banner-color)] rounded-t-xl">
        <div className="grid gap-6">
          <h1 className="[font-family:var(--font-family)] text-[var(--text-title-color)] text-xl font-semibold text-start">
            Вход в аккаунт Behoof
          </h1>
          <div>
            <label className="[font-family:var(--font-family)] text-[var(--label-text-color)] text-sm font-normal text-center">
              Электронная почта
            </label>
            <input
              type="text"
              placeholder="@mail.ru"
              onChange={(e) => setEmail(e.target.value)}
              className="bg-[var(--button-text-color)] border border-[var(--border-filter-button)] rounded-xl p-5 w-full h-[50px]"
            />
          </div>
          <div>
            <label className="[font-family:var(--font-family)] text-[var(--label-text-color)] text-sm font-normal text-center">
              Пароль
            </label>
            <input
              type="text"
              placeholder="******"
              onChange={(e) => setPassword(e.target.value)}
              className="bg-[var(--button-text-color)] border border-[var(--border-filter-button)] rounded-xl p-5 w-full h-[50px]"
            />
          </div>
          <ButtonLogin email={email} password={password} />
          <NavLink
            to={"/forgotpassword"}
            className="[font-family:var(--font-family)] text-[var(--text-paragraph-color)] text-base font-normal text-center"
          >
            Восстановить пароль
          </NavLink>
        </div>
      </div>
      <div className="grid gap-7 p-6 bg-[var(--button-bg-color)] rounded-b-xl">
        <h2 className="[font-family:var(--font-family)] text-[var(--button-text-color)] text-2xl font-semibold text-start">
          Вы ещё не с нами?
        </h2>
        <p className="[font-family:var(--font-family)] text-[var(--button-text-color)] text-base font-normal text-start">
          Создайте аккаунт чтобы получать уведомления об изменении цен
          и синхронизировать ваши товары на всех устройствах.
        </p>
        <ButtonRegisterLink />
      </div>
    </div>
  );
}
