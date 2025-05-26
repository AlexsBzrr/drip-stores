import {
  IOrders,
  IProductDetails,
} from "../interfaces/productsDetails.interface";

import tenis from "../assets/images/newtenis6.png";
import tenis2 from "../assets/images/tenis2.svg";
import tenis3 from "../assets/images/newtenis.png";
import tenis4 from "../assets/images/newtenis5.png";
import tenis5 from "../assets/images/newtenis3.png";
import tenis6 from "../assets/images/newtenis4.png";
import tenis7 from "../assets/images/newtenis2.png";
import tenis8 from "../assets/images/tenis8.svg";
import tenis9 from "../assets/images/newtenis6.png";
import tenis10 from "../assets/images/tenis2.svg";
import tenis11 from "../assets/images/newtenis.png";
import tenis12 from "../assets/images/newtenis5.png";
import tenis13 from "../assets/images/newtenis3.png";
import tenis14 from "../assets/images/newtenis4.png";
import tenis15 from "../assets/images/newtenis2.png";

export const collections: IProductDetails[] = [
  {
    id: 1,
    discount: "25% OFF",
    image: tenis,
    description: "Tênis Air Nike",
    currentPrice: 139,
    previousPrice: 199,
    title: "Tênis",
  },
  {
    id: 2,
    discount: "30% OFF",
    image: tenis2,
    description: "Tênis Nike Revolution 6",
    currentPrice: 159,
    previousPrice: 229,
    title: "Tênis",
  },
  {
    id: 3,
    discount: "",
    image: tenis3,
    description: "Tênis Nike Gel Excite 9",
    currentPrice: 189,
    previousPrice: 269,
    title: "Tênis",
  },
  {
    id: 4,
    discount: "35% OFF",
    image: tenis4,
    description: "Tênis Nike Runner",
    currentPrice: 149.5,
    previousPrice: 214.3,
    title: "Tênis",
  },
  {
    id: 5,
    discount: "",
    image: tenis5,
    description: "Tênis Nike Racer Movel",
    currentPrice: 179,
    previousPrice: 259,
    title: "Tênis",
  },
  {
    id: 6,
    discount: "33% OFF",
    image: tenis6,
    description: "Tênis Nike Dynasty",
    currentPrice: 169,
    previousPrice: 239.9,
    title: "Tênis",
  },
  {
    id: 7,
    discount: "30% OFF",
    image: tenis7,
    description: "Tênis Nike Flexagon",
    currentPrice: 134.75,
    previousPrice: 192.5,
    title: "Tênis",
  },
  {
    id: 8,
    discount: "20% OFF",
    image: tenis8,
    description: "Tênis Nike Jordan",
    currentPrice: 209.9,
    previousPrice: 259.9,
    title: "Tênis",
  },
  {
    id: 9,
    discount: "25% OFF",
    image: tenis9,
    description: "Tênis Nike Air Force",
    currentPrice: 139,
    previousPrice: 199,
    title: "Tênis",
  },
  {
    id: 10,
    discount: "30% OFF",
    image: tenis10,
    description: "Tênis Nike Revolution 6",
    currentPrice: 159,
    previousPrice: 229,
    title: "Tênis",
  },
  {
    id: 11,
    discount: "",
    image: tenis11,
    description: "Tênis Nike Gel Excite 9",
    currentPrice: 189,
    previousPrice: 269,
    title: "Tênis",
  },
  {
    id: 12,
    discount: "35% OFF",
    image: tenis12,
    description: "Tênis Nike Runner",
    currentPrice: 149.5,
    previousPrice: 214.3,
    title: "Tênis",
  },
  {
    id: 13,
    discount: "",
    image: tenis13,
    description: "Tênis Nike Racer Movel",
    currentPrice: 179.99,
    previousPrice: 259.99,
    title: "Tênis",
  },
  {
    id: 14,
    discount: "33% OFF",
    image: tenis14,
    description: "Tênis Nike Dynasty",
    currentPrice: 169,
    previousPrice: 239.9,
    title: "Tênis",
  },
  {
    id: 15,
    discount: "30% OFF",
    image: tenis15,
    description: "Tênis Nike Flexagon",
    currentPrice: 134.75,
    previousPrice: 192.5,
    title: "Tênis",
  },
];

export const orders: IOrders[] = [
  {
    id: "2234981932",
    product: "Tênis Nike Revolution 6 Next Nature Masculino",
    status: "Produto em trânsito",
    image: tenis,
  },
  {
    id: "4495810492",
    product: "Tênis Nike Revolution 6 Next Nature Masculino",
    status: "Finalizado",
    image: tenis2,
  },
  {
    id: "4495810492",
    product: "Tênis Nike Revolution 6 Next Nature Masculino",
    status: "Cancelado",
    image: tenis3,
  },
  {
    id: "4495810492",
    product: "Tênis Nike Revolution 6 Next Nature Masculino",
    status: "Finalizado",
    image: tenis4,
  },
  {
    id: "4495810492",
    product: "Tênis Nike Revolution 6 Next Nature Masculino",
    status: "Finalizado",
    image: tenis5,
  },
  {
    id: "4495810492",
    product: "Tênis Nike Revolution 6 Next Nature Masculino",
    status: "Finalizado",
    image: tenis6,
  },
];
