import { useState } from "react";
import toast from "react-hot-toast";
import apis from "../config/apis";
import { useNavigate } from "react-router-dom";



const useSignup = () => {

  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const signup = async (payload) => {
    try {
      setLoading(true);
      const res = await apis.register(payload);
      if (res.status === 201) {
        toast.success("User register successfully");
        navigate("/login");

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
