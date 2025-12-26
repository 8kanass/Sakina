import React from 'react';
import { Star, Smartphone, Play, Clock } from 'lucide-react';

export default function Hero() {
    return (
        <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-white">
            <div className="max-w-4xl mx-auto px-6 text-center relative z-10">

                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 text-emerald-700 text-xs font-semibold mb-8 border border-emerald-100 uppercase tracking-wider animate-in fade-in slide-in-from-bottom-4 duration-700">
                    <Star size={12} className="fill-emerald-700" /> #1 Muslim Mindfulness App
                </div>

                <h1 className="text-5xl md:text-7xl font-bold text-slate-900 font-serif leading-tight mb-6 animate-in fade-in slide-in-from-bottom-6 duration-700 delay-100">
                    Find peace in the <br /> <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-teal-500">digital chaos.</span>
                </h1>

                <p className="text-xl text-slate-500 mb-10 max-w-2xl mx-auto leading-relaxed animate-in fade-in slide-in-from-bottom-6 duration-700 delay-200">
                    Sakina Pause gently interrupts your doomscrolling with moments of Quranic reflection. Reclaim your time, attention, and heart.
                </p>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-in fade-in slide-in-from-bottom-6 duration-700 delay-300">
                    <button className="h-14 px-8 bg-slate-900 text-white rounded-xl font-bold text-lg hover:bg-slate-800 transition-all flex items-center gap-3 shadow-xl shadow-slate-900/10 hover:shadow-2xl hover:-translate-y-1">
                        <Smartphone size={20} />
                        Download App
                    </button>
                    <button className="h-14 px-8 bg-white text-slate-900 border border-gray-200 rounded-xl font-bold text-lg hover:bg-gray-50 transition-all flex items-center gap-3 group">
                        <Play size={20} className="fill-slate-900 group-hover:scale-110 transition-transform" />
                        Watch Demo
                    </button>
                </div>

                {/* App Mockup (Floating) */}
                <div className="mt-20 relative mx-auto w-full max-w-4xl animate-in fade-in zoom-in-95 duration-1000 delay-500">
                    {/* Glow effect behind */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-tr from-emerald-200/40 to-amber-100/40 rounded-full blur-[100px] -z-10"></div>

                    <div className="relative bg-slate-900 p-2 rounded-[2.5rem] shadow-2xl inline-block border border-slate-800">
                        <div className="bg-emerald-950 rounded-4xl overflow-hidden border-[6px] border-slate-900 w-[300px] h-[600px] relative">
                            {/* Mockup Screen Content */}
                            <div className="absolute inset-0 flex flex-col items-center justify-center p-8 text-center bg-[url('https://images.unsplash.com/photo-1604079628040-94301bb21b91?q=80&w=1000&auto=format&fit=crop')] bg-cover bg-center">
                                <div className="absolute inset-0 bg-emerald-950/90 backdrop-blur-sm"></div>
                                <div className="relative z-10 text-white">
                                    <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-6 backdrop-blur-md border border-white/20">
                                        <Clock className="text-amber-400" />
                                    </div>
                                    <p className="text-2xl font-serif mb-4 leading-relaxed">"Indeed, with hardship [will be] ease."</p>
                                    <p className="text-xs text-white/60 mb-8 uppercase tracking-widest">Surah Ash-Sharh 94:5</p>
                                    <div className="w-full h-1 bg-white/20 rounded-full mb-8 overflow-hidden">
                                        <div className="w-2/3 h-full bg-amber-400"></div>
                                    </div>
                                    <button className="w-full py-3 bg-white/10 rounded-xl text-sm font-bold border border-white/20 text-white/50 cursor-not-allowed">Wait 5s...</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
