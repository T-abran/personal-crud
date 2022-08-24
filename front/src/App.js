import React from 'react';
import './App.css';

function App() {
  return (
    <div className="app-container">
      <div className="register-container">
        <h1 className='register-title'>Scrim Shop</h1>
        <input
          type="text"
          name="name"
          className="register-input"
          placeholder="Name"
        />
        <input
          type="text"
          name="cost"
          className="register-input"
          placeholder="Cost"
        />
        <input
          type="text"
          name="category"
          className="register-input"
          placeholder="Category"
        />
        <button className="register-button">Register</button>
      </div>
    </div>
  );
}

export default App;
