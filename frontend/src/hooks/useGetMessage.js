import  { useEffect, useState } from "react";
import useConversation from "../zustand/useConversation";
import apis from "../config/apis";
import toast from "react-hot-toast";

const useGetMessage = () => {
  const [loading, setLoading] = useState(false);
  const { messages, setMessages, selectedConversation } = useConversation();
  const id = selectedConversation._id;


  const getMessages = async () => {
    try {
      setLoading(true);
      const res = await apis.getMessage(id);
     
      if (res.status === 200 && res.data.length > 0) {
        setMessages(res.data);
      }
    } catch (error) {
      // toast.error(error.response.data.error);
      console.log(error, 'error');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getMessages();
 
  }, []);

  return { loading, messages };
};

export default useGetMessage;
