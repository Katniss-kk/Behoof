import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { ReactNode, forwardRef } from "react";

interface CardCarouselUIProps {
  children: ReactNode;
}

const CardCarouselUI = forwardRef<HTMLDivElement, CardCarouselUIProps>(
  ({ children }, ref) => {
    return (
      <div className="swiper" ref={ref}>
        <div className="swiper-wrapper">{children}</div>
        <div className="swiper-pagination"></div>
        <div className="swiper-button-prev"></div>
        <div className="swiper-button-next"></div>
      </div>
    );
  }
);

CardCarouselUI.displayName = "CardCarouselUI";

export default CardCarouselUI;