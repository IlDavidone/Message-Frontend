import React from 'react'
import { useState, useEffect } from "react";
import { chatroomsState } from "../states/chatroomsState";
import { channelState } from  "../states/channelState";
import { Settings2 } from "lucide-react";

const ChannelSidebar = () => {

  const { selectedChatroom, fetchChatroomInformations, selectedChatroomInformations } = chatroomsState();
  const { setCurrentChannel, channels, selectedChannel, areChannelsLoading } = channelState();

  useEffect(() => {
    fetchChatroomInformations(selectedChatroom);
  }, [selectedChatroom, fetchChatroomInformations]);

  const mappedChannels = channels.map((channel) => (
    <></>
  ))

  return (
    <div className='flex flex-col h-screen w-60 bg-zinc-800'>
      <div className='flex justify-center items-center w-[100%] border-b border-b-zinc-700 hover:bg-zinc-700'>
        <div className="flex items-center w-9/10 h-12 pl-2 text-white overflow-hidden">{selectedChatroomInformations.name}</div>
        <div className='flex items-center justify-center pr-2 scale-75'>
          <Settings2 strokeWidth={1.5} color='white'/>
        </div>
      </div>
      <div className='box-content flex flex-col gap-3 items-center w-[100%] mt-4 mb-2 overflow-y-scroll no-scrollbar overflow-x-hidden'>
        {Array.from({ length: 100 }).map((_, i) => (
        <div key={i} className="w-9/10 h-6 pl-2 rounded-md bg-amber-500">
          Placeholder {i + 1}
        </div>
      ))}
      </div>
    </div>
  );
}

export default ChannelSidebar
