import CardCarousel from "@/components/CardCarousel";
import { ICardCarousel, ProductsCardCarouselUIProps } from "@/types/types";

import RatingBar from "@/components/RatingBar";
import CardsButtons from "@/components/Buttons/CardsButtons/CardsButtons";
import { NavLink } from "react-router-dom";

export default function ProductsCharacteristicsCarouselUI({
  CarouselProops,
  Products,
}: ProductsCardCarouselUIProps) {
  const card = (
    <>
      {Products.map((product) => (
        <div key={product.id} className="swiper-slide rounded-[5px] pb-7">
          <div className="grid grid-flow-row bg-[var(--bg-carousel-color)] px-2 py-3 gap-y-3 min-h-72">
            <div className="grid grid-flow-col items-center">
              <div>
                <h5 className="[font-family:var(--font-family)] text-[var(--text-title-productColor)] text-xs font-normal">
                  {product.type}
                </h5>
                <h4 className="[font-family:var(--font-family)] text-[var(--text-color-title)] text-xs font-medium max-w-[150px]">
                  {product.title}
                </h4>
              </div>
              <CardsButtons product={product}/>
            </div>
            <div className="grid grid-flow-col gap-x-3">
              <div className="py-2.5 self-center">
                <NavLink to={`catalog/${product.type.toLocaleLowerCase()}/product/${product.id}`}>
                  <img
                    src={product.img}
                    alt={product.title}
                    className="w-19 h-18"
                  />
                </NavLink>
              </div>
              <RatingBar product={product} />
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

  return <CardCarousel {...CarouselCardProps} />;
}
