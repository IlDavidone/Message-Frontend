import { create } from "zustand";
import { axiosInstance } from "../lib/axios";

export const channelState = create((set, get) => ({
    areChannelsLoading: true,
    selectedChannel: "",
    channels: [],

    fetchCurrentChatroomChannels: async (chatroomId) => {
        const response = await axiosInstance.get(`/channel/public/${chatroomId}`);
        set({
            channels: response.data.existingPublicChannels,
        });
        set({
            areChannelsLoading: false,
        });
        console.log(get().channels);
    },

    setCurrentChannel: (channelName) => {
        set({
            selectedChannel: channelName,
        });
        console.log(get().selectedChannel)
    }
}));