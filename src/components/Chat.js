import React from "react";
import "./Chat.css";
import { Avatar, IconButton } from "@mui/material";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import SearchOutlined from "@mui/icons-material/SearchOutlined";
import AttachFileIcon from "@mui/icons-material/AttachFile";
import InsertEmoticonIcon from "@mui/icons-material/InsertEmoticon";
import SendIcon from "@mui/icons-material/Send";
import MicIcon from "@mui/icons-material/Mic";
import Message from "./Message";
import axios from "../axios";
import { useState } from "react";

export default function Chat({ messages }) {
  const [text, setText] = useState("");

  function handleForm(e) {
    e.preventDefault();
    axios
      .post("/messages/new", {
        message: text,
        name: "name1",
        timestamp: `${new Date().toUTCString()}`,
        received: "false",
      })
      .then((result) => {});
  }
  return (
    <div className="chat">
      <div className="chat__header">
        <Avatar />
        <div className="chat__headerCenter">
          <h3>Group Name</h3>
          <p>Last seen at 10:50 pm</p>
        </div>
        <div className="chat__headerRight"></div>
        <IconButton>
          <SearchOutlined />
        </IconButton>
        <IconButton>
          <AttachFileIcon />
        </IconButton>
        <IconButton>
          <MoreVertIcon />
        </IconButton>
      </div>
      <div className="chat__body">
        {messages.map((message) => {
          return <Message message={message} />;
        })}
      </div>
      <div className="chat__footer">
        <div className="chat__footerLeft"></div>
        <IconButton>
          <InsertEmoticonIcon />
        </IconButton>

        <div className="chat__footerText">
          <form onSubmit={(e) => handleForm(e)}>
            <input
              placeholder="Type a message"
              onChange={(e) => setText(e.target.value)}
            ></input>
            <button type="submit" className="sendButton">
              <SendIcon />
            </button>
          </form>
        </div>
        <div className="chat__footerRight">
          <MicIcon />
        </div>
      </div>
    </div>
  );
}
