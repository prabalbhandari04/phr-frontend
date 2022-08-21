/* eslint-disable react/jsx-pascal-case */
import React, { useState } from 'react'
import Navbar from '../components/Navbar'
import DoctorDetail from '../components/ProfileComponents/Doctor/DoctorDetail'
import SideNav from '../components/ProfileComponents/Doctor/SideNav'
import EditProfile from '../components/ProfileComponents/Edit/EditProfile'
import BotNav from '../components/ResponsiveComponents/BotNav'
import BotNav_Edit from '../components/ResponsiveComponents/BotNav_Edit'

const ProfileDoctor = () => {
  const [edit, setEdit] = useState(false)

  const handleEdit = () => {
      setEdit(!edit);
  }

  return (
    <>
        <Navbar />
        <div className='w-full relative bg-white flex justify-start my-16'>
          {
            !edit ?
            (
              <>
                <SideNav />
                <DoctorDetail handleEdit={handleEdit}/>
              </>
            )
            :
            (
              <EditProfile handleBack={handleEdit}/>
            )
          }
        </div>
        {
          !edit ?
          (
            <BotNav />
          )
          :
          (
            <BotNav_Edit />
          )
        }
    </>
  )
}

export default ProfileDoctor