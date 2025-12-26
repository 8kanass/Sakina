import React from 'react';
import { Check, Heart } from 'lucide-react';

export default function Features() {
    return (
        <section id="features" className="py-24 bg-white">
            <div className="max-w-6xl mx-auto px-6">
                <div className="bg-emerald-900 rounded-[3rem] p-10 md:p-20 text-white relative overflow-hidden">
                    {/* Pattern */}
                    <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'linear-gradient(45deg, #059669 25%, transparent 25%, transparent 50%, #059669 50%, #059669 75%, transparent 75%, transparent)', backgroundSize: '40px 40px' }}></div>

                    <div className="relative z-10 grid md:grid-cols-2 gap-16 items-center">
                        <div>
                            <h2 className="text-4xl font-bold font-serif mb-6">Designed for the Modern Muslim</h2>
                            <ul className="space-y-6">
                                {[
                                    "Privacy-First: No tracking, works offline.",
                                    "Prayer-Time Lock: Strict mode during Salah.",
                                    "Customizable Duas: For anxiety, sleep, or focus.",
                                    "Impact Stats: See hours saved per week."
                                ].map((feat, i) => (
                                    <li key={i} className="flex items-start gap-4">
                                        <div className="mt-1 w-6 h-6 rounded-full bg-emerald-800 flex items-center justify-center shrink-0">
                                            <Check size={14} className="text-emerald-400" />
                                        </div>
                                        <span className="text-emerald-100 text-lg">{feat}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="bg-white/10 backdrop-blur-md rounded-3xl p-8 border border-white/10 transform rotate-3 hover:rotate-0 transition-transform duration-500">
                            <div className="flex items-center gap-4 mb-6">
                                <div className="w-12 h-12 bg-amber-400 rounded-full flex items-center justify-center text-emerald-900">
                                    <Heart />
                                </div>
                                <div>
                                    <h4 className="font-bold text-lg">Daily Dhikr</h4>
                                    <p className="text-sm text-emerald-200">Start your day right</p>
                                </div>
                            </div>
                            <p className="text-2xl font-serif leading-relaxed mb-4">"Allah does not burden a soul beyond that it can bear."</p>
                            <p className="text-sm opacity-60 text-right">Surah Al-Baqarah 2:286</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
