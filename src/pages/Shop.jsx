import React, { useContext, useEffect, useState } from "react";
import { Search, ChevronDown, Star, ShoppingCart, X } from "lucide-react";
import axios from "axios";
import { MyStore } from "../context/MyContext";
import Product from "./Product";

export default function Shop() {
    let { productData, setProductData, cartSaveData } = useContext(MyStore);
    const [SelectItemName, setSelectItemName] = useState([])
    // console.log(productData);

    const Products = async () => {
        try {
            let res = await axios.get('https://dummyjson.com/products');
            setProductData(res.data.products);
        } catch (error) {
            console.log("API Error", error);
        }
    }

    useEffect(() => {
        Products();
    }, [])
    // console.log(cartSaveData);

    const SelectCategory = async (e) => {
        console.log("Selected", e.target.value);
        let valueItem = e.target.value;
        try {
            let res = await axios.get(`https://dummyjson.com/products/category/${valueItem}`);
            console.log("SelectCategory API", res.data.products);

            setSelectItemName(res.data.products);
        } catch (error) {
            console.log("API Error :: ", error);
        }
    }

    console.log("API Cat: ", SelectItemName);


    return (
        <div className="min-h-screen bg-black text-white font-sans px-6 py-8">

            <div className="mb-6">
                <h1 className="text-4xl font-extrabold">All Products</h1>
                <p className="text-gray-400 mt-1">50 products found</p>
            </div>


            <div className="rounded-2xl border border-gray-800 p-4 mb-8 flex flex-col md:flex-row gap-3">
                <div className="flex-1 flex items-center gap-2 bg-black border border-gray-700 rounded-xl px-4 py-3">
                    <Search size={18} className="text-gray-500" />
                    <input
                        type="text"
                        placeholder="Search products..."
                        className="bg-transparent outline-none text-sm w-full placeholder-gray-500"
                    />
                </div>

                <select className="flex items-center justify-between gap-3 border border-gray-700 rounded-xl px-4 py-3 text-sm min-w-[170px] bg-black" onChange={SelectCategory}>
                    <option>All Categories</option>
                    <option value="beauty">beauty</option>
                    <option value="fragrances">fragrances</option>
                    <option value="groceries">groceries</option>
                    <option value="mens-shirts">mens-shirts</option>
                    <option value="vehicle">vehicle</option>
                </select>

                <button className="flex items-center justify-between gap-3 border border-gray-700 rounded-xl px-4 py-3 text-sm min-w-[150px]">
                    Featured <ChevronDown size={16} className="text-gray-400" />
                </button>

                {SelectItemName.length > 0 && (
                    <button className=" flex justify-center items-center gap-2 px-3 font-bold text-red-800 border-1 rounded-2xl" onClick={() => setSelectItemName([])}>
                        <X className="text-sm"/> Clear
                    </button>
                )}
            </div>

            {
                SelectItemName.length == 0 ? (
                    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-5">
                        {productData.map((item) => {
                            let isIncart = cartSaveData.find((val) => val.id === item.id)
                            return <Product key={item.id} products={item} isIncart={isIncart} />
                        })}
                    </div>) :
                    (
                        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-5">
                            {SelectItemName.map((item) => {
                                let isIncart = cartSaveData.find((val) => val.id === item.id)
                                return <Product key={item.id} products={item} isIncart={isIncart} />
                            })}
                        </div>
                    )}
        </div>

    );
}