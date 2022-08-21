import React from 'react';
import Confirm from '../../assets/vectors/confirmation.svg';

const data = {
    doctor: 'Dr. Ryan Khoo',
    date: '2020-06-01',
    type: 'Online',
    problem: 'Dizzy',
    message: 'I sleep, I wake, I dizzy'
}

const Confirmation = () => {
    return (
        <div className='w-full flex justify-between items-center px-4 xl:px-0'>
            <div className='w-full md:w-1/2 flex flex-col gap-y-12'>
                <h2 className='text-xl font-bold uppercase'>Confirmation</h2>
                <div className='w-full flex gap-x-16'>
                    <ul className='w-max font-light'>
                        <li>Doctor</li>
                        <li>Date</li>
                        <li>Appointment Type</li>
                        <li>Problem</li>
                        <li>Message</li>
                    </ul>
                    <ul className='flex flex-col font-medium'>
                        <li>{data.doctor}</li>
                        <li>{data.date}</li>
                        <li>{data.type}</li>
                        <li>{data.problem}</li>
                        <li>{data.message}</li>
                    </ul>
                </div>
                <div className='flex gap-x-8'> 
                    <img src="https://play-lh.googleusercontent.com/LzKjYKvzLnyMq9XaRm3RauNI-ni7QwuN4r_IzClSXUNpO6o443SDACRd92ePn03UNHU" alt='IME' className='w-12 h-12'/>
                    <img src="https://play-lh.googleusercontent.com/l2NwpHebHN7ZwsyqxMhe3Ke75VC-vN8o5Xyz9cVkE3ES-o_lviOiFStNrCeo_BUtsLo_=w240-h480-rw" alt='IPS' className='w-12 h-12'/>
                </div>
            </div>
            <div className='hidden md:flex md:w-1/2'>
                <img src={Confirm} alt="Confirm Vector" className='w-full h-auto' />
            </div>
        </div>
    )
}

export default Confirmation