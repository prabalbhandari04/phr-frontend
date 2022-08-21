import React, { useContext, useState } from 'react';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { UserContext } from '../../context/UserContext';
import Confirmation from './Confirmation';
import DateTime from './DateTime';
import Final from './Final';
import Reason from './Reason';

const Container = styled.section`
    width: 100%;
    display: flex;
    flex-direction: column;
`
const Controls = styled.p`
    font-size: 1rem;
    color: ${props => props.theme.primary};
    cursor: pointer;
    text-transform: uppercase;
`

const Controller = () => {
    const { bookingStep, setBookingStep } = useContext(UserContext);
    const [ step, setStep ] = useState('');

    useEffect(() => {
        const getStep = () => {
            if ( bookingStep === 1 ) {
                setStep('Choose Date and Time');
            }
            else if ( bookingStep === 2 ) {
                setStep('Appointment Type and Reason');
            }
            else if ( bookingStep === 3 ) {
                setStep('Confirmation');
            }
            else {
                setStep('Completion');
            }
        }
        getStep();
    }, [bookingStep, setStep]);

    let navigate = useNavigate();

    return (
        <Container className='gap-y-16'>
            <div className='flex flex-col lg:flex-row lg:justify-between items-center gap-y-2'> {/* Heading and Controller */}
                <h1 className='text-3xl font-bold text-primary'>Step {bookingStep} <span className='text-base font-normal text-black'>{step}</span></h1>
                <div className='flex gap-x-4'>
                    {
                        bookingStep > 1 &&
                        <Controls onClick={() => setBookingStep(bookingStep - 1)}>prev</Controls>
                    }
                    {
                        bookingStep < 4 ?
                        <Controls onClick={() => setBookingStep(bookingStep + 1)}>next</Controls>
                        :
                        <Controls onClick={() => navigate('/')}>Home</Controls>
                    }
                </div>
            </div>
            
            {
                bookingStep === 1 ?
                <DateTime/>
                :
                bookingStep === 2 ?
                <Reason/>
                :
                bookingStep === 3 ?
                <Confirmation/>
                :
                <Final/>
            }
        </Container>
    )
}

export default Controller