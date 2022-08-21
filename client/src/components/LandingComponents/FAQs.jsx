import React, { useState } from 'react'
import { AiOutlinePlus } from 'react-icons/ai'

const questionData = [
    {
        id: 1,
        question: 'What is Ayuh?',
        answer: 'Ayuh is a platform that helps you to keep track of your health records. It is a simple and easy way to manage your health records.'
    },
    {
        id: 2,
        question: 'How do I get started?',
        answer: 'You can sign up as a patient or doctor. If you are a patient, you can sign up and start using Ayuh. If you are a doctor, you can sign up and start using Ayuh.'
    },
    {
        id: 3,
        question: 'How do I add a new record?',
        answer: 'You can add a new record by clicking on the button "Add Record" in the navigation bar. You can add a new record by clicking on the button "Add Record" in the navigation bar. You can add a new record by clicking on the button "Add Record" in the navigation bar.'
    },
    {
        id: 4,
        question: 'How do I register as Doctor?',
        answer: 'You can register as a doctor by clicking on the button "Register as Doctor" in the navigation bar. You can register as a doctor by clicking on the button "Register as Doctor" in the navigation bar. You can register as a doctor by clicking on the button "Register as Doctor" in the navigation bar.'
    },
    {
        id: 5,
        question: 'How do I get patients?',
        answer: 'Here in Ayuh, patients request an appointment for you which will be displayed in your profile',
    },
]

const FAQs = () => {
    const [active, setActive] = useState(0);

    return (
        <div className='w-full  px-4 lg:px-8 bg-white flex flex-col gap-y-4 md:gap-y-16'>
            <h1 className='text-3xl md:text-5xl font-black uppercase text-black flex flex-col  text-center'>Frequently asked <span className='text-primary'>Questions</span></h1>
            <div className='flex flex-col lg:flex-row'>
                <div className='w-full flex flex-col gap-y-4 justify-between'>
                    {
                        questionData.map((question, index) => (
                            <div className='flex flex-col w-full px-4 py-2 gap-y-2 border-b-[1px] border-b-gray_light' key={index}>
                                <div className='flex justify-between items-center'>
                                    <h1 className='text-black uppercase font-semibold'>{question.question}</h1>
                                    {
                                        active === question.id ? 
                                        (
                                            <AiOutlinePlus className='w-5 h-5 rotate-45 text-black' onClick={() => setActive(0)}/>
                                        ) : 
                                        (
                                            <AiOutlinePlus className='w-5 h-5 text-black' onClick={() => setActive(question.id)}/>
                                        )
                                    }
                                </div>
                                {
                                    active === question.id && 
                                    (
                                    <div>
                                        <p className='text-black font-light'>{question.answer}</p>
                                    </div>
                                    )
                                }
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default FAQs