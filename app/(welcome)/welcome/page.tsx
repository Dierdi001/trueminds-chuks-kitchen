'use client'

import { TruckIcon } from "lucide-react";
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";

export default function WelcomePage() {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="flex min-h-screen w-full flex-col bg-white"
    >
      {/* Header avec navigation */}
      <motion.header 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="flex items-center justify-between px-4 py-4 sm:px-6 md:px-12 lg:px-24"
      >
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-[32px] sm:text-[40px] font-normal text-[#FF7A18]" 
          style={{ fontFamily: "'Island Moments', cursive" }}
        >
          Chuks Kitchen
        </motion.div>
        <Link href="/signin">
          <motion.button 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="rounded-[10px] border border-[#1E88E5] px-4 sm:px-6 py-2 text-[14px] sm:text-[16px] text-[#1E88E5] transition hover:bg-gray-50 hover:cursor-pointer"
          >
            Sign In
          </motion.button>
        </Link>
      </motion.header>

      {/* Contenu principal */}
      <main className="flex flex-1 flex-col items-center justify-center px-4 sm:px-6 py-8 sm:py-12 md:px-12 lg:px-24">
        <div className="w-full max-w-[500px] px-0 sm:px-4 md:px-0 text-center">
          {/* Titre */}
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mb-2 text-[24px] sm:text-[28px] md:text-[32px] text-start font-bold text-[#1F2937]"
          >
            Your Authentic Taste of Nigeria
          </motion.h1>

          {/* Description */}
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mb-6 sm:mb-8 text-[14px] sm:text-[16px] text-[#1F2937] text-start font-medium w-full"
          >
            Experience homemade flavors delivered fresh to your desk or home. We
            bring the rich culinary heritage of Nigeria right to your doorstep.
          </motion.p>

          {/* Liste à puces avec icônes */}
          <motion.ul 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mb-8 sm:mb-10 grid grid-cols-1 sm:grid-cols-2 gap-4 text-gray-700"
          >
            <motion.li 
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, delay: 0.6 }}
              className="flex items-center gap-2 font-semibold"
            >
              <div className="p-[6px] sm:p-[8px] rounded-[10px] sm:rounded-[13px] bg-[#FFE1C4]">
                <Image
                  src="/icons/fork-knife-fill.svg"
                  alt="Freshly Prepared"
                  width={18}
                  height={18}
                  className="sm:w-[22px] sm:h-[22px]"
                />
              </div>
              <span className="text-[14px] sm:text-[16px]">Freshly Prepared</span>
            </motion.li>
            <motion.li 
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, delay: 0.65 }}
              className="flex items-center gap-2 font-semibold"
            >
              <div className="p-[6px] sm:p-[8px] rounded-[10px] sm:rounded-[13px] bg-[#FFE1C4]">
                <Image
                  src="/icons/fork-knife-fill.svg"
                  alt="Support Local Business"
                  width={18}
                  height={18}
                  className="sm:w-[22px] sm:h-[22px]"
                />
              </div>
              <span className="text-[14px] sm:text-[16px]">Support Local Business</span>
            </motion.li>
            <motion.li 
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, delay: 0.7 }}
              className="flex items-center gap-2 font-semibold"
            >
              <div className="p-[8px] rounded-[13px] bg-[#FFE1C4]">
                <TruckIcon strokeWidth={2} color="#f78113" />
              </div>
              Fast & Reliable Delivery
            </motion.li>
            {/* Optionnel : si tu veux un 4ème item ou un espace */}
            <li className="flex items-center gap-2 opacity-0">
              
            </li>
          </motion.ul>
          
          {/* Boutons l'un en dessous de l'autre */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="flex flex-col w-full gap-3"
          >
            <motion.button 
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full bg-[#FF7A18] rounded-[10px] px-6 sm:px-8 py-2.5 sm:py-3 text-[14px] sm:text-[16px] font-semibold text-white transition hover:bg-amber-700"
            >
              Start Your Order
            </motion.button>
            <motion.button 
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full border border-[#1E88E5] rounded-[10px] px-6 sm:px-8 py-2.5 sm:py-3 text-[14px] sm:text-[16px] font-semibold text-[#1E88E5] transition hover:bg-gray-50"
            >
              Learn More About Us
            </motion.button>
          </motion.div>
        </div>
      </main>

      {/* Footer */}
      <motion.footer 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.8 }}
        className="border-t border-gray-200 px-4 sm:px-6 py-6 text-center text-sm text-gray-600"
      >
        <div className="flex flex-col items-center justify-center gap-3 sm:gap-2 md:flex-row md:gap-6">
          <span className="text-[12px] sm:text-[14px]">© 2024 Chuks Kitchen.</span>
          <div className="flex gap-4 sm:gap-6">
            <motion.a 
              whileHover={{ scale: 1.05, color: "#FF7A18" }}
              href="#" 
              className="text-[12px] sm:text-[14px] text-[#1E88E5] hover:text-amber-600"
            >
              Privacy Policy
            </motion.a>
            <motion.a 
              whileHover={{ scale: 1.05, color: "#FF7A18" }}
              href="#" 
              className="text-[12px] sm:text-[14px] text-[#1E88E5] hover:text-amber-600"
            >
              Terms of Service
            </motion.a>
          </div>
        </div>
      </motion.footer>
    </motion.div>
  );
}