import { ICategory } from "@/types/types";

import phoneImg from "@/assets/phone.png";
import notebookImg from "@/assets/notebook.png";
import laptopImg from "@/assets/laptop.png";

const CategoryInfo: ICategory[] = [
  {
    title: "Смартфоны",
    img: phoneImg,
    link: "/",
  },
  {
    title: "Ноутбуки",
    img: notebookImg,
    link: "/",
  },
  {
    title: "Планшеты",
    img: laptopImg,
    link: "/",
  },
  {
    title: "Наушники",
    img: notebookImg,
    link: "/",
  },
  {
    title: "Умные часы",
    img: laptopImg,
    link: "/",
  },
  {
    title: "Игровые приставки",
    img: phoneImg,
    link: "/",
  },
];

export default CategoryInfo;
