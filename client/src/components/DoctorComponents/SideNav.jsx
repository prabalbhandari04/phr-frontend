import React, { useContext, useEffect, useState } from 'react'
import { UserContext } from '../../context/UserContext';

const positions = [
    {
        id: 1,
        name: 'General',
    },
    {
        id: 2,
        name: 'Oncology',
    },
    {
        id: 3,
        name: 'Cardiology',
    }
]

const SideNav = () => {
    const { activeDoctor, setActiveDoctor, setActiveDoctorTab } = useContext(UserContext);
    
    const [doctors, setDoctors] = useState([]);

    useEffect(() => {
        // setdoctors from index 1
        setDoctors(positions.slice(1));
    }, [])

    useEffect(() => {
        setActiveDoctor(1);
        setActiveDoctorTab(positions[0].name);
    }, [setActiveDoctor, setActiveDoctorTab])

    const getActive = (index) => {
        if (activeDoctor === index) {
            return 'bg-primary px-4 py-2 rounded font-light text-base text-white cursor-pointer flex items-center gap-x-1';
        }
        else {
            return 'px-4 py-2 rounded font-light text-base text-black cursor-pointer flex items-center gap-x-1';
        }
    }

    return (
        <div className='hidden lg:flex w-80 h-full gap-x-8'>
            <ul className='list-none flex flex-col gap-y-4 mx-4'>
                <li className={`${getActive(1)}`} onClick={() => {setActiveDoctor(1); setActiveDoctorTab(`${positions[0].name}`)}}>{positions[0].name}</li>
                {
                    doctors.map((position, index) => (
                        <li key={index} className={`${getActive(`${index}`)}`} onClick={() => {setActiveDoctor(`${index}`); setActiveDoctorTab(`${position.name}`)}}>{position.name}</li>
                    ))
                }
            </ul>
            <div className='w-[1px] h-[80vh] m-auto bg-gray_light'/>
        </div>
    )
}

export default SideNav