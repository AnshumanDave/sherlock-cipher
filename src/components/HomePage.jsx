import React from 'react';

const HomePage = () => {
  const userName = "John Doe"; // Replace with actual user data if available

  return (
    <div style={{ fontFamily: 'Arial, sans-serif', textAlign: 'center', marginTop: '50px' }}>
      <h1>Welcome to Your Home Page</h1>
      <p style={{ fontSize: '1.2em' }}>Hello, {userName}!</p>
      
      <div style={{ marginTop: '30px' }}>
        <h2>Your Dashboard</h2>
        <ul style={{ listStyleType: 'none', padding: 0 }}>
          <li style={{ margin: '10px 0' }}>
            <a href="/profile" style={{ textDecoration: 'none', color: '#007BFF' }}>View Profile</a>
          </li>
          <li style={{ margin: '10px 0' }}>
            <a href="/settings" style={{ textDecoration: 'none', color: '#007BFF' }}>Account Settings</a>
          </li>
          <li style={{ margin: '10px 0' }}>
            <a href="/logout" style={{ textDecoration: 'none', color: '#FF0000' }}>Logout</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default HomePage;
