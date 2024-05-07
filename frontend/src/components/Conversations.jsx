import useConversations from "../hooks/useConversations";
import Conversation from "./Conversation";

const Conversations = () => {
  const { loading, conversations } = useConversations();

  return (
    <div className="py-10  flex flex-col overflow-auto">
      {conversations.map((conversation, i) => {
        return <Conversation item={conversation} key={i} />;
      })}

      {loading ? (
        <span className="loading loading-spinner mx-auto"></span>
      ) : null}
    </div>
  );
};
export default Conversations;
