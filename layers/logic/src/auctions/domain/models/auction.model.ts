import ProductModel from "./product.model";

export default class AuctionModel {
  id: number;
  
  startDate: string;

  endDate: string;

  timer: number;

  state: string;

  productId: number;

  ownerId: number;

  product: ProductModel;
}
