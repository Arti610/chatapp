import "./App.css";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Login from "./pages/auth/Login.jsx";
import Register from "./pages/auth/Register.jsx";
import Home from "./pages/dashboard/Home.jsx";
import { Toaster } from "react-hot-toast";
import { useAuthContext } from "./context/AuthContext.jsx";


function App() {

  const  {authUser}  = useAuthContext();
  console.log('authUser',authUser);

  return (
    <>
    
        <Routes>
          <Route path="/" element={authUser ? <Home /> : <Navigate to = '/login'/>} />
          <Route path="/login" element={authUser ? <Navigate to ='/'/> : <Login />} />
          <Route path="/register" element={authUser ? <Navigate to ='/'/> : <Register />} />
        </Routes>
  
      <Toaster />
    </>
  );
}

export default App;
