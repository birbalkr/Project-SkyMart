import React, { useContext, useState } from 'react'
import { NavLink } from "react-router";
import { Zap, ShoppingCart, LogOut, ArrowRight, Package, TrendingUp, Star, Tag, ShoppingBag, X } from "lucide-react";
import CartData from './CartData';
import { MyStore } from '../context/MyContext';


function Navbar() {
    let { userName } = useContext(MyStore);
    const [isCartOpen, setIsCartOpen] = useState(false);


    const logout = () => {
        console.log("click");
        const isLoginData = JSON.parse(localStorage.getItem('user'));
        localStorage.setItem('user', JSON.stringify({ ...isLoginData, isLogin: false }));
        window.location.pathname = "/"
    }

    return (
        <div className='bg-black text-white font-sans px-6 py-5'>
            <nav className="flex items-center justify-between mb-8">
                <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-full bg-lime-400 flex items-center justify-center">
                        <Zap size={18} className="text-black fill-black" />
                    </div>
                    <span className="text-lg font-bold">
                        Sky<span className="text-lime-400">Mart</span>
                    </span>
                </div>

                <div className="hidden md:flex items-center gap-1">
                    <NavLink
                        to="/"
                        className={({ isActive }) =>
                            `px-3 py-1.5 text-sm font-medium ${isActive ? "text-lime-400" : "text-white hover:text-lime-400"
                            }`
                        }
                    >
                        Home
                    </NavLink>

                    <NavLink
                        to="/shop"
                        className={({ isActive }) =>
                            `px-3 py-1.5 text-sm font-medium ${isActive ? "text-lime-400" : "text-white hover:text-lime-400"
                            }`
                        }
                    >
                        Shop
                    </NavLink>

                    <NavLink
                        to="/about"
                        className={({ isActive }) =>
                            `px-3 py-1.5 text-sm font-medium ${isActive ? "text-lime-400" : "text-white hover:text-lime-400"
                            }`
                        }
                    >
                        About
                    </NavLink>
                </div>

                <div className="flex items-center gap-3">
                    <div className="flex items-center gap-2 border border-gray-700 rounded-full pl-1 pr-4 py-1">
                        <div className="w-7 h-7 rounded-full bg-lime-400 text-black text-xs font-bold flex items-center justify-center">
                            {userName?.charAt(0).toUpperCase()}
                        </div>
                        <span className="text-sm">{userName}</span>
                    </div>
                    <button
                        onClick={() => setIsCartOpen(true)}
                        className="w-9 h-9 rounded-full border border-gray-700 flex items-center justify-center hover:border-gray-500 transition-colors"
                    >
                        <ShoppingCart size={16} />
                    </button>
                    <button className="w-9 h-9 rounded-full border border-gray-700 flex items-center justify-center hover:border-gray-500 transition-colors" onClick={logout}>
                        <LogOut size={16} />
                    </button>
                </div>
            </nav>

            {/* Overlay */}
            {isCartOpen && (
                <div
                    className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40"
                    onClick={() => setIsCartOpen(false)}
                />
            )}

            {/* Cart Drawer */}
            <CartData setIsCartOpen={setIsCartOpen} isCartOpen={isCartOpen} />
        </div>
    )
}

export default Navbar