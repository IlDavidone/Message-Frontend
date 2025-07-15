import React from 'react'
import ChatroomSidebar from './chatroomSidebar'
import ChannelSidebar from './ChannelSidebar'

const Sidebar = () => {
  return (
    <div className='flex'>
        <ChatroomSidebar />
        <ChannelSidebar />
    </div>
  )
}

export default Sidebar
