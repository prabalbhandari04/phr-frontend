import React, { useContext, useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { UserContext } from '../../context/UserContext';



const DoctorCard = () => {
  const { activeDoctorTab } = useContext(UserContext);
  const [ online, setOnline ] = useState(false);
  const [doctorsList,setDoctorsList] = useState([]);
  
  let navigate = useNavigate();
  
  
  useEffect(() => {
    fetch('/doctor/allinfo')
    .then( res => {
        return res.json();
    })
    .then(doctors => {
        setDoctorsList(doctors);
    })
  }, [])


  return (
    <div className='flex flex-col w-full gap-y-8 px-4 lg:px-8'>
      <div className='w-max flex bg-gray_light rounded'>
        {
          online ? 
          (
            <>
              <button className='w-20 bg-gray_light text-black px-4 py-2 rounded-l' onClick={() => setOnline(false)}>
                All
              </button>
              <button className='w-20 bg-primary text-white px-4 py-2 rounded-r'>
                Online
              </button>
            </>
          )
          :
          (
            <>
              <button className='w-20 bg-primary text-white px-4 py-2 rounded-l'>
                All
              </button>
              <button className='w-20 bg-gray_light text-black px-4 py-2 rounded-r' onClick={() => setOnline(true)}>
                Online
              </button>
            </>
          )
        }
      </div>
      <div className='flex gap-16 flex-col md:flex-row '>
        {
          online ?
          (
            <>
              {
                doctorsList.filter(doctor => doctor.specialization.includes(activeDoctorTab)).filter(doctor => doctor.status.includes('online')).map((doctor, _id) => (
                  <div className='w-full h-40 lg:w-1/2 flex gap-x-4 rounded' key={doctor._id}>
                    <img className='h-full w-36 rounded object-cover object-top' src={doctor.avatar} alt={doctor.name} />
                    <div className='w-full flex flex-col justify-between gap-y-4'>
                      <div className='flex flex-col md:flex-row gap-y-2 justify-between'>
                        <div>
                          <h3 className='text-xl text-black font-semibold'>{doctor.name}</h3>
                          <p className='text-sm text-black font-light'>{doctor.specialization}</p>
                          <p className='text-sm text-black font-light'>{doctor.experience} </p>
                          <p className='text-sm text-black font-light'>Nrs {doctor.feesPerSession}</p>
                        </div>
                        <button className='px-4 py-2 rounded bg-primary uppercase text-white'><Link  to={`/profile/doctor/${doctor._id}`}>Profile</Link></button>
                      </div>
                      
                      {/* awards */}
                      {/* <div>
                        <h3 className='text-xl text-black font-medium'>Awards</h3>
                        <div className='flex gap-x-4 gap-y-2'>
                          {
                            doctor.awards.map((award, index) => (
                              <h1 key={index} src={award.src} className='text-2xl font-medium cursor-pointer'>{award.src}</h1>
                            ))
                          }
                        </div>  
                      </div> */}

                    </div>
                  </div>
                ))
              }
            </>
          )
          :
          (
            <>
              {
                doctorsList.filter(doctor => doctor.specialization.includes(activeDoctorTab)).map((doctor, _id) => (
                  <div className='w-full h-40 lg:w-1/2 flex gap-x-4 rounded' key={doctor._id}>
                    <img className='h-full w-36 rounded object-cover object-top' src={doctor.avatar} alt={doctor.name} />
                    <div className='w-full flex flex-col justify-between gap-y-4'>
                      <div className='flex flex-col md:flex-row gap-y-2 justify-between'>
                        <div>
                          <h3 className='text-xl text-black font-semibold'>{doctor.name}</h3>
                          <p className='text-sm text-black font-light'>{doctor.specialization}</p>
                          <p className='text-sm text-black font-light'>{doctor.experience}</p>
                          <p className='text-sm text-black font-light'>Nrs {doctor.feesPerSession}</p>
                        </div>
                        <button className='px-4 py-2 rounded bg-primary uppercase text-white' ><Link to={`/profile/doctor/${doctor._id}`}>Profile</Link></button>
                      </div>

                          {/* awards */}
                            {/* <div>
                              <h3 className='text-xl text-black font-medium'>Awards</h3>
                              <div className='flex gap-x-4 gap-y-2'>
                                {
                                  doctor.awards.map((award, index) => (
                                    <h1 key={index} src={award.src} className='text-2xl font-medium cursor-pointer'>{award.src}</h1>
                                  ))
                                }
                              </div>  
                            </div> */}


                    </div>
                  </div>
                ))
              }
            </>
          )
        }
      </div>
    </div>
  )
}

export default DoctorCard