import React from "react";
import "./Sidebar.css";
import DonutLargeIcon from "@mui/icons-material/DonutLarge";
import ChatIcon from "@mui/icons-material/Chat";
import { Avatar, IconButton } from "@mui/material";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import SearchOutlined from "@mui/icons-material/SearchOutlined";
import SidebarChat from "./SidebarChat";
import { useEffect, useState } from "react";
export default function Sidebar() {
  const [groups, setGroups] = useState("");
  useEffect( )
  return (
    <div className="sidebar">
      <div className="sidebar__header">
        <Avatar src="https://avatars.dicebear.com/api/human/abc.svg?background=%23ebebeb"></Avatar>
        <div className="sidebar__headerRight">
          <IconButton>
            <DonutLargeIcon />
          </IconButton>
          <IconButton>
            <ChatIcon />
          </IconButton>
          <IconButton>
            <MoreVertIcon />
          </IconButton>
        </div>
      </div>
      <div className="sidebar__search">
        <div className="sidebar__searchContainer">
          <SearchOutlined />
          <input placeholder="Search in chat" type="text" />
        </div>
      </div>
      <div className="sidebar__chats">
        <SidebarChat addNewChat={true} />
        <SidebarChat />
        <SidebarChat />
        <SidebarChat />
      </div>
    </div>
  );
}
