import viteLogo from "../assets/react.svg";
import { MessageInterface, IUser, selectUser } from "../reducers";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../store";
import { formatDateTime } from "../utils/helper";

const Conversation = ({
  lastMessage,
  user,
}: {
  lastMessage: MessageInterface | null;
  user: IUser;
}) => {
  const dispatch = useDispatch();
  const selectedUser = useSelector(
    (state: RootState) => state.chats.selectedUser
  );

  const selectConvoUser = () => {
    dispatch(
      selectUser({
        userId: user.id,
      })
    );
  };

  return (
    <div
      className={`${
        selectedUser?.id === user.id ? "bg-blue-600" : "bg-gray-300"
      } flex flex-row px-2 py-2 gap-x-3 mb-2 cursor-pointer`}
      onClick={selectConvoUser}
    >
      <div>
        <img src={viteLogo} className="w-[40px] h-[50px] rounded-[50%]" />
      </div>
      <div className="flex flex-col max-w-[80%] w-full">
        <div className="flex flex-row gap-x-3 justify-between mb-1 w-full">
          <p
            className={`text-sm font-medium ${
              selectedUser?.id === user.id ? "text-[#eae3e3]" : "text-black"
            }`}
          >
            {user.name}
          </p>
          <p
            className={`text-xs font-medium ${
              selectedUser?.id === user.id ? "text-[#eae3e3]" : "text-black"
            }`}
          >
            {lastMessage && formatDateTime(lastMessage.date)}
          </p>
        </div>
        <p
          className={`text-sm font-medium ${
            selectedUser?.id === user.id ? "text-[#eae3e3]" : "text-black"
          }`}
        >
          {lastMessage ? lastMessage.message : "No message yet"}
        </p>
      </div>
    </div>
  );
};

export default Conversation;
