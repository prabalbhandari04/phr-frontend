import React from 'react'
import { AiOutlineFilePdf } from 'react-icons/ai'
import Thanks from '../../assets/vectors/thankYou.svg';

const data = {
    doctor: 'Dr. Ryan Khoo',
    date: '2020-06-01',
    type: 'Online',
    problem: 'Dizzy',
    message: 'I sleep, I wake, I dizzy'
}

const Final = () => {
  return (
    <div className='w-full flex justify-between items-center px-4 xl:px-0'>
        <div className='w-full md:w-1/2 flex flex-col gap-y-12'>
            <h2 className='text-xl font-bold uppercase'>Thank You</h2>
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
            <button className='w-max flex gap-x-2 px-4 py-2 bg-primary text-white items-center'>
                <AiOutlineFilePdf className='w-4 h-4'/>
                Download PDF
            </button>
        </div>
        <div className='hidden md:flex md:w-1/2'>
            <img src={Thanks} alt="Confirm Vector" className='w-3/4 h-auto' />
        </div>
    </div>
  )
}

export default Final