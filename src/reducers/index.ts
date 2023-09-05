import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";

export interface MessageInterface {
  id: number;
  from: string;
  message: string;
  date: Date;
}

export interface IUser {
  id: string;
  name: string;
}

interface InitialState {
  chats: {
    [id: string]: MessageInterface[];
  };
  users: IUser[];
  selectedUser: IUser | null;
}

const intialState: InitialState = {
  chats: {},
  users: [],
  selectedUser: null,
};

type AddMessage = Pick<MessageInterface, "message"> & {
  userId: string;
};

export const todoSlice = createSlice({
  name: "chat",
  initialState: intialState,
  reducers: {
    clearAll: (state: InitialState) => {
      state.users = [];
      state.chats = {};
      state.selectedUser = null;
    },
    addUser: (
      state: InitialState,
      { payload: { name } }: { payload: { name: string } }
    ) => {
      const userId = uuidv4();
      state.users.push({ id: userId, name });
      state.chats[userId] = [];
    },
    selectUser: (
      state: InitialState,
      { payload: { userId } }: { payload: { userId: string } }
    ) => {
      const user = state.users.find((user) => user.id === userId);
      if (user) {
        state.selectedUser = user;
      }
    },
    addMessage: (
      state: InitialState,
      { payload: { message, userId } }: { payload: AddMessage }
    ) => {
      const chat = state.chats[userId];
      const id = chat.length + 1;
      const date = new Date();

      const userMessage = state.chats[userId];
      const lastMessage = userMessage[userMessage.length - 1];

      let from = "";

      if (lastMessage) {
        if (lastMessage.from === "me") {
          if (state.selectedUser) {
            from = state.selectedUser.id;
          } else {
            from = "me";
          }
        } else {
          from = "me";
        }
      } else {
        from = "me";
      }

      state.chats[userId].push({
        id,
        message,
        date,
        from,
      });
    },
    deleteMessage: (
      state: InitialState,
      { payload: { id, userId } }: { payload: { id: number; userId: number } }
    ) => {
      const newChat = state.chats[userId].filter((chat) => chat.id !== id);
      state.chats[userId] = newChat;
    },
    editMessage: (state: InitialState, { payload: { editedTodo } }) => {
      console.log(state, editedTodo);
      //   state.chats = state.chats.map((todo) =>
      //     todo.id === editedTodo.id ? editedTodo : todo
      //   );
    },
  },
});

// actions for telling reducer what to do with state, they can also include payload for changing state
export const { addMessage, deleteMessage, editMessage, addUser, selectUser } =
  todoSlice.actions;

// reducer to change the state
export default todoSlice.reducer;
