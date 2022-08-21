import React, { useContext } from 'react'
import { Link } from 'react-router-dom';
import { UserContext } from '../../../context/UserContext';
import Avatar from './Avatar';
import ChangePassword from './ChangePassword';
import PersonalDetail from './PersonalDetail';


const EditProfile = ({ handleBack }) => {
    const { activeEdit, setActiveEdit } = useContext(UserContext);

    const getActive = (index) => {
        if (activeEdit === index) {
            return 'bg-primary px-4 py-2 rounded font-light text-base text-white cursor-pointer flex items-center gap-x-1';
        }
        else {
            return 'px-4 py-2 rounded font-light text-base text-black cursor-pointer flex items-center gap-x-1';
        }
    }
      
    return (
        <div className='w-full min-h-screen flex flex-col lg:flex-row gap-x-4'>
            {/* Nav */}
            <div className='hidden lg:w-[15vw] h-auto lg:h-screen lg:flex flex-col lg:flex-row gap-x-2 gap-y-4'>
                <div className='w-full'>
                    <ul className='list-none flex flex-col gap-y-4 mx-4'>
                        <li className={`${getActive(1)}`} onClick={() => setActiveEdit(1)}>Personal Details</li>
                        <li className={`${getActive(2)}`} onClick={() => setActiveEdit(2)}>Profile Avatar</li>
                        <li className={`${getActive(3)}`} onClick={() => setActiveEdit(3)}>Security</li>
                    </ul>
                </div>
                <div className='h-[1px] w-full lg:w-[1px] lg:h-screen bg-gray_light mb-4 lg:mb-0'/>
            </div>
            
            <div className='w-full lg:w-[70vw] h-full flex flex-col items-center'>
                {
                    activeEdit === 1 ?
                    (
                        <PersonalDetail back={handleBack}/>
                    )
                    :
                    activeEdit === 2 ?
                    (
                        <Avatar back={handleBack} />
                    )
                    :
                    (
                        <ChangePassword back={handleBack} />
                    )
                }
            </div>

            <div className='w-full lg:w-[15vw] flex flex-col lg:flex-row lg:gap-x-4 gap-y-4'>
                <div className='w-full lg:w-[1px] h-[1px] lg:h-screen bg-gray_light'/>
                <div className='w-full flex flex-col items-center lg:items-start'>
                    <Link to="#"className='text-primary text-base font-regular'>Change Email Address</Link>
                    <Link to="#"className='text-[#FF6B6B] text-base font-regular'>Delete Account</Link>
                </div>
            </div>
        </div>
    )
}

export default EditProfile