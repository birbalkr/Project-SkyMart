import React, { useEffect, useState } from "react";
import { Search, ChevronDown, Star, ShoppingCart } from "lucide-react";
import axios from "axios";

export default function Shop() {
    const [productData, setProductData] = useState([]);

    const Products = async () => {
        try {
            let res = await axios.get('https://dummyjson.com/products');
            setProductData(res.data.products);
        } catch (error) {
            console.log("API Error", error);
        }
    }

    console.log(productData);

    useEffect(() => {
        Products();
    }, [])
    return (
        <div className="min-h-screen bg-black text-white font-sans px-6 py-8">
            {/* Header */}
            <div className="mb-6">
                <h1 className="text-4xl font-extrabold">All Products</h1>
                <p className="text-gray-400 mt-1">50 products found</p>
            </div>

            {/* Search & Filters */}
            <div className="rounded-2xl border border-gray-800 p-4 mb-8 flex flex-col md:flex-row gap-3">
                <div className="flex-1 flex items-center gap-2 bg-black border border-gray-700 rounded-xl px-4 py-3">
                    <Search size={18} className="text-gray-500" />
                    <input
                        type="text"
                        placeholder="Search products..."
                        className="bg-transparent outline-none text-sm w-full placeholder-gray-500"
                    />
                </div>

                <button className="flex items-center justify-between gap-3 border border-gray-700 rounded-xl px-4 py-3 text-sm min-w-[170px]">
                    All Categories <ChevronDown size={16} className="text-gray-400" />
                </button>

                <button className="flex items-center justify-between gap-3 border border-gray-700 rounded-xl px-4 py-3 text-sm min-w-[150px]">
                    Featured <ChevronDown size={16} className="text-gray-400" />
                </button>
            </div>

            {/* Product Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-5">
                {/* Card 1 */}
                {productData.map((item) => (
                    <div key={item.id} className="bg-white rounded-2xl overflow-hidden flex flex-col">
                        <div className="relative">
                            <span className="absolute top-3 left-3 bg-black/70 text-white text-xs font-medium px-3 py-1 rounded-full z-10">
                                {item.category}
                            </span>
                            <div className="h-44 bg-yellow-400 flex items-center justify-center text-5xl">
                                <img src={item.images[0]} alt={item.title} className="h-full w-full object-cover p-6" />
                            </div>
                        </div>
                        <div className="p-4 flex flex-col flex-1">
                            <div className="text-xs text-gray-500 mb-1">{item.category}</div>
                            <div className="font-bold text-gray-900 leading-snug mb-2">
                                {item.title}
                            </div>
                            <div className="flex items-center gap-1 mb-3">
                                {[1, 2, 3, 4, 5].map((star) => (
                                    <Star
                                        key={star}
                                        size={14}
                                        className={
                                            star <= Math.round(item.rating)
                                                ? "fill-amber-400 text-amber-400"
                                                : "text-gray-300"
                                        }
                                    />
                                ))}

                                <span className="text-xs text-gray-400 ml-1">
                                    ({item.rating})
                                </span>
                            </div>
                            <div className="border-t border-gray-100 pt-3 mt-auto flex items-center justify-between">
                                <span className="font-extrabold text-lime-500 text-lg">₹ {item.price} </span>
                                <button className="flex items-center gap-1 bg-lime-400 hover:bg-lime-300 text-black text-sm font-semibold px-4 py-2 rounded-full transition-colors">
                                    <ShoppingCart size={14} /> Add
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}