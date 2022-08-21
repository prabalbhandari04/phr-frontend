import React from 'react'
import RegisterForm from '../components/AuthComponents/RegisterForm'

const Register = () => {
  return (
    <div className='flex w-full h-screen bg-white'>
        {/* Actual Content */}
        <RegisterForm />

        {/* Tutorial */}
        <div className='hidden lg:flex w-[60%] h-full lg:flex-col items-center fixed right-0 bg-gray_light'>
        </div> 
    </div>
  )
}

export default Register