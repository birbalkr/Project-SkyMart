
import LoginRoutes from "./routes/LoginRoutes"
import AppRoutes from "./routes/AppRoutes";
import { Navigate } from "react-router";
import { useEffect } from "react";
import Navbar from "./components/Navbar";


function App() {

  const isLoginData = JSON.parse(localStorage.getItem('user'));

  useEffect(() => {
    if (isLoginData.isLogin) {
      return
    }
    else {
      if (window.location.pathname !== "/login") {
        window.location.pathname = "/login"
      }
    }
  }, [isLoginData.isLogin]);

  return (
    <>
      {
        isLoginData.isLogin ?
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
