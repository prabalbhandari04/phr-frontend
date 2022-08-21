import Axios from 'axios';
import React, { useContext, useState, useEffect } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom';
const data = {
  doctor: 'Dr. Ryan Khoo',
  avatar: 'https://preview.redd.it/rw8wl649qw091.jpg?width=640&crop=smart&auto=webp&s=29740974b984a293f8823f262d896e699124d169',
  speciality: 'Depression Remover',
}

const DateTime = () => {
  const {id} = useParams();
  const [doctor,setDoctor] = useState([]);
  const [slot,setSlot] = useState([]);
    useEffect(() => {
        fetch('/doctor/docinfo/'+id)
        .then( res => {
            return res.json();
        })
        .then(doctor => {
            setDoctor(doctor);
        })
      }, [])


      useEffect(() => {
        fetch('/book/get-slots/'+id)
        .then( res => {
            return res.json();
        })
        .then( slot=> {
            setSlot(slot);
        })
      }, [])

  return (
    <div className='flex flex-col gap-y-8 items-center md:items-start'>
      <div className='flex flex-col md:flex-row md:justify-between gap-x-4'> {/* Doctor */}
        <img src={doctor.avatar} alt={doctor.avatar} className='w-52 h-52 object-cover object-top' />
        <div>
          <p className='text-lg font-semibold text-black capitalize'>{doctor.name}</p>
          <p className='font-light text-black capitalize'>{doctor.speciality}</p>
          <p className='text-sm font-light'><strong>Degree</strong>: {doctor.qualification}</p>
          <p className='text-sm font-light'><strong>Specialization</strong>: {doctor.specialization}</p>
          <p className='text-sm font-light'><strong>Experience</strong>: {doctor.experience}</p>
          <p className='text-sm font-light'><strong>Fees</strong>: Nrs {doctor.feesPerSession}</p>
        </div>
      </div>
    </div>
  )
}

export default DateTime