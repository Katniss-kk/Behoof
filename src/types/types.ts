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

export interface IProduct {
  title: string;
  img: string;
  link: string;
}
