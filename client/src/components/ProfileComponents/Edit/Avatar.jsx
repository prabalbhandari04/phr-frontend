
import React, {useState, useEffect} from 'react'
import { IoIosArrowRoundBack } from 'react-icons/io';
import Button from '../../Button';
import {useSelector, useDispatch} from 'react-redux'
import axios from 'axios'
import {showSuccessMsg, showErrMsg} from '../../../utils/notification/Notification'


const info = {
    _id: '019151a15ba',
    name: 'Miku Nakano',
    gender: 'Female',
    blood: 'A-',
    email: 'miku.98@mail.com',
    contact: '+977-9841551846',
    profile_picture: 'https://i.pinimg.com/236x/81/d1/9b/81d19b249247fa8b26ff7d80a0322738.jpg'
}

const Avatar = ({ back }) => {
  const auth = useSelector(state => state.auth)
    const token = useSelector(state => state.token)
    const [data, setData] = useState("")
    const {user} = auth
    const [avatar, setAvatar] = useState(false)
    const [loading, setLoading] = useState(false)
    
    const changeAvatar = async(e) => {
      e.preventDefault()
      try {
          const file = e.target.files[0]

          if(!file) return setData({...data, err: "No files were uploaded." , success: ''})

          if(file.size > 1024 * 1024)
              return setData({...data, err: "Size too large." , success: ''})

          if(file.type !== 'image/jpeg' && file.type !== 'image/png')
              return setData({...data, err: "File format is incorrect." , success: ''})

          let formData =  new FormData()
          formData.append('file', file)

          setLoading(true)
          const res = await axios.post('/api/upload_avatar', formData, {
              headers: {'content-type': 'multipart/form-data', Authorization: token}
          })

          setLoading(false)
          setAvatar(res.data.url)
          
      } catch (err) {
          setData({...data, err: err.response.data.msg , success: ''})
      }
  }


  const updateInformation = () => {
    try {
        axios.patch('/user/update', {
            avatar: avatar ? avatar : user.avatar
        },{
            headers: {Authorization: token}
        })

        setData({...data, err: '' , success: "Updated Success!"})
    } catch (err) {
        setData({...data, err: err.response.data.msg , success: ''})
    }
  }

  const handleUpdate = () => {
    if(avatar) updateInformation()
}

  return (
    <div className='w-full lg:w-11/12 h-full px-4 flex flex-col gap-y-8'>
        <div className='flex gap-x-2 items-center cursor-pointer' onClick={back}>
            <IoIosArrowRoundBack style={{fontSize: "1.5rem"}}/>
            <p>Back</p>
        </div>
        <h1 className='text-3xl font-bold uppercase text-black'>Change avatar</h1>
        <div className='flex flex-col gap-y-4'>
            <img src={info.profile_picture} alt="Profile_Picture" className='w-36 h-36 object-cover object-top rounded'/>
            <label className='text-base font-regular text-primary cursor-pointer' htmlFor='fileUpload'>Change Avatar</label>
            <input type="file" className='hidden' id='fileUpload'/>
            <Button value="Save" />
        </div>
    </div>  
  )
}

export default Avatar