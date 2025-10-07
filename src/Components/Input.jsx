import React, {useState} from "react"

export default function Input(){
    const [isLogin , setIsLogin] = useState(true);
    return(
    <div className='container'> 
        <div className='form-container'>
            <div className='form-toggle'>
                <button className={isLogin ? 'active' : ""} onClick={() => setIsLogin(true)}> SignIn </button>
                <button className={!isLogin ? 'active' : ""} onClick={() => setIsLogin(false)}> SignUp </button>

            </div>
            {isLogin ? <>
            <div className='form'>
                <h2>SignIn Form</h2>
                <input type='email' placeholder='Email'/>
                <input type='password' placeholder='password'/>
                <a>Forgot Password</a>
                <button>SignIn</button>
                <p> First Time User? <a href="#" onClick={() => setIsLogin(false)}>SignUp Now </a> </p>
            </div>
            </> : <>
            <div className='form'>
            <h2>SignUp Form</h2>
                <input type='email' placeholder='Email'/>
                <input type='password' placeholder='password'/>
                <input type='password' placeholder='Confirm Password'/>
                <button>SignUp</button>

</div>
            </>}
            
        </div>
    
    </div>
    
)
}
