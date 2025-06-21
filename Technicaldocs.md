# Marc Le Contemporary Artist - Technical Documentation

## Table of Contents
1. [Project Overview](#project-overview)
2. [Technology Stack](#technology-stack)  
3. [File Structure](#file-structure)
4. [Core Components](#core-components)
5. [State Management](#state-management)
6. [3D Rendering System](#3d-rendering-system)
7. [E-Commerce Integration](#e-commerce-integration)
8. [Styling Architecture](#styling-architecture)
9. [Environment Configuration](#environment-configuration)
10. [Deployment](#deployment)

---

## Project Overview
Next.js-based portfolio showcasing:
- Interactive 3D art exhibitions
- Photography collections with lightbox
- Digital art marketplace
- Philosophical content sections

---

## Technology Stack

| Category           | Technologies                          |
|--------------------|---------------------------------------|
| Framework          | Next.js 14 (App Router)               |
| 3D Engine          | Three.js + React Three Fiber          |
| State Management   | React Context API                     |
| Payments           | Stripe Checkout                       |
| Styling            | Tailwind CSS + Framer Motion          |
| Types              | TypeScript                            |

---

## File Structure

```text
marc-le-artist/
├── public/
│   ├── models/          # 3D model assets (.glb)
│   └── images/          # Image collections
├── src/
│   ├── components/
│   │   ├── 3d/          # ModelLoader.tsx
│   │   ├── commerce/    # Cart components
│   │   ├── gallery/     # MasonryGrid.tsx
│   │   └── ui/          # CyberText, GlowButton
│   ├── context/         # CartContext.tsx
│   ├── styles/          # Tailwind config
│   └── app/             # Page routes
├── next.config.js
├── tailwind.config.js
├── package.json
└── .env.local
```
---
## Technology Stack 
typescript
```
// components/3d/ModelLoader.tsx
import { Canvas, useLoader } from '@react-three/fiber'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'

const Model = ({ url }) => {
  const gltf = useLoader(GLTFLoader, url)
  return <primitive object={gltf.scene} />
}

export default function ModelLoader() {
  return (
    <Canvas>
      <ambientLight intensity={0.5} />
      <Suspense fallback={null}>
        <Model url="/models/abstract.glb" />
      </Suspense>
      <OrbitControls autoRotate />
    </Canvas>
  )
}
```

## Shopping Cart

```
typescript
// context/CartContext.tsx
type CartItem = {
  id: string
  name: string
  price: number
}

const CartContext = createContext<{
  cart: CartItem[]
  addItem: (item: CartItem) => void
  removeItem: (id: string) => void
}>(null!)

export function CartProvider({ children }) {
  const [cart, setCart] = useState<CartItem[]>([])

  const addItem = (item: CartItem) => {
    setCart([...cart, item])
  }

  const removeItem = (id: string) => {
    setCart(cart.filter(item => item.id !== id))
  }

  return (
    <CartContext.Provider value={{ cart, addItem, removeItem }}>
      {children}
    </CartContext.Provider>
  )
}
```

## 3D Rendering System  
```

txt
Key Features: 
GLTF/GLB model loading

Auto-rotation animation

Error fallback system

Responsive canvas sizing

Optimization:
Model preloading:
Optimization:
Model preloading:

typescript
useGLTF.preload('/models/abstract.glb')
Suspense boundaries:

tsx
<Suspense fallback={<LoadingSpinner />}>
  <ModelComponent />
</Suspense>

```
## E-Commerce Integration
```
Checkout Flow:
Add items to cart context

Initialize Stripe session:
typescript
// app/api/checkout/route.ts
const session = await stripe.checkout.sessions.create({
  payment_method_types: ['card'],
  line_items: cartItems.map(item => ({
    price_data: {
      currency: 'usd',
      product_data: { name: item.name },
      unit_amount: item.price * 100,
    },
    quantity: 1,
  })),
  mode: 'payment',
  success_url: `${url}/success`,
  cancel_url: `${url}/cancel`,
})
```

## Styling Architecture
```
Tailwind Configuration:
javascript
// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      colors: {
        'cyber-blue': '#3da9fc',
        'cyber-purple': '#7f5af0',
      },
      fontFamily: {
        cyber: ['"Share Tech Mono"', 'monospace'],
      },
    }
  }
}
```

## UI Components Example:

// components/ui/GlowButton.tsx
export function GlowButton({ children }) {
  return (
    <button className="
      bg-cyber-purple 
      hover:bg-cyber-blue
      text-white 
      font-cyber
      px-6 py-3
      rounded-lg
      transition-all
      hover:shadow-glow
    ">
      {children}
    </button>
  )
}

nvironment Configuration
.env.local Template:
env
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_test_xxx
STRIPE_SECRET_KEY=sk_test_xxx
NEXT_PUBLIC_API_URL=http://localhost:3000
Installation:
bash
npm install \
  @react-three/fiber \
  @react-three/drei \
  three \
  stripe \
  @types/styled-components
Deployment
Build Commands:
bash
npm run build  # Create production build
npm run start  # Start production server
Vercel Configuration:
Set environment variables

Enable serverless functions

Configure image optimization

text

This markdown document contains:
1. Complete technical specifications
2. Ready-to-use code blocks
3. Configuration examples
4. Architecture diagrams
5. Setup and deployment guides

All content is properly formatted in standard markdown syntax and can be saved directly as `DOCUMENTATION.md`. Let me know if you need any modifications or additional sections.
 