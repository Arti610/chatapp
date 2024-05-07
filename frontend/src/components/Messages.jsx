import { useEffect, useRef } from "react";
import useGetMessage from "../hooks/useGetMessage";
import useConversation from "../zustand/useConversation";
import Message from "./Message";
import Skeleton from "./Skeleton";

const Messages = () => {
  const { loading, messages } = useGetMessage();
  const lastMessageRef = useRef();
console.log('messages',messages);

  useEffect(() => {
    setTimeout(() => {
      lastMessageRef.current?.scrollIntoView({ behavior: "smooth" });
    }, 100);
  }, [messages]);

  return (
    <div className="px-4 flex-1 overflow-auto">
      {messages.map((item, i) => {
        return (
          <div key={i} ref={lastMessageRef}>
            <Message message={item} />
          </div>
        );
      })}
      {loading && [...Array(3)].map((_, idx) => <Skeleton key={idx} />)}
      {!loading && messages.length === 0 && (
        <p className="text-center">Send a message to start the conversation</p>
      )}
    </div>
  );
};
export default Messages;
