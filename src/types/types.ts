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
  id: number;
  type: string;
  title: string;
  brand: string;
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

export interface IUser {
  image?: string | null;
  name?: string | null;
  surname?: string | null;
  email?: string;
  city?: string | null;
  password?: string;
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

export interface IFilters {
  totalBrands: string[];
  minPrice: number;
  maxPrice: number;
  activeBrand: string | null;
  setActiveBrand: (brand: string | null) => void;
}

export interface IFiltersUI {
  totalBrands: string[];
  minPrice: number;
  maxPrice: number;
  activeBrand: string | null;
  setActiveBrand: (brand: string | null) => void;
}

export interface PriceRangeInputProps {
  minPrice: number;
  maxPrice: number;
}

export interface PriceRangeUIProps {
  priceText: [number, number];
  setPriceText: React.Dispatch<React.SetStateAction<[number, number]>>;
  handleTextInputChange: () => void;
  minPrice: number;
  maxPrice: number;
  range: [number, number];
  handleSliderChange: (value: number | number[]) => void;
}

export interface IButtonFilterBrand {
  totalBrands: string[];
  activeBrand: string | null;
  setActiveBrand: (brand: string | null) => void;
}

export interface IButtonRegister {
  name: string,
  surName: string,
  city: string,
  email: string,
  pass: string,
  repeatPass: string
}