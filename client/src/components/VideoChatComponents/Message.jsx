import "./message.css";
import { useState,useEffect, React } from "react";
import { Friends } from "./ChatComponents/Friends";
import ChatWindow from "./ChatComponents/ChatWindow";
import Online from "./ChatComponents/Online";
import {useSelector} from 'react-redux'
import axios from "axios";
import {io} from 'socket.io-client'
import { useRef } from "react";

export default function Message() {
  const auth = useSelector(state => state.auth)
  const {user} = auth
  const [conversation, setConversation] = useState([])
  const [currentChat, setCurrentChat] = useState([])
  const [messages , setMessages] = useState([])
  const [newMessage , setNewMessage] = useState('')
  const socket = useRef(io('ws://localhost:8900'))

  useEffect(() => {
    socket.current.emit("addUser",user._id);
    socket.current.on("getUsers", users => {
      console.log(users);  
    })
  },[user]);


  useEffect(() => {
    const getConversations = async () => {
      try {
        const res = await axios.get('/conversation/'+user._id)
        setConversation(res.data)
      } catch (error) {
        console.log(error)
      }
    }
    getConversations()
  } , [user._id])

  useEffect(() => {
    const getMessages = async () => {
      try {
        const res = await axios.get('/message/'+currentChat._id)
        setMessages(res.data)
        setNewMessage('')
      } catch (error) {
        console.log(error)
      }
    }
    getMessages()
  } , [currentChat])


  const handleSubmit = async (e) => {
    e.preventDefault()
    const message = {
      sender : user._id,
      text: newMessage,
      conversationId: currentChat._id,
    };

    try{
      const res = await axios.post('/message/new/', message);
      setMessages([...messages, res.data])
      setNewMessage('')
    }
    catch(error){
      console.log(error)
    }
  };



  return (
    <div className="messenger">
      <div className="chatMenu">
        <div className="chatMenuWrapper">
          <input placeholder="Search for friends" className="chatMenuInput" />
          {conversation.map(c => (
            <div onClick={() => setCurrentChat(c)}>
            <Friends key={c._id} conversation={c} currentUser={user}/>
            </div>
          ))}
        </div>
      </div>
      <div className="chatBox">
        <div className="chatBoxWrapper">
          {
            currentChat ? 
              
          <>
          
          <div className="chatBoxTop">
            {messages.map(m => (
              <ChatWindow message={m} own={m.sender === user._id}/>
            ))}
          </div>
          
          
          <div className="chatBoxBottom">
            <textarea className="chatMessageInput" placeholder="Type your message here..." 
            onChange={(e) => setNewMessage(e.target.value)} value={newMessage}/>
            <button className="chatSubmitButton" onClick={handleSubmit}>Send</button>
          </div></>

          :

          <span>Open a Conversation to start chatting.</span>

        }


        </div>
      </div>
      <div className="chatOnline">
        <div className="chatOnlineWrapper">
          <Online />

        </div>
      </div>
    </div>
  );
}