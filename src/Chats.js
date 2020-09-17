import React from "react";
import "./Chats.css";
import Chat from "./Chat";

function Chats() {
  return (
    <div className="chats">
      <Chat
        name="mark"
        message="Yo Whats up!"
        timestamp="12 minutes ago"
        profilePic="https://dfjc3etzov2zz.cloudfront.net/wp-content/uploads/2018/04/Mark-Zuckerberg-Forbes.jpg"
      />
      <Chat
        name="Klaus"
        message="Hello Love"
        timestamp="30 minutes ago"
        profilePic="https://a.wattpad.com/cover/214406620-352-k870066.jpg"
      />
      <Chat
        name="Stiles"
        message="Whats up bro..."
        timestamp="3 days ago"
        profilePic="https://vignette.wikia.nocookie.net/mythara/images/6/60/StilesStilinski.jpg/revision/latest/top-crop/width/360/height/450?cb=20161213070309"
      />
      <Chat
        name="Kratos"
        message="Boi !!!"
        timestamp="2 week ago"
        profilePic="https://vignette.wikia.nocookie.net/godofwar/images/e/e8/Norse_Kratos.png/revision/latest?cb=20181207151509"
      />
    </div>
  );
}

export default Chats;
