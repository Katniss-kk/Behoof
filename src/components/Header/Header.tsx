import { Logo } from "@components/Logo";

export default function Header() {
  return (
    <div className="px-4 h-min pt-[12px]">
      <div className="flex items-center gap-x-2.5 h-min">
        <Logo />
        <h4 className="text-[var(--text-color-title)] font-[var(--font-family)] font-normal text-xs">
          Лучшие цены
          <br />в интернет-магазинах
        </h4>
      </div>
    </div>
  );
}
