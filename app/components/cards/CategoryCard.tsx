'use client'

import Image from "next/image";
import { motion } from "framer-motion";

interface CategoryCardProps {
  title: string;
  image: string;
  delay?: number;
}

export default function CategoryCard({
  title,
  image,
  delay = 0,
}: CategoryCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay }}
      whileHover={{ y: -6 }}
      className="group"
    >
      <div className="
        bg-white
        rounded-2xl
        overflow-hidden
        shadow-sm
        hover:shadow-md
        transition-all
        duration-300
        cursor-pointer
      ">
        {/* Image */}
        <div className="relative h-56 w-full">
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
        </div>

        {/* Titre */}
        <div className="py-16 px-6 text-center">
          <h3 className="text-xl font-semibold text-gray-800">
            {title}
          </h3>
        </div>
      </div>
    </motion.div>
  );
}
