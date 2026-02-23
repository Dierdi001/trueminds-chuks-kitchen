'use client'
import '@fontsource/inter/400.css'
import '@fontsource/inter/500.css'
import '@fontsource/inter/600.css'
import '@fontsource/inter/700.css'
import '@fontsource/island-moments/400.css'
import '@fontsource/jost/400.css'
import '@fontsource/poppins/400.css'
import { motion } from 'framer-motion'

export default function AuthenticationLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <div className="flex min-h-screen flex-col">
            <div className="flex flex-1 flex-col lg:flex-row">
                {/* Partie gauche - Image desktop avec overlay et texte (cachée sur mobile) */}
                <motion.div 
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.7 }}
                    className="hidden lg:flex lg:w-1/2 relative"
                >
                    <img 
                        src="/images/auth.png" 
                        alt="Authentication" 
                        className="h-full w-full object-cover"
                    />
                    {/* Overlay transparent avec couleur #FF7A18 */}
                    <div className="absolute inset-0 bg-[#FF7A18]/70"></div>
                    
                    {/* Texte par-dessus l'image */}
                    <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center px-8">
                        <h1 className="text-5xl font-bold mb-4" style={{ fontFamily: "'Inter', sans-serif" }}>
                            Chuks Kitchen
                        </h1>
                        <p className="text-xl max-w-md" style={{ fontFamily: "'Inter', sans-serif", fontWeight: 500 }}>
                            Your journey to delicious, authentic Nigerian meals starts here. Sign up or log in to order your favorites today!
                        </p>
                    </div>
                </motion.div>

                {/* Partie droite - Children */}
                <motion.div 
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.7, delay: 0.2 }}
                    className="flex w-full lg:w-1/2 items-center justify-center px-4 lg:px-8"
                >
                    <div className="w-full px-4 lg:px-0">
                        {children}
                    </div>
                </motion.div>
            </div>

            {/* Footer - Version Chuks Kitchen (caché sur mobile) */}
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
                        <p className="text-sm text-white mt-4">
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
                        <h3 className="text-base font-semibold text-white text-[24px]" style={{ fontFamily: "'jost'" }}>Follow Us</h3>
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
        </div>
    )
}