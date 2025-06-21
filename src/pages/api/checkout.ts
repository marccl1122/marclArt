import { NextApiRequest, NextApiResponse } from 'next'
import Stripe from 'stripe'

// Initialize Stripe with the latest API version
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: '2025-05-28.basil', // Updated to the latest stable version
  typescript: true
})

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST')
    return res.status(405).json({ 
      error: { message: 'Method not allowed' } 
    })
  }

  try {
    const { items } = req.body

    // Validate items
    if (!items || !Array.isArray(items)) {
      return res.status(400).json({
        error: { message: 'Invalid items array' }
      })
    }

    const lineItems = items.map((item) => ({
      price_data: {
        currency: 'usd',
        product_data: {
          name: item.name,
          images: [item.image],
        },
        unit_amount: Math.round(item.price * 100),
      },
      quantity: item.quantity,
    }))

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      line_items: lineItems,
      mode: 'payment',
      success_url: `${req.headers.origin}/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${req.headers.origin}/canceled`,
      shipping_address_collection: {
        allowed_countries: ['US', 'CA', 'GB', 'AU', 'FR', 'DE']
      },
      shipping_options: [
        {
          shipping_rate_data: {
            type: 'fixed_amount',
            fixed_amount: {
              amount: 0,
              currency: 'usd',
            },
            display_name: 'Free shipping',
            delivery_estimate: {
              minimum: {
                unit: 'business_day',
                value: 5,
              },
              maximum: {
                unit: 'business_day',
                value: 7,
              },
            },
          },
        },
      ],
    })

    return res.status(200).json({ id: session.id })
  } catch (err: any) {
    console.error('Checkout error:', err)
    return res.status(500).json({ 
      error: { 
        message: err.message || 'Internal server error' 
      } 
    })
  }
}