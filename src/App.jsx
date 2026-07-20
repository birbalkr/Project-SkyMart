import AppRoutes from "./routes/AppRoutes";
import LoginRoutes from "./routes/LoginRoutes";
import Navbar from "./components/Navbar";
import { Navigate, Route, Routes } from "react-router";
import { GetProduct } from "./api/ShopAPI";

function App() {
  const user = JSON.parse(localStorage.getItem("user") || "null");
  const isLogin = user?.isLogin ?? false;

  if (!isLogin) {
    return (
      <LoginRoutes />
    );
  }

  return (
    <div className="bg-black text-white font-sans">
      <div className="mx-16">
        <Navbar />
        <AppRoutes />

      </div>
    </div>
  );
}

export default App;