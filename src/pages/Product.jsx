import React, { useContext } from 'react'
import { useNavigate } from 'react-router';
import { Search, ChevronDown, Star, ShoppingCart } from "lucide-react";
import { MyStore } from '../context/MyContext';

function Product({ products, isIncart }) {
    let { setCartSaveData } = useContext(MyStore);
    let navigate = useNavigate();

    const addTOCart = () => {
        setCartSaveData((prev) => [...prev, { ...products, quantity: 1 }]);
    }
    return (
        <div key={products.id} className="bg-white rounded-2xl overflow-hidden flex flex-col">
            <div className="relative" onClick={() => navigate(`/details/${products.id}`)}>
                <span className="absolute top-3 left-3 bg-black/70 text-white text-xs font-medium px-3 py-1 rounded-full z-10">
                    {products.category}
                </span>
                <div className="h-44 bg-yellow-400 flex items-center justify-center text-5xl">
                    <img src={products.images[0]} alt={products.title} className="h-full w-full object-cover p-6" />
                </div>
            </div>
            <div className="p-4 flex flex-col flex-1">
                <div className="text-xs text-gray-500 mb-1">{products.category}</div>
                <div className="font-bold text-gray-900 leading-snug mb-2">
                    {products.title}
                </div>
                <div className="flex items-center gap-1 mb-3">
                    {[1, 2, 3, 4, 5].map((star) => (
                        <Star
                            key={star}
                            size={14}
                            className={
                                star <= Math.round(products.rating)
                                    ? "fill-amber-400 text-amber-400"
                                    : "text-gray-300"
                            }
                        />
                    ))}

                    <span className="text-xs text-gray-400 ml-1">
                        ({products.rating})
                    </span>
                </div>
                <div className="border-t border-gray-100 pt-3 mt-auto flex items-center justify-between">
                    <span className="font-extrabold text-lime-500 text-lg">₹ {products.price} </span>
                    {isIncart && isIncart.quantity > 0 ? (<span className="text-sm text-gray-500">In Cart</span>) : (<button className="flex items-center gap-1 bg-lime-400 hover:bg-lime-300 text-black text-sm font-semibold px-4 py-2 rounded-full transition-colors" onClick={addTOCart}>
                        <ShoppingCart size={14} /> Add
                    </button>)}

                </div>
            </div>
        </div>
    )
}

export default Product
