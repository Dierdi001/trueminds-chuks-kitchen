"use client";

import { Mail, Lock } from "lucide-react";
import Image from "next/image";
import { motion } from "framer-motion";
import AuthInput from "@/app/components/authentication/AuthInput";
import Link from "next/link";

export default function SignInPage() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="flex min-h-screen w-full flex-col bg-white"
    >
      {/* Contenu principal */}
      <main className="flex flex-1 flex-col items-center justify-center px-4 sm:px-6 py-8 sm:py-12 md:px-12 lg:px-24">
        <div className="w-full max-w-[400px] px-0 sm:px-4 md:px-0">
          {/* Logo */}
          <motion.h1
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-[32px] sm:text-[40px] font-normal text-[#FF7A18] text-center"
            style={{ fontFamily: "'Island Moments', cursive" }}
          >
            Chuks Kitchen
          </motion.h1>

          {/* Titre Login */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mb-8 text-[24px] sm:text-[30px] text-[#1F2937] text-center font-medium w-full"
          >
            Login your account.
          </motion.p>

          {/* Formulaire */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="space-y-4"
          >
            <div className="space-y-4">
              <AuthInput
                label="Email or phone number"
                type="email"
                placeholder="name@gmail.com"
                icon={Mail}
                name="email"
              />

              <div>
                <AuthInput
                  label="Password"
                  type="password"
                  placeholder="******"
                  icon={Lock}
                  name="password"
                />
                <div className="flex justify-between items-center">
                  <span className="text-sm font-medium text-gray-700"></span>
                  <a
                    href="#"
                    className="text-xs text-[#1E88E5] hover:text-[#FF7A18] transition mt-1"
                  >
                    Forgot password?
                  </a>
                </div>
              </div>
            </div>

            {/* Continue Button */}
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full bg-[#FF7A18] rounded-[10px] px-6 sm:px-8 py-3 text-[16px] font-semibold text-white transition hover:bg-amber-700 mt-6"
            >
              Continue
            </motion.button>
          </motion.div>

          {/* Séparateur */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="flex items-center gap-4 my-6"
          >
            <div className="flex-1 h-[1px] bg-gray-300"></div>
            <span className="text-sm text-gray-500">or continue with</span>
            <div className="flex-1 h-[1px] bg-gray-300"></div>
          </motion.div>

          {/* Boutons sociaux */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="space-y-3"
          >
            {/* Google */}
            <button className="w-full flex items-center justify-center gap-3 border border-gray-300 rounded-[10px] px-6 py-3 text-[16px] font-medium text-gray-700 transition hover:bg-gray-50">
              <svg width="20" height="20" viewBox="0 0 24 24">
                <path
                  fill="#EA4335"
                  d="M5.266 9.765A7.077 7.077 0 0 1 12 4.909c1.69 0 3.218.6 4.418 1.582L19.91 3.5C17.782 1.145 15.055 0 12 0 7.27 0 3.198 2.698 1.24 6.65l4.026 3.115Z"
                />
                <path
                  fill="#34A853"
                  d="M16.04 18.013c-1.09.703-2.474 1.078-4.04 1.078a7.077 7.077 0 0 1-6.723-4.823l-4.04 3.067A11.965 11.965 0 0 0 12 24c2.933 0 5.735-1.043 7.834-3.008l-3.794-2.98Z"
                />
                <path
                  fill="#4A90E2"
                  d="M19.834 21c2.195-2.048 3.62-5.096 3.62-9 0-.71-.109-1.473-.272-2.182H12v4.637h6.436c-.317 1.559-1.17 2.766-2.395 3.558L19.834 21Z"
                />
                <path
                  fill="#FBBC05"
                  d="M5.277 14.268A7.12 7.12 0 0 1 4.909 12c0-.782.125-1.533.357-2.235L1.24 6.65A11.934 11.934 0 0 0 0 12c0 1.92.445 3.73 1.237 5.335l4.04-3.067Z"
                />
              </svg>
              Continue with Google
            </button>

            {/* Facebook */}
            <button className="w-full flex items-center justify-center gap-3 border border-gray-300 rounded-[10px] px-6 py-3 text-[16px] font-medium text-gray-700 transition hover:bg-gray-50">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="#1877F2">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
              </svg>
              Continue with Facebook
            </button>
          </motion.div>

          {/* Lien création de compte */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="text-center text-sm text-gray-600 mt-6"
          >
            Don&apos;t have an account?{" "}
            <Link
              href="/signup"
              className="text-[#1E88E5] font-semibold hover:text-[#FF7A18] transition"
            >
              Create account
            </Link>
          </motion.p>
        </div>
      </main>
    </motion.div>
  );
}
