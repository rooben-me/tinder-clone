import React, { useState } from "react";
import Avatar from "@material-ui/core/Avatar";
import "./ChatScreen.css";

function ChatScreen() {
  const [input, setInput] = useState("");

  const [messages, setMessages] = useState([
    {
      name: "mark",
      image:
        "https://dfjc3etzov2zz.cloudfront.net/wp-content/uploads/2018/04/Mark-Zuckerberg-Forbes.jpg",
      message: "Yo whats up ",
    },
    {
      name: "mark",
      image:
        "https://dfjc3etzov2zz.cloudfront.net/wp-content/uploads/2018/04/Mark-Zuckerberg-Forbes.jpg",
      message: "How are you...",
    },
  ]);

  const handleSend = (event) => {
    event.preventDefault();

    setMessages([...messages, { message: input }]);
    setInput("");
  };

  return (
    <div className="chatScreen">
      <p className="chatScreen__timeStamp">YOU MATCHED WITH MARK ON 10/07/29</p>
      {messages.map((message) =>
        message.name ? (
          <div className="chatScreen__message">
            <Avatar
              className="chatScreen__image"
              alt={message.name}
              src={message.image}
            />
            <p className="chatScreen__text">{message.message}</p>
          </div>
        ) : (
          <div className="chatScreen__message">
            <p className="chatScreen__textUser">{message.message}</p>
          </div>
        )
      )}

      <form className="chatScreen__input">
        <input
          type="text"
          value={input}
          onChange={(event) => setInput(event.target.value)}
          className="chatScreen__inputField"
          placeholder="Type a message..."
        />
        <button
          disabled={!input}
          type="submit"
          onClick={handleSend}
          className="chatScreen__inputButton"
        >
          send
        </button>
      </form>
    </div>
  );
}

export default ChatScreen;
