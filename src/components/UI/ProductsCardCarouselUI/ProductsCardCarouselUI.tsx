import CardsButtons from "@/components/Buttons/CardsButtons/CardsButtons";
import CardCarousel from "@/components/CardCarousel";
import ArrowSvg from "@/assets/SVG/ArrowSVG";
import { ICardCarousel, ProductsCardCarouselUIProps } from "@/types/types";
import { NavLink } from "react-router-dom";

export default function ProductsCardCarouselUI({
  CarouselProops,
  Products,
}: ProductsCardCarouselUIProps) {
  const card = (
    <>
      {Products.map((Product) => (
        <div key={Product.id} className="swiper-slide">
          <div className="grid justify-items-start bg-[var(--bg-card-color)] border border-[var(--border-color-button)] rounded-xl p-3">
            <NavLink
              to={`catalog/${Product.type.toLocaleLowerCase()}/product/${Product.id}`}
              className='w-full h-full'
            >
              <img
                src={Product.img}
                alt={Product.title}
                className="w-full min-h-32"
              />
            </NavLink>
            <div>
              <div>
                <span className="[font-family:var(--font-family)] text-[var(--text-title-productColor)] text-xs font-normal">
                  {Product.type}
                </span>
                <h3 className="[font-family:var(--font-family)] text-[var(--text-color-title)] text-sm font-semibold">
                  {Product.title}
                </h3>
              </div>
              <div className="grid grid-flow-col justify-between items-center">
                <div>
                  <span className="[font-family:var(--font-family)] text-[var(--text-title-productColor)] text-xs font-normal">
                    Цена
                  </span>
                  <h4 className="[font-family:var(--font-family)] text-[var(--text-color-title)] text-base font-bold">
                    {Product.price} ₽
                  </h4>
                </div>
                <CardsButtons />
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );

  const CarouselCardProps: ICardCarousel = {
    ...CarouselProops,
    children: card,
  };

  return (
    <div className="mt-8">
      <div className="grid grid-flow-col items-center justify-between mb-5">
        <h2 className="[font-family:var(--font-family)] text-[var(--text-color-title)] text-base font-semibold">
          Лучший выбор
        </h2>
        <NavLink
          to={"/catalog"}
          className="flex items-center gap-3.5 [font-family:var(--font-family)] text-[var(--text-owner-color)] text-base font-medium pe-4"
        >
          К новинкам <ArrowSvg fill="var(--text-owner-color)" />
        </NavLink>
      </div>
      <CardCarousel {...CarouselCardProps} />
    </div>
  );
}
