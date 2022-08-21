import React from 'react'
import styled from 'styled-components'

const symptomsType = [
    {
        id: 1,
        name: 'Dizzy'
    },
    {
        id: 2,
        name: 'Shortness of Breath'
    },
    {
        id: 3,
        name: 'Fainted'
    },
    {
        id: 4,
        name: 'Swelling'
    },
    {
        id: 5,
        name: 'Heart Fluttering'
    },
    {
        id: 6,
        name: 'Fatigue'
    },
    {
        id: 7,
        name: 'Other'
    }
]

const Overlay = styled.div`
    position: absolute;
    left: 0;
    bottom: -8rem;
    width: 100%;
    background-color: ${props => props.theme.primary};
    padding: 1rem;
    border-radius: 14px 14px 4px 4px;
    transition: all 0.3s ease-in-out;

    @media (max-width: 768px) {
        bottom: 0;
    }
    
    p {
        color: ${props => props.theme.white};
        font-size: 1rem;
        font-weight: semi-bold;
        text-transform: capitalize;
        z-index: 9;
    }
`
const ImageWrapper = styled.div`
    img {
        object-fit: cover;
    }

    &:hover ${Overlay} {
        bottom: 0;
    }
    
    &:hover img {
        filter: grayscale(100%);
    }
`
const InputWrapper = styled.div`
    row-gap: 0.25rem;

    label {
        font-size: 1rem;
        color: ${props => props.theme.black};
        font-weight: 300;
    }
    input, select, textarea {
        background-color: transparent;
        border: 1px solid ${props => props.theme.gray_dark};
        border-radius: 4px;
        padding: 0.5rem;
        font-size: 1rem;
        color: ${props => props.theme.black};
        font-weight: 400;

        &:focus {
            outline: none;
            border: 1px solid ${props => props.theme.primary};
        }
        &:select {
            border: 1px solid ${props => props.theme.primary};
        }
    }

`

const Reason = () => {
    return (
        <div className='w-full flex flex-col lg:flex-row justify-center lg:justify-between gap-y-12 px-4 xl:px-0'> {/* Confirmation Details */}
            <div className='w-full lg:flex-1 flex flex-col items-start gap-y-8'> {/* Appointment Type */}
                <h2 className='text-xl font-bold uppercase'>Type</h2>
                <div className='flex justify-center lg:justify-start gap-x-8 w-full'>
                    <ImageWrapper className='w-1/2 md:w-1/4 relative overflow-hidden'>
                        <img 
                            src='https://images.unsplash.com/photo-1580281658626-ee379f3cce93?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NTd8fG9mZmxpbmUlMjB0cmVhdG1lbnR8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60' 
                            alt='Offline'
                            className='w-full h-56 rounded-[4px]' 
                        />
                        <Overlay>
                            <p>
                                Offline Appointment
                            </p>
                        </Overlay>
                    </ImageWrapper>
                    <ImageWrapper className='w-1/2 md:w-1/4 relative overflow-hidden'>
                        <img 
                            src='https://images.unsplash.com/photo-1588873281272-14886ba1f737?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTl8fG9ubGluZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60' 
                            alt='Online'
                            className='w-full h-56 rounded-[4px]' 
                        />
                        <Overlay>
                            <p>
                                Online Appointment
                            </p>
                        </Overlay>
                    </ImageWrapper>
                </div>
            </div>

            <div className='w-full lg:flex-1 flex flex-col items-center lg:items-start gap-y-8'> {/* Appointment Reason */}
                <h2 className='text-xl font-bold uppercase'>Reason</h2>
                <form className='flex flex-col gap-y-2 w-full'>
                    <InputWrapper className='flex flex-col'>
                        <label>Problem</label>
                        <input type='text' />
                    </InputWrapper>
                    <InputWrapper className='flex flex-col'>
                        <label>Symptoms</label>
                        <select>
                            {
                                symptomsType.map((item, index )=> (
                                    <option key={index} value={item.name}>{item.name}</option>
                                ))
                            }
                        </select>
                    </InputWrapper>
                    <InputWrapper className='flex flex-col'>
                        <label>Message</label>
                        <textarea rows={4} type='text'/>
                    </InputWrapper>
                </form> 
            </div>
        </div>
    )
}

export default Reason