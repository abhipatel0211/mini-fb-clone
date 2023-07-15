import React, { useState } from "react";
import "./MessageSender.css";
import { Avatar } from "@mui/material";
import { InsertEmoticon, PhotoLibrary, Videocam } from "@mui/icons-material";
import { useStateValue } from "../../StateProvider/StateProvider";
import db from "../../../firebase";
import firebase from "firebase/compat/app";


function MessageSender() {
  const [{ user }, dispatch] = useStateValue();
    const [input,setInput]=useState("");
  const [imageUrl, setImageUrl] = useState("");
  
    const handleSubmit = (e) => {
    e.preventDefault();

        //some cleaver db stuff
      db.collection('posts').add({
        message: input,
        timestamp:firebase.firestore.FieldValue.serverTimestamp(),//it will take the time from the server 
        profilePic: user.photoURL,
        username: user.displayName,
        image: imageUrl
      })
        setInput("");
        setImageUrl("");

  };

  return (
    <>
      <div className="messageSender">
        <div className="messageSender_top">
          <Avatar src={ user.photoURL} />
          <form>
            <input

            value={input}
            onChange={e=>setInput(e.target.value)}
              className="messageSender_input"
              placeholder={`What's on your mind? ${user.displayName}`}
            />
            <input 
            
            value={imageUrl}
            onChange={e=>setImageUrl(e.target.value)}
            placeholder="image URL (Optional)" />
            <button onClick={handleSubmit} className="h-1 w-1 bg-black z-10" type="submit">
              Hidden submit
            </button>
          </form>
        </div>
        <div className="messageSenderr_bottom">
          <div className="messageSender_option">
            <Videocam style={{ color: "red" }} />
            <h3>Live Video</h3>
          </div>
          <div className="messageSender_option">
            <PhotoLibrary style={{ color: "green" }} />
            <h3>Photo/Video</h3>
          </div>
          <div className="messageSender_option">
            <InsertEmoticon style={{ color: "orange" }} />
            <h3>Feeling/Activity</h3>
          </div>
        </div>
      </div>
    </>
  );
}

export default MessageSender;
