import { useSocketContext } from "../context/SocketContext";
import useConversation from "../zustand/useConversation";
import  { useEffect } from "react";
import notification from '../assets/notificationsound.mp3'

const useListenMessage = () => {
  const { socket } = useSocketContext();
  const { messages, setMessages } = useConversation();

  useEffect(() => {
    socket?.on("newMessage", (newMessage) => {
      const sound = new Audio(notification)
      sound.play()
      setMessages([...messages, newMessage]);
    });
  }, [socket ,messages, setMessages]);

  return () => socket?.off("newMessage");
};

export default useListenMessage;
