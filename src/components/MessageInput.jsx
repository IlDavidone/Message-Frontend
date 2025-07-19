import React from "react";
import { Images, Smile, SendHorizonal } from "lucide-react";
import { channelState } from "../states/channelState";
import { chatroomsState } from "../states/chatroomsState";
import { messageState } from "../states/messagesState";

const MessageInput = () => {
  const { selectedChannel } = channelState();
  const { selectedChatroom } = chatroomsState();
  const { fetchPaginatedMessages } = messageState();

  const placeholderText = `Send a message to ${selectedChannel}`;

  const handleSubmit = (event) => {
    event.preventDefault();
    fetchPaginatedMessages(selectedChatroom, selectedChannel, 1, 10);
  } 

  return (
    <div className="flex items-end w-[100%]">
      <form onSubmit={handleSubmit} className="flex flex-1 items-center">
        <input
          type="text"
          placeholder={placeholderText}
          className="w-[90%] h-10 m-3 pl-1 rounded-md bg-zinc-700 border-1 border-zinc-500 text-white"
        />
        <input type="file" className="hidden" />
        <button className="flex items-center justify-center rounded-md mr-3 bg-zinc-700 h-10 w-10 border-1 border-zinc-500">
            <Images color="#d4d4d8"/>
        </button>
        <button type="submit" className="flex items-center justify-center rounded-md bg-zinc-700 h-10 w-10 mr-3 border-1 border-zinc-500">
          <SendHorizonal color="#d4d4d8"/>
        </button>
      </form>
    </div>
  );
};

export default MessageInput;
