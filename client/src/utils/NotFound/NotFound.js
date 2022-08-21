import React from 'react'
 import Not from '../../assets/images/404.png'
import Footer from '../../components/Footer'
import Navbar from '../../components/Navbar'
import { Link } from 'react-router-dom'
function NotFound() {
    return (
        <div>
            <Navbar />
            <img 
                src={Not} 
                alt="Records"
                style={{position: 'relative',left: '25%'}}
                className='hidden md:flex w-1/2 h-1/2 center object-cover object-center'
            />
            <div className='flex justify-between mt-4'>
            <button style={{position: 'relative',left: '45%'}} className='px-8 py-2 bg-primary text-white text-base font-medium'>
                        <Link to='/' smooth={true} duration={500}>
                            Go to Home
                        </Link>
                    </button>
                    </div>
            <Footer />
        </div>

    )
}

export default NotFound
