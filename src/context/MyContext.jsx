import { createContext } from "react";
import { GetCategoryList } from "../api/ShopAPI";

export const MyStore = createContext()

export const ConstextProvider = ({ children }) => {

    let userName = JSON.parse(localStorage.getItem('user'))?.name;

    return <MyStore.Provider value={{ userName }}>
        {children}
    </MyStore.Provider>
}