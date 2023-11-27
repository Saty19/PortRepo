import React from 'react';
import './NotFound.css'; // Create a CSS file for styling

const NotFound = () => (
  <div className="not-found-container">
    <h2>404 Not Found</h2>
    <p>The page you are looking for does not exist.</p>
    <img
      className="emoji-gif"
      src="https://media.giphy.com/media/14uQ3cOFteDaU/giphy.gif" // Replace with your desired GIF URL
      alt="Futuristic Emoji"
    />
  </div>
);

export default NotFound;
