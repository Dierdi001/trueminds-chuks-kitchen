'use client'

import { useState } from 'react'
import Image from 'next/image'
import { Plus, Minus, X } from 'lucide-react'

interface CartItem {
  id: string
  name: string
  description: string
  price: number
  quantity: number
  imageUrl: string
}

const MOCK_CART: CartItem[] = [
  {
    id: '1',
    name: 'Jollof Rice & Fried Chicken',
    description: 'With plantain, extra pepper sauce',
    price: 3200,
    quantity: 1,
    imageUrl: '/images/dishes/dish-1.png',
  },
  {
    id: '2',
    name: 'Jollof Rice & Fried Chicken',
    description: 'With plantain, extra pepper sauce',
    price: 3200,
    quantity: 1,
    imageUrl: '/images/dishes/dish-2.png',
  },
  {
    id: '3',
    name: 'Jollof Rice & Fried Chicken',
    description: 'With plantain, extra pepper sauce',
    price: 3200,
    quantity: 1,
    imageUrl: '/images/dishes/dish-3.png',
  },
]

export default function OrdersPage() {
  const [cartItems, setCartItems] = useState(MOCK_CART)

  const increment = (id: string) => {
    setCartItems((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item,
      ),
    )
  }

  const decrement = (id: string) => {
    setCartItems((prev) =>
      prev.map((item) =>
        item.id === id && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item,
      ),
    )
  }

  const removeItem = (id: string) => {
    setCartItems((prev) => prev.filter((item) => item.id !== id))
  }

  const totalPrice = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0,
  )

  return (
    <div className="container mx-auto px-4 py-12 bg-white">
      <h1 className="text-3xl md:text-4xl font-bold mb-8">Your Cart</h1>

      <div className="bg-white border border-gray-200 rounded-lg shadow-sm divide-y divide-gray-200">
        {cartItems.map((item) => (
          <div
            key={item.id}
            className="p-4"
          >
            {/* Mobile layout (default) */}
            <div className="flex gap-4 md:hidden">
              {/* Image à gauche */}
              <div className="w-20 h-20 relative flex-shrink-0">
                <Image
                  src={item.imageUrl}
                  alt={item.name}
                  fill
                  className="object-cover rounded-lg"
                />
              </div>

              {/* Contenu droit */}
              <div className="flex-1 space-y-2">
                {/* Nom */}
                <h2 className="font-semibold text-base">
                  {item.name}
                </h2>

                {/* Description */}
                <p className="text-gray-500 text-sm">
                  {item.description}
                </p>

                {/* Sélecteur de nombre */}
                <div className="flex items-center gap-2 justify-between">
                  <button
                    onClick={() => decrement(item.id)}
                    className="p-1.5 border border-gray-300 rounded bg-gray-300 transition-colors"
                  >
                    <Minus size={16} />
                  </button>
                  <span className="w-8 text-center font-medium">
                    {item.quantity}
                  </span>
                  <button
                    onClick={() => increment(item.id)}
                    className="p-1.5 border border-gray-300 rounded bg-gray-300 transition-colors"
                  >
                    <Plus size={16} />
                  </button>
                </div>

                {/* Prix et croix sur la même ligne */}
                <div className="flex items-center justify-between">
                  <div className="text-orange-500 font-semibold">
                    ₦{(item.price * item.quantity).toLocaleString()}
                  </div>
                  <button
                    onClick={() => removeItem(item.id)}
                    className="text-white bg-black transition-colors px-1"
                  >
                    <X size={16} />
                  </button>
                </div>
              </div>
            </div>

            {/* Desktop layout (md and above) */}
            <div className="hidden md:flex items-center gap-6">
              {/* Image */}
              <div className="w-24 h-24 relative flex-shrink-0">
                <Image
                  src={item.imageUrl}
                  alt={item.name}
                  fill
                  className="object-cover rounded-lg"
                />
              </div>

              {/* Nom + Description */}
              <div className="flex-1 min-w-0">
                <h2 className="font-semibold text-lg truncate">{item.name}</h2>
                <p className="text-gray-500 text-sm truncate">{item.description}</p>
              </div>

              {/* Sélecteur */}
              <div className="flex items-center gap-2">
                <button
                  onClick={() => decrement(item.id)}
                  className="p-1.5 border border-gray-300 rounded bg-gray-300 transition-colors"
                >
                  <Minus size={16} />
                </button>
                <span className="w-8 text-center font-medium">{item.quantity}</span>
                <button
                  onClick={() => increment(item.id)}
                  className="p-1.5 border border-gray-300 rounded bg-gray-300 transition-colors"
                >
                  <Plus size={16} />
                </button>
              </div>

              {/* Prix */}
              <div className="text-orange-500 font-semibold w-24 text-right">
                ₦{(item.price * item.quantity).toLocaleString()}
              </div>

              {/* Croix */}
              <button
                onClick={() => removeItem(item.id)}
                className="text-white bg-[#FF7A18] transition-colors px-1"
              >
                <X size={16} />
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Add more items */}
      <div className="mt-4">
        <a href="/" className="text-[#1E88E5] hover:text-[#FF7A18] transition-colors text-sm font-medium">
          + Add more items from Chuks Kitchen
        </a>
      </div>
    </div>
  )
}