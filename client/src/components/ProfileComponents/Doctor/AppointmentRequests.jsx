import React, { useState } from 'react'
import { AiOutlineProfile, AiOutlineMessage } from 'react-icons/ai';


const appointmentData = [
  {
    id: 1,
    name: 'Kenny M. Dominguez',
    img: 'https://randomuser.me/api/portraits/men/54.jpg',
    date: '2022-05-01',
    time: '13:00',
    reason: 'Severe cough',
    status: 'Progress',
    message: 'Started occuring few days ago, developed from common cold'
  },
  {
    id: 2,
    name: 'Kana Sten',
    img: 'https://randomuser.me/api/portraits/women/59.jpg',
    date: '2022-05-01',
    time: '16:00',
    reason: 'Sore throat',
    status: 'Progress',
    message: 'Started occuring few days ago, developed from common cold'
  }
]

const AppointmentRequests = () => {
  const [patient, setPatient] = useState(appointmentData[0]);


  return (
    <div className='w-full flex flex-col gap-y-4'>
      <h1 className='text-3xl text-black font-bold'>Appointment Requests</h1>
      <div className='w-full flex flex-col-reverse lg:flex-row gap-y-4 gap-x-4'>
        <div className='w-full lg:w-4/6 flex flex-col gap-y-4'>
          {
            appointmentData.map((data, index) => (
                <div className='w-full flex justify-between flex-col flex-wrap lg:flex-row gap-y-8 bg-gray_light items-center p-4' key={index} onClick={() => setPatient(appointmentData[index])}>
                  <div className='flex flex-col items-center gap-y-4'>
                    <h5 className='text-lg font-medium text-black'>Patient</h5>
                    <div className='flex gap-x-2 items-center'>
                      <img src={data.img} alt='profile_picture' className='w-12 h-12 rounded' />
                      <p className='text-base font-light'>{data.name}</p>
                    </div>
                  </div>
                  <div className='flex flex-col items-center gap-y-4'>
                    <h5 className='text-lg font-medium text-black'>Date</h5>
                    <p className='text-base font-light'>{data.date}</p>
                  </div>
                  <div className='flex flex-col items-center gap-y-4'>
                      <h5 className='text-lg font-medium text-black'>Time</h5>
                      <p className='text-base font-light'>{data.time}</p>
                  </div>
                  <div className='flex flex-col items-center gap-y-4'>
                    <h5 className='text-lg font-medium text-black'>Status</h5>
                      <select className='border-[0.5px] border-gray_dark px-4 py-2 bg-transparent'>
                          <option selected disabled>Set Status</option>
                          <option value='Success'>Complete</option>
                          <option value='Failed'>Failed</option>
                      </select>
                  </div>
                </div>
            ))
          }
        </div>
       {/* Show Detail */}
       <div className='w-full lg:flex-1 flex flex-col items-center bg-gray_light px-8 py-4 gap-y-4'>
          <img src={patient.img} alt='ProfilePicture' className='w-36 h-36 object-cover object-top rounded'/>
          <h1 className='text-xl font-normal'>{patient.name}</h1>
          <div className='flex justify-center gap-x-6'>
            <div className='border-primary border-[1px] px-6 py-1'>
              <AiOutlineProfile className='text-primary text-xl' />
            </div>
            <div className='border-primary border-[1px] px-6 py-1'>
              <AiOutlineMessage className='text-primary text-xl' />
            </div>
          </div>

          <div className='flex flex-col text-center items-center gap-x-4'>
            <p className='text-sm font-normal'><strong>Problem</strong>: {patient.reason}</p>
            <p className='text-sm font-normal'><strong>Message</strong>: {patient.message}</p>
          </div>
       </div>
      </div>
    </div>
  )
}

export default AppointmentRequests;