/* eslint-disable no-unused-vars */
import React from "react";
import { useState, useEffect } from "react";
import { chatroomsState } from "../states/chatroomsState";

const ChatroomSidebar = () => {
  const { areChatroomsLoading, fetchChatrooms, clearChatrooms, chatrooms } = chatroomsState();
  const [ hasRan, setHasRan ] = useState(false);

  useEffect(() => {
    if (!hasRan) {
        fetchChatrooms();
        setHasRan(true);
    } else {
        return
    }
  }, []);

  console.log(chatrooms);

  const mappedChatrooms = chatrooms.map((chatroom) => (
    <p key={chatroom._id}>{chatroom.name}</p>
  ));

  return <div>
    {mappedChatrooms}
  </div>;
};

export default ChatroomSidebar;
