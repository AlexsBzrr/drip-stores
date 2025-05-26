export interface IProductDetails {
  id: number;
  discount: string;
  image: string;
  description: string;
  currentPrice: number;
  previousPrice: number;
  title: string;
}

export interface IOrders {
  id: string;
  product: string;
  status: string;
  image: string;
}
