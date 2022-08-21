import React, { useState } from 'react'
import showPwd from '../assets/icons/visibility-on.svg'
import hidePwd from '../assets/icons/visibility-off.svg'
import { useNavigate,useLocation } from 'react-router-dom'
import axios from 'axios'
import {showErrMsg, showSuccessMsg} from '../utils/notification/Notification'
import {dispatchLogin} from '../redux/actions/authAction'
import {useDispatch} from 'react-redux'
import { GoogleLogin } from 'react-google-login';
import FacebookLogin from 'react-facebook-login/dist/facebook-login-render-props'
import axiosInstance from '../utils/Config/axiosInstance'

const initialState = {
  email: '',
  password: '',
  err: '',
  success: ''
}


const Login = () => {
  const [isRevealed, setIsRevealed] = useState(false)
  const [user, setUser] = useState(initialState)
  const {email, password, err, success} = user
  let navigate = useNavigate();
  const dispatch = useDispatch()

    const handleChangeInput = e => {
        const {name, value} = e.target
        setUser({...user, [name]:value, err: '', success: ''})
    }


    const handleSubmit = async e => {
        e.preventDefault()
        try {
            
            const res = await axios.post('/user/login', {email, password})
            setUser({...user, err: '', success: res.data.msg})
            localStorage.setItem('firstLogin', true)
            dispatch(dispatchLogin())
            alert("User Logged In Successfully!")
            navigate('/')

        } catch (err) {
            err.response.data.msg && 
            setUser({...user, err: err.response.data.msg, success: ''})
        }
    }

    const responseGoogle = async (response) => {
        try {
            const res = await axios.post('/user/google_login', {tokenId: response.tokenId})

            setUser({...user, error:'', success: res.data.msg})
            localStorage.setItem('firstLogin', true)
            dispatch(dispatchLogin())
            alert("User Logged In With Google Successfully!")
            navigate('/')

        } catch (err) {
            err.response.data.msg && 
            setUser({...user, err: err.response.data.msg, success: ''})
        }
    }

    const responseFacebook = async (response) => {
        try {
            const {accessToken, userID} = response
            const res = await axios.post('/user/facebook_login', {accessToken, userID})

            setUser({...user, error:'', success: res.data.msg})
            localStorage.setItem('firstLogin', true)
            dispatch(dispatchLogin())
            alert("User Logged In with Facebook Successfully!")
            navigate('/')

        } catch (err) {
            err.response.data.msg && 
            setUser({...user, err: err.response.data.msg, success: ''})
        }
    }

  const handleClick = () => {
    navigate('/register')
  }
  return (
    <div className='flex w-full h-screen bg-white'>
        {/* Actual Content */}
        <div className='flex w-full lg:w-1/3 h-full flex-col gap-y-8 justify-center items-center'>
          <h1 className='text-2xl font-bold'>WELCOME BACK</h1>
          {/* Quick Login */}
          <div className='flex gap-x-4 justify-center items-center'>
            <div className='w-16 h-[1px] bg-gray_dark'/>
            <p className='text-sm font-light text-gray_dark'>Login using</p> 
            <div className='w-16 h-[1px] bg-gray_dark'/> 
          </div>
          <div className='flex justify-center gap-x-8'>
            <div className='w-8 h-auto rounded'>
              <GoogleLogin
                    clientId="993778502578-f3e60js9hmv8sr45aempevjha5n816kd.apps.googleusercontent.com"
                    render={renderProps => (
                      <button onClick={renderProps.onClick} disabled={renderProps.disabled}><img src='https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Gmail_icon_%282020%29.svg/2560px-Gmail_icon_%282020%29.svg.png' alt='Gmail' className='w-full h-auto rounded hover:-translate-y-1 transition-all'/>
                      </button>
                    )}
                    buttonText="Login with google"
                    onSuccess={responseGoogle}
                    cookiePolicy={'single_host_origin'}
                />
            </div>
            <div className='w-8 h-auto rounded'>    
              <FacebookLogin
                appId="1157406491768263"
                render={renderProps => (
                  <button onClick={renderProps.onClick}><img src='https://www.picng.com/upload/letter_f/png_letter_f_50740.png' alt='Fb' className='w-full h-auto rounded scale-150 hover:-translate-y-1 transition-all'/>
                  </button>
                )}
                fields="name,email,picture"
                
                callback={responseFacebook} 
                />
              
            </div>
            <div className='w-8 h-auto rounded'>    
              <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Instagram_logo_2016.svg/768px-Instagram_logo_2016.svg.png' alt='Insta' className='w-full h-auto rounded hover:-translate-y-1 transition-all'/>
            </div>
          </div>

          {/* Casual */}
          <div className='flex gap-x-4 justify-center items-center'>
            <div className='w-16 h-[1px] bg-gray_dark'/>
            <p className='text-sm font-light text-gray_dark'>or</p> 
            <div className='w-16 h-[1px] bg-gray_dark'/> 
          </div>

                  {/* validation */}
          {err && showErrMsg(err)}
            {success && showSuccessMsg(success)}

          <form onSubmit={handleSubmit} className='flex flex-col justify-start px-4 gap-y-1 py-4'>
            <div>
              <label className='text-sm font-light'>Email or Phone Number</label>
              <input className='w-full p-2 border-[0.5px] border-gray_light rounded-md text-sm' type='text' placeholder="Enter email address" id="email"
                    value={email} name="email" onChange={handleChangeInput}/>
            </div>
            <div>
              <label className='text-sm font-light'>Password</label>
              <div className='relative'>
                <input className='w-full p-2 border-[0.5px] border-gray_light rounded-md text-sm' type={isRevealed ? "text" : "password"} placeholder="Enter password" id="password"
                    value={password} name="password" onChange={handleChangeInput} />
                <img 
                  title={isRevealed ? 'Hide Password' : 'Show Password'}
                  src={isRevealed ? showPwd : hidePwd}
                  className='w-6 h-6 absolute right-3 top-1 m-1'
                  alt='Visibility Icon'
                  onClick={() => setIsRevealed(!isRevealed)}
                />
              </div>
            </div>

            <p className='text-sm font-regular text-primary py-4 cursor-pointer w-fit hover:backdrop-blur-2xl'>Login Issues?</p>
            <button type="submit" className='w-full p-2 bg-primary text-white rounded-sm text-sm font-bold hover:bg-secondary'>LOGIN</button>
            <p className='text-sm font-light absolute bottom-10'>
              New to Ayuh? {" "}
              <span className='text-sm font-medium text-primary cursor-pointer' onClick={handleClick}>
                Register now
              </span>
            </p>
          </form>

        </div>

        {/* Tutorial */}
        <div className='hidden lg:flex w-2/3 h-full lg:flex-col items-center bg-gray_light'>
        </div> 
    </div>
  )
}

export default Login