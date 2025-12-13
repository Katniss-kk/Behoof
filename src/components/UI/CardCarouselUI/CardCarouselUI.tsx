import Swiper from "swiper";
import { Navigation, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { IProduct } from "@/types/types";
import { NavLink } from "react-router-dom";
import { useEffect, useRef } from "react";

export default function CardCarouselUI({ Products }: { Products: IProduct[] }) {
  const swiperRef = useRef<Swiper | null>(null);

  useEffect(() => {
    swiperRef.current = new Swiper(".swiper", {
      modules: [Navigation, Pagination],
      slidesPerGroup: 1,
      slidesPerView: 3,
      centeredSlides: false,
      loop: false,
      breakpoints: {
        320: {
          // На мобильных
          slidesPerView: 3.2,
          spaceBetween: 8,
        },
        // 640: {
        //   // На планшетах
        //   slidesPerView: 2.2,
        //   spaceBetween: 14,
        // },
        // 768: {
        //   // На небольших десктопах
        //   slidesPerView: 2.8,
        //   spaceBetween: 16,
        // },
        // 1024: {
        //   // На десктопах
        //   slidesPerView: 3.5,
        //   spaceBetween: 20,
        // },
        // 1280: {
        //   // На больших экранах
        //   slidesPerView: 4.5,
        //   spaceBetween: 24,
        // },
      },
    });
    return () => {
      if (swiperRef.current) {
        swiperRef.current.destroy();
      }
    };
  }, [swiperRef]);

  return (
    <div className="swiper">
      <div className="swiper-wrapper">
        {Products.map((product) => (
          <div className="swiper-slide rounded-[5px]" key={product.title}>
            <NavLink
              to={product.link}
              className="grid justify-center bg-[var(--bg-carousel-color)] p-2"
            >
              <img
                src={product.img}
                alt={product.title}
                className="h-16 w-16"
              />
            </NavLink>
            <h3 className="[font-family:var(--font-family)] text-xs text-[var(--text-color-title)] text-center mt-1.5">
              {product.title}
            </h3>
          </div>
        ))}
      </div>
      <div className="swiper-pagination"></div>
      <div className="swiper-button-prev"></div>
      <div className="swiper-button-next"></div>
    </div>
  );
}
