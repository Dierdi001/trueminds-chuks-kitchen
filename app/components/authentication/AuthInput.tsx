'use client'

import { LucideIcon } from "lucide-react";

interface AuthInputProps {
  label: string;
  type: "email" | "password" | "tel";
  placeholder: string;
  icon: LucideIcon;
  name?: string;
  required?: boolean;
}

export default function AuthInput({
  label,
  type,
  placeholder,
  icon: Icon,
  name,
  required = false,
}: AuthInputProps) {

  const isTel = type === "tel";
  const isEmail = type === "email";

  return (
    <div className="space-y-1">
      {label && (
        <label className="text-sm font-medium text-gray-700 block">
          {label}
        </label>
      )}

      <div className="relative">
        {/* Icon */}
        <Icon
          size={18}
          className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
        />

        <input
          name={name}
          type={type}
          placeholder={placeholder}
          required={required}
          
          /* Mobile optimisation */
          inputMode={
            isTel ? "tel" :
            isEmail ? "email" :
            undefined
          }
          
          autoComplete={
            isTel ? "tel" :
            isEmail ? "email" :
            type === "password" ? "current-password" :
            undefined
          }

          pattern={
            isTel ? "[0-9+ ]*" : undefined
          }

          className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-[6px] 
                     focus:outline-none focus:ring-2 focus:ring-[#FF7A18] 
                     focus:border-transparent transition text-[16px]"
        />
      </div>
    </div>
  );
}
