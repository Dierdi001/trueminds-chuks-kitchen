'use client';

import { useState } from "react";
import { motion } from "framer-motion";
import { DishItem } from "@/app/hooks/usePopularDishes";
import { DishCard } from "./DishCard";

interface MenuSectionProps {
  title: string;
  dishes: DishItem[];
}

export function MenuSection({ title, dishes }: MenuSectionProps) {
  const [showAll, setShowAll] = useState(false);

  // Limite à 3 items si showAll est false
  const displayedDishes = showAll ? dishes : dishes.slice(0, 3);

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-left mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-[#1F2937]">
            {title}
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-28 gap-y-8">
          {displayedDishes.map((dish, index) => (
            <DishCard key={dish.id} dish={dish} index={index} />
          ))}
        </div>

        {/* Bouton "View All" visible seulement si il y a plus de 3 plats et qu’on n’affiche pas tout */}
        {!showAll && dishes.length > 3 && (
          <div className="mt-8 text-center">
            <button
              onClick={() => setShowAll(true)}
              className="text-blue-600 font-semibold hover:underline"
            >
              View All
            </button>
          </div>
        )}
      </div>
    </section>
  );
}