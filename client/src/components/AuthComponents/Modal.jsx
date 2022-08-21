import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import axios from 'axios'
import { AiOutlineClose } from 'react-icons/ai'
import AdditionalRegInfo from './AdditionalInfo/AdditionalRegInfo'
import ProfilePicture from './AdditionalInfo/ProfilePicture'
import ExistingSurgeries from './AdditionalInfo/ExistingSurgeries'
import ExistingDisease from './AdditionalInfo/ExistingDisease'
import { useContext } from 'react'
import { UserContext } from '../../context/UserContext'
import Close from './Close'
import { useSelector} from 'react-redux'

const Backdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  display: flex;
  gap: 1rem;
  flex-direction: column;
  justify-content: ${props => props.justify};
  align-items: center;
  z-index: 50;

  transition: all 3s ease-in-out;

  background-color: ${props => props.theme.black}35;
  backdrop-filter: blur(2px);
  overflow: hidden;
`
const PopUp = styled.div`
  height: 70%;
  border-radius: 4px;
  position: relative;
  overflow: auto;
  pointer-events: ${props => props.disable && 'none'};
  filter: ${props => props.disable && 'grayscale(1)'};

  ::-webkit-scrollbar {
    width: 0px;
    background: transparent;
  }
  ::-moz-scrollbar {
    width: none;
    background: transparent;
  }
`
const Progress = styled.div`
  width: ${props => props.width}%;
  height: 0.5rem;
  transition: width 0.8s ease-in-out;
  border-radius: ${props => props.borderRadius};
`
const Header = styled.div`
  width: 100%;
  padding: 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const Modal = ({ justify, handleClose }) => {

  const auth = useSelector(state => state.auth)
  const {user} = auth
  const { additionalData } = useContext(UserContext);
  const [disabled, setDisabled] = useState(false);
  const [closePopup, setClosePopup] = useState(false);
  const [percentage, setPercentage] = useState(0)
  const [borderRadius, setBorderRadius] = useState('0')
  const [step, setStep] = useState(1);

  useEffect(() => {
    if(percentage < 100) {
      setBorderRadius('0 2px 2px 0')
    }
    else {
      setBorderRadius('0')
    }
  }, [percentage])

  // const handleNext = (e) => {
  //   e.preventDefault();
  //   setStep(step + 1)
  //   setPercentage(percentage + 33.33333)
  // }
  // const handleBack = (e) => {
  //   e.preventDefault();
  //   setStep(step - 1)
  //   setPercentage(percentage - 33.33333)
  // }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.table(additionalData)
    
    const formdata = new FormData();
    
    formdata.append('user_type', additionalData.userType)
    formdata.append('blood_group', additionalData.blood_group)
    formdata.append('gender', additionalData.gender)
    formdata.append('height', additionalData.height)
    formdata.append('weight', additionalData.weight)
    formdata.append('profile_picture', additionalData.ProfilePicture)
    formdata.append('nmc', additionalData.nmc)
    formdata.append('experience', additionalData.experience)
    formdata.append('surgeries', additionalData.surgeries)
    formdata.append('disease', additionalData.disease)
    formdata.append('expertise', additionalData.expertise)
    formdata.append('qualification', additionalData.qualification)

    alert("Thanks For Registering in Ayuh.")
    axios.post(`/user/registerInfo/${user._id}`, 
        {avatar : additionalData.ProfilePicture,gender : additionalData.gender, blood: additionalData.blood_group, height: additionalData.height, weight: additionalData.weight}) 
    axios.post(`/user/verification/${user._id}`) 
    alert("User Verified!")

  }

  return (
    <Backdrop justify={justify}>
      {
        closePopup &&
        <Close 
          handleCancel={() => {setClosePopup(false); setDisabled(false)}}
          handleClose={handleClose}
        />
      }
      <PopUp className='bg-white w-11/12 md:w-2/3 xl:w-1/3 hide-scrollbar' disable={disabled}>
        <div className='h-[calc(100%-1rem)] mb-2 flex flex-col gap-y-2'>
          <Header className='border-b-[1px] border-b-gray_light'>
            <div className='flex flex-col'>
              <h1 className='text-xl font-bold'>Greetings</h1>
              <p className='text-sm font-light'>Please spare few minutes to complete your registration</p>
            </div>

            <div className='p-2 bg-primary text-white rounded-[4px] cursor-pointer' onClick={() => {setClosePopup(true); setDisabled(true)}}>
              <AiOutlineClose className='text-xl' />
            </div>
          </Header>
          {
            step === 1 ?
            <AdditionalRegInfo setStep={setStep} setPercentage={setPercentage}/>
            :
            step === 2 ?
            <ProfilePicture setStep={setStep} setPercentage={setPercentage}/>
            :
            step === 3 ?
            <ExistingSurgeries setStep={setStep} setPercentage={setPercentage}/>
            :
            step === 4 ?
            <ExistingDisease handleSubmit={handleSubmit} setStep={setStep} setPercentage={setPercentage}/>
            :
            null
          }
        </div>
        <Progress width={percentage} borderRadius={borderRadius} className='bg-primary sticky bottom-0'/>
      </PopUp>
    </Backdrop>
  )
}

export default Modal