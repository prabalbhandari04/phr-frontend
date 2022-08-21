import React, { useContext } from 'react'
import { UserContext } from '../../../context/UserContext'
import Button from '../../Button'
import { Radio } from './AdditionalRegInfo'

const existingDiseases = [
    'Sleepapnea', 'Cancer', 'arthritis', 'diabetes', 'heart disease', 'glaucoma', 'highbloodpressure', 'thyroid', 'asthama', 'hypertension', 'aids_hiv'
]

const labelStyle = 'text-sm font-light text-gray_dark'

const ExistingDisease = ({ handleSubmit, setStep, setPercentage }) => {
    const { additionalData, setAdditionalData } = useContext(UserContext);

    const addExisiting = (disease) => {
        if(additionalData.diseases.includes(disease)) {
            setAdditionalData({
                ...additionalData,
                diseases: additionalData.diseases.filter(item => item !== disease)
            })    
        }
        else {
            setAdditionalData({
                ...additionalData,
                diseases: [...additionalData.diseases, disease]
            })
        }
    }

    const getDiseases = (disease) => {
        if(additionalData.diseases.includes(disease)) {
            return true
        }
        else {
            return false
        }
    }

    const handleBack = (e) => {
        e.preventDefault()
        setPercentage(66.66666667)
        setStep(3)
    }

    return (
        <div className='px-4 py-2 w-full'>
            <form className='flex flex-col gap-y-4'>
                <label className={`${labelStyle}`}>Mark your exisitng diseases if any.</label>
                <div className='flex gap-4 flex-wrap'>
                    {
                        existingDiseases.map((item, index) => (
                            <Radio selected={getDiseases(item)} onClick={() => addExisiting(item)} key={index}>
                                <label>
                                    {item}
                                </label>
                            </Radio>
                        ))
                    }
                </div>

                <div className='flex gap-x-4 mt-4'> {/* Button Groups */}
                    <Button strong={false} onClick={handleBack} value='Back' />
                    <Button strong={true} onClick={handleSubmit} value='Finish' />
                </div>
            </form>    
        </div>
    )
}

export default ExistingDisease