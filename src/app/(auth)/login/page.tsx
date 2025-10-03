"use client";

import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";

export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#2a2222] to-[#7e6d6d]">
      <div className="bg-[#231b1b] rounded-3xl shadow-2xl w-full max-w-sm p-8 flex flex-col items-center">
        {/* Logo */}
        <div className="mb-10 text-center">
          <img
            src="/logo/logo.svg"
            alt="Coffee Vibes Logo"
            className="mx-auto w-32 h-auto"
            draggable={false}
          />
        </div>

        <div className="w-full border-t border-[#3a2c2c]/40 mb-8"></div>

        <form className="w-full flex flex-col gap-5">
          <label className="text-[#e7dacb] text-lg font-medium mb-1">Login</label>
          <input
            type="text"
            placeholder="Username"
            className="w-full rounded-md px-4 py-2 bg-[#e7dacb] text-[#231b1b] placeholder-[#7e6d6d] focus:outline-none focus:ring-2 focus:ring-[#b8a78a] transition"
          />
          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              className="w-full rounded-md px-4 py-2 bg-[#e7dacb] text-[#231b1b] placeholder-[#7e6d6d] focus:outline-none focus:ring-2 focus:ring-[#b8a78a] transition pr-10"
            />
            <button
              type="button"
              tabIndex={-1}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-[#7e6d6d]"
              onClick={() => setShowPassword((v) => !v)}
              aria-label={showPassword ? "Hide password" : "Show password"}
            >
              {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
            </button>
          </div>
          <button
            type="submit"
            className="w-full bg-[#f5ede3] text-[#231b1b] font-semibold rounded-md py-2 mt-2 hover:bg-[#e7dacb] transition"
          >
            LOGIN
          </button>
        </form>

        <button className="mt-4 text-[#e7dacb]/70 text-sm hover:underline transition">
          Forgot your password
        </button>

        <div className="w-full border-t border-dashed border-[#3a2c2c]/40 mt-10"></div>
      </div>
    </div>
  );
}