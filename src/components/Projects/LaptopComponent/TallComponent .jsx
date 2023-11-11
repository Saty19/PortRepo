import React from 'react';

const TallComponent = () => {
  const containerStyle = {
    height: '900px',
    backgroundColor: '#f0f0f0',
    padding: '20px',
    textAlign: 'center',
  };

  const imageStyle = {
    maxWidth: '100%',
    maxHeight: '400px',
    margin: '20px 0',
    borderRadius: '8px',
  };

  return (
    <div style={containerStyle}>
      <h1>Tall Component</h1>
      <img
        src="https://via.placeholder.com/800x400"
        alt="Placeholder Image"
        style={imageStyle}
      />
      <p style={{color:"black"}}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat.
      </p>
      {/* Repeat content or add more elements as needed */}
    </div>
  );
};

export default TallComponent;
