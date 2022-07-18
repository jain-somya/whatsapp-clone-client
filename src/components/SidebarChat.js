import { Avatar } from "@mui/material";
import React from "react";
import "./SidebarChat.css";
import { useEffect, useState } from "react";

function SidebarChat({ addNewChat }) {
  const [seed, setSeed] = useState("");
  useEffect(() => {
    setSeed(Math.floor(Math.random() * 5000));
  }, []);

  const createChat= ()=>{
      const groupName =prompt("Please enter new group name")
      if(groupName){
          //
      }

  }
  return !addNewChat ? (
    <div className="sidebarChat">
      <Avatar
        src={`https://avatars.dicebear.com/api/human/${seed}.svg?background=%23ebebeb`}
      />
      <div className="sidebarChat__text">
        <h2>Group Name</h2>
        <p>This is the last message</p>
      </div>
    </div>
  ) : (
    <div onClick={createChat} className="sidebarChat">
      <h2>Start a new Chat</h2>
    </div>
  );
}

export default SidebarChat;
