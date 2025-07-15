/* eslint-disable no-unused-vars */
import React from "react";
import { useState, useEffect } from "react";
import { chatroomsState } from "../states/chatroomsState";
import { channelState } from "../states/channelState";
import { Plus } from "lucide-react";
import ChatroomsLoading from "./placeholders/ChatroomsLoading";

const ChatroomSidebar = () => {
  const {
    areChatroomsLoading,
    fetchChatrooms,
    clearChatrooms,
    chatrooms,
    setSelectedChatroom,
    selectedChatroom,
  } = chatroomsState();
  const { fetchCurrentChatroomChannels } = channelState();
  const [hasRan, setHasRan] = useState(false);

  useEffect(() => {
    if (!hasRan) {
      fetchChatrooms();
      setHasRan(true);
    } else {
      return;
    }
  }, []);

  useEffect(() => {
    fetchCurrentChatroomChannels(selectedChatroom);
  }, [selectedChatroom, fetchCurrentChatroomChannels]);

  const selectChatroom = (id) => {
    setSelectedChatroom(id);
  };

  if (areChatroomsLoading == true) {
    return <ChatroomsLoading />;
  }

  const mappedChatrooms = chatrooms.map((chatroom) => (
    <div
      onClick={() => selectChatroom(chatroom._id)}
      key={chatroom._id}
      className="p-1 flex items-center gap-4"
    >
      <img
        key={chatroom.image}
        src={chatroom.image}
        className="peer h-12 w-12 rounded-full hover:scale-105 transition duration-150 active:scale-95"
      />
      <div className="absolute left-18 rounded-sm pt-1 pb-1 pl-2.5 pr-2.5 hidden peer-hover:block bg-zinc-500">
        <p key={chatroom.name} className="text-white">
          {chatroom.name}
        </p>
      </div>
    </div>
  ));

  return (
    <div className="flex flex-col border-r-1 border-r-zinc-700 gap-1.5 items-center pt-1 h-screen w-16 bg-zinc-800">
      {mappedChatrooms}
      <div className="flex items-center">
        <div className="peer flex justify-center items-center bg-slate-800 h-12 w-12 rounded-full hover:bg-slate-700 transition duration-150 active:scale-95">
          <Plus color="white" />
        </div>
        <div className="absolute left-18 rounded-sm pt-1 pb-1 pl-2.5 pr-2.5 hidden peer-hover:block bg-zinc-500">
          <p key="AddChatroom" className="text-white">
            Add
          </p>
        </div>
      </div>
    </div>
  );
};

export default ChatroomSidebar;
