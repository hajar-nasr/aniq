export type ProductImage = {
  color: string;
  product_id: string;
  image_url: string;
};

export interface Product {
  product_id: string;
  name: string;
  description: string;
  category: string;
  collection: string;
  created_at: string;
  images?: Record<string, ProductImage[]>;
}
