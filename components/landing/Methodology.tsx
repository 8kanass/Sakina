import React from 'react';
import { Shield, Clock, Check } from 'lucide-react';

export default function Methodology() {
    return (
        <section id="method" className="py-24 bg-slate-50">
            <div className="max-w-5xl mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-3xl font-bold text-slate-900 font-serif">How Sakina Pause works</h2>
                    <p className="text-slate-500 mt-4">We create a mindful gap between impulse and action.</p>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {[
                        { step: "01", title: "Select Apps", desc: "Choose the apps that drain your time (e.g., Instagram, TikTok).", icon: Shield },
                        { step: "02", title: "The Pause", desc: "When you open them, we show a calming Verse for 10-15 seconds.", icon: Clock },
                        { step: "03", title: "The Choice", desc: "Decide consciously: continue scrolling or close the app.", icon: Check }
                    ].map((item, i) => (
                        <div key={i} className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 hover:border-emerald-100 hover:shadow-md transition-all group">
                            <div className="w-12 h-12 bg-slate-50 rounded-xl flex items-center justify-center mb-6 text-emerald-600 group-hover:bg-emerald-600 group-hover:text-white transition-colors">
                                <item.icon size={24} />
                            </div>
                            <span className="text-xs font-bold text-slate-300 mb-2 block">{item.step}</span>
                            <h3 className="text-xl font-bold text-slate-900 mb-3">{item.title}</h3>
                            <p className="text-slate-500 leading-relaxed text-sm">{item.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
