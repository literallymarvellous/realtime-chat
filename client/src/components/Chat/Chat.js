import React, { useContext, useEffect, useState } from "react";
import queryString from "query-string";
import { ChatContext } from "../../context/chatContext";
import io from "socket.io-client";
import "./Chat.css";
import { InfoBar } from "../InfoBar/InfoBar";
import Input from "../Input/Input";
import Messages from "../Messages/Messages";

let socket;

export const Chat = ({ location }) => {
  const ENDPOINT = "https://realtime-ch.herokuapp.com/";
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);
  const [name, room, setName, setRoom] = useContext(ChatContext);

  useEffect(() => {
    const { name, room } = queryString.parse(location.search);

    socket = io(ENDPOINT);

    setRoom(room);
    setName(name);

    socket.emit("join", { name, room }, (error) => {
      if (error) {
        alert(error);
      }
    });
  }, [ENDPOINT, location.search]);

  useEffect(() => {
    socket.on("message", (message) => {
      setMessages([...messages, message]);
    });
  }, [messages]);

  const handleChange = (e) => {
    setMessage(e.target.value);
  };

  //function to send messages
  const sendMessage = (e) => {
    e.preventDefault();

    if (message) {
      socket.emit("sendMessage", message, () => setMessage(""));
    }
  };

  const handleKeyPress = (e) => {
    return e.key === "Enter" ? sendMessage(e) : null;
  };

  console.log(message);
  console.log(messages);

  return (
    <div className="outerContainer">
      <div className="container">
        <InfoBar room={room} />
        <Messages messages={messages} name={name} />
        <Input
          message={message}
          sendMessage={sendMessage}
          handleChange={handleChange}
          handleKeyPress={handleKeyPress}
        />
      </div>
    </div>
  );
};
