/* eslint-disable no-unused-vars */
import axios from "axios";
import { axiosInstance } from "../lib/axios";
import toast from "react-hot-toast";
import { create } from "zustand";

export const chatroomsState = create((set, get) => ({
  areChatroomsLoading: true,
  chatrooms: [],

  fetchChatrooms: async () => {
    const response = await axiosInstance.get("/chatroom/user");
    const responseData = response.data;
    set({
      chatrooms: responseData,
    });
    set({
      areChatroomsLoading: false,
    });
  },
}));
