import React, { useState } from 'react'

import showPwd from '../../assets/icons/visibility-on.svg'
import hidePwd from '../../assets/icons/visibility-off.svg'
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'

const InputField = ({type, checked, value, disabled}) => (
    <input className='w-full p-2 border-[0.5px] border-gray_light rounded-md text-sm' type={type} checked={checked} value={value} disabled={disabled}/>
)
const Label = ({value}) => (
    <label className='text-sm font-light'>{value}</label>
)

const Loader = styled.div`
  width: 21px;
  height: 21px;
  border-radius: 50%;
  border-top: 3px solid ${props => props.theme.primary};
  border-left: 3px solid ${props => props.theme.primary};
  border-right: 3px solid ${props => props.theme.primary}00;
  @keyframes spin {
    to {
      transform: rotate(360deg);
    }
  }
  animation: spin 0.5s linear infinite;
`

const RegisterForm = () => {
  const [loading, setLoading] = useState(false)
  const [isRevealed, setIsRevealed] = useState(false)
  const [isConfRevealed, setIsConfRevealed] = useState(false)
  
  const navigate = useNavigate();

  const handleRegister = (e) => {
    e.preventDefault();
    setLoading(true)
    setTimeout(() => {
      setLoading(false);
      navigate('/login');
    }, 2000);
  }

  return (
    
    <div className='w-full lg:w-1/3 flex flex-col gap-y-8 py-4'>
      <h1 className='text-2xl font-bold text-center mt-8'>CREATE AN ACCOUNT</h1>
      {/* Quick Login */}
      <div className='flex gap-x-4 justify-center items-center'>
          <div className='w-16 h-[1px] bg-gray_dark'/>
          <p className='text-sm font-light text-gray_dark'>Register using</p> 
          <div className='w-16 h-[1px] bg-gray_dark'/> 
      </div>
      <div className='flex justify-center gap-x-8'>
          <div className='w-8 h-auto rounded'>
              <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Gmail_icon_%282020%29.svg/2560px-Gmail_icon_%282020%29.svg.png' alt='Gmail' className='w-full h-auto rounded hover:-translate-y-1 transition-all'/>
          </div>
          <div className='w-8 h-auto rounded'>    
              <img src='https://www.picng.com/upload/letter_f/png_letter_f_50740.png' alt='Fb' className='w-full h-auto rounded scale-150 hover:-translate-y-1 transition-all'/>
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
      <form className='flex flex-col justify-start px-4 gap-y-1'>
          <div>
              <Label value='Email' />
              <InputField type='email' />
          </div>
          <div>
              <Label value='Full Name' />
              <InputField type='text' />
          </div>


          <div>
              <label className='text-sm font-light'>Password</label>
              <div className='relative'>
                  <input className='w-full p-2 border-[0.5px] border-gray_light rounded-md text-sm' type={isRevealed ? "text" : "password"} />
                  <img 
                      title={isRevealed ? 'Hide Password' : 'Show Password'}
                      src={isRevealed ? showPwd : hidePwd}
                      className='w-6 h-6 absolute right-3 top-1 m-1'
                      alt='Visibility Icon'
                      onClick={() => setIsRevealed(!isRevealed)}
                  />
              </div>
          </div>
          <div>
              <label className='text-sm font-light'>Confirm Password</label>
              <div className='relative'>
                  <input className='w-full p-2 border-[0.5px] border-gray_light rounded-md text-sm' type={isConfRevealed ? "text" : "password"} />
                  <img 
                      title={isConfRevealed ? 'Hide Password' : 'Show Password'}
                      src={isConfRevealed ? showPwd : hidePwd}
                      className='w-6 h-6 absolute right-3 top-1 m-1'
                      alt='Visibility Icon'
                      onClick={() => setIsConfRevealed(!isConfRevealed)}
                  />
              </div>
          </div>
          
          <button 
            className='w-full p-2 bg-primary text-white rounded-sm text-sm font-bold hover:bg-secondary my-4 disabled:bg-gray_light disabled:text-primary' 
            onClick={handleRegister}
            disabled={loading}
          >
            {
              loading ? 
              <div className='w-full flex gap-x-4 justify-center items-center'>
                <Loader />
                <span>Registering</span>
              </div>
              : 
              'Register'
            }
          </button>
          <p className='text-sm font-light'>
              Already have an account? {" "}
              <span className='text-sm font-medium text-primary cursor-pointer' onClick={() => navigate('/login')}>
                  Login
              </span>
          </p>
      </form>
    </div>
  )
}

export default RegisterForm