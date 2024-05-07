import  { useState } from "react";
import toast from "react-hot-toast";
import apis from "../config/apis";
import useConversation from "../zustand/useConversation";

const useSendMessage = () => {
  const [loading, setLoading] = useState(false);
  const { selectedConversation, messages, setMessages } = useConversation();
  const id = selectedConversation._id;

  const sendMessage = async (payload) => {
    
    try {
      setLoading(true);
      const res = await apis.sendMessage(id, payload);
      if (res.status === 201) {
       
        setMessages([...messages, res.data]);
      }
    } catch (error) {
      toast.error(error.response.data.error);
    } finally {
      setLoading(false);
    }
  };
  return { loading, sendMessage };
};

export default useSendMessage;
