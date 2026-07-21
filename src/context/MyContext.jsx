import { createContext, useState } from "react";
import { GetCategoryList } from "../api/ShopAPI";

export const MyStore = createContext()

export const ConstextProvider = ({ children }) => {
    let userName = JSON.parse(localStorage.getItem('user'))?.name;

    const [productData, setProductData] = useState([]);
    const [productDetails, setProductDetails] = useState({});

    const [cartSaveData, setCartSaveData] = useState([]);

    const incrementQuantity = (id) => {
        setCartSaveData((prev) =>
            prev.map((item) =>
                item.id === id ? { ...item, quantity: item.quantity + 1 } : item
            )
        );
        console.log(id);
    };

    const decrementQuantity = (id) => {
        setCartSaveData((prev) =>
            prev
                .map((item) =>
                    item.id === id
                        ? { ...item, quantity: item.quantity - 1 }
                        : item
                )
                .filter((item) => item.quantity > 0)
        );
    };



    return <MyStore.Provider value={{ userName, productData, setProductData, productDetails, setProductDetails, cartSaveData, setCartSaveData, incrementQuantity, decrementQuantity }}>
        {children}
    </MyStore.Provider>
}