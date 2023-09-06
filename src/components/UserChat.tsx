import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { BsArrowUp } from "react-icons/bs";
import { RootState } from "../store";
import { MessageInterface, addMessage } from "../reducers";
import viteLogo from "../assets/react.svg";
import Message from "./Message";

const UserChat = () => {
  const dispatch = useDispatch();
  const chats = useSelector((state: RootState) => state.chats.chats);
  const selectedUser = useSelector(
    (state: RootState) => state.chats.selectedUser
  );

  const [message, setMessage] = useState("");

  // ref to manage the converstion element
  const convoElementRef = useRef<HTMLDivElement>(null);

  const [selectedConvo, setSelectedConvo] = useState<MessageInterface[]>([]);

  // change the conversation to the selected user's conversation
  useEffect(() => {
    if (selectedUser) {
      const newChats = chats[selectedUser.id];
      setSelectedConvo(newChats || []);
    } else {
      setSelectedConvo([]);
    }
  }, [selectedUser, chats]);

  //  This useEffect is used for scrolling to the bottom of the conversation when a new conversation is added
  useEffect(() => {
    if (convoElementRef && convoElementRef.current !== null) {
      setTimeout(() => {
        convoElementRef.current!.scrollTo({
          left: 0,
          top: convoElementRef.current!.scrollHeight,
          behavior: "smooth",
        });
      }, 300);
    }
  }, [selectedUser, chats]);

  // function to handle addChat
  const addChat = () => {
    if (message.trim() === "") return;

    dispatch(
      addMessage({
        message: message.trim(),
        userId: selectedUser?.id!,
      })
    );
    setMessage("");
  };

  // this function is to handle addChat when enter is pressed or return key
  const handleKeyDown = (e: any) => {
    if (e.key === "Enter" || e.key === "Return") {
      addChat();
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
            ref={convoElementRef}
            className="w-full flex flex-col flex-1 overflow-y-scroll no_scrollbar"
          >
            <div className="mt-auto flex flex-col">
              {selectedConvo.map((message) => (
                <Message message={message} />
              ))}
            </div>
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
              className="cursor-pointer bottom-2 right-2 rounded-[50%] p-2 flex justify-center items-center bg-blue-600 hover:bg-blue-700 transition-all duration-300 ease-in-out"
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
