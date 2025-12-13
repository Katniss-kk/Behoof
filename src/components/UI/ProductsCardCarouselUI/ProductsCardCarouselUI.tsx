import CardCarousel from "@/components/CardCarousel";
import {
  ICardCarousel,
  ProductsCardCarouselUIProps,
} from "@/types/types";
import {
  FavoriteButton,
  ComparisonButton,
} from "@/constants/MobileMenuButtons";
import RatingBar from "@/components/RatingBar";

export default function ProductsCardCarouselUI({
  CarouselProops,
  Products,
}: ProductsCardCarouselUIProps) {
  const card = (
    <>
      {Products.map((product) => (
        <div key={product.title} className="swiper-slide rounded-[5px]">
          <div className="grid grid-flow-row bg-[var(--bg-carousel-color)] p-3 gap-y-3">
            <div className="grid grid-flow-col items-center">
              <div>
                <h5 className="[font-family:var(--font-family)] text-[var(--text-title-productColor)] text-xs font-normal">
                  {product.type}
                </h5>
                <h4 className="[font-family:var(--font-family)] text-[var(--text-color-title)] text-xs font-medium max-w-[150px]">
                  {product.title}
                </h4>
              </div>
              <div className="grid grid-flow-col gap-0">
                <button className="grid items-center justify-center w-10 h-10 border-solid border-[var(--border-color-button)] border rounded-4xl">
                  <FavoriteButton fill="var(--menu-button-color)" />
                </button>
                <button className="grid items-center justify-center w-10 h-10 border-solid border-[var(--border-color-button)] border rounded-4xl">
                  <ComparisonButton fill="var(--menu-button-color)" />
                </button>
              </div>
            </div>
            <div className="grid grid-flow-col gap-y-5">
              <div className="p-2.5 self-center">
                <img
                  src={product.img}
                  alt={product.title}
                  className="w-19 h-18"
                />
              </div>
              <div className="grid grid-flow-row gap-3">
                <RatingBar product={product} />
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

  return <CardCarousel {...CarouselCardProps} />;
}
