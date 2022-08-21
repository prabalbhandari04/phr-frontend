import React, { useContext, useState } from 'react'
import styled from 'styled-components'
import { rgba } from 'polished'

import Button from '../../Button'
import { UserContext } from '../../../context/UserContext'

const bloodGroups = ['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-']
const expertises = [
    'Cardiology', 'Dentistry', 'Dermatology', 'Endocrinology', 'Gastroenterology', 'General Medicine', 'Gynecology', 'Hematology', 'Immunology', 'Internal Medicine', 'Nephrology', 'Neurology', 'Obstetrics', 'Oncology', 'Ophthalmology', 'Orthopedics', 'Pathology', 'Pediatrics', 'Plastic Surgery', 'Psychiatry', 'Radiology', 'Surgery', 'Urology'
]

const FieldsWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 0.25rem;
`
const Input = styled.input`
    width: 100%;
    padding: 0.5rem;
    border: 1px solid ${props => props.error ? 'red' : rgba(props.theme.primary, 0.25)};
    border-radius: 4px;
    background-color: transparent;

    color: ${props => props.theme.text};

    &:focus {
        outline: 2px solid ${props => props.error ? 'transparent' : rgba(props.theme.primary, 0.50)};
    }
`
const Select = styled.select`
    width: 100%;
    padding: 0.5rem;
    border: 1px solid ${props => props.error ? 'red' : rgba(props.theme.primary, 0.25)};
    border-radius: 4px;
    background-color: transparent;

    color: ${props => props.theme.text};

    &:focus {
        outline: 2px solid ${props => props.error ? 'transparent' : rgba(props.theme.primary, 0.50)};
    }

`

export const Radio = styled.div`
    background-color: ${props => props.selected ? rgba(props.theme.primary, 0.25) : props => props.theme.gray_light};
    color: ${props => props.selected ? props.theme.primary : props => props.theme.text};
    border-radius: 4px;
    display: flex;
    align-items: center;
    justify-content: center;

    min-width: 5rem;
    padding: 0.5rem 3rem;
    cursor: pointer;
`

const labelStyle = 'text-sm font-light text-gray_dark'

const AdditionalRegInfo = ({ setStep, setPercentage }) => {
    const { additionalData, setAdditionalData } = useContext(UserContext);
    const [error, setError] = useState({
        fillall: false,
        height: false,
        weight: false,
    });


    const getSelected = (selectedBlood) => {
        if (additionalData.blood_group === selectedBlood) {
            return true
        }
        else {
            return false
        }
    }
    const selectAs = (user) => {
        if(additionalData.userType === user) {
            return true
        }
        else {
            return false
        }
    }

    const handleNext = (e) => {
        e.preventDefault();
        console.table(additionalData)
        if(additionalData.userType === 'Doctor') {
            if(additionalData.height === '' || additionalData.weight === '' || additionalData.blood_group === '' || additionalData.expertise === '' || additionalData.nmc === '' || additionalData.experience === '' || additionalData.qualification === '') {
                setError({
                    height: false,
                    weight: false,
                    fillall: true
                })
                return null
            }
            else if (additionalData.height > 243 ) {
                setError({
                    weight: false,
                    fillall: false,
                    height: true
                })
                return null
            }
            else if (additionalData.weight > 545) {
                setError({
                    height: false,
                    fillall: false,
                    weight: true
                })
                return null
            }
            else {
                setError({
                    fillall: false,
                    height: false,
                    weight: false,
                })
                setPercentage(33.3333);
                setStep(2);
            }
        }
        else if (additionalData.userType === 'Patient') {
            if(additionalData.height === '' || additionalData.weight === '' || additionalData.blood_group === '') {
                setError({
                    height: false,
                    weight: false,
                    fillall: true
                })
            }
            else if (additionalData.height > 243 ) {
                setError({
                    fillall: false,
                    weight: false,
                    height: true
                })
                return null
            }
            else if (additionalData.weight > 445) {
                setError({
                    fillall: false,
                    height: false,
                    weight: true
                })
                return null
            }
            else {
                setError({
                    fillall: false,
                    height: false,
                    weight: false,
                })
                setPercentage(33.3333);
                setStep(2); 
            }
        }
    }

    return (
        <div className='px-4 py-2 w-full'>
            <form className='flex flex-col gap-y-4' onSubmit={handleNext}>
                <FieldsWrapper>
                    <label className={`${labelStyle}`}>Register As</label>
                    <div className='flex gap-4 flex-wrap'>
                        {
                            ['Doctor', 'Patient'].map((item, index) => (
                                <Radio selected={selectAs(item)} onClick={() => setAdditionalData({...additionalData, userType: item})} key={index}>
                                    <label>{item}</label>
                                </Radio>
                            ))
                        }
                    </div>
                </FieldsWrapper> 
                <FieldsWrapper>
                    <label className={`${labelStyle}`}>Gender</label>
                    <Select value={additionalData.gender} onChange={(e) => setAdditionalData({...additionalData, gender: e.target.value})}>
                            <option value='Male'>Male</option> 
                            <option value='Female'>Female</option> 
                            <option value='Other'>Other</option> 
                    </Select> 
                </FieldsWrapper>
                <FieldsWrapper>
                    <label className={`${labelStyle}`}>Height (in cm.)
                        {
                            error.fillall ? <span className='text-[red] ml-2'>*</span> : error.height ? <span className='text-[red] ml-2'>Please insert valid height in terms of cm.</span> : null
                        }
                    </label>
                    <Input placeholder='eg: 5.6' value={additionalData.height} onChange={(e) => setAdditionalData({...additionalData, height: e.target.value})} error={error.fillall || error.height}/> 
                </FieldsWrapper>
                <FieldsWrapper>
                    <label className={`${labelStyle}`}>Weight (in kg.)
                        {
                            error.fillall ? <span className='text-[red] ml-2'>*</span> : error.weight ? <span className='text-[red] ml-2'>Please insert valid weight in terms of Kg.</span> : null
                        }
                    </label>
                    <Input placeholder='eg: 45kg.' value={additionalData.weight} onChange={(e) => setAdditionalData({...additionalData, weight: e.target.value})} error={error.fillall || error.weight}/> 
                </FieldsWrapper>
                <FieldsWrapper>
                    <label className={`${labelStyle}`}>Blood Group
                     {
                            error.fillall && <span className='text-[red] ml-2'>*</span>
                        }
                    </label>
                    <div className='flex gap-4 flex-wrap'>
                        {
                            bloodGroups.map((bloodGroup, index) => (
                                <Radio key={index} selected={getSelected(bloodGroup)} onClick={() => setAdditionalData({...additionalData, blood_group: bloodGroup})}>
                                    <label>{bloodGroup}</label>
                                </Radio>
                            ))
                        }
                    </div>
                </FieldsWrapper>

                {
                    additionalData.userType === 'Doctor' &&
                    <>
                        <FieldsWrapper>
                            <label className={`${labelStyle}`}>Expertise
                                {
                                    error.fillall && <span className='text-[red] ml-2'>*</span>
                                }
                            </label>
                            <Select className='hide-scrollbar' value={additionalData.expertise} onChange={(e) => setAdditionalData({...additionalData, expertise: e.target.value})}>
                                {
                                    expertises.map((item, index) => (
                                        <option key={index} className='px-4' value={item}>{item}</option>
                                    ))
                                }
                            </Select> 
                        </FieldsWrapper>
                        <FieldsWrapper>
                            <label className={`${labelStyle}`}>NMC_no 
                                {
                                    error.fillall &&
                                    <span className='ml-2 text-[red] ml-2'>*</span>
                                }
                            </label>
                            <Input placeholder='eg 17112345' type='number' value={additionalData.nmc} onChange={(e) => setAdditionalData({...additionalData, nmc: e.target.value})} error={error.fillall}/> 
                        </FieldsWrapper>
                        <FieldsWrapper>
                            <label className={`${labelStyle}`}>Experience (in Years)
                                {
                                    error.fillall && <span className='text-[red] ml-2'>*</span>
                                }
                            </label>
                            <Input placeholder='eg 1.5' type='number' value={additionalData.experience} onChange={(e) => setAdditionalData({...additionalData, experience: e.target.value})} error={error.fillall}/> 
                        </FieldsWrapper>
                        <FieldsWrapper>
                            <label className={`${labelStyle}`}>Fees per Session (in Rs.)
                                {
                                    error.fillall && <span className='text-[red] ml-2'>*</span>
                                }
                            </label>
                            <Input placeholder='eg 300' type='number' value={additionalData.feesPerSession} onChange={(e) => setAdditionalData({...additionalData, feesPerSession: e.target.value})} error={error.fillall}/> 
                        </FieldsWrapper>
                        <FieldsWrapper>
                            <label className={`${labelStyle}`}>Qualification
                                {
                                    error.fillall && <span className='text-[red] ml-2'>*</span>
                                }
                            </label>
                            <Input placeholder='eg MBBS' type='text' value={additionalData.qualification} onChange={(e) => setAdditionalData({...additionalData, qualification: e.target.value})} error={error.fillall}/> 
                        </FieldsWrapper>
                    </>
                }
                
                <div className='mt-4'>
                    <Button value={'Next'} strong={true}/>
                </div>
            </form>
        </div>
    )
}

export default AdditionalRegInfo