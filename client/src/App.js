import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import { Join } from "./components/Join/Join";
import { Chat } from "./components/Chat/Chat";
import { ChatProvider } from "./context/chatContext";

function App() {
  return (
    <>
      <Router>
        <Switch>
          <ChatProvider>
            <Route path="/" exact component={Join} />
            <Route path="/chat" component={Chat} />
          </ChatProvider>
        </Switch>
      </Router>
    </>
  );
}

export default App;
