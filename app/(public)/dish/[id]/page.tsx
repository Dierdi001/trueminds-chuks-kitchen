"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Clock, Hamburger } from "lucide-react";

interface ProteinOption {
  label: string;
  price?: number;
  default?: boolean;
}

interface ExtraOption {
  label: string;
  price?: number;
}

// Ici on simule la récupération du plat, dans la vraie vie tu ferais un fetch ou getStaticProps
const DISH_DETAIL = {
  name: "Jollof Rice with Fried Chicken",
  basePrice: 2800,
  description:
    "Our signature Jollof rice, cooked to perfection with aromatic spices, served with juicy, golden-fried chicken. A classic Nigerian comfort food, rich in flavor and satisfying.",
  imageUrl: "/images/dishes/dish-1.png",
  proteinOptions: [
    { label: "Fried Chicken", default: true },
    { label: "Grilled Fish", price: 500 },
    { label: "Beef", price: 700 },
  ],
  extraOptions: [
    { label: "Fried Plantain", price: 700 },
    { label: "Coleslaw", price: 500 },
    { label: "Extra Pepper Sauce", price: 300 },
  ],
};

export default function DishDetailPage() {
  const [selectedProtein, setSelectedProtein] = useState(
    DISH_DETAIL.proteinOptions.find((p) => p.default)?.label || "",
  );
  const [selectedExtras, setSelectedExtras] = useState<string[]>([]);
  const [specialInstructions, setSpecialInstructions] = useState("");

  const toggleExtra = (label: string) => {
    setSelectedExtras((prev) =>
      prev.includes(label) ? prev.filter((e) => e !== label) : [...prev, label],
    );
  };

  const totalPrice =
    DISH_DETAIL.basePrice +
    (DISH_DETAIL.proteinOptions.find((p) => p.label === selectedProtein)
      ?.price || 0) +
    selectedExtras.reduce((sum, label) => {
      const extra = DISH_DETAIL.extraOptions.find((e) => e.label === label);
      return sum + (extra?.price || 0);
    }, 0);

  return (
    <div className="container mx-auto px-4 py-12 grid md:grid-cols-2 gap-12">
      {/* Image */}
      <div className="relative w-full h-64 md:h-full">
  <Image
    src={DISH_DETAIL.imageUrl}
    alt={DISH_DETAIL.name}
    fill
    className="object-cover rounded-xl shadow-lg"
  />
</div>

      {/* Details */}
      <div>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-bold mb-2"
        >
          {DISH_DETAIL.name}
        </motion.h1>

        <p className="text-orange-500 font-semibold text-2xl mb-4">
          ₦{totalPrice.toLocaleString()}
        </p>

        <p className="text-gray-700 mb-6">{DISH_DETAIL.description}</p>

        {/* Indicators */}
        <div className="flex flex-wrap items-center gap-4 text-gray-500 mb-6">
          <span className="flex items-center gap-1 whitespace-nowrap">
            <Clock className="text-orange-500 h-4 w-4" />
            Mildly spicy
          </span>
          <span className="flex items-center gap-1 whitespace-nowrap">
            <Hamburger className="text-green-500 h-4 w-4" />
            Vegetarian option available
          </span>
          <span className="underline text-blue-500 cursor-pointer whitespace-nowrap">
            View Allergies
          </span>
        </div>

        {/* Protein Options */}
        <div className="mb-6">
          <h2 className="font-semibold mb-2">Choose Your Protein</h2>
          {DISH_DETAIL.proteinOptions.map((protein) => (
            <label
              key={protein.label}
              className="flex items-center justify-between mb-4 cursor-pointer border border-gray-400 p-4 rounded-lg hover:bg-gray-100"
            >
              {/* Left: custom radio + label */}
              <div className="flex items-center gap-4">
                {/* Radio caché */}
                <input
                  type="radio"
                  name="protein"
                  value={protein.label}
                  checked={selectedProtein === protein.label}
                  onChange={() => setSelectedProtein(protein.label)}
                  className="sr-only"
                />
                {/* Cercle custom */}
                <span
                  className={`w-6 h-6 rounded-full border-2 border-orange-500 flex items-center justify-center ${
                    selectedProtein === protein.label
                      ? "bg-orange-500"
                      : "bg-white"
                  }`}
                >
                  {selectedProtein === protein.label && (
                    <span className="w-3 h-3 bg-white rounded-full"></span>
                  )}
                </span>
                <span className="text-lg">{protein.label}</span>
              </div>

              {/* Right: default + price */}
              <div className="text-gray-500 whitespace-nowrap text-lg">
                {protein.default && <span className="mr-2">(Default)</span>}
                {protein.price && <span>+₦{protein.price}</span>}
              </div>
            </label>
          ))}
        </div>

        {/* Extra Options */}
        {/* Extra Options */}
        <div className="mb-6">
          <h2 className="font-semibold mb-2">Extra Sides (Optional)</h2>
          {DISH_DETAIL.extraOptions.map((extra) => (
            <label
              key={extra.label}
              className="flex items-center justify-between mb-4 cursor-pointer border border-gray-400 p-4 rounded-lg hover:bg-gray-100"
            >
              {/* Left: custom checkbox + label */}
              <div className="flex items-center gap-4">
                {/* Checkbox cachée */}
                <input
                  type="checkbox"
                  checked={selectedExtras.includes(extra.label)}
                  onChange={() => toggleExtra(extra.label)}
                  className="sr-only"
                />
                {/* Carré custom */}
                <span
                  className={`w-6 h-6 border-2 border-orange-500 flex items-center justify-center ${
                    selectedExtras.includes(extra.label)
                      ? "bg-orange-500"
                      : "bg-white"
                  }`}
                >
                  {selectedExtras.includes(extra.label) && (
                    <svg
                      className="w-4 h-4 text-white"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={3}
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  )}
                </span>
                <span className="text-lg">{extra.label}</span>
              </div>

              {/* Right: price */}
              <div className="text-gray-500 whitespace-nowrap text-lg">
                {extra.price && <span>+₦{extra.price}</span>}
              </div>
            </label>
          ))}
        </div>

        {/* Special Instructions */}
        <div className="mb-6">
          <h2 className="font-semibold mb-2">Special Instructions</h2>
          <textarea
            className="w-full border border-gray-300 rounded-lg p-2"
            rows={4}
            placeholder="E.g no onion, food is too spicy..."
            value={specialInstructions}
            onChange={(e) => setSpecialInstructions(e.target.value)}
          />
        </div>
      </div>
    </div>
  );
}
