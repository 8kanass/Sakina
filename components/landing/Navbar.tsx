"use client";
import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <nav className="fixed w-full z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
            <div className="max-w-6xl mx-auto px-6 h-20 flex items-center justify-between">
                <Link href="/" className="flex items-center gap-3">
                    <Image
                        src="/logo.png"
                        alt="Sakina Pause Logo"
                        width={60}
                        height={60}
                        className="w-14 h-14 object-contain"
                        priority
                        quality={100}
                    />
                    <span className="text-xl font-bold text-slate-900 font-serif tracking-tight">Sakina Pause</span>
                </Link>

                {/* Desktop Nav */}
                <div className="hidden md:flex items-center gap-8">
                    <Link href="/#method" className="text-sm font-medium text-slate-500 hover:text-emerald-600 transition-colors">Method</Link>
                    <Link href="/#features" className="text-sm font-medium text-slate-500 hover:text-emerald-600 transition-colors">Features</Link>
                    <Link href="/#reviews" className="text-sm font-medium text-slate-500 hover:text-emerald-600 transition-colors">Reviews</Link>
                </div>

                <div className="hidden md:flex items-center gap-4">
                    <button className="bg-emerald-600 text-white px-5 py-2 rounded-lg text-sm font-semibold hover:bg-emerald-700 transition-all shadow-md shadow-emerald-600/20 active:scale-95">
                        Get App
                    </button>
                </div>

                {/* Mobile Menu Toggle */}
                <button className="md:hidden text-slate-900" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                    {isMenuOpen ? <X /> : <Menu />}
                </button>
            </div>

            {/* Mobile Nav Menu */}
            {isMenuOpen && (
                <div className="md:hidden absolute top-20 left-0 w-full bg-white border-b border-gray-100 p-6 flex flex-col gap-6 shadow-xl animate-in slide-in-from-top-2">
                    <Link href="/#method" className="text-lg font-medium text-slate-900">Method</Link>
                    <Link href="/#features" className="text-lg font-medium text-slate-900">Features</Link>
                    <button className="bg-emerald-600 text-white px-6 py-3 rounded-xl text-center font-semibold w-full">Get App</button>
                </div>
            )}
        </nav>
    );
}
