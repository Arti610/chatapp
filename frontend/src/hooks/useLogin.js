import React, { useState } from "react";
import toast from "react-hot-toast";
import apis from "../config/apis";
import { useNavigate } from "react-router-dom";
import { useAuthContext } from "../context/AuthContext";

const useLogin = () => {
  const navigate = useNavigate();

  const { setAuthUser } = useAuthContext();
  const [loading, setLoading] = useState();

  const login = async (payload) => {
    try {
      setLoading(true);
      const res = await apis.login(payload);

      if (res.status === 200) {
        toast.success("Login successfully");
        localStorage.setItem("chat-user", JSON.stringify(res.data));
        setAuthUser(res.data);
        navigate("/");
      }
      
    } catch (error) {
      toast.error(error.response.data.error);
    } finally {
      setLoading(false);
    }
  };

  return { loading, login };
};

export default useLogin;
