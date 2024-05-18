import ImageModel from './image.model';

export default class ProductModel {
  id: number;
  
  name: string;

  description: string;

  price: number;

  details: string;

  images: ImageModel[];
}
