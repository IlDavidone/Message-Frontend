import React from 'react'
import { useState, useEffect } from "react";
import { chatroomsState } from "../states/chatroomsState";
import { channelState } from  "../states/channelState";

const ChannelSidebar = () => {

  const { selectedChatroom, fetchChatroomInformations, selectedChatroomInformations } = chatroomsState();

  useEffect(() => {
    fetchChatroomInformations(selectedChatroom);
  }, [selectedChatroom, fetchChatroomInformations]);

  return (
    <div className='flex justify-center h-screen w-60 bg-zinc-800'>
      <div className='flex justify-center items-center w-[100%] h-10 mt-2 mb-2 border-b border-b-zinc-700'>
        <div className="w-9/10 h-8 text-white">{selectedChatroomInformations.name}</div>
      </div>
    </div>
  );
}

export default ChannelSidebar
