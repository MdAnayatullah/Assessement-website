import { loadStripe } from '@stripe/stripe-js';
import { payment } from './api';

const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_PUBLISHABLE_KEY);

export const initiateCheckout = async (items: any[]) => {
  try {
    const { data } = await payment.createCheckoutSession(items);
    const stripe = await stripePromise;
    
    if (!stripe) {
      throw new Error('Stripe failed to load');
    }

    const result = await stripe.redirectToCheckout({
      sessionId: data.sessionId,
    });

    if (result.error) {
      throw new Error(result.error.message);
    }
  } catch (error) {
    console.error('Error in checkout:', error);
    throw error;
  }
};