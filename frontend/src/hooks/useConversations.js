import { useEffect, useState } from "react";
import apis from "../config/apis";

const useConversations = () => {
  const [loading, setLoading] = useState(false);
  const [conversations, setConversations] = useState([]);

  const getConversations = async () => {
    try {
      setLoading(true);
      const res = await apis.getConversations();
      if (res.status === 200) {
        setConversations(res.data);
      }
    } catch (error) {
      console.log("error get conversations", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getConversations();
  }, []);

  return { loading, conversations };
};

export default useConversations;
