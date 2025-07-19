import { create } from "zustand";
import { axiosInstance } from "../lib/axios";

export const messageState = create((set, get) => ({
    messages: [],
    areMessagesLoading: true,
    fetchPaginatedMessages: async (chatroomId, channelName, page, limit) => {
        const response = await axiosInstance.get(`/message/paginated/fetch/${chatroomId}/${channelName}?page=${page}&limit=${limit}`);
        console.log(response.data.messages);
    }
}))