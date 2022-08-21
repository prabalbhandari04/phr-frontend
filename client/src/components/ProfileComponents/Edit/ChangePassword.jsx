import showPwd from '../../../assets/icons/visibility-on.svg'
import hidePwd from '../../../assets/icons/visibility-off.svg'
import React, {useState, useEffect} from 'react'
import { IoIosArrowRoundBack } from 'react-icons/io';
import Button from '../../Button';
import {useSelector, useDispatch} from 'react-redux'
import axios from 'axios'
import {showSuccessMsg, showErrMsg} from '../../../utils/notification/Notification'
import {isLength, isMatch} from '../../../utils/validation/Validation'
const initialState = {
    name: '',
    password: '',
    cf_password: '',
    err: '',
    success: ''
}



const ChangePassword = ({ back }) => {
  const [isRevealed, setIsRevealed] = useState(false)
  const [isRevealedNew, setIsRevealedNew] = useState(false)
  const [isRevealedNewConf, setIsRevealedNewConf] = useState(false)
  const auth = useSelector(state => state.auth)
    const token = useSelector(state => state.token)
    const {user} = auth
    const [data, setData] = useState(initialState)
    const {password, cf_password, err, success} = data
    const [loading, setLoading] = useState(false)


    const handleChange = e => {
        const {name, value} = e.target
        setData({...data, [name]:value, err:'', success: ''})
    }



    const updatePassword = () => {
        if(isLength(password))
            return setData({...data, err: "Password must be at least 6 characters.", success: ''})

        if(!isMatch(password, cf_password))
            return setData({...data, err: "Password did not match.", success: ''})

        try {
            axios.post('/user/reset', {password},{
                headers: {Authorization: token}
            })

            setData({...data, err: '' , success: "Updated Success!"})
        } catch (err) {
            setData({...data, err: err.response.data.msg , success: ''})
        }
    }


    const handlePassword = () => {
        alert('handlePassword')
        if(password) updatePassword()
    }



  return (
    <form className='w-full lg:w-11/12 h-full px-4 flex flex-col gap-y-8'>
        <div className='flex gap-x-2 items-center cursor-pointer' onClick={back}>
            <IoIosArrowRoundBack style={{fontSize: "1.5rem"}}/>
            <p>Back</p>
        </div>
        <h1 className='text-3xl uppercase font-bold text-black'>Change Password</h1>
        <div className='flex flex-col gap-y-4'>
            <div>
                <label>Current Password</label>
                <div className='relative w-96'>
                    <input className='w-full p-2 border-[0.5px] border-gray_light rounded-md text-sm' type={isRevealed ? "text" : "password"} />
                    <img 
                    title={isRevealed ? 'Hide Password' : 'Show Password'}
                    src={isRevealed ? showPwd : hidePwd}
                    className='w-6 h-6 absolute right-3 top-1 m-1'
                    alt='Visibility Icon'
                    onClick={() => setIsRevealed(!isRevealed)}
                    />
                </div>
            </div>

            <div>
                <label>New Password</label>
                <div className='relative w-96'>
                    <input className='w-full p-2 border-[0.5px] border-gray_light rounded-md text-sm' type={isRevealedNew ? "text" : "password"}    onChange={handleChange}/>
                    <img 
                    title={isRevealedNew ? 'Hide Password' : 'Show Password'}
                    src={isRevealedNew ? showPwd : hidePwd}
                    className='w-6 h-6 absolute right-3 top-1 m-1'
                    alt='Visibility Icon'
                    onClick={() => setIsRevealedNew(!isRevealedNew)}
                    />
                </div>
            </div>
            
            <div>
                <label>Confirm New Password</label>
                <div className='relative w-96'>
                    <input className='w-full p-2 border-[0.5px] border-gray_light rounded-md text-sm' type={isRevealedNewConf ? "text" : "password"}   onChange={handleChange}/>
                    <img 
                    title={isRevealedNewConf ? 'Hide Password' : 'Show Password'}
                    src={isRevealedNewConf ? showPwd : hidePwd}
                    className='w-6 h-6 absolute right-3 top-1 m-1'
                    alt='Visibility Icon'
                    onClick={() => setIsRevealedNewConf(!isRevealedNewConf)}
                    />
                </div>
            </div>
            <button className='w-full bg-primary text-white px-4 py-2 uppercase font-bold' onClick={handlePassword}>Update</button>
        </div>
    </form>
  )
}

export default ChangePassword