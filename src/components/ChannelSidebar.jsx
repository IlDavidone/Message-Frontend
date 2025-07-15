import React from "react";
import { useState, useEffect } from "react";
import { chatroomsState } from "../states/chatroomsState";
import { channelState } from "../states/channelState";
import { LetterText, Settings2 } from "lucide-react";

const ChannelSidebar = () => {
  const {
    selectedChatroom,
    fetchChatroomInformations,
    selectedChatroomInformations,
  } = chatroomsState();
  const { setCurrentChannel, channels, selectedChannel, areChannelsLoading } =
    channelState();

  useEffect(() => {
    fetchChatroomInformations(selectedChatroom);
  }, [selectedChatroom, fetchChatroomInformations]);

  const mappedChannels = channels.map((channel) => (
    <div onClick={() => setCurrentChannel(channel.name)} key={channel._id} className="group flex items-center gap-2.5 w-9/10 h-8 pl-1 rounded-md hover:bg-zinc-700">
      <LetterText color="#737373" />
      <p className="flex-1 text-neutral-500 mr-1 size-7 font-semibold overflow-x-hidden group-hover:text-gray-100">{channel.name}</p>
    </div>
  ));

  return (
    <div className="flex flex-col h-screen w-60 bg-zinc-800">
      <div className="flex justify-center items-center w-[100%] border-b border-b-zinc-700 hover:bg-zinc-700">
        <div className="flex items-center w-9/10 h-12 pl-3 text-white overflow-hidden">
          {selectedChatroomInformations.name}
        </div>
        <div className="flex items-center justify-center pr-2 scale-75">
          <Settings2 strokeWidth={1.5} color="white" />
        </div>
      </div>
      <div className="box-content flex flex-col gap-3 items-center w-[100%] mt-3 mb-2 overflow-y-scroll no-scrollbar overflow-x-hidden">
        {mappedChannels}
      </div>
    </div>
  );
};

export default ChannelSidebar;
