import React from "react";
import {
    Zap,
    Package,
    Users,
    Star,
    Truck,
    ShieldCheck,
    Heart,
    ArrowRight,
} from "lucide-react";

export default function About() {
    return (
        <div className="min-h-screen bg-black text-white font-sans px-6 py-16">
            {/* Header */}
            <div className="max-w-3xl mx-auto text-center mb-14">
                <div className="w-16 h-16 rounded-2xl bg-lime-400 flex items-center justify-center mx-auto mb-6">
                    <Zap size={28} className="text-black fill-black" />
                </div>
                <h1 className="text-5xl font-extrabold mb-5">
                    About <span className="text-lime-400">SkyMart</span>
                </h1>
                <p className="text-gray-400 text-lg leading-relaxed">
                    SkyMart is a next-generation e-commerce platform built to make online
                    shopping fast, fair, and enjoyable — for everyone.
                </p>
            </div>

            {/* Stats */}
            <div className="max-w-5xl mx-auto grid grid-cols-2 lg:grid-cols-4 gap-4 mb-14">
                <div className="border border-gray-800 rounded-2xl px-6 py-8 text-center">
                    <Package size={22} className="text-lime-400 mx-auto mb-3" />
                    <div className="text-3xl font-extrabold">20K+</div>
                    <div className="text-sm text-gray-500 mt-1">Products</div>
                </div>
                <div className="border border-gray-800 rounded-2xl px-6 py-8 text-center">
                    <Users size={22} className="text-lime-400 mx-auto mb-3" />
                    <div className="text-3xl font-extrabold">50K+</div>
                    <div className="text-sm text-gray-500 mt-1">Happy Customers</div>
                </div>
                <div className="border border-gray-800 rounded-2xl px-6 py-8 text-center">
                    <Star size={22} className="text-lime-400 mx-auto mb-3" />
                    <div className="text-3xl font-extrabold">4.9</div>
                    <div className="text-sm text-gray-500 mt-1">Avg. Rating</div>
                </div>
                <div className="border border-gray-800 rounded-2xl px-6 py-8 text-center">
                    <Truck size={22} className="text-lime-400 mx-auto mb-3" />
                    <div className="text-3xl font-extrabold">99%</div>
                    <div className="text-sm text-gray-500 mt-1">On-time Delivery</div>
                </div>
            </div>

            {/* Our Story */}
            <div className="max-w-5xl mx-auto border border-gray-800 rounded-3xl p-10 mb-16">
                <h2 className="text-2xl font-bold mb-5">Our Story</h2>
                <p className="text-gray-400 leading-relaxed mb-4">
                    SkyMart started in 2022 as a small side project — two engineers tired
                    of bloated, slow e-commerce experiences. We asked ourselves: what if
                    shopping online was actually <span className="italic text-gray-300">enjoyable</span>?
                </p>
                <p className="text-gray-400 leading-relaxed mb-4">
                    Three years later, SkyMart serves over 50,000 customers across the
                    country. We stock electronics, fashion, jewelry, and everyday
                    essentials — all at prices that don't require a second mortgage.
                </p>
                <p className="text-gray-400 leading-relaxed">
                    We're still the same team at heart: obsessed with speed,
                    transparency, and making you feel good about every purchase you make
                    here.
                </p>
            </div>

            {/* What We Stand For */}
            <div className="max-w-5xl mx-auto mb-16">
                <h2 className="text-3xl font-extrabold text-center mb-8">
                    What We Stand For
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="border border-gray-800 rounded-2xl p-6 flex gap-4">
                        <div className="w-11 h-11 rounded-xl bg-lime-900/40 flex items-center justify-center shrink-0">
                            <ShieldCheck size={20} className="text-lime-400" />
                        </div>
                        <div>
                            <div className="font-bold mb-1">Trust</div>
                            <p className="text-gray-400 text-sm leading-relaxed">
                                Every product is verified for quality and authenticity before
                                listing.
                            </p>
                        </div>
                    </div>

                    <div className="border border-gray-800 rounded-2xl p-6 flex gap-4">
                        <div className="w-11 h-11 rounded-xl bg-lime-900/40 flex items-center justify-center shrink-0">
                            <Truck size={20} className="text-lime-400" />
                        </div>
                        <div>
                            <div className="font-bold mb-1">Speed</div>
                            <p className="text-gray-400 text-sm leading-relaxed">
                                We obsess over delivery times so your orders arrive when
                                promised.
                            </p>
                        </div>
                    </div>

                    <div className="border border-gray-800 rounded-2xl p-6 flex gap-4">
                        <div className="w-11 h-11 rounded-xl bg-lime-900/40 flex items-center justify-center shrink-0">
                            <Heart size={20} className="text-lime-400" />
                        </div>
                        <div>
                            <div className="font-bold mb-1">Community</div>
                            <p className="text-gray-400 text-sm leading-relaxed">
                                Built around real customer feedback, not just business
                                metrics.
                            </p>
                        </div>
                    </div>

                    <div className="border border-gray-800 rounded-2xl p-6 flex gap-4">
                        <div className="w-11 h-11 rounded-xl bg-lime-900/40 flex items-center justify-center shrink-0">
                            <Star size={20} className="text-lime-400" />
                        </div>
                        <div>
                            <div className="font-bold mb-1">Quality</div>
                            <p className="text-gray-400 text-sm leading-relaxed">
                                We curate the best — no filler, no junk, just great products.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Meet the Team */}
            <div className="max-w-5xl mx-auto mb-16">
                <h2 className="text-3xl font-extrabold text-center mb-8">
                    Meet the Team
                </h2>
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                    <div className="border border-gray-800 rounded-2xl p-6 flex flex-col items-center text-center">
                        <div className="w-14 h-14 rounded-2xl bg-lime-400 text-black font-bold text-lg flex items-center justify-center mb-4">
                            A
                        </div>
                        <div className="font-bold">Aryan Shah</div>
                        <div className="text-sm text-gray-500 mt-1">Founder & CEO</div>
                    </div>

                    <div className="border border-gray-800 rounded-2xl p-6 flex flex-col items-center text-center">
                        <div className="w-14 h-14 rounded-2xl bg-blue-500 text-white font-bold text-lg flex items-center justify-center mb-4">
                            P
                        </div>
                        <div className="font-bold">Priya Mehta</div>
                        <div className="text-sm text-gray-500 mt-1">Head of Product</div>
                    </div>

                    <div className="border border-gray-800 rounded-2xl p-6 flex flex-col items-center text-center">
                        <div className="w-14 h-14 rounded-2xl bg-purple-500 text-white font-bold text-lg flex items-center justify-center mb-4">
                            R
                        </div>
                        <div className="font-bold">Rohan Verma</div>
                        <div className="text-sm text-gray-500 mt-1">Lead Engineer</div>
                    </div>

                    <div className="border border-gray-800 rounded-2xl p-6 flex flex-col items-center text-center">
                        <div className="w-14 h-14 rounded-2xl bg-rose-500 text-white font-bold text-lg flex items-center justify-center mb-4">
                            S
                        </div>
                        <div className="font-bold">Sneha Kapoor</div>
                        <div className="text-sm text-gray-500 mt-1">Design Director</div>
                    </div>
                </div>
            </div>

            {/* CTA */}
            <div className="max-w-5xl mx-auto border border-gray-800 rounded-3xl px-10 py-14 text-center">
                <h2 className="text-3xl font-extrabold mb-3">Ready to shop?</h2>
                <p className="text-gray-400 mb-8">
                    Explore thousands of products at unbeatable prices.
                </p>
                <button className="bg-lime-400 hover:bg-lime-300 text-black font-semibold px-6 py-3 rounded-xl inline-flex items-center gap-2 transition-colors">
                    Browse Products <ArrowRight size={16} />
                </button>
            </div>
        </div>
    );
}