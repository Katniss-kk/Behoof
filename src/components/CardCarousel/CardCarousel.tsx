import { ICardCarousel } from "@/types/types";
import CardCarouselUI from "@components/UI/CardCarouselUI";
import { useEffect, useRef } from "react";
import Swiper from "swiper";
import { Navigation, Pagination } from "swiper/modules";

export default function CardCarousel(proops: ICardCarousel) {
  const swiperRef = useRef<Swiper | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    swiperRef.current = new Swiper(containerRef.current, {
      modules: [Navigation, Pagination],
      centeredSlides: false,
      loop: false,
      slidesPerGroup: proops.slidesPerGroup || 1,
      slidesPerView: proops.slidesPerView || 1,
      spaceBetween: proops.spaceBetween || 0,
      breakpoints: proops.breakpoints || {},
    });

    return () => {
      if (swiperRef.current) {
        swiperRef.current.destroy(true, true);
      }
    };
  }, [proops]);

  return <CardCarouselUI ref={containerRef} children={proops.children} />;
}
