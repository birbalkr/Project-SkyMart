import { createContext } from "react";

export const MyStore = createContext()

export const ConstextProvider = ({ children }) => {
     let userName = JSON.parse(localStorage.getItem('user'))?.name;



    return <MyStore.Provider value={{userName}}>
        {children}
    </MyStore.Provider>
}