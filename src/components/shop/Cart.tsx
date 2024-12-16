import React from 'react';
import { useCart } from '../../context/CartContext';
import { CartItem } from './CartItem';
import { initiateCheckout } from '../../utils/stripe';
import { CreditCard } from 'lucide-react';

export function Cart() {
  const { items, total } = useCart();

  const handleCheckout = async () => {
    try {
      await initiateCheckout(items);
    } catch (error) {
      console.error('Checkout failed:', error);
    }
  };

  if (items.length === 0) {
    return (
      <div className="text-center py-8">
        <p className="text-gray-500">Your cart is empty</p>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h2 className="text-2xl font-bold mb-6">Shopping Cart</h2>
      <div className="space-y-4">
        {items.map((item) => (
          <CartItem key={item.id} item={item} />
        ))}
      </div>
      <div className="mt-6 border-t pt-4">
        <div className="flex justify-between text-lg font-bold">
          <span>Total:</span>
          <span>${total.toFixed(2)}</span>
        </div>
        <button
          onClick={handleCheckout}
          className="mt-4 w-full flex items-center justify-center gap-2 py-3 px-4 bg-indigo-600 text-white rounded-md hover:bg-indigo-700"
        >
          <CreditCard className="w-5 h-5" />
          Proceed to Checkout
        </button>
      </div>
    </div>
  );
}