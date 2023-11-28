import React from 'react';
import './NotFound.css'; // Create a CSS file for styling

const NotFound = () => (
  <div className="not-found-container">
    <h2>404 Not Found</h2>
    <p>The page you are looking for does not exist.</p>
    <img
      className="emoji-gif"
      src="https://media0.giphy.com/media/UoeaPqYrimha6rdTFV/200w.webp?cid=ecf05e47n0yft3yoe42xq6bk5s0rim7bp4ua39it5mgz65za&ep=v1_gifs_search&rid=200w.webp&ct=g" // Replace with your desired GIF URL
      alt="Futuristic Emoji"
    />
  </div>
);

export default NotFound;
