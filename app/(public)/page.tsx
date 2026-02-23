"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { usePopularCategories } from "../hooks/usePopularCategories";
import CategoryCard from "../components/cards/CategoryCard";
import { useChefSpecials } from "../hooks/useChefSpecials";
import ChefSpecialCard from "../components/cards/chefSpecialCard";

export default function Home() {
  const popularCategories = usePopularCategories();
  const chefSpecials = useChefSpecials();

  return (
    <div className="flex min-h-screen flex-col bg-zinc-50 font-sans bg-white">
      <section className="relative h-[600px] md:h-[700px] lg:h-[800px] w-full overflow-visible">
        <div className="absolute inset-0">
          <Image
            src="/images/home-hero.png"
            alt="Nigerian cuisine background"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/50" />{" "}
        </div>

        <div className="relative h-full container mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-start justify-center text-left text-white">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-[48px] font-bold mb-4 max-w-4xl"
          >
            The Heart of Nigerian Home Cooking
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-[32px] mb-8 text-gray-200 max-w-3xl"
          >
            Handcrafted with passion, delivered with care.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="space-y-4"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-[#FF7A18] text-white px-8 py-3 rounded-[10px] text-lg font-semibold hover:bg-amber-700 transition-colors"
            >
              Discover what's new
            </motion.button>
          </motion.div>
        </div>

        <div className="absolute left-1/2 bottom-0 z-50 w-full max-w-3xl -translate-x-1/2 translate-y-1/2 px-4">
          <div
            className="
    flex items-center gap-4
    bg-white
    rounded-xl
    shadow-xl
    px-6 py-4
  "
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-gray-400"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 21l-4.35-4.35M10.5 18a7.5 7.5 0 100-15 7.5 7.5 0 000 15z"
              />
            </svg>

            <input
              type="text"
              placeholder="What are you craving for today?"
              className="
        w-full
        bg-transparent
        outline-none
        text-gray-700
        placeholder-gray-400
        text-lg
      "
            />
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl font-bold text-center text-[#1F2937] mb-12"
          >
            Popular Categories
          </motion.h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-18 mt-6">
            {popularCategories.map((category, index) => (
              <CategoryCard
                key={category.id}
                title={category.title}
                image={category.image}
                delay={0.5 + index * 0.1}
              />
            ))}
          </div>
        </div>
      </section>
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-[#1F2937] mt-2">
              Chef's Specials
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {chefSpecials.map((special, index) => (
              <ChefSpecialCard
                key={special.id}
                special={special}
                delay={index * 0.1}
              />
            ))}
          </div>
        </div>
      </section>
      <section className="relative py-50 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/call-to-action.png"
            alt="New menu background"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/60"/>
        </div>

        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 items-start">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-6xl"
          >
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              Introducing Our New Menu Additions!
            </h2>

            <p className="text-xl text-white/90 mb-8 max-w-2xl">
              Explore exciting new dishes, crafted with the freshest ingredients
              and authentic Nigerian flavors. Limited time offer!
            </p>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-[#FF7A18] text-white px-8 py-3 rounded-[10px] text-lg font-semibold hover:bg-amber-700 transition-colors"
            >
              Discover what's new
            </motion.button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
