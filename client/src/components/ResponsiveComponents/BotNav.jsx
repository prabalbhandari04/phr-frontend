import React, { useContext } from 'react'
import { BsFileMedical } from 'react-icons/bs'
import { AiOutlineHourglass } from 'react-icons/ai'
import { FiUser } from 'react-icons/fi'
 
import { UserContext } from '../../context/UserContext';

const BotNav = () => {
    const { activeTab, setActiveTab } = useContext(UserContext);

    return (
        <div className='sticky bottom-0 w-full py-4 flex justify-between gap-y-1 bg-white border-y-[0.5px] border-y-gray_light lg:hidden px-8'>
            {
                activeTab === 1 ? 
                (
                    <div className='flex flex-col gap-x-2 items-center'>
                        <FiUser color='#50CB93' style={{fontSize: "1.5rem"}}/>
                        <p className='text-xs text-primary'>User Detail</p>
                    </div>
                )
                : 
                (
                    <div className='flex flex-col gap-x-2 items-center'>
                        <FiUser style={{fontSize: "1.5rem"}} onClick={() => setActiveTab(1)}/>
                        <p className='text-xs text-black cursor-pointer' onClick={() => setActiveTab(1)}>User Detail</p>
                    </div>
                )
            }
            
            {
                activeTab === 2 ? 
                (
                    <div className='flex flex-col items-center'>
                        <BsFileMedical color='#50CB93' style={{fontSize: "1.5rem"}}/>
                        <p className='text-xs text-primary'>Health Records</p>
                    </div> 
                )    
                : 
                (
                    <div className='flex flex-col items-center' onClick={() => setActiveTab(2)}>
                        <BsFileMedical style={{fontSize: "1.5rem"}}/>
                        <p className='text-xs text-black cursor-pointer'>Health Records</p>
                    </div>
                ) 
            }

            {
                activeTab === 3 ? 
                (
                    <div className='flex flex-col items-center'>
                        <AiOutlineHourglass color='#50CB93' style={{fontSize: "1.5rem"}}/>
                        <p className='text-xs text-primary'>Appointments</p>
                    </div> 
                )
                : 
                (
                    <div className='flex flex-col items-center' onClick={() => setActiveTab(3)}>
                        <AiOutlineHourglass style={{fontSize: "1.5rem"}}/>
                        <p className='text-xs text-black cursor-pointer'>Appointments</p>
                    </div> 
                )
            }
        </div>
    )
}

export default BotNav