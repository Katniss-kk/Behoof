import { ICatalogButton } from "@/types/types";

const CatalogButtonsInfo: ICatalogButton = {
  title: "Каталог товаров",
  links: [
    {
      title: "Смартфоны",
      svg: true,
      link: "smartphones",
    },
    {
      title: "Ноутбуки",
      svg: true,
      link: "notebooks",
    },
    {
      title: "Планшеты",
      svg: true,
      link: "tablets",
    },
    {
      title: "Умные часы",
      svg: false,
      link: "clocks",
    },
    {
      title: "Игровые приставки",
      svg: false,
      link: "gameconsoles",
    },
    {
      title: "Наушники",
      svg: false,
      link: "headphones",
    },
    {
      title: "Портативные колонки",
      svg: false,
      link: "speakers",
    },
    {
      title: "Мониторы",
      svg: false,
      link: "monitors",
    },
    {
      title: "Принтеры и сканеры",
      svg: false,
      link: "printers",
    },
    {
      title: "Планшеты и электронные книги",
      svg: false,
      link: "e-books",
    },
    {
      title: "Корпусы и блоки питания",
      svg: false,
      link: "corps",
    },
    {
      title: "Аксессуары",
      svg: false,
      link: "accessories",
    },
  ],
};

export default CatalogButtonsInfo;
