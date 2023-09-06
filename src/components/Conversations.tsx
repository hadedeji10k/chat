import { useSelector } from "react-redux";
import { RootState } from "../store";
import Conversation from "./Conversation";

const Conversations = () => {
  const chats = useSelector((state: RootState) => state.chats.chats);
  const users = useSelector((state: RootState) => state.chats.users);

  // function to get users last message, for display on the conversation list
  const getLastMessageForUser = (userId: string) => {
    const chat = chats[userId];
    if(chat && chat.length > 0) {
        return chat[chat.length - 1]!;
    } else {
        return null
    }
  };

  return (
    <div>
      {users.length > 0 ? (
        users.map((user) => (
          <Conversation
            key={user.id}
            lastMessage={getLastMessageForUser(user.id)}
            user={user}
          />
        ))
      ) : (
        <p>No conversations available.</p>
      )}
    </div>
  );
};

export default Conversations;
