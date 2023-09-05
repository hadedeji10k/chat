import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { BsArrowUp } from "react-icons/bs";
import { RootState } from "../store";
import { MessageInterface, addMessage } from "../reducers";
import viteLogo from "../assets/react.svg";
import { formatDateTime } from "../utils/helper";

const UserChat = () => {
  const dispach = useDispatch();
  const chats = useSelector((state: RootState) => state.chats.chats);
  const selectedUser = useSelector(
    (state: RootState) => state.chats.selectedUser
  );

  const [message, setMessage] = useState("");

  const [selectedConvo, setSelectedConvo] = useState<MessageInterface[]>([]);

  useEffect(() => {
    if (selectedUser) {
      const newChats = chats[selectedUser.id];
      setSelectedConvo(newChats || []);
    } else {
      setSelectedConvo([]);
    }
  }, [selectedUser, chats]);

  useEffect(() => {
    const convoElement = document.getElementById("convoElement");
    if (convoElement) {
      setTimeout(() => {
        convoElement.scrollTo({
          left: 0,
          top: convoElement.scrollHeight,
          behavior: "smooth",
        });
      }, 300);
    }
  }, [selectedUser, chats]);

  const addChat = () => {
    if(message.length <= 0) {
      return
    }
    dispach(
      addMessage({
        message: message,
        userId: selectedUser?.id!,
      })
    );
    setMessage(() => {
      return "";
    });
  };

  const handleKeyDown = (e: any) => {
    if (e.key === "Enter" || e.key === "Return") {
      addChat()
    }
  };

  return (
    <>
      {selectedUser?.id ? (
        <>
          <div className="bg-gray-200 flex items-center py-4 pl-6 pr-4">
            <div>
              <img src={viteLogo} className="w-[30px] h-[50px] rounded-[50%]" />
            </div>
            <p className="text-xl font-semibold ml-3">{selectedUser.name}</p>
          </div>
          <div
            id="convoElement"
            className="w-full flex flex-col flex-1 overflow-y-scroll no_scrollbar"
          >
            {selectedConvo.map((item) => (
              <>
                {item.from === "me" ? (
                  <div className="w-full flex items-end justify-end">
                    <div className="chat-message receiver max-w-[70%]">
                      <div className="message-content">
                        <p className="text-sm font-medium">{item.message}</p>
                        <p className="text-right text-[10px] font-normal">
                          {formatDateTime(item.date)}
                        </p>
                      </div>
                    </div>
                  </div>
                ) : (
                  <div className="w-full flex items-start justify-start">
                    <div className="chat-message sender !bg-gray-200 max-w-[70%]">
                      <div className="message-content text-black">
                        <p className="text-sm font-medium">{item.message}</p>
                        <p className="text-right text-[10px] font-normal">
                          {formatDateTime(item.date)}
                        </p>
                      </div>
                    </div>
                  </div>
                )}
              </>
            ))}
          </div>
          <div className="pb-4 w-full px-3 py-2 flex flex-row justify-center items-center gap-x-5">
            <input
              type="text"
              className="rounded-2xl bg-gray-200 h-10 w-full px-3 focus:outline-none"
              placeholder="Message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              onKeyDown={handleKeyDown}
            />
            <p
              className="cursor-pointer bottom-2 right-2 rounded-[50%] h-10 w-10 flex justify-center items-center bg-blue-600"
              onClick={addChat}
            >
              <BsArrowUp fill="white" size="1.5rem" />
            </p>
          </div>
        </>
      ) : (
        <div className="w-full h-full flex items-center justify-center">
          <p>Select a conversation</p>
        </div>
      )}
    </>
  );
};

export default UserChat;
