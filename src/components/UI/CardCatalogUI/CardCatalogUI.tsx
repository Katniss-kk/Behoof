import { IProduct } from "@/types/types";
import CardsButtons from "@/components/Buttons/CardsButtons/CardsButtons";

export default function CardCatalogUI({ cards }: { cards: IProduct[] }) {
  return (
    <div className="grid gap-y-3 mb-15">
      {cards.map((card) => (
        <div
          key={card.title}
          className="bg-[var(--bg-carousel-color)] p-3 border border-[var(--border-color-button)] rounded-xl"
        >
          <div className="grid gap-y-2">
            <div className="grid gap-y-1">
              <div className="grid grid-flow-col gap-1">
                <span className="[font-family:var(--font-family)] text-[var(--color-reviews)] text-xs font-normal px-2 py-1 border border-[var(--border-menu-color)] rounded-xl w-max">
                  4.4 средняя оцена
                </span>
                <span className="[font-family:var(--font-family)] text-[var(--text-title-productColor)] text-xs font-normal px-2 py-1 border border-[var(--border-menu-color)] rounded-xl w-max">
                  447 отзывов
                </span>
              </div>
              <h2 className="[font-family:var(--font-family)] text-[var(--text-title-color)] text-sm font-medium">
                {card.title}
              </h2>
              <span className="[font-family:var(--font-family)] text-[var(--text-title-color)] text-sm font-medium">
                {card.price} ₽
              </span>
            </div>
            <div className="max-w-25">
              <CardsButtons />
            </div>
          </div>
          <div className="grid grid-flow-col min-h-28">
            <img
              src={card.img}
              alt={card.title}
              className="pt-3 pb-3 max-w-[89px] h-full"
            />
            <div className="grid grid-flow-row">
              <span className="h-min [font-family:var(--font-family)] text-[var(--text-title-color)] text-xs font-normal">
                {card.characteristics.ram} GB RAM,{" "}
                {card.characteristics.gbInbuilt} GB inbuilt
              </span>
              <span className="[font-family:var(--font-family)] text-[var(--text-title-color)] text-xs font-normal">
                not supported
              </span>
              <span className="[font-family:var(--font-family)] text-[var(--text-title-color)] text-xs font-normal">
                {card.characteristics.mAhBattery}
              </span>
              <span className="[font-family:var(--font-family)] text-[var(--text-title-color)] text-xs font-normal">
                {card.characteristics.OC}
              </span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
