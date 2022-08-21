import React from 'react'

const Announcement = ({ handleClick }) => {
  return (
    <div className='w-screen bg-gray_light bg-opacity-50'>
        <div className='max-w-[1366px] mx-auto py-4 flex gap-x-4 items-center justify-center'>
            <p className='text-sm text-black font-light'>This is weird. Seems like you still have few steps to follow to complete your registration. </p>
            <p className='text-sm text-primary font-medium uppercase cursor-pointer' onClick={handleClick}>Verify</p>
        </div>
    </div>
  )
}

export default Announcement