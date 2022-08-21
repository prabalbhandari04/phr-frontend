import React, { useContext } from 'react'
import { BsFileMedical } from 'react-icons/bs'
import { AiOutlineHourglass } from 'react-icons/ai'
import { FiUser } from 'react-icons/fi'
import { UserContext } from '../../../context/UserContext'


const SideNav = () => {
    const { activeTab, setActiveTab, user } = useContext(UserContext);
    let userType = user

    const getActive = (index) => {
        if (activeTab === index) {
            return 'bg-primary px-4 py-2 rounded font-light text-base text-white cursor-pointer flex items-center gap-x-1';
        }
        else {
            return 'px-4 py-2 rounded font-light text-base text-black cursor-pointer flex items-center gap-x-1';
        }
    }

    return (
        <div className='hidden lg:flex w-80 h-full gap-x-8'>
            <ul className='list-none flex flex-col gap-y-4 mx-4'>
                { 
                    userType === 'patient' ?
                    (
                        <>
                            <li className={`${getActive(1)}`} onClick={() => setActiveTab(1)}><FiUser /> Personal Details</li>
                            <li className={`${getActive(2)}`} onClick={() => setActiveTab(2)}><BsFileMedical /> Health Records</li>
                            <li className={`${getActive(3)}`} onClick={() => setActiveTab(3)}><AiOutlineHourglass /> Appointments</li>
                        </>
                    )
                    :
                    (
                        <>
                            <li className={`${getActive(1)}`} onClick={() => setActiveTab(1)}><FiUser /> Personal Details</li>
                            <li className={`${getActive(3)}`} onClick={() => setActiveTab(3)}><AiOutlineHourglass /> Appointments</li>
                        </>
                    )

                }
            </ul>
            <div className='w-[1px] h-[80vh] m-auto bg-gray_light'/>
        </div>
    )
}

export default SideNav