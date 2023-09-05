import { BiSolidPencil } from "react-icons/bi";
import { useDispatch } from "react-redux";
import { addUser } from "../reducers";
import Conversations from "../components/Conversations";
import Swal from "sweetalert2";
import UserChat from "../components/UserChat";

const Chat = () => {
  const dispach = useDispatch()

  const addConversation = async () => {
    const { value: name } = await Swal.fire({
      title: "Enter user name",
      input: "text",
      inputLabel: "Name",
    });

    if (name) {
      dispach(addUser({
        name
      }))
    }
  }
  
  return (
    <div className="w-full flex flex-row min-h-full">
      <div className="w-[450px] max-w-[450px] bg-gray-200 min-h-full relative py-4">
        <p
          className="absolute cursor-pointer bottom-2 right-2 rounded-[50%] h-12 w-12 flex justify-center items-center bg-blue-500"
          onClick={addConversation}
        >
          <BiSolidPencil fill="white" size="1.5rem" />
        </p>

        <Conversations />
      </div>
      <div className="w-full min-h-screen h-screen max-h-screen relative flex flex-col gap-y-3">
        <UserChat />
      </div>
    </div>
  );
};

export default Chat;
