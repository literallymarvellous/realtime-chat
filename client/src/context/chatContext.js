import { createContext, useState } from "react";

export const ChatContext = createContext();

export const ChatProvider = ({ children }) => {
  const [name, setName] = useState("");
  const [room, setRoom] = useState("");

  return (
    <ChatContext.Provider value={[name, room, setName, setRoom]}>
      {children}
    </ChatContext.Provider>
  );
};
