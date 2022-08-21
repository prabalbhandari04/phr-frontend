/* eslint-disable react/jsx-pascal-case */
import React from 'react'
import DoctorCard from '../components/DoctorComponents/DoctorCard'
import SideNav from '../components/DoctorComponents/SideNav'
import Navbar from '../components/Navbar'
import BotNav_Doctors from '../components/ResponsiveComponents/BotNav_Doctors'

const Doctors = () => {

  return (
    <div className='flex flex-col w-full min-h-screen items-center relative'>
        <Navbar />
        <br />
        <div className='w-full relative bg-white flex justify-start my-16'>
          <SideNav />
          <DoctorCard />
        </div>
        <BotNav_Doctors />
    </div>
)
}

export default Doctors