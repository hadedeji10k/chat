import { formatDateTime } from "../utils/helper";
import { MessageInterface } from "../reducers";

const Message = ({ message }: { message: MessageInterface }) => {
  return (
    <>
      <div
        className={`w-full flex ${
          message.from === "me"
            ? "items-end justify-end"
            : "items-start justify-start"
        }`}
      >
        <div
          className={`chat-message ${
            message.from === "me" ? "receiver" : "sender !bg-gray-200"
          } max-w-[70%]`}
        >
          <div
            className={`message-content ${
              message.from === "me" ? "" : "text-black"
            }`}
          >
            <p className="text-sm font-medium">{message.message}</p>
            <p className="text-right text-[10px] font-normal">
              {formatDateTime(message.date)}
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Message;
