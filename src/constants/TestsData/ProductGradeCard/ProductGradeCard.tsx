import phoneImg from "@/assets/phone.png";
// import notebookImg from "@/assets/notebook.png";
import laptopImg from "@/assets/laptop.png";
import { IProductsCardCarousel } from "@/types/types";

const ProductGradeCard: IProductsCardCarousel[] = [
  {
    type: "Телефон",
    title: "Apple iPhone 13 Pro Max 256 ГБ серый",
    img: phoneImg,
    characteristics: {
      design: 4,
      battery: 2,
      display: 4,
      camera: 5,
      answer: 5,
      portability: 4,
    },
  },
  {
    type: "Телефон",
    title: "Apple iPhone 15 Pro Max 126 ГБ черный",
    img: phoneImg,
    characteristics: {
      design: 3,
      battery: 1,
      display: 5,
      camera: 4,
      answer: 2,
      portability: 3,
    },
  },
  {
    type: "Телефон",
    title: "Apple iPhone 10 Pro Max 256 ГБ белый",
    img: phoneImg,
    characteristics: {
      design: 1,
      battery: 2,
      display: 3,
      camera: 1,
      answer: 2,
      portability: 3,
    },
  },
  {
    type: "Планшет",
    title: "IPad",
    img: laptopImg,
    characteristics: {
      design: 1,
      battery: 2,
      display: 2,
      camera: 5,
      answer: 5,
      portability: 3,
    },
  },
];

export default ProductGradeCard;
