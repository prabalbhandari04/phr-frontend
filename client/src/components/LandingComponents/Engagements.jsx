import React from 'react'
import Stethoscope from '../../assets/icons/stethoscope.svg'
import StarOfLife from '../../assets/icons/star-of-life.svg'
import UserGroup from '../../assets/icons/user-group.svg'
import Med from '../../assets/icons/prescription.svg'
import Appointment from '../../assets/icons/appointment.svg'
import Clipboard from '../../assets/icons/clipboard.svg'

const userData = [
    {
        title: 'Qualified Staffs',
        value: '120',
        icon: Stethoscope,
    },
    {
        title: 'Medical Facilities',
        value: '27',
        icon: StarOfLife,
    },
    {
        title: 'Registered Users',
        value: '369',
        icon: UserGroup,
    }
]
const engagementData = [
    {
        title: 'Records Saved',
        value: '10M',
        icon: Clipboard,
    },
    {
        title: 'Medicines Delievered',
        value: '230',
        icon: Med,
    },
    {
        title: 'Appointments Scheduled',
        value: '10K',
        icon: Appointment,
    }
]

const Stats = ({title, value, icon}) => (
    <div className='relative flex-1 md:w-52 h-auto px-4 py-2'>
        <img src={icon} alt="Stethoscope" className='hidden md:flex w-auto h-20 opacity-5 object-cover object-center'/>
        <div className='w-full h-full absolute md:-left-8 top-4 text-center'>
            <h5 className='text-2xl md:text-5xl font-black'>{value}</h5>
            <p className='text-xs md:text-md text-black font-regular'>{title}</p>
        </div>
    </div>
)

const Engagements = () => {
  return (
    <div className='w-full   bg-white flex flex-col items-center gap-y-4 md:gap-y-16'>
        <div className='flex flex-col items-center'>
            <h1 className='text-5xl md:text-8xl text-primary font-black'>10M+</h1>
            <h3 className='text-3xl md:text-5xl text-black font-black'>ENGAGEMENTS</h3>
        </div>
        <div className='w-full flex md:justify-between items-center mb-16 md:mb-0'>
            {userData.map((user, index) => (
                <Stats key={index} icon={user.icon} value={user.value} title={user.title}/>
            ))}
        </div>
        <div className='w-full flex md:justify-between items-center'>
            {engagementData.map((data, index) => (
                <Stats key={index} icon={data.icon} value={data.value} title={data.title}/>
            ))}
        </div>
    </div>
  )
}

export default Engagements