import React, { useContext } from 'react'
import { UserContext } from '../../context/UserContext';

import styled from 'styled-components';

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

const BotNav_Edit = () => {
    const { activeEdit, setActiveEdit } = useContext(UserContext);

    return (
        <div className='sticky bottom-0 w-full flex justify-start gap-x-4 bg-white border-y-[0.5px] border-y-gray_light lg:hidden'>
            {
                activeEdit === 1 ? 
                (
                    <div className='flex-1 flex flex-col gap-x-2 items-center'>
                        <Tab active={true}>Personal</Tab>
                    </div>
                )
                : 
                (
                    <div className='flex-1 flex flex-col gap-x-2 items-center' onClick={() => setActiveEdit(1)}>
                        <Tab active={false}>Personal</Tab>
                    </div>
                )
            }
            
            {
                activeEdit === 2 ? 
                (
                    <div className='flex-1 flex flex-col items-center'>
                        <Tab active={true}>Avatar</Tab>
                    </div> 
                )    
                : 
                (
                    <div className='flex-1 flex flex-col items-center' onClick={() => setActiveEdit(2)}>
                        <Tab active={false}>Avatar</Tab>
                    </div>
                ) 
            }

            {
                activeEdit === 3 ? 
                (
                    <div className='flex-1 flex flex-col items-center'>
                        <Tab active={true}>Security</Tab>
                    </div> 
                )
                : 
                (
                    <div className='flex-1 flex flex-col items-center' onClick={() => setActiveEdit(3)}>
                        <Tab active={false}>Security</Tab>
                    </div> 
                )
            }
        </div>
    )
}

export default BotNav_Edit