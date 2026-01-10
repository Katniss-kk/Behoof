import ButtonRegister from "@/components/Buttons/ButtonRegister";
import { useState } from "react";

export default function RegisterPage() {
  const [name, setName] = useState<string>("");
  const [surName, setSurName] = useState<string>("");
  const [city, setCity] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [pass, setPass] = useState<string>("");
  const [repeatPass, setRepeatPass] = useState<string>("");

  return (
    <div className="px-4 py-5 mb-14">
      <div className="grid gap-7 grid-flow-row p-6 bg-[var(--bg-banner-color)] rounded-t-xl">
        <div className="grid gap-6">
          <h1 className="[font-family:var(--font-family)] text-[var(--text-title-color)] text-xl font-semibold text-start">
            Регистрация
          </h1>
          <div>
            <label className="[font-family:var(--font-family)] text-[var(--label-text-color)] text-sm font-normal text-center">
              Имя
            </label>
            <input
              type="text"
              onChange={(e) => setName(e.target.value)}
              placeholder="Иван"
              className="bg-[var(--button-text-color)] border border-[var(--border-filter-button)] rounded-xl p-5 w-full h-[50px]"
            />
          </div>
          <div>
            <label className="[font-family:var(--font-family)] text-[var(--label-text-color)] text-sm font-normal text-center">
              Фамилия (не обязательно)
            </label>
            <input
              type="text"
              onChange={(e) => setSurName(e.target.value)}
              placeholder="Иванов"
              className="bg-[var(--button-text-color)] border border-[var(--border-filter-button)] rounded-xl p-5 w-full h-[50px]"
            />
          </div>
          <div>
            <label className="[font-family:var(--font-family)] text-[var(--label-text-color)] text-sm font-normal text-center">
              Город
            </label>
            <input
              type="text"
              onChange={(e) => setCity(e.target.value)}
              placeholder="Москва"
              className="bg-[var(--button-text-color)] border border-[var(--border-filter-button)] rounded-xl p-5 w-full h-[50px]"
            />
          </div>
          <div>
            <label className="[font-family:var(--font-family)] text-[var(--label-text-color)] text-sm font-normal text-center">
              Адресс электронной почты
            </label>
            <input
              type="text"
              onChange={(e) => setEmail(e.target.value)}
              placeholder="@mail.ru"
              className="bg-[var(--button-text-color)] border border-[var(--border-filter-button)] rounded-xl p-5 w-full h-[50px]"
            />
          </div>
          <div>
            <label className="[font-family:var(--font-family)] text-[var(--label-text-color)] text-sm font-normal text-center">
              Пароль
            </label>
            <input
              type="text"
              onChange={(e) => setPass(e.target.value)}
              placeholder="*****"
              className="bg-[var(--button-text-color)] border border-[var(--border-filter-button)] rounded-xl p-5 w-full h-[50px]"
            />
          </div>
          <div>
            <label className="[font-family:var(--font-family)] text-[var(--label-text-color)] text-sm font-normal text-center">
              Повторный пароль
            </label>
            <input
              type="text"
              onChange={(e) => setRepeatPass(e.target.value)}
              placeholder="*****"
              className="bg-[var(--button-text-color)] border border-[var(--border-filter-button)] rounded-xl p-5 w-full h-[50px]"
            />
          </div>
          <ButtonRegister
            name={name}
            surName={surName}
            city={city}
            email={email}
            pass={pass}
            repeatPass={repeatPass}
          />
        </div>
      </div>
    </div>
  );
}
