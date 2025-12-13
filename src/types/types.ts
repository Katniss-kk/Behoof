import { ReactNode } from "react";

export interface MenuItemProps {
  to: string;
  IconComponent: React.ComponentType<{ fill: string }>;
}

export interface IBanners {
  owner: string;
  title: string;
  linkTitle: string;
  link: string;
}

export interface ICategory {
  title: string;
  img: string;
  link: string;
}

export interface ICardCarousel {
  children: ReactNode;
  slidesPerGroup?: number;
  slidesPerView?: number;
  spaceBetween?: number;
  breakpoints?: {
    [width: number]: {
      slidesPerView?: number | "auto";
      spaceBetween?: number;
      slidesPerGroup?: number;
      centeredSlides?: boolean;
    };
  };
}

export interface CategoryCarouselUIProps {
  CarouselProops: ICardCarousel;
  Products: ICategory[];
}

export interface IProductsCardCarousel {
  type: string;
  title: string;
  img: string;
  characteristics: {
    design: number;
    battery: number;
    display: number;
    camera: number;
    answer: number;
    portability: number;
  };
}

export interface ProductsCardCarouselUIProps {
  CarouselProops: ICardCarousel;
  Products: IProductsCardCarousel[];
}
