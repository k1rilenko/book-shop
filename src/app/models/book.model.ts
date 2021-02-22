export interface IBookModel {
  id: number;
  name: string;
  description: string;
  category: Category;
  price: number;
  createDate: number;
  isAvailable: boolean;
  count?: number;
  countInCart?: number;
}

export enum Category {
  Classics = 'Classics',
  Fantasy = 'Fantasy',
  Horror = 'Horror',
  Fiction = 'Literary Fiction',
}
