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
  availableColors: string[];
  list_price: number;
  discount: number | null;
  discount_percentage: null;
  sale_price: number;
  sold: number;
  stock: number;
}

export interface ProductDetailsType {
  product_id: string;
  name: string;
  category: string;
  collection: string;
  created_at: string;
  description: string;
  images: ProductImage[];
  availableColors: string[];
  list_price: number;
  discount: number | null;
  discount_percentage: null;
  sale_price: number;
  sold: number;
  stock: number;
  info: {
    title: string;
    description: string[];
    product_id: string;
  }[];
}

export interface CartItem {
  product_id: string;
  name: string;
  color: string;
  image_url: string;
  description: string;
  quantity: number;
  size: "XS" | "S" | "M" | "L" | "XL";
  price: number;
  priceBeforeSale: number;
}

export interface ProductFilters {
  categories: string[];
  colors: string[];
}
