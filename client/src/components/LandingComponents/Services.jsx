import React, { useEffect } from 'react'
import AOS from "aos";
import "aos/dist/aos.css";

import Lock from '../../assets/images/lock.png'
import Call from '../../assets/images/call.png'
import Prescribe from '../../assets/images/medi.jpg'
import Engagements from './Engagements';
import Doctors from './Doctors';
import FAQs from './FAQs';
import Footer from '../Footer';

const Services = () => {
    useEffect(() => {
        AOS.init();
        AOS.refresh();
    }, []);

    return (
        <div className='absolute bottom-0 w-full h-16 white-gradient z-10 flex flex-col items-center gap-y-8 md:gap-y-24' id='services'>
            <div className='w-full px-4 flex flex-col md:flex-row justify-between items-center gap-y-4 pt-28'>
                <img src={Lock} alt='safe' className='w-96 h-auto' data-aos="fade-up"/>
                <div className='w-full  flex flex-col px-8 gap-y-2'>
                    <h1 className='uppercase text-3xl md:text-5xl font-black' data-aos="fade-up" data-aos-duration="3000">SAFEKEEP YOUR HEALTH <span className="text-primary">RECORDS</span> WITH US</h1>
                    <p className='text-sm md:text-base' data-aos="fade-up" data-aos-duration="3000">
                        <strong>
                    Ayuh medical & health records helps you to track your health history & early diagnosis of health issues.<br></br>
                    Here you can store prescriptions, health & medical reports, vaccine certificates & more. <br></br>
                    Create Health profile for each of your family members & manage Medical & health records. <br></br>
                    These Medical records or PHRs can be easily shared with your doctor in a single click.<br></br></strong>
                    </p>
                </div>
            </div>
            <div className='w-full px-4 flex flex-col-reverse md:flex-row justify-between items-center gap-y-4'>
                <div className='w-full  flex flex-col px-8 gap-y-2'>
                    <h1 className='uppercase text-3xl md:text-5xl font-black' data-aos="fade-up" data-aos-duration="3000">GET IN TOUCH AND CONSULT WITH SPECIALIST <span className="text-primary">ANYTIME ANYWHERE</span></h1>
                    <p className='text-sm md:text-base' data-aos="fade-up" data-aos-duration="3000">
                        <strong>
                    With Ayuh You can consult a doctor online across 25+ specialties. Top specialties include:
                    <br></br>
                    General physician - cold and cough, fever, headache 🤧 🤕<br></br>
                    Gynecologist - irregular periods, fungal infections, period cramps 🙅‍♀️ 🙆<br></br>
                    Dentist - toothache, bleeding gums, mouth ulcers 🦷 🥴<br></br>
                    Pediatrician - fever, child’s nutrition, bed wetting 👨‍👦<br></br>
                    Dermatologist - itching, pigmentation, skin rashes 😰 😥<br></br>
                    Orthopedist - knee pain, frozen shoulder, muscle pain 💪 🦵<br></br>
                    Psychiatric - anxiety, mental health issues, depression 🤯 😣<br></br>
                    </strong>
                    </p>
                </div>
                <img src={Call} alt='call' className='w-96 h-auto' data-aos="fade-up"/>
            </div>
            <div className='w-full px-4 flex flex-col md:flex-row justify-between items-center gap-y-4 pb-20'>
                <img src={Prescribe} alt='Med' className='w-96 h-auto' data-aos="fade-up"/>
                <div className='w-full  flex flex-col px-8 gap-y-2'>
                    <h1 className='uppercase text-3xl md:text-5xl font-black' data-aos="fade-up" data-aos-duration="3000">GET PRESCRIBED EASILY AND <span className="text-primary">INSTANTLY</span></h1>
                    <p className='text-sm md:text-base' data-aos="fade-up" data-aos-duration="3000">
                        <strong>
                    Ask a doctor about your health concerns over a private call, chat, or video consultation. Ayuh also promises other benefits such as:
                    <br></br>
                * Connect with the best doctor in just 60 seconds<br></br>
                * 100% safe and secure online medical consultations<br></br>
                * Follow-up with a free doctor chat<br></br></strong>

                    </p>
                </div>
            </div>
            <Engagements />
            <Doctors />
            <FAQs />
            <Footer />
        </div>
    )
}

export default Services