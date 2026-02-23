'use client';

import Image from "next/image";
import { motion } from "framer-motion";
import { DishItem } from "@/app/hooks/usePopularDishes";
import { Plus } from "lucide-react";
import Link from "next/link";

interface DishCardProps {
  dish: DishItem;
  index?: number;
}

export function DishCard({ dish, index = 0 }: DishCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-xl transition-shadow 
                 flex md:block"
    >
      {/* Image */}
      <div className="relative w-32 md:w-full md:h-48 flex-shrink-0">
        <Image
          src={dish.image}
          alt={dish.name}
          fill
          className="object-cover"
        />
      </div>

      {/* Content */}
      <div className="p-4 md:p-6 flex flex-col justify-between w-full">
        <div>
          <Link href={`/dish/${dish.id}`} className="block">
            <h3 className="text-lg md:text-xl font-semibold text-[#1F2937] mb-2">
              {dish.name}
            </h3>
          </Link>

          <p className="text-gray-600 text-sm mb-4 line-clamp-2 md:line-clamp-none">
            {dish.description}
          </p>
        </div>

        <div className="flex items-center justify-between">
          <span className="text-[14px] underline font-bold text-[#FF7A18]">
            {dish.price}
          </span>
          <Plus className="bg-orange-500 text-white w-6 h-6 rounded-full hover:cursor-pointer" />
        </div>
      </div>
    </motion.div>
  );
}