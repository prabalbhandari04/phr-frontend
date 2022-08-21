import React from 'react'
import { Link } from 'react-router-dom'
import { AiOutlineArrowDown } from 'react-icons/ai'

import Doctor from '../../assets/images/doctor.jpg'
import Services from './Services'

const Welcome = () => {
    return (
        <div className='flex w-full relative flex-row-reverse xl:px-0'>
            <img 
                src={Doctor} 
                alt="Records"
                className='hidden md:flex w-full h-full object-cover object-center'
            />
            <div className='flex flex-col absolute left-0 md:left-0 w-full md:w-1/2 h-full justify-center gap-y-4'>
                <h1 className='text-5xl font-black text-black uppercase'>
                Search for {" "}
                    <span className='text-5xl font-black text-primary uppercase'>
                    Doctors 
                    </span>
                </h1>
                <p className='text-sm font-normal text-black capitalize'>
                    <strong>
                Ayuh is designed to let you search for the best doctors and clinics book <br></br> appointments with them right at the palm of your hands.
                Effortlessly <br></br>choose from a pool of accredited doctors via specialization.</strong>
                </p>

                <div className='flex justify-between mt-4'>
                    <button className='px-8 py-2 bg-primary text-white text-base font-medium'>
                        <Link to='/doctors' smooth={true} duration={500}>
                        EXPLORE NOW!!
                        </Link>
                    </button>
                    <div className='md:hidden flex justify-center items-center w-10 h-10 rounded-full bg-primary shadow-md mr-8'>
                        <AiOutlineArrowDown className='down-arrow'/>
                    </div>
                </div>
            </div>

            <div className='hidden md:flex justify-center items-center absolute bottom-[4.5rem] md:left-[50%] md:right-[50%] right-4 w-12 h-12 rounded-full bg-primary shadow-md'>
                <Link to="services" smooth={true}><AiOutlineArrowDown className='down-arrow'/></Link>
            </div>

            <Services />
        </div>
    )
}

export default Welcome