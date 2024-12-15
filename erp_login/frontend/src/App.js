import React from 'react';
import './login.css';  // Import the CSS file

function App() {
  return (
    <div className="login-container">
      <h2>College ERP Login</h2>
      <form action="login-action-url" method="POST">
        <label htmlFor="username">Username</label>
        <input type="text" id="username" name="username" placeholder="Enter your username" required />

        <label htmlFor="password">Password</label>
        <input type="password" id="password" name="password" placeholder="Enter your password" required />

        <button type="submit">Login</button>
      </form>
      <div className="forgot-password">
        <a href="#">Forgot your password?</a>
      </div>
    </div>
  );
}

export default App;
