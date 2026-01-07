import { ComparisonButton } from "@/constants/MobileMenuButtons";


export default function ButtonCompare() {
  return (
    <button className="grid grid-flow-col items-center gap-2.5 py-2.5 px-2 [font-family:var(--font-family)] text-[var(--button-bg-color)] text-base font-normal text-center bg-[var(--bg-color-buttonCard)] rounded-lg">
      <ComparisonButton fill="var(--button-bg-color)"/>
      Сравнить
    </button>
  );
}
