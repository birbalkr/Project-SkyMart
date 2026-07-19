import AppRoutes from "./routes/AppRoutes";
import LoginRoutes from "./routes/LoginRoutes";
import Navbar from "./components/Navbar";
import { Navigate } from "react-router";

function App() {
  const user = JSON.parse(localStorage.getItem("user") || "null");
  const isLogin = user?.isLogin ?? false;

  if (!isLogin) {
    return (
      <>
        <Navigate to="/login" replace />
        <LoginRoutes />
      </>
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