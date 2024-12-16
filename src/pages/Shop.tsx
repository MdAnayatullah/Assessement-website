import React from 'react';
import { ProductCard } from '../components/shop/ProductCard';
import { Cart } from '../components/shop/Cart';
import { Product } from '../types/product';

const products: Product[] = [
  {
    id: '1',
    name: 'Premium Web Development Course',
    description: 'Comprehensive course covering modern web development techniques',
    price: 199.99,
    image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-1.2.1&auto=format&fit=crop&w=1352&q=80',
  },
  {
    id: '2',
    name: 'Advanced React Workshop',
    description: 'Master React with hands-on projects and expert guidance',
    price: 149.99,
    image: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
  },
  {
    id: '3',
    name: 'UI/UX Design Bundle',
    description: 'Learn to create beautiful and functional user interfaces',
    price: 89.99,
    image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
  },
];

export function Shop() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-3xl font-bold text-gray-900 mb-8">Our Courses</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
      <div className="mt-12">
        <Cart />
      </div>
    </div>
  );
}