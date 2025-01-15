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
    // Check if the response status is OK (status code 200-299)
    if (!res.ok) {
      throw new Error(`Failed to fetch product. Status: ${res.status}`);
    }
    const data = await res.json();
    console.log('Product:', data);
    return data;
  } catch (error) {
    // console.error('Error fetching products:', error);
    return {} as Product;
  }
}
