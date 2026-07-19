import AppRoutes from "./routes/AppRoutes";
import LoginRoutes from "./routes/LoginRoutes";
import Navbar from "./components/Navbar";

function App() {
  const user = JSON.parse(localStorage.getItem("user") || "null");
  const isLogin = user?.isLogin ?? false;

  return (
    <>
      {isLogin ? (
        <div className="bg-black text-white font-sans">
          <div className="mx-16">
            <Navbar />
            <AppRoutes />
          </div>
        </div>
      ) : (
        <LoginRoutes />
      )}
    </>
  );
}

export default App;