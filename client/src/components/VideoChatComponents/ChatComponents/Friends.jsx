import React from 'react'
import { useEffect } from 'react'
import './friends.css'
import axios from 'axios'

export const Friends = ({conversation,currentUser}) => {

  const [friend, setFriend] = React.useState(null)
  
  useEffect(()=>{
    const friendId = conversation.members.find((m)=> m !== currentUser._id)
    const getUser = async () => {
      try {
        const res = await axios.get(`/user/info/friend/${friendId}`)
        setFriend(res.data)

      } catch (error) {
        console.log(error)
      }
    }
    getUser()
  }, [currentUser,conversation])

  return (
    <div className="conversation">
      <img className="conversationImg" src={friend?.avatar} alt='friends' />
      <span className="conversationName" >{friend?.name}</span>
    </div>
  )
}
