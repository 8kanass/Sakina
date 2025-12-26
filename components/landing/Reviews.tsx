import React from 'react';
import { Star } from 'lucide-react';

export default function Reviews() {
    const reviews = [
        {
            name: "Ahmed K.",
            role: "Software Engineer",
            content: "Sakina Pause has completely changed my relationship with my phone. The Quranic reflections are a beautiful reminder to step back.",
            stars: 5,
        },
        {
            name: "Fatima R.",
            role: "Student",
            content: "I used to doomscroll for hours. Now, that 10-second pause gives me just enough time to realize I don't actually want to open TikTok.",
            stars: 5,
        },
        {
            name: "Omar Y.",
            role: "Product Manager",
            content: "Simple, privacy-focused, and effective. I love that it doesn't just block apps but replaces the urge with something meaningful.",
            stars: 5,
        }
    ];

    return (
        <section id="reviews" className="py-24 bg-slate-50">
            <div className="max-w-6xl mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-3xl font-bold text-slate-900 font-serif">What our users say</h2>
                    <p className="text-slate-500 mt-4">Join thousands of Muslims reclaiming their time.</p>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {reviews.map((review, i) => (
                        <div key={i} className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 hover:border-emerald-100 hover:shadow-md transition-all">
                            <div className="flex gap-1 mb-4">
                                {[...Array(review.stars)].map((_, j) => (
                                    <Star key={j} size={16} className="fill-amber-400 text-amber-400" />
                                ))}
                            </div>
                            <p className="text-slate-600 mb-6 leading-relaxed">"{review.content}"</p>
                            <div>
                                <p className="font-bold text-slate-900">{review.name}</p>
                                <p className="text-xs text-slate-400 font-medium">{review.role}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
