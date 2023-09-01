import { useState } from 'react';

import { FaEye,FaEyeSlash } from 'react-icons/fa';
function Login()
{
    const [email,setEmail]=useState();
    const [password,setPassword]=useState();
    const [passwordShown, setPasswordShown] = useState(false);
    const emailHandler=(e)=>{
        setEmail(e.target.value);
    }
    const passwordHandler=(e)=>{
        setPassword(e.target.value);
    }
    const passwordShownHandler=(e)=>{
        setPasswordShown(!passwordShown);
    }
    return(
        <div>
        <div className="login-container">
        <input className='login-in' type="text" placeholder="Email" onChange={emailHandler}></input>
        <input
          type={passwordShown ? "text" : "password"}
          placeholder="Enter your password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className='login-in'
          
        />
         <span className='eye-splash' onClick={passwordShownHandler}>
        {passwordShown ? <FaEye /> : <FaEyeSlash />}
        </span> 
        <button className="login-btn">Log in</button>
        <p><a href='#'>Forgotten password?</a> </p>    
        <button className="sign-btn">Create new account</button>
        </div>    
        </div>
    );
}

export default Login;