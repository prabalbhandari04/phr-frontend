import React, { useContext, useState, useEffect } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom';
import { UserContext } from '../../../context/UserContext';

import StarIcon from '../../../assets/icons/star-of-life.svg';
import BloodIcon from '../../../assets/icons/blood-drop-svgrepo-com.svg';
import Gender from '../../../assets/icons/gender-svgrepo-com.svg';
import Mail from '../../../assets/icons/mail-ru-svgrepo-com.svg';
import Contact from '../../../assets/icons/phone-call-svgrepo-com.svg';
import UserAppointment from '../UserAppointment';
import Stats from './Stats';
import AppointmentRequests from './AppointmentRequests';


const iconClass = (index) => {
    if (index === true) {
        return 'w-4 h-4';
    }
}

const DoctorDetail = ({ handleEdit }) => {
    const {id} = useParams();
    const [doctor,setDoctor] = useState([]);
    const { activeTab, user } = useContext(UserContext);

    useEffect(() => {
        fetch('/doctor/docinfo/'+id)
        .then( res => {
            return res.json();
        })
        .then(doctor => {
            setDoctor(doctor);
        })
      }, [])
    

    let navigate = useNavigate();

    return (
        <div className='w-full flex flex-col gap-y-16 px-4'>  
            <div className='w-full h-fit flex flex-col lg:flex-row gap-x-8 gap-y-4' key={doctor.id}>
                {/* Personal */}
                <div className='w-full lg:flex-1 flex flex-col md:flex-row items-center md:items-start gap-x-4'>
                    <img 
                        src={doctor.avatar} alt='ProfilePicture' 
                        className='w-36 h-36 object-cover object-top rounded'
                    />
                    {/* Details */}
                    <div className='flex flex-col justify-between flex-1 py-1 gap-y-14'>
                        <div className='w-full h-fit flex flex-col md:flex-row items-center md:items-start justify-between gap-y-4'>
                            <h1 className='text-2xl font-semibold text-black uppercase'>{doctor.name}</h1>
                            {
                                user === 'doctor' ?
                                (
                                    <button className='border-2 rounded border-primary px-8 text-primary' onClick={handleEdit}>EDIT</button>
                                )
                                :
                                (
                                    <button className='border-2 rounded border-primary px-8 text-primary' onClick={() => navigate(`/book/${doctor._id}`)}>BOOK</button>
                                )
                            }
                        </div>
                        <div>
                            {/* Blood, gender, mail and contact */}
                            <div className='w-full h-fit flex flex-col items-center md:flex-row md:items-start justify-between gap-y-4 '>
                                <div className='flex gap-x-1 items-center'>
                                    <img src={Gender} alt='Gender' className={`${iconClass(true)}`}/>
                                    <p>{doctor.gender}</p>
                                </div>
                                <div className='flex gap-x-1 items-center'>
                                    <img src={StarIcon} alt='BloodIcon' className={`${iconClass(true)}`}/>
                                    <p>NMC Number : {doctor.NMC_no}</p>
                                </div>
                            </div>
                            <div className='w-full h-fit flex flex-col items-center md:flex-row md:items-start justify-between gap-y-4'>
                                <div className='flex gap-x-1 items-center'>
                                    <img src={Mail} alt='Mail' className={`${iconClass(true)}`}/>
                                    <p>{doctor.email}</p>
                                </div>
                                <div className='flex gap-x-1 items-center'>
                                    <img src={Contact} alt='Contact' className={`${iconClass(true)}`}/>
                                    <p>{doctor.contact_no}</p>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
                <div className='w-full py-8 px-4 lg:px-0 lg:py-0 lg:flex-1 note rounded flex justify-center items-center flex-col'>
                    <h1 className='text-xl font-bold uppercase'>Professional Detail's</h1>
                    <div className='w-1/2 h-[2px] bg-black mb-4'/>
                    <p className='text-sm font-light'><strong>Degree</strong>: {doctor.qualification}</p>
                    <p className='text-sm font-light'><strong>Specialization</strong>: {doctor.specialization}</p>
                    <p className='text-sm font-light'><strong>Experience</strong>: {doctor.experience}</p>
                    <p className='text-sm font-light'><strong>Fees</strong>: Nrs {doctor.feesPerSession}</p>
                </div>
            </div>

            {/* Main Contents */}
            {
                activeTab === 1 ? 
                (
                    <>
                        <AppointmentRequests />
                        <Stats />
                    </>
                )
                :
                <UserAppointment />
            }
        </div>
    )
}

export default DoctorDetail;