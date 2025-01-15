import { Product } from '../types/types';

export async function fetchProducts(): Promise<Product[]> {
  try {
    const res = await fetch('https://fakestoreapi.com/products');
    if (!res.ok) {
      // Check if the response is not successful (status code not in 200–299 range)
      console.error('Error fetching products:', res.statusText);
      return [];
    }
    const products: Product[] = await res.json();
    return products;
  } catch (error) {
    console.error('Error fetching products:', error);
    return []; // Return an empty array in case of error
  }
}

export async function fetchProduct(id: string): Promise<Product> {
  try {
    const res = await fetch('https://fakestoreapi.com/products/' + id);

    // If response is not OK, throw an error with status text
    if (!res.ok) {
      throw new Error(`Error fetching product: ${res.statusText}`);
    }

    // Check if the response is empty (i.e., no content)
    const data = await res.text();
    if (data === '') {
      throw new Error('Received empty response for product ID: ' + id);
    }

    // Parse JSON only if data exists
    const product: Product = JSON.parse(data);

    // Check if the product object is valid
    if (!product || Object.keys(product).length === 0) {
      throw new Error('Product not found or invalid response');
    }

    return product;
  } catch (error) {
    console.error('Error fetching product:', error);
    throw new Error('Product not found'); // Throw a general error if anything fails
  }
}
