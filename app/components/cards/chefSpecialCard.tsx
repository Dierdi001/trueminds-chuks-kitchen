'use client'

import Image from "next/image";
import { motion } from "framer-motion";
import { ChefSpecial } from "@/app/hooks/useChefSpecials";

interface ChefSpecialCardProps {
  special: ChefSpecial;
  delay?: number;
}

export default function ChefSpecialCard({
  special,
  delay = 0,
}: ChefSpecialCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
    >
      {/* Image */}
      <div className="relative h-48 w-full">
        <Image
          src={special.image}
          alt={special.title}
          fill
          className="object-cover"
        />
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="text-xl font-semibold text-[#1F2937] mb-2">
          {special.title}
        </h3>

        <p className="text-gray-600 text-sm mb-4">
          {special.description}
        </p>

        <div className="flex items-center justify-between">
          <span className="text-[16px] font-bold text-[#FF7A18]">
            {special.price}
          </span>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-[#FF7A18] text-white px-4 py-2 rounded-lg text-sm font-semibold hover:bg-amber-700 transition-colors"
          >
            Add to cart
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
}
