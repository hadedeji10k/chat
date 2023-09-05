import { useSelector } from "react-redux";
import { RootState } from "../store";
import Conversation from "./Conversation";

const Conversations = () => {
  const chats = useSelector((state: RootState) => state.chats.chats);
  const users = useSelector((state: RootState) => state.chats.users);

  const getUserLastChat = (userId: string) => {
    const chat = chats[userId];
    if(chat && chat.length > 0) {
        return chat[chat.length - 1]!;
    } else {
        return null
    }
  };

  return (
    <div>
      {users.map((user) => (
        <Conversation
          lastMessage={getUserLastChat(user.id)}
          user={user}
        />
      ))}
    </div>
  );
};

export default Conversations;
