import React from 'react';

const TestMagento = () => {
  const containerStyle = {
    height: '100vh',
    width:'190%',
    padding: '10px',
    transform: 'scale(0.5)',
    transformOrigin: 'top left',
    backgroundColor: '#121212',
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
    textAlign: 'center',
  };

  const headingStyle = {
    color: '#333',
    fontSize: '24px',
    marginBottom: '15px',
  };

  const contentStyle = {
    color: '#666',
    fontSize: '16px',
  };

  return (
    <div style={containerStyle}>
      <h2 style={headingStyle}>Simple Component</h2>
      <p style={contentStyle}>
        This is a simple React component with inline styles.
      </p>
    </div>
  );
};

export default TestMagento;
