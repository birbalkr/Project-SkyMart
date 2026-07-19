
import LoginRoutes from "./routes/LoginRoutes"
import AppRoutes from "./routes/AppRoutes";
import { Navigate } from "react-router";
import { useEffect } from "react";
import Navbar from "./components/Navbar";


function App() {

  const user = JSON.parse(localStorage.getItem("user") || "null");
  const isLogin = user?.isLogin ?? false;

  useEffect(() => {
    if (!isLogin && window.location.pathname !== "/login") {
      window.location.pathname = "/login";
    }
  }, [isLogin]);


  return (
    <>
      {
        isLogin ?
          <div className="bg-black text-white font-sans">
            <div className="mx-16">
              <Navbar />
              <AppRoutes />
            </div>
          </div>
          : <LoginRoutes />
      }
    </>
  )
}

export default App
