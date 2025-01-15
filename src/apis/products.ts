import { Product } from '../types/types';

export async function fetchProducts(): Promise<Product[]> {
  try {
    const res = await fetch('https://fakestoreapi.com/products');
    return await res.json();
  } catch (error) {
    console.error('Error fetching products:', error);
    return [];
  }
}

export async function fetchProduct(id: string): Promise<Product> {
  try {
    const res = await fetch('https://fakestoreapi.com/products/' + id);
    
    return await res.json();
  } catch (error) {
    // console.error('Error fetching products:', error);
    return {} as Product;
  }
}
