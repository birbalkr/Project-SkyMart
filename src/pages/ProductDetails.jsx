import { useContext, useEffect } from "react";
import { Star, Truck, ShieldCheck, RotateCcw, Package, Minus, Plus } from "lucide-react";
import { useParams } from "react-router";
import axios from "axios";
import { MyStore } from "../context/MyContext";



function Stars({ rating }) {
    const full = Math.round(rating);
    return (
        <div className="flex items-center gap-0.5">
            {[1, 2, 3, 4, 5].map((n) => (
                <Star
                    key={n}
                    size={16}
                    className={n <= full ? "fill-lime-400 text-lime-400" : "text-neutral-700"}
                />
            ))}
        </div>
    );
}

export default function ProductDetails() {

    let { productDetails, setProductDetails } = useContext(MyStore);
    let { id } = useParams();

    const discounted =
        productDetails.price -
        (productDetails.price * productDetails.discountPercentage) / 100;

    let SingleProduct = async () => {
        try {
            let res = await axios.get(`https://dummyjson.com/products/${id}`);
            setProductDetails(res.data);

        } catch (error) {
            console.log("API Error : ", error);

        }
    }

    useEffect(() => {
        SingleProduct();
    }, [])

    return (
        <div className="min-h-screen bg-neutral-900 text-neutral-200 px-5 py-10">
            <div className="max-w-5xl mx-auto">
                {/* breadcrumb */}
                <p className="text-xs uppercase tracking-widest text-neutral-500 mb-8">
                    {productDetails.category} <span className="text-neutral-700">/</span>{" "}
                    <span className="text-lime-400">{productDetails.brand}</span>
                </p>

                <div className="grid md:grid-cols-2 gap-10">
                    {/* Gallery */}
                    <div>
                        <div className="aspect-square bg-neutral-800 rounded-xl overflow-hidden border border-neutral-800">
                            <img
                                src={productDetails.images?.[0]}
                                alt={productDetails.title}
                                className="w-full h-full object-cover"
                            />
                        </div>
                    </div>

                    {/* Info */}
                    <div>
                        <h1 className="text-2xl md:text-3xl font-bold text-white">{productDetails.title}</h1>

                        <div className="flex items-center gap-3 mt-3">
                            <Stars rating={productDetails.rating} />
                            <span className="text-sm text-neutral-400">{productDetails.rating}</span>
                            <span className="text-neutral-700">•</span>
                            <span className="text-sm text-neutral-400">SKU {productDetails.sku}</span>
                        </div>

                        <p className="text-neutral-400 text-sm leading-relaxed mt-5">
                            {productDetails.description}
                        </p>

                        {/* Price */}
                        <div className="flex items-end gap-3 mt-6">
                            <span className="text-3xl font-bold text-lime-400">
                                ₹ {discounted.toFixed(2)}
                            </span>
                            <span className="text-neutral-500 line-through text-sm mb-1">
                                ₹ {productDetails.price}
                            </span>
                            <span className="text-xs bg-lime-400/10 text-lime-400 px-2 py-0.5 rounded mb-1">
                                -{productDetails.discountPercentage}%
                            </span>
                        </div>

                        {/* Stock */}
                        <div className="flex items-center gap-2 mt-3">
                            <span
                                className={`w-2 h-2 rounded-full ${productDetails ? "bg-lime-400" : "bg-red-500"}`}
                            />
                            <span className="text-sm text-neutral-400">
                                {productDetails.availabilityStatus} • {productDetails.stock} left
                            </span>
                        </div>

                        {/* Tags */}
                        <div className="flex gap-2 mt-4 flex-wrap">
                            {productDetails.tags?.map((tag, index) => (
                                <span
                                    key={index}
                                    className="text-xs px-2.5 py-1 rounded-full bg-neutral-800 text-neutral-400 border border-neutral-700"
                                >
                                    #{tag}
                                </span>
                            ))}
                        </div>

                        {/* Quantity + CTA */}
                        {productDetails.minimumOrderQuantity > 1 && (
                            <p className="text-xs text-neutral-500 mt-2">
                                Minimum order quantity: {productDetails.minimumOrderQuantity}
                            </p>
                        )}

                        {/* Info rows */}
                        <div className="grid grid-cols-1 gap-3 mt-8 border-t border-neutral-800 pt-6">
                            <div className="flex items-center gap-3 text-sm text-neutral-400">
                                <Truck size={16} className="text-lime-400 shrink-0" />
                                {productDetails.shippingInformation}
                            </div>
                            <div className="flex items-center gap-3 text-sm text-neutral-400">
                                <ShieldCheck size={16} className="text-lime-400 shrink-0" />
                                {productDetails.warrantyInformation}
                            </div>
                            <div className="flex items-center gap-3 text-sm text-neutral-400">
                                <RotateCcw size={16} className="text-lime-400 shrink-0" />
                                {productDetails.returnPolicy}
                            </div>
                        </div>
                    </div>
                </div>

                {/* Reviews */}
                <div className="mt-16">
                    <h2 className="text-lg font-bold text-white mb-5">
                        Reviews ({productDetails.reviews?.length})
                    </h2>
                    <div className="grid md:grid-cols-3 gap-4">
                        {productDetails.reviews?.map((r, i) => (
                            <div
                                key={i}
                                className="bg-neutral-800/60 border border-neutral-800 rounded-lg p-4"
                            >
                                <Stars rating={r.rating} />
                                <p className="text-sm text-neutral-300 mt-3">{r.comment}</p>
                                <p className="text-xs text-neutral-500 mt-4">{r.reviewerName}</p>
                                <p className="text-xs text-neutral-600">
                                    {new Date(r.date).toLocaleDateString()}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}