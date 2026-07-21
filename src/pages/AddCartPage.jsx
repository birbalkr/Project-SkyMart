import React, { useContext } from 'react'
import {
    Zap, ShoppingCart, LogOut, ArrowRight, Package, TrendingUp, Star, Tag, ShoppingBag, X, Minus,
    Plus, Trash2,
} from "lucide-react";
import { MyStore } from '../context/MyContext';

function AddCartPage() {
    let { incrementQuantity, decrementQuantity, cartSaveData, setCartSaveData } = useContext(MyStore);

    const cartItemDelete = (id) => {
        console.log("click", id);
        setCartSaveData((prev) => prev.filter((item) => item.id !== id));

    }

    return (
        <>
            {cartSaveData.map((elem) => {
                return (
                    <div key={elem.id} className="flex-1 overflow-y-auto px-6 py-5 flex flex-col gap-5">
                        <div key={elem.id} className="flex gap-4 products-center animate-in">
                            <div className="w-16 h-16 rounded-xl bg-neutral-900 overflow-hidden shrink-0">
                                <img src={elem.images?.[0]} alt={elem.title} className="w-full h-full object-cover" />
                            </div>
                            <div className="flex-1 min-w-0">
                                <p className="text-white font-semibold text-sm truncate">{elem.title}</p>
                                <div className="flex products-center gap-2 mt-1">
                                    <span className="text-lime-400 font-bold text-sm">₹ {((elem.price - (elem.price * elem.discountPercentage) / 100) * elem.quantity).toFixed(2)}</span>
                                    {elem.discountPercentage > 0 && (
                                        <span className="text-neutral-600 text-xs line-through">
                                            ₹{elem.price.toFixed(2)}
                                        </span>
                                    )}
                                </div>
                                <div className="flex products-center gap-2 mt-2">
                                    <button
                                        onClick={() => decrementQuantity(elem.id)}
                                        className="w-6 h-6 flex products-center justify-center rounded-full border border-neutral-700 text-neutral-400 hover:border-lime-400 hover:text-lime-400 transition-colors"
                                    >
                                        <Minus size={11} />
                                    </button>
                                    <span className="w-4 text-center text-xs font-mono text-neutral-200">
                                        {elem.quantity}
                                    </span>
                                    <button
                                        onClick={() => incrementQuantity(elem.id)}
                                        className="w-6 h-6 flex products-center justify-center rounded-full border border-neutral-700 text-neutral-400 hover:border-lime-400 hover:text-lime-400 transition-colors"
                                    >
                                        <Plus size={11} />
                                    </button>
                                </div>
                            </div>

                            <button
                                className="text-neutral-600 hover:text-red-400 transition-colors shrink-0" onClick={() => cartItemDelete(elem.id)}
                            >
                                <Trash2 size={16} />
                            </button>
                        </div>
                    </div>
                )
            })}

            <div className="border-t border-neutral-800 px-6 py-5">
                <div className="flex justify-between products-center mb-4">
                    <span className="text-neutral-400 text-sm">Total</span>
                    <span className="text-white font-black text-xl">₹</span>
                </div>
                <button className="w-full flex products-center justify-center gap-2 bg-lime-400 hover:bg-lime-300 text-neutral-950 font-bold py-3.5 rounded-full transition-colors" onClick={()=>setCartSaveData([])}>
                    Checkout <ArrowRight size={16} />
                </button>
            </div>
        </>
    )
}

export default AddCartPage
