import React, { useContext } from 'react'
import { UserContext } from '../../context/UserContext';

import styled from 'styled-components';

const positions = [
    {
        id: 1,
        name: 'General',
    },
    {
        id: 2,
        name: 'Oncology',
    },
    {
        id: 3,
        name: 'Cardiology',
    }
]

const Tab = styled.p`
    font-size: 1rem;
    color: ${props => props.active ? '#50CB93' : '#3F3F44'};
    margin-bottom: 0.5rem;

    &::before{
        content: '';
        display: block;
        width: ${props => props.active ? '100%' : '0'};
        margin-bottom: 0.5rem;
        height: 3px;
        background: ${props => props.active ? '#50CB93' : 'transparent'};
        transition: all 0.3s ease;
    }
`
const Container = styled.div`
    cursor: -moz-grab;

    &::-webkit-scrollbar {
        height: 0;
    }
    *::-webkit-scrollbar-thumb {
        color: #fff;
    }
`

const BotNav_Doctors = () => {
    const { activeDoctor, setActiveDoctor, setActiveDoctorTab } = useContext(UserContext);

    return (
        <Container className='fixed bottom-0 w-full flex justify-start gap-x-4 bg-white border-y-[0.5px] border-y-gray_light lg:hidden overflow-x-auto'>
            <Tab active={activeDoctor === 1} onClick={() => {setActiveDoctor(1); setActiveDoctorTab(`${positions[0].name}`)}}>{positions[0].name}</Tab>
            {
                positions.slice(1).map((position, index) => (
                    <Tab active={activeDoctor === index + 2} onClick={() => {setActiveDoctor(index + 2); setActiveDoctorTab(`${position.name}`)}}>{position.name}</Tab>
                ))
            }
        </Container>
    )
}

export default BotNav_Doctors