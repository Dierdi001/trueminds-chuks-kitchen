'use client'
import { motion } from "framer-motion";

export default function Footer() {
  return (
    <>
    <motion.footer 
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="hidden lg:block bg-[#62412e] px-6 py-12 md:px-12 lg:px-24"
            >
                <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
                    {/* Colonne 1 - Logo et description */}
                    <motion.div 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.5 }}
                        className="flex flex-col gap-4 px-4 md:px-0"
                    >
                        <h2 className="text-[40px] font-normal text-[#FF7A18]" style={{ fontFamily: "'Island Moments', cursive" }}>
                            Chuks Kitchen
                        </h2>
                        <p className="text-[24px] text-white" style={{ fontFamily: "'jost'" }}>
                            Bringing the authentic flavors of Nigerian home cooking to your table, with passion and care.
                        </p>
                        <p className="text-sm text-white mt-4 py-10">
                            © 2020 Lift Media. All rights reserved.
                        </p>
                    </motion.div>

                    {/* Colonne 2 - Quick Links */}
                    <motion.div 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.6 }}
                        className="flex flex-col gap-4 px-4 md:px-0"
                    >
                        <h3 className="text-base font-normal text-white text-[24px]" style={{ fontFamily: "'jost'" }}>Quick Links</h3>
                        <ul className="flex flex-col gap-2" style={{ fontFamily: "'poppins'" }}>
                            <motion.li 
                                initial={{ opacity: 0, x: -10 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.3, delay: 0.7 }}
                            >
                                <a href="#" className="text-[12px] text-white hover:text-[#FF7A18] transition">Home</a>
                            </motion.li>
                            <motion.li 
                                initial={{ opacity: 0, x: -10 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.3, delay: 0.75 }}
                            >
                                <a href="#" className="text-[12px] text-white hover:text-[#FF7A18] transition">Explore</a>
                            </motion.li>
                            <motion.li 
                                initial={{ opacity: 0, x: -10 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.3, delay: 0.8 }}
                            >
                                <a href="#" className="text-[12px] text-white hover:text-[#FF7A18] transition">My Order</a>
                            </motion.li>
                            <motion.li 
                                initial={{ opacity: 0, x: -10 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.3, delay: 0.85 }}
                            >
                                <a href="#" className="text-[12px] text-white hover:text-[#FF7A18] transition">Account</a>
                            </motion.li>
                            <motion.li 
                                initial={{ opacity: 0, x: -10 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.3, delay: 0.9 }}
                            >
                                <a href="#" className="text-[12px] text-white hover:text-[#FF7A18] transition">Contact</a>
                            </motion.li>
                        </ul>
                    </motion.div>

                    {/* Colonne 3 - Contact Us */}
                    <motion.div 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.65 }}
                        className="flex flex-col gap-4 px-4 md:px-0"
                    >
                        <h3 className="text-base font-normal text-white text-[24px]" style={{ fontFamily: "'jost'" }}>Contact Us</h3>
                        <ul className="flex flex-col gap-2" style={{ fontFamily: "'poppins'" }}>
                            <motion.li 
                                initial={{ opacity: 0, x: -10 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.3, delay: 0.75 }}
                                className="text-[12px] text-white"
                            >
                                +234 801 234 5678
                            </motion.li>
                            <motion.li 
                                initial={{ opacity: 0, x: -10 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.3, delay: 0.8 }}
                                className="text-[12px] text-white"
                            >
                                hello@chukskitchen.com
                            </motion.li>
                            <motion.li 
                                initial={{ opacity: 0, x: -10 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.3, delay: 0.85 }}
                                className="text-[12px] text-white"
                            >
                                123 Taste Blvd, Lagos, Nigeria
                            </motion.li>
                        </ul>
                    </motion.div>

                    {/* Colonne 4 - Social Media */}
                    <motion.div 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.7 }}
                        className="flex flex-col gap-4 px-4 md:px-0"
                    >
                        <ul className="flex flex-col gap-2" style={{ fontFamily: "'poppins'" }}>
                            <motion.li 
                                initial={{ opacity: 0, x: -10 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.3, delay: 0.8 }}
                            >
                                <a href="#" className="text-[12px] text-white hover:text-[#FF7A18] transition">Facebook</a>
                            </motion.li>
                            <motion.li 
                                initial={{ opacity: 0, x: -10 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.3, delay: 0.85 }}
                            >
                                <a href="#" className="text-[12px] text-white hover:text-[#FF7A18] transition">Twitter</a>
                            </motion.li>
                            <motion.li 
                                initial={{ opacity: 0, x: -10 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.3, delay: 0.9 }}
                            >
                                <a href="#" className="text-[12px] text-white hover:text-[#FF7A18] transition">LinkedIn</a>
                            </motion.li>
                            <motion.li 
                                initial={{ opacity: 0, x: -10 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.3, delay: 0.95 }}
                            >
                                <a href="#" className="text-[12px] text-white hover:text-[#FF7A18] transition">Instagram</a>
                            </motion.li>
                        </ul>
                    </motion.div>
                </div>
            </motion.footer>
      </>
  );
}
