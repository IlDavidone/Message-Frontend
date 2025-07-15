/* eslint-disable no-unused-vars */
import { axiosInstance } from "../lib/axios";
import toast from "react-hot-toast";
import { create } from "zustand";

export const chatroomsState = create((set, get) => ({
  areChatroomsLoading: true,
  selectedChatroom: "",
  selectedChatroomInformations: [],
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

  fetchChatroomInformations: async (id) => {
    const response = await axiosInstance.get(`/chatroom/info/${id}`);
    set({
      selectedChatroomInformations: response.data,
    });
  },

  setSelectedChatroom: (id) => {
    set({
      selectedChatroom: id,
    })
    console.log(get().selectedChatroom);
  }
}));
