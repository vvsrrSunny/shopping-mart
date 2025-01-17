import { Product } from '@/types/types';
import ProductsLayout from './ProductsLayout';
import ProductCard from './ProductCard';

interface ProductsProps {
  products: Product[];
}

export default function Products({ products }: ProductsProps) {
  return (
    <ProductsLayout>
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </ProductsLayout>
  );
}
