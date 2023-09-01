import { useState } from 'react';


function Login()
{
    const [email,setEmail]=useState();
    const [password,setPassword]=useState();
    const emailHandler=(e)=>{
        setEmail(e.target.value);
    }
    const passwordHandler=(e)=>{
        setPassword(e.target.value);
    }
    return(
        <div>
        <div className="login-container">
        <input className='login-in' type="text" placeholder="Email" onChange={emailHandler}></input>
        <input className='login-in' type="password" placeholder="Password" onChange={passwordHandler}></input>
        <button className="login-btn">Log in</button>
        <p><a href='#'>Forgotten password?</a> </p>    
        <button className="sign-btn">Create new account</button>
        </div>    
        </div>
    );
}

export default Login;