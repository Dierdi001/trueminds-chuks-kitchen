"use client";

import { useState } from "react";
import { usePopularDishes } from "@/app/hooks/usePopularDishes";
import { useJollofRiceEntrees } from "@/app/hooks/useJollofRice";
import { useSwallowAndSoups } from "@/app/hooks/useSwallowAndSoups";
import { MenuSection } from "@/app/components/cards/menu/MenuSection";
import Image from "next/image";
import { motion } from "framer-motion";

type Category = "all" | "popular" | "jollof" | "swallow";

const CATEGORY_LABELS: Record<Category, string> = {
  all: "All",
  popular: "Popular",
  jollof: "Jollof Rice & Entrees",
  swallow: "Swallow & Soups",
};

export default function ExplorePage() {
  const [selectedCategory, setSelectedCategory] = useState<Category>("all");

  const popularDishes = usePopularDishes();
  const jollofDishes = useJollofRiceEntrees();
  const swallowDishes = useSwallowAndSoups();

  return (
    <div className="flex min-h-screen flex-col bg-white">
      {/* Hero */}
      <section className="relative h-[600px] md:h-[700px] lg:h-[800px] w-full overflow-visible">
        <div className="absolute inset-0">
          <Image
            src="/images/home-hero.png"
            alt="Nigerian cuisine background"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/50" />
        </div>
        <div className="relative h-full container mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-start justify-center text-left text-white">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-[48px] font-bold mb-4 max-w-4xl"
          >
            Chuks Kitchen
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-[32px] mb-8 text-gray-200 max-w-3xl"
          >
            Chuks Kitchen Nigerian Home Cooking 4.8 (1.2k)
          </motion.p>
        </div>
      </section>

      {/* Category Filter */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <label className="block text-gray-700 font-medium mb-2">
          Filter by Category
        </label>
        <select
          className="w-full md:w-64 border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-orange-500"
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value as Category)}
        >
          {Object.entries(CATEGORY_LABELS).map(([key, label]) => (
            <option key={key} value={key}>
              {label}
            </option>
          ))}
        </select>
      </div>

      {/* Menu Sections */}
      {selectedCategory === "all" ? (
        <>
          <MenuSection title={CATEGORY_LABELS.popular} dishes={popularDishes} />
          <MenuSection title={CATEGORY_LABELS.jollof} dishes={jollofDishes} />
          <MenuSection title={CATEGORY_LABELS.swallow} dishes={swallowDishes} />
        </>
      ) : selectedCategory === "popular" ? (
        <MenuSection title={CATEGORY_LABELS.popular} dishes={popularDishes} />
      ) : selectedCategory === "jollof" ? (
        <MenuSection title={CATEGORY_LABELS.jollof} dishes={jollofDishes} />
      ) : selectedCategory === "swallow" ? (
        <MenuSection title={CATEGORY_LABELS.swallow} dishes={swallowDishes} />
      ) : null}
    </div>
  );
}
