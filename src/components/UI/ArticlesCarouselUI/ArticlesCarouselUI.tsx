import CardCarousel from "@/components/CardCarousel";
import ArrowSvg from "@/assets/SVG/ArrowSVG";
import { ArticlesCardCarouselUIProps, ICardCarousel } from "@/types/types";
import { NavLink } from "react-router-dom";

export default function ArticlesCarouselUI({
  CarouselProops,
  Articles,
}: ArticlesCardCarouselUIProps) {
  const card = (
    <>
      {Articles.map((Article) => (
        <div className="swiper-slide" key={Article.title}>
          <img
            src={Article.img}
            alt={Article.title}
            className="w-full rounded-t-xl mb-3"
          />
          <div className="grid gap-2 bg-[var(--bg-card-color)] rounded-b-xl px-3 pb-4">
            <h3 className="[font-family:var(--font-family)] text-[var(--text-color-title)] text-sm font-bold">
              {Article.title}
            </h3>
            <p className="[font-family:var(--font-family)] text-[var(--text-title-productColor)] text-xs font-normal">
              {Article.about}
            </p>
            <NavLink
              to={"/"}
              className="grid grid-flow-col grid-cols-[min-content] items-center gap-2 [font-family:var(--font-family)] text-[var(--text-owner-color)] text-base font-medium"
            >
              Смотреть <ArrowSvg fill="var(--text-owner-color)" />
            </NavLink>
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
          Статьи
        </h2>
        <NavLink
          to={"/articles"}
          className="flex items-center gap-3.5 [font-family:var(--font-family)] text-[var(--text-owner-color)] text-base font-medium pe-4"
        >
          К статьям <ArrowSvg fill="var(--text-owner-color)" />
        </NavLink>
      </div>
      <CardCarousel {...CarouselCardProps} />
    </div>
  );
}
