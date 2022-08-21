import React, { useContext } from 'react'
import { UserContext } from '../../context/UserContext'
import { Link } from 'react-router-dom'

const Appointments = ({img, name, date, time, reason, status, key}) => {
    const { user } = useContext(UserContext);

    return (
        <div 
            className='w-full md:w-11/12 flex flex-wrap flex-col md:flex-row gap-y-8 md:gap-y-0 justify-between items-center bg-gray_light p-4' 
            key={key}
        >
            <div className='flex flex-col items-center gap-y-4'>
                {
                    user === 'patient' ?
                    (
                        <h5 className='text-lg font-medium text-black'>Doctor</h5>
                    ):
                    (
                            <h5 className='text-lg font-medium text-black'>Patient</h5>

                    )
                }
                <div className='flex gap-x-2 items-center'>
                    <img src={img} alt='profile_picture' className='w-12 h-12 rounded' />
                    <p className='text-base font-light'>{name}</p>
                </div>
            </div>
            <div className='flex flex-col items-center gap-y-4'>
                <h5 className='text-lg font-medium text-black'>Date</h5>
                <p className='text-base font-light'>{date}</p>
            </div>
            <div className='flex flex-col items-center gap-y-4'>
                <h5 className='text-lg font-medium text-black'>Time</h5>
                <p className='text-base font-light'>{time}</p>
            </div>
            <div className='flex flex-col items-center gap-y-4'>
                <h5 className='text-lg font-medium text-black'>Reason</h5>
                <p className='text-base font-light'>{reason}</p>
            </div>
            <div className='flex flex-col items-center gap-y-4'>
                <h5 className='text-lg font-medium text-black'><button><Link to="/call" target="_blank"><svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
  <path stroke-linecap="round" stroke-linejoin="round" d="M16 3h5m0 0v5m0-5l-6 6M5 3a2 2 0 00-2 2v1c0 8.284 6.716 15 15 15h1a2 2 0 002-2v-3.28a1 1 0 00-.684-.948l-4.493-1.498a1 1 0 00-1.21.502l-1.13 2.257a11.042 11.042 0 01-5.516-5.517l2.257-1.128a1 1 0 00.502-1.21L9.228 3.683A1 1 0 008.279 3H5z" />
</svg></Link></button></h5>
            </div>
            <div className='flex flex-col items-center gap-y-4'>
                <h5 className='text-lg font-medium text-black'>Status</h5>
                {
                    status === "Progress" ?
                    (
                        <select className='border-[0.5px] border-gray_dark px-4 py-2 bg-transparent'>
                            <option selected disabled>Set Status</option>
                            <option value='Success'>Complete</option>
                            <option value='Failed'>Failed</option>
                        </select>
                    )
                    :
                    (
                        <p className='text-base font-light text-primary'>{status}</p>
                    )
                }
            </div>
        </div>
  )
}

export default Appointments