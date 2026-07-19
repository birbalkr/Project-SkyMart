import React from 'react'
import { Zap, ShoppingCart, LogOut, ArrowRight, Package, TrendingUp, Star, Tag, ShoppingBag, X } from "lucide-react";


function CartData({ setIsCartOpen, isCartOpen }) {
    return (
        <div
            className={`fixed top-0 right-0 h-full w-full max-w-md bg-black border-l border-gray-800 z-50 transform transition-transform duration-300 ease-in-out ${isCartOpen ? "translate-x-0" : "translate-x-full"
                }`}
        >
            <div className="flex items-center justify-between px-6 py-5 border-b border-gray-800">
                <div className="flex items-center gap-2 text-lg font-bold">
                    <ShoppingBag size={20} className="text-lime-400" />
                    Cart
                </div>
                <button
                    onClick={() => setIsCartOpen(false)}
                    className="text-gray-400 hover:text-white transition-colors"
                >
                    <X size={22} />
                </button>
            </div>

            <div className="flex flex-col items-center justify-center text-center px-6 h-[70%]">
                <div className="w-20 h-20 rounded-2xl bg-gray-900 flex items-center justify-center mb-6">
                    <Package size={32} className="text-gray-600" />
                </div>
                <h3 className="text-xl font-bold mb-1">Cart is empty</h3>
                <p className="text-gray-500 mb-6">Go shop something cool!</p>
                <button className="bg-lime-400 hover:bg-lime-300 text-black font-semibold px-6 py-3 rounded-xl transition-colors">
                    Browse Products
                </button>
            </div>
        </div>
    )
}

export default CartData
