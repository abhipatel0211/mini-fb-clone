import React, { useEffect, useState } from "react";
import "./Feed.css";
import StoryReel from "./StoryReel/StoryReel";
import MessageSender from "./MessageSender/MessageSender";
import Post from "./Post/Post";
import db from "../../firebase";

function formatTimestamp(timestamp) {
  if (timestamp && timestamp.seconds) {
    const date = new Date(timestamp.seconds * 1000);
    const formattedTimestamp = `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()} ${date.toLocaleTimeString()}`;
    return formattedTimestamp;
  }
  return '';
}


const Feed = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    db.collection("posts")
      .orderBy("timestamp","desc")
      .onSnapshot((snapshot) => {
      setPosts(snapshot.docs.map((doc) => ({ id: doc.id, data:doc.data() } )))
    });
  }, [])
  
  

  return (
    <div className="feed">
      {/* StoryReel */}
      <StoryReel />
      {/* MessageSender */}
      <MessageSender />
      {/* timestamp={`${post.data.timestamp.toDate().getDate()}/${post.data.timestamp.toDate().getMonth()+1}/${post.data.timestamp.toDate().getFullYear()} ${post.data.timestamp.toDate().toLocaleTimeString()}`} */}
      {posts.map((post) => (
        
        <Post
          key={post.id}
          profilePic={post.data.profilePic}
          message={post.data.message}
          timestamp={formatTimestamp(post.data.timestamp)}
          // timestamp={`${post.data.timestamp.toDate().getDate()}/${post.data.timestamp.toDate().getMonth()+1}/${post.data.timestamp.toDate().getFullYear()} ${post.data.timestamp.toDate().toLocaleTimeString()}`}
          username={post.data.username}
          image={post.data.image}
          likes={post.data.likes}
        />
      ))}
      
      {/* {posts.map((post) => (
      <Post
        key={post.id}
        profilePic={post.data.profilePic}
        message={post.data.message}
        timestamp={post.data.timestamp}
        username={post.data.username}
        image={post.data.image}
        />
        ))} */}
    </div>
  );
};

export default Feed;
