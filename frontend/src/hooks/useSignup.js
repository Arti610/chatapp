import { useState } from "react";
import toast from "react-hot-toast";
import apis from "../config/apis";
import { useNavigate } from "react-router-dom";
import { useAuthContext } from "../context/AuthContext";


const useSignup = () => {
  const { setAuthUser } = useAuthContext();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const signup = async (payload) => {
    try {
      setLoading(true);
      const res = await apis.register(payload);
      if (res.status === 201) {
        toast.success("User register successfully");
        navigate("/login");
        localStorage.setItem("chat-user", JSON.stringify(res.data));
        setAuthUser(res.data);
      }
    } catch (error) {
      toast.error(error.response.data.error);
    } finally {
      setLoading(false);
    }
  };
  return { loading, signup };
};

export default useSignup;
