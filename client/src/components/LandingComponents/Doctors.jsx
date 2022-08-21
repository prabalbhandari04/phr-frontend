import React from 'react'
import Steve from '../../assets/images/steve.png'
import Michael from '../../assets/images/Michal.png'
import Karen from '../../assets/images/karen.png'

const allDoctors = [
    {
        id: 1,
        src: Steve,
        name: "Dr. Steve Chews",
        appointments: 51
    },
    {
        id: 2,
        src: Michael,
        name: "Dr. Michael Vane",
        appointments: 44
    },
    {
        id: 3,
        src: Karen,
        name: "Dr. Karen Beasle",
        appointments: 50
    }
]

const DoctorCard = ({ src, name, appointments }) => (
    <div className='w-full relative flex justify-center items-center'>
        <div className='w-64 h-64 bg-primary rounded-full' />
        <div className='absolute -top-16 left-50 right-50 flex flex-col items-center'>
            <img src={src} alt={name} className='w-52 h-auto' />
            <h3 className='text-lg md:text-2xl font-bold text-black'>{name}</h3>
            <p className='text-xs md:text-md text-black font-regular'>{appointments} Appointments</p>
        </div>
    </div>
)

const Doctors = () => {
  return (
    <div className='w-full  flex flex-wrap justify-center items-center gap-y-20 mt-20 md:mt-0'>
        <div className='w-full flex justify-center items-center'>
            <h1 className='text-3xl md:text-5xl font-black text-primary uppercase flex flex-col md:flex-initial text-center'>
                Staff 
                <span className='text-black'>of the month</span></h1>
        </div>
        <div className='flex justify-center items-center gap-x-20'>
            {
                allDoctors.sort((a, b) => a.appointments < b.appointments).map((doctor, index) => (
                    <DoctorCard src={doctor.src} name={doctor.name} appointments={doctor.appointments} key={index}/>
                ))
            }
        </div>
    </div>
  )
}

export default Doctors