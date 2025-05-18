import { IProductDetails } from "../interfaces/productsDetails.interface";

const tenis = "/images/newtenis6.png";
const tenis2 = "/images/tenis2.svg";
const tenis3 = "/images/newtenis.png";
const tenis4 = "/images/newtenis5.png";
const tenis5 = "/images/newtenis3.png";
const tenis6 = "/images/newtenis4.png";
const tenis7 = "/images/newtenis2.png";
const tenis8 = "/images/tenis8.svg";

export const collections: IProductDetails[] = [
  {
    id: 1,
    discount: "25% OFF",
    image: tenis,
    description: "Tênis Air Nike",
    currentPrice: "R$ 139,90",
    previousPrice: "R$ 199,90",
    title: "Tênis",
  },
  {
    id: 2,
    discount: "30% OFF",
    image: tenis2,
    description: "Tênis Nike Revolution 6",
    currentPrice: "R$ 159,90",
    previousPrice: "R$ 229,90",
    title: "Tênis",
  },
  {
    id: 3,
    discount: "",
    image: tenis3,
    description: "Tênis Nike Gel Excite 9",
    currentPrice: "R$ 189,00",
    previousPrice: "R$ 269,00",
    title: "Tênis",
  },
  {
    id: 4,
    discount: "35% OFF",
    image: tenis4,
    description: "Tênis Nike Runner",
    currentPrice: "R$ 149,50",
    previousPrice: "R$ 214,30",
    title: "Tênis",
  },
  {
    id: 5,
    discount: "",
    image: tenis5,
    description: "Tênis Nike Racer Movel",
    currentPrice: "R$ 179,99",
    previousPrice: "R$ 259,99",
    title: "Tênis",
  },
  {
    id: 6,
    discount: "33% OFF",
    image: tenis6,
    description: "Tênis Nike Dynasty",
    currentPrice: "R$ 169,90",
    previousPrice: "R$ 239,90",
    title: "Tênis",
  },
  {
    id: 7,
    discount: "30% OFF",
    image: tenis7,
    description: "Tênis Nike Flexagon",
    currentPrice: "R$ 134,75",
    previousPrice: "R$ 192,50",
    title: "Tênis",
  },
  {
    id: 8,
    discount: "20% OFF",
    image: tenis8,
    description: "Tênis Nike Jordan",
    currentPrice: "R$ 209,90",
    previousPrice: "R$ 299,90",
    title: "Tênis",
  },
];
