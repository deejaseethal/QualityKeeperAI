import React from 'react';
import './SignUp.css';

function SignUp() {
  return (
    <>  
    <div className='login'>
        <div className='center'>
           
        </div>
        <div className='pop-up'>
            <div className='close-btn'>&times;</div>
            <div className='form'>
                <h2>Sign Up</h2>
                <div className='form-element'>
                    <label for='name'>Name</label>
                    <input type='text' id='name' placeholder='Enter name'/>
                </div>
           
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
                    <p className='policy'>I accept <a href='='>Terms and Conditions</a></p>
                </div> 
                <div className='form-element'>
                    <button>Sign In</button>
                </div>
            </div>

        </div>
      
    </div>
    </>
  )
}

export default SignUp;

