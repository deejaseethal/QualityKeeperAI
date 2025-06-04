import React from 'react';
import './Login.css';

function Login() {
  return (
    <div className='login'>
        <div className='center'>
          
        </div>
        <div className='pop-up'>
            <div className='close-btn'>&times;</div>
            <div className='form'>
                <h2>Login</h2>
                <div className='form-element'>
                    <label for='email'>Email</label>
                    <input type='text' id='email' placeholder='Enter email'/>
                </div>
                <div className='form-element'>
                <label for='password'>Password</label>
                <input type='password' id='password' placeholder='*********'/>
                </div>
                <div className='form-element'>
                    <input type='checkbox' id='remember-me'/>
                    <label for='remember-me'>Remember Me</label>
                </div>
                <div className='form-element'>
                    <button>Sign In</button>
                </div>
                <div className='form-element'>
                    <a href='='>Forgot Password?</a>
                </div>
            </div>

        </div>
      
    </div>
  )
}

export default Login