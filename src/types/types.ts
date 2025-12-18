import { ReactNode } from "react";

export interface MenuItemProps {
  to: string;
  IconComponent: React.ComponentType<{ fill: string }>;
  title: string;
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

export interface IProduct {
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
    ram: number;
    gbInbuilt: number;
    memoryCard: boolean;
    mAhBattery: number;
    FastCharging: boolean;
    OC: string;
  };
  price: string;
}

export interface ProductsCardCarouselUIProps {
  CarouselProops: ICardCarousel;
  Products: IProduct[];
}

export interface BlockInfoItem {
  number: string;
  text: string;
}

export interface IBlockInfoPage {
  title: string;
  items: BlockInfoItem[];
}

export interface IBannerDownloadApp {
  text: string;
  highlight: string;
  imgAppleImg: string;
  imgGoogleImg: string;
  phoneLogoImg: string;
}

export interface IArticles {
  title: string;
  img: string;
  about: string;
}

export interface ArticlesCardCarouselUIProps {
  CarouselProops: ICardCarousel;
  Articles: IArticles[];
}

export interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
}

export interface CatalogLink {
  title: string;
  link: string;
  svg: boolean;
}

export interface ICatalogButton {
  title: string;
  links: CatalogLink[];
}

export interface CatalogButtonProps {
  onBack?: () => void;
  buttons: ICatalogButton;
  onButtonClick: (category: string) => void;
}
