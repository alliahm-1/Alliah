export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  category: string;
  concern: string[];
  ingredient: string[];
  isBestseller?: boolean;
  isNew?: boolean;
  volume: string;
}

export type ProductType = 'Serums' | 'Cleansers' | 'Moisturizers' | 'Toning Solutions';
