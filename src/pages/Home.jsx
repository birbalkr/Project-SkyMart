import React, { useContext, useEffect, useState } from "react";
import { Zap, ShoppingCart, LogOut, ArrowRight, Package, TrendingUp, Star, Tag, ShoppingBag } from "lucide-react";
import { MyStore } from "../context/MyContext";
import { GetCategoryList } from "../api/ShopAPI";
import axios from "axios";

export default function Home() {
    let { userName } = useContext(MyStore)

    const [categoryListData, setCategoryListData] = useState([])
    const [showAll, setShowAll] = useState(false);

    const displayedCategories = showAll
        ? categoryListData
        : categoryListData.slice(0, 6);

    const categoryList = async () => {
        try {
            let res = await axios.get('https://dummyjson.com/products/category-list')
            setCategoryListData(res.data)
        } catch (error) {
            console.log("API Error", error);
        }
    }

    useEffect(() => {
        categoryList();
    }, [])
    return (
        <div className="min-h-screen bg-black text-white font-sans px-6 py-5">
            {/* Hero */}
            <div
                className="relative rounded-3xl border border-gray-800 p-10 mb-6 overflow-hidden"
                style={{
                    backgroundImage:
                        "linear-gradient(rgba(255,255,255,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.04) 1px, transparent 1px)",
                    backgroundSize: "36px 36px",
                }}
            >
                <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-8">
                    <div className="max-w-xl">
                        <p className="text-lime-400 text-sm font-semibold tracking-wide mb-3 flex items-center gap-2">
                            GOOD MORNING <span>👋</span>
                        </p>
                        <h1 className="text-5xl sm:text-6xl font-extrabold leading-tight mb-4">
                            Welcome back,
                            <br />
                            <span className="text-lime-400">{userName}</span>
                        </h1>
                        <p className="text-gray-400 text-base mb-8">
                            Discover today's picks — hand-curated products across
                            electronics, fashion, and more.
                        </p>
                        <div className="flex items-center gap-3">
                            <button className="bg-lime-400 text-black font-semibold px-5 py-3 rounded-xl flex items-center gap-2 hover:bg-lime-300 transition-colors">
                                Shop Now <ArrowRight size={16} />
                            </button>
                            <button className="border border-gray-700 font-semibold px-5 py-3 rounded-xl hover:border-gray-500 transition-colors">
                                View All Products
                            </button>
                        </div>
                    </div>

                    <div className="flex flex-col gap-4 shrink-0">
                        <div className="rounded-2xl bg-lime-900/40 border border-lime-800/50 px-8 py-6 text-center">
                            <div className="text-3xl font-extrabold text-lime-400">20+</div>
                            <div className="text-sm text-gray-300 mt-1">Products Available</div>
                        </div>
                        <div className="rounded-2xl border border-gray-700 px-8 py-6 text-center">
                            <div className="text-3xl font-extrabold text-white">Free</div>
                            <div className="text-sm text-gray-400 mt-1">Delivery on ₹999+</div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Stats Row */}
            <div className="flex flex-wrap gap-4">
                <div className="flex-1 min-w-[200px] rounded-2xl border border-gray-800 bg-black/40 p-5 flex items-center gap-4">
                    <div className="w-11 h-11 rounded-xl flex items-center justify-center shrink-0" style={{ backgroundColor: "rgba(163,230,53,0.15)" }}>
                        <Package size={20} className="text-lime-400" />
                    </div>
                    <div>
                        <div className="text-2xl font-bold text-white leading-tight">0</div>
                        <div className="text-sm text-gray-200">Cart Items</div>
                        <div className="text-xs text-gray-500">In your bag</div>
                    </div>
                </div>

                <div className="flex-1 min-w-[200px] rounded-2xl border border-gray-800 bg-black/40 p-5 flex items-center gap-4">
                    <div className="w-11 h-11 rounded-xl flex items-center justify-center shrink-0" style={{ backgroundColor: "rgba(59,130,246,0.15)" }}>
                        <TrendingUp size={20} className="text-blue-400" />
                    </div>
                    <div>
                        <div className="text-2xl font-bold text-white leading-tight">$0.00</div>
                        <div className="text-sm text-gray-200">Cart Value</div>
                        <div className="text-xs text-gray-500">Ready to checkout</div>
                    </div>
                </div>

                <div className="flex-1 min-w-[200px] rounded-2xl border border-gray-800 bg-black/40 p-5 flex items-center gap-4">
                    <div className="w-11 h-11 rounded-xl flex items-center justify-center shrink-0" style={{ backgroundColor: "rgba(245,158,11,0.15)" }}>
                        <Star size={20} className="text-amber-400" />
                    </div>
                    <div>
                        <div className="text-2xl font-bold text-white leading-tight">5</div>
                        <div className="text-sm text-gray-200">Top Products</div>
                        <div className="text-xs text-gray-500">Highly rated</div>
                    </div>
                </div>

                <div className="flex-1 min-w-[200px] rounded-2xl border border-gray-800 bg-black/40 p-5 flex items-center gap-4">
                    <div className="w-11 h-11 rounded-xl flex items-center justify-center shrink-0" style={{ backgroundColor: "rgba(168,85,247,0.15)" }}>
                        <Tag size={20} className="text-purple-400" />
                    </div>
                    <div>
                        <div className="text-2xl font-bold text-white leading-tight">6</div>
                        <div className="text-sm text-gray-200">Categories</div>
                        <div className="text-xs text-gray-500">To explore</div>
                    </div>
                </div>
            </div>

            {/* Shop by Category */}
            <div className="mt-10">
                <div className="flex items-center justify-between mb-4">
                    <h2 className="text-2xl font-bold">Shop by Category</h2>
                    {categoryListData.length > 6 && (
                        <div className="text-center mt-6">
                            <button className="text-sm font-medium text-lime-400 hover:text-lime-300 flex items-center gap-1" onClick={() =>
                                setShowAll(!showAll)}>

                                {showAll ? "Show Less" : "View All"}
                            </button>
                        </div>
                    )}
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
                    {displayedCategories.map((item, index) => (
                        <div
                            key={index}
                            className="bg-white rounded-2xl p-6 text-center"
                        >
                            <div className="text-3xl mb-3">💻</div>
                            <div className="font-bold text-gray-900">{item}</div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Top Rated & New Arrivals */}
            <div className="mt-10 grid grid-cols-1 lg:grid-cols-2 gap-6">
                {/* Top Rated */}
                <div className="bg-white rounded-3xl p-6">
                    <div className="flex items-center justify-between mb-5">
                        <div className="flex items-center gap-2 font-bold text-gray-900 text-lg">
                            <Star size={18} className="text-amber-400 fill-amber-400" /> Top Rated
                        </div>
                        <a href="#" className="text-sm font-medium text-lime-500 hover:text-lime-600 flex items-center gap-1">
                            See all <ArrowRight size={14} />
                        </a>
                    </div>
                    <div className="flex flex-col gap-3">
                        <div className="flex items-center gap-4 border border-gray-200 rounded-2xl p-3">
                            <div className="w-12 h-12 rounded-xl overflow-hidden shrink-0 bg-rose-200" />
                            <div className="flex-1 font-bold text-lime-500">$599.99</div>
                            <button className="w-9 h-9 rounded-xl bg-lime-50 flex items-center justify-center">
                                <ShoppingBag size={16} className="text-lime-500" />
                            </button>
                        </div>
                        <div className="flex items-center gap-4 border border-gray-200 rounded-2xl p-3">
                            <div className="w-12 h-12 rounded-xl overflow-hidden shrink-0 bg-amber-100" />
                            <div className="flex-1 font-bold text-lime-500">$199.99</div>
                            <button className="w-9 h-9 rounded-xl bg-lime-50 flex items-center justify-center">
                                <ShoppingBag size={16} className="text-lime-500" />
                            </button>
                        </div>
                        <div className="flex items-center gap-4 border border-gray-200 rounded-2xl p-3">
                            <div className="w-12 h-12 rounded-xl overflow-hidden shrink-0 bg-gray-900" />
                            <div className="flex-1 font-bold text-lime-500">$149.99</div>
                            <button className="w-9 h-9 rounded-xl bg-lime-50 flex items-center justify-center">
                                <ShoppingBag size={16} className="text-lime-500" />
                            </button>
                        </div>
                    </div>
                </div>

                {/* New Arrivals */}
                <div className="bg-white rounded-3xl p-6">
                    <div className="flex items-center justify-between mb-5">
                        <div className="flex items-center gap-2 font-bold text-gray-900 text-lg">
                            <Zap size={18} className="text-lime-400 fill-lime-400" /> New Arrivals
                        </div>
                        <a href="#" className="text-sm font-medium text-lime-500 hover:text-lime-600 flex items-center gap-1">
                            See all <ArrowRight size={14} />
                        </a>
                    </div>
                    <div className="flex flex-col gap-3">
                        <div className="flex items-center gap-4 border border-gray-200 rounded-2xl p-3">
                            <div className="w-12 h-12 rounded-xl overflow-hidden shrink-0 bg-yellow-400" />
                            <div className="flex-1 font-bold text-lime-500">$99.99</div>
                            <button className="w-9 h-9 rounded-xl bg-lime-50 flex items-center justify-center">
                                <ShoppingBag size={16} className="text-lime-500" />
                            </button>
                        </div>
                        <div className="flex items-center gap-4 border border-gray-200 rounded-2xl p-3">
                            <div className="w-12 h-12 rounded-xl overflow-hidden shrink-0 bg-gray-200" />
                            <div className="flex-1 font-bold text-lime-500">$299.99</div>
                            <button className="w-9 h-9 rounded-xl bg-lime-50 flex items-center justify-center">
                                <ShoppingBag size={16} className="text-lime-500" />
                            </button>
                        </div>
                        <div className="flex items-center gap-4 border border-gray-200 rounded-2xl p-3">
                            <div className="w-12 h-12 rounded-xl overflow-hidden shrink-0 bg-gray-100" />
                            <div className="flex-1 font-bold text-lime-500">$49.99</div>
                            <button className="w-9 h-9 rounded-xl bg-lime-50 flex items-center justify-center">
                                <ShoppingBag size={16} className="text-lime-500" />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}