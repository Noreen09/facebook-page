import React, { useState } from 'react';
import './Login.css';
        
        function Login() {
          const [email, setEmail] = useState('');
          const [password, setPassword] = useState('');
          const [gender, setGender] = useState('');
        
          const handleLogin = (e) => {
            e.preventDefault();
          };
        
            return (
            <div className="login">
              <div className="login__container">
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/0/05/Facebook_Logo_%282019%29.png"
                  alt="Facebook Logo"
        
                />
                <form>
                  <input
                    type="email"
                    placeholder="Email address"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  
                   <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <input
            type="gender"
            placeholder="Gender"
            value={gender}
            onChange={(e) => setGender(e.target.value)}
          />
          <button type="submit" onClick={handleLogin}>
            Log In
          </button>
        </form>
      </div>
    </div>
  );
    }


export default Login;