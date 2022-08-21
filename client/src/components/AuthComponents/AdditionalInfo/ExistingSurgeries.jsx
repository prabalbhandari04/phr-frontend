import React, { useContext } from 'react'
import { UserContext } from '../../../context/UserContext'
import Button from '../../Button'
import { Radio } from './AdditionalRegInfo'

const exisitingSurgeries = [
    'Heart', 'Lungs', 'Liver', 'Kidney', 'Eyes', 'Skin', 'Other'
]

const ExistingSurgeries = ({ setPercentage, setStep }) => {
    const { additionalData, setAdditionalData } = useContext(UserContext);

    const addExisiting = (surgery) => {
        if(additionalData.surgeries.includes(surgery)) {
            setAdditionalData({
                ...additionalData,
                surgeries: additionalData.surgeries.filter(item => item !== surgery)
            })
        }
        else {
            setAdditionalData({
                ...additionalData,
                surgeries: [...additionalData.surgeries, surgery]
            })
        }
    }

    const getSurgeries = (surgery) => {
        if(additionalData.surgeries.includes(surgery)) {
            return true
        }
        else {
            return false
        }
    }

    const handleNext = (e) => {
        e.preventDefault()

        setPercentage(99.9999)
        setStep(4)
    }

    const handleBack = (e) => {
        e.preventDefault()
        setPercentage(33.333333)
        setStep(3)
    }

    return (
        <div className='px-4 py-2 w-full'>
            <form className='flex flex-col gap-y-4'>
                <div className='flex gap-4 flex-wrap'>
                    {
                        exisitingSurgeries.map((item, index) => (
                            <Radio selected={getSurgeries(item)} onClick={() => addExisiting(item)} key={index}>
                                <label>
                                    {item}
                                </label>
                            </Radio>
                        ))
                    }
                </div>

                <div className='flex gap-x-4 mt-4'> {/* Button Groups */}
                    <Button strong={false} onClick={handleBack} value='Back' />
                    <Button strong={true} onClick={handleNext} value='Next' />
                </div>
            </form>    
        </div>
    )
}

export default ExistingSurgeries