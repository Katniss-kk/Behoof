import { NavLink } from "react-router-dom";
import { CategoryCarouselUIProps, ICardCarousel } from "@/types/types";
import CardCarousel from "@/components/CardCarousel";

export default function CategoryCarouselUI({
  CarouselProops,
  Products,
}: CategoryCarouselUIProps) {
  const card = (
    <>
      {Products.map((product) => (
        <div className="swiper-slide rounded-[5px]" key={product.title}>
          <NavLink
            to={`catalog${product.link}`}
            className="grid justify-center bg-[var(--bg-carousel-color)] p-2"
          >
            <img
              src={product.img}
              alt={product.title}
              className="h-16 w-16 object-contain"
            />
          </NavLink>
          <h3 className="[font-family:var(--font-family)] text-xs text-[var(--text-color-title)] text-center mt-1.5 line-clamp-2">
            {product.title}
          </h3>
        </div>
      ))}
    </>
  );

  const CarouselCardProps: ICardCarousel = {
    ...CarouselProops,
    children: card,
  };

  return (
    <div className="mt-3 rounded-lg">
      <h2 className="[font-family:var(--font-family)] text-[var(--text-color-title)] text-base mb-4 font-semibold">
        Категории
      </h2>
      <CardCarousel {...CarouselCardProps} />
    </div>
  );
}
