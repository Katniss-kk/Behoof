import { BlockInfoPage } from "@/types/types";

export default function BlockInfoUI({ data }: { data: BlockInfoPage }) {
  return (
    <div>
      <h2 className="[font-family:var(--font-family)] font-semibold text-base text-[var(--text-title-color)] mb-4">
        {data.title}
      </h2>
      {data.items.map((item) => (
        <div key={item.text} className="grid gap-2">
          <span className="[font-family:var(--font-family)] font-extrabold text-3xl text-[var(--text-owner-color)]">
            {item.number}
          </span>
          <p className="[font-family:var(--font-family)] font-medium text-xs text-[var(--text-paragraph-color)]">
            {item.text}
          </p>
        </div>
      ))}
    </div>
  );
}
