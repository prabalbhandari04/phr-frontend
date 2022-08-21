import React, { useEffect, useState } from 'react'

import Navbar from '../components/Navbar';
import Welcome from '../components/LandingComponents/Welcome';
import Modal from '../components/AuthComponents/Modal';
import Announcement from '../components/LandingComponents/Announcement';
import { useSelector} from 'react-redux'

const Home = () => {
  const auth = useSelector(state => state.auth)
    const {user,isLogged} = auth
    const [show, setShow] = useState(false);
    const [verify, setVerify] = useState(false);
    
  
    useEffect(() => {
      if(isLogged === true){
          fetch(`/user/verification/${user._id}`)
          .then( res => {
            console.log("login cha")
          })
          if(user.verified === true){
            setVerify(true)
          }else{
            setVerify(false)
          }
      }
      else{
        console.log("not logged in")
      }
      
    }, [isLogged,user]);


    useEffect(() => {
        if (show) {
          document.body.style.overflow = 'hidden';
        } else {
          document.body.style.overflow = 'unset';
        }
      }, [show]);

    return (
        <div className='flex flex-col w-full items-center gap-y-2'>
            
              {(() => {
                if (verify === true) {
                  return (
                    <div className='flex flex-col w-full items-center gap-y-2' ><Navbar /><Welcome /></div>
                  )
                } else {
                  return (
                    <div className='flex flex-col w-full items-center gap-y-2' ><Announcement handleClick={() => setShow(true)}/><Navbar /><Welcome /></div>
                  )
                }
              })()}
            {
                show &&
                <Modal 
                  justify={show ? 'center' : 'flex-start'}
                  handleClose={() => setShow(false)}
                />
            }
        </div>
    )
}

export default Home