import { IProductsCardCarousel } from "@/types/types";

export default function RatingBarUI({
  product,
}: {
  product: IProductsCardCarousel;
}) {
  const Rating = [
    { label: "Дизайн", value: product.characteristics.design },
    { label: "Батарея", value: product.characteristics.battery },
    { label: "Дисплей", value: product.characteristics.display },
    { label: "Камера", value: product.characteristics.camera },
    { label: "Ответ", value: product.characteristics.answer },
    {
      label: "Портативность",
      value: product.characteristics.portability,
    },
  ];

  return (
    <>
      {Rating.map((item, idx) => (
        <div key={idx} className="grid items-center gap-y-1">
          <span className="[font-family:var(--font-family)] text-[var(--text-title-productColor)] text-xs font-normal min-w-[100px]">
            {item.label}
          </span>
          <div className="flex gap-0.5">
            {[...Array(5)].map((_, index) => (
              <div
                key={index}
                className={`w-6 h-0.5 rounded ${
                  index < item.value
                    ? "bg-[var(--bg-color-raitingActive)]"
                    : "bg-[var(--bg-color-raiting)]"
                }`}
              />
            ))}
          </div>
        </div>
      ))}
    </>
  );
}
