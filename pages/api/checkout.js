// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { getCookie } from 'cookies-next';
import Stripe from 'stripe';
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);
export default async function handler(req, res) {
  const cartItems = JSON.parse(getCookie('Cart', { req, res }));
  const session = await stripe.checkout.sessions.create({
    line_items: cartItems.map((item) => ({
      quantity: item.quantity,
      price_data: {
        currency: 'eur',
        unit_amount: item.price * 100,
        product_data: {
          name: item.title,
          images: item.images,
        },
      },
    })),
    mode: 'payment',
    success_url: 'http://localhost:3000/Success',
    cancel_url: 'http://localhost:3000/',
  });
  res.redirect(303, session.url);
}
