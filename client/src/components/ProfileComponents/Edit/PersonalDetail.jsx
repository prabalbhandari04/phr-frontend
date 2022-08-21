import React, {useState, useEffect} from 'react'
import { IoIosArrowRoundBack } from 'react-icons/io';
import Button from '../../Button';
import {useSelector, useDispatch} from 'react-redux'
import axios from 'axios'
import {isLength, isMatch} from '../../../utils/validation/Validation'
import {showSuccessMsg, showErrMsg} from '../../../utils/notification/Notification'

const initialState = {
    name: '',
    password: '',
    cf_password: '',
    err: '',
    success: ''
}


const PersonalDetail = ({ back }) => {
    
    const auth = useSelector(state => state.auth)
    const token = useSelector(state => state.token)
    const users = useSelector(state => state.users)
    const {user, isAdmin} = auth
    const [data, setData] = useState(initialState)
    const {name, password, cf_password, err, success} = data
    const [avatar, setAvatar] = useState(false)
    const [loading, setLoading] = useState(false)
    const [callback, setCallback] = useState(false)
    const dispatch = useDispatch()


    // functions 

    const handleChange = e => {
        const {name, value} = e.target
        setData({...data, [name]:value, err:'', success: ''})
    }
    
    const updateInformation = () => {
        try {
            axios.patch('/user/update', {
                name: name ? name : user.name,
            },{
                headers: {Authorization: token}
            })

            setData({...data, err: '' , success: "Updated Success!"})
        } catch (err) {
            setData({...data, err: err.response.data.msg , success: ''})
        }
    }


    const handleUpdate = () => {
        alert('Update')
        if(name) updateInformation()
    }

    const handleDelete = async (id) => {
        try {
            if(user._id !== id){
                if(window.confirm("Are you sure you want to delete this account?")){
                    setLoading(true)
                    await axios.delete(`/user/delete/${id}`, {
                        headers: {Authorization: token}
                    })
                    setLoading(false)
                    setCallback(!callback)
                }
            }
            
        } catch (err) {
            setData({...data, err: err.response.data.msg , success: ''})
        }
    }


  return (
    
    <form className='w-full lg:w-11/12 h-full px-4 flex flex-col gap-y-8'>
        <div className='flex gap-x-2 items-center cursor-pointer' onClick={back}>
            <IoIosArrowRoundBack style={{fontSize: "1.5rem"}}/>
            <p>Back</p>
        </div>
        <h1 className='text-3xl uppercase font-bold text-black'>Edit Information</h1>
        <div>
            {err && showErrMsg(err)}
            {success && showSuccessMsg(success)}
            {loading && <h3>Loading.....</h3>}
        </div>
        <div className='flex flex-col gap-y-4'>
            <div>
                <label>Name</label>
                <input input type="text" name="name" id="name" defaultValue={user.name}
                    placeholder="Your name" onChange={handleChange} className='w-full border-[1px] border-gray_light focus:border-gray_light px-4 py-2'/>
            </div>

            <div>
                <label>Address</label>
                <div className='flex gap-x-2 w-full'>
                    <input className='w-full border-[1px] border-gray_light focus:border-gray_light px-4 py-2 text-base font-light' placeholder='District'/>
                    <input className='w-full border-[1px] border-gray_light focus:border-gray_light px-4 py-2 text-base font-light' placeholder='City'/>
                    <input className='w-full border-[1px] border-gray_light focus:border-gray_light px-4 py-2 text-base font-light' placeholder='State'/>
                </div>
            </div>

            <div>
                <label>Contact</label>
                <div className='flex'>
                    <div className='w-auto py-2 h-full bg-primary text-white px-4 flex items-center'>+977</div>
                    <input 
                        className='w-full border-[1px] border-gray_light focus:border-gray_light text-base font-light px-4 py-2' 
                    />
                </div>
            </div>

            <div className='flex flex-col gap-y-2'> 
                <label>Gender</label>
                <select className='w-72 px-4 py-2 bg-transparent border-[1px] border-gray_light'>
                    <option selected disabled>Choose Your Gender</option>
                    {['Male', 'Female', 'Do not Specify'].map((item, index) => (
                        <option value={item} key={index}>{item}</option>
                    ))}
                </select>
            </div>
            
            <div className='flex flex-col gap-y-2'> 
                <label>Blood Group</label>
                <select className='w-72 px-4 py-2 bg-transparent border-[1px] border-gray_light'>
                    <option selected disabled>Choose Your Blood Group</option>
                    {["A+", "A-", "B+", "B-", 'AB+', "AB-", "O+", "O-"].map((item, index) => (
                        <option value={item} key={index}>{item}</option>
                    ))}
                </select>
            </div>

            <div>
                <label>Note</label>
                <textarea className='w-full border-[1px] border-gray_light px-4 py-2 focus:border-gray_light'/>
            </div>
                        <button className='w-full bg-primary text-white px-4 py-2 uppercase font-bold' onClick={handleUpdate}>Update</button>
            <Button disabled={loading} onClick={handleUpdate} value="Save" />
        </div>
    </form>
  )
}

export default PersonalDetail