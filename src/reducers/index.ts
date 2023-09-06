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
      state.selectedUser = { id: userId, name };
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
      const id = uuidv4();
      const date = new Date();

      const lastMessage = state.chats[userId][state.chats[userId].length - 1];

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
  },
});

export const { addMessage, deleteMessage, addUser, selectUser } =
  todoSlice.actions;

export default todoSlice.reducer;
