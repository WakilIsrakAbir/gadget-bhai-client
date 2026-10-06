"use client";

import Image from "next/image";
import Link from "next/link";
import { Search, Gift, Zap, User, Cpu } from "lucide-react";

const Navbar = () => {
  return (
    <header className="sticky top-0 z-50 w-full bg-[#081621] text-white shadow-xl border-b border-[#132737]">
      {/* Main Navbar */}
      <div className="max-w-7xl mx-auto px-4 lg:px-6">
        <div className="flex items-center justify-between h-20 gap-4 lg:gap-8">
          
          {/* 1. Left Side: Brand Logo */}
          <Link href="/" className="flex items-center gap-3 shrink-0 group">
            <div className="relative w-12 h-12 md:w-14 md:h-14 transition-transform duration-200 group-hover:scale-105">
              <Image
                src="/logo.png"
                alt="Gadget Bhai Logo"
                fill
                sizes="56px"
                className="object-contain drop-shadow-[0_2px_10px_rgba(250,204,21,0.25)]"
                priority
              />
            </div>
            <div className="hidden sm:flex flex-col">
              <span className="text-xl font-extrabold tracking-tight text-white leading-none">
                GADGET <span className="text-[#facc15]">BHAI</span>
              </span>
              <span className="text-[10px] uppercase tracking-wider text-slate-400 font-medium">
                Tech & Gaming Store
              </span>
            </div>
          </Link>

          {/* 2. Middle: Search Bar */}
          <div className="flex-1 max-w-2xl mx-2">
            <form onSubmit={(e) => e.preventDefault()} className="relative w-full">
              <input
                type="text"
                placeholder="Search gadgets, gaming gear, laptops, phones..."
                className="w-full h-11 pl-4 pr-12 rounded-md bg-white text-slate-900 placeholder-slate-400 text-sm font-normal outline-none focus:ring-2 focus:ring-[#0ea5e9] transition-all shadow-inner"
              />
              <button
                type="submit"
                aria-label="Search"
                className="absolute right-0 top-0 h-11 w-11 flex items-center justify-center text-slate-700 hover:text-[#081621] hover:bg-slate-100 rounded-r-md transition-colors"
              >
                <Search className="w-5 h-5" strokeWidth={2.2} />
              </button>
            </form>
          </div>

          {/* 3. Right Side: Offers, Deals, Account & Action Button */}
          <div className="flex items-center gap-4 lg:gap-6 shrink-0">
            
            {/* Offers Item */}
            <Link
              href="/offers"
              className="hidden md:flex items-center gap-2.5 text-left group hover:opacity-90 transition-opacity"
            >
              <div className="p-2 rounded-lg bg-[#0e2436] group-hover:bg-[#133048] transition-colors">
                <Gift className="w-5 h-5 text-[#ef4444]" />
              </div>
              <div className="leading-tight">
                <span className="block text-sm font-semibold text-white group-hover:text-[#ef4444] transition-colors">
                  Offers
                </span>
                <span className="block text-[11px] text-slate-400">
                  Latest Offers
                </span>
              </div>
            </Link>

            {/* Happy Hour / Deals Item */}
            <Link
              href="/deals"
              className="hidden lg:flex items-center gap-2.5 text-left group hover:opacity-90 transition-opacity"
            >
              <div className="p-2 rounded-lg bg-[#0e2436] group-hover:bg-[#133048] transition-colors">
                <Zap className="w-5 h-5 text-[#facc15]" />
              </div>
              <div className="leading-tight">
                <span className="block text-sm font-semibold text-white group-hover:text-[#facc15] transition-colors">
                  Happy Hour
                </span>
                <span className="block text-[11px] text-slate-400">
                  Special Deals
                </span>
              </div>
            </Link>

            {/* Account Item */}
            <Link
              href="/account"
              className="flex items-center gap-2.5 text-left group hover:opacity-90 transition-opacity"
            >
              <div className="p-2 rounded-lg bg-[#0e2436] group-hover:bg-[#133048] transition-colors">
                <User className="w-5 h-5 text-[#f97316]" />
              </div>
              <div className="leading-tight">
                <span className="block text-sm font-semibold text-white group-hover:text-[#f97316] transition-colors">
                  Account
                </span>
                <span className="block text-[11px] text-slate-400">
                  Register or Login
                </span>
              </div>
            </Link>

            {/* PC Builder / Featured Action Button */}
            <Link
              href="/pc-builder"
              className="hidden sm:inline-flex items-center gap-2 px-4 py-2.5 rounded-md font-semibold text-sm text-white bg-gradient-to-r from-[#0284c7] to-[#0ea5e9] hover:from-[#0369a1] hover:to-[#0284c7] shadow-lg shadow-sky-500/20 hover:shadow-sky-500/35 transition-all transform active:scale-95"
            >
              <Cpu className="w-4 h-4" />
              <span>PC Builder</span>
            </Link>

          </div>

        </div>
      </div>
    </header>
  );
};

export default Navbar;