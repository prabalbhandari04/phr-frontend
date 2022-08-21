import React,{useState} from 'react';
import {Modal,Button,InputGroup,FormControl,Spinner} from 'react-bootstrap';
import moment from 'moment';
import {formatBytes} from '../formatBytes';
import { FaCloudDownloadAlt,FaTrash,FaRegShareSquare,FaRegCopy,FaMailBulk } from "react-icons/fa";
import { AiOutlineSend } from "react-icons/ai";
import {toast} from 'react-toastify';
import axios from 'axios';


const FileDetailsModal = ({file}) =>{

	const [showModal, setShowModal] = React.useState(false);
	const [showmail,setShowmail] = useState(false);
	const [email,setEmail] = useState('');

	const handleClipBoard = async(url) =>{
		await navigator.clipboard.writeText(url);
		alert('Copied to Clipboard');
	}

	const handleMail = async(url) =>{
		axios.post('/file/sendfile', {
      email : "ayuh.official@gmail.com",
			url : url
    }).then(res => {
      alert("Email Sent, Please Check your Inbox")
    }
    ).catch(err => {
      console.log(err)
    } )
	}

	
	const handleDelete = async(id) =>{
		console.log(id);
		const res = await axios.delete(`/file/deletefile/${id}`).then(res => {
			alert('File Deleted!');
			setShowModal(false);
		}
		).catch(err => {
			alert(err.message);
		}
		)}

		



	return (
    <>
		<div onClick={() => setShowModal(true)} className='w-full py-8 px-8 lg:px-0 lg:py-0 lg:flex-1 rounded flex justify-center items-center flex-col'>
                    <h1 className='text-xl font-bold uppercase'> <svg xmlns="http://www.w3.org/2000/svg" class="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z" /></svg></h1>
                    <div className='w-1/2 h-[2px]'/>
                    <p className='text-sm font-bold'> <span>{file?.filename}</span></p>
    </div>
				
      {showModal ? (
        <>
          <div
            className="justify-center w-full items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
          >
            <div className="relative w-full my-6 mx-auto max-w-3xl">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                {/*header*/}
                <div className="flex items-start justify-between p-5 ">
                  <h3 className="text-3xl font-semibold">
                    {file.filename}
										
										{/* copy to clipboard */}
										<button className="btn btn-info" onClick={()=>handleClipBoard(file?.fileurl)}><svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
 					 					<path stroke-linecap="round" stroke-linejoin="round" d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
										</svg></button>

										{/* share */}
										<button className="btn btn-info" onClick={()=>handleMail(file?.fileurl)}><svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
										<path stroke-linecap="round" stroke-linejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
									</svg>	</button>

									{/* share */}
									<button className="btn btn-info" onClick={()=>handleDelete(file?._id,file?.parent)}><svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
										<path stroke-linecap="round" stroke-linejoin="round" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
									</svg></button>

                  </h3>
                </div>
                {/*body*/}
                <div className="relative p-6 flex-auto">
												<p>{formatBytes(file?.fileSize)}</p>
								</div>
                {/*footer*/}


                <div className="flex items-center justify-end p-6 mt-6 rounded-b">
                  <button
                    className="px-8 py-2 bg-black text-white text-base font-medium mr-4"
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </>
  );
}

export default FileDetailsModal;


	          // <div className="text-center">
	          // 	<p><b>Uploaded On:</b></p>
	          // 	<p><b>File Size:</b></p>
	          // 	<div className="display__container">
						// 	{
						// videoArr.includes(ext) ?
	          // 			<video controls src={file.fileurl} className="video__container"/>
	          // 			: audioArr.includes(ext) ?
	          // 			<audio controls src={file.fileurl}/>
	          // 			:imgArr.includes(ext) ?
	          // 			<img src={file.fileurl} className="img-fluid imagemodal__container" alt=""/>
	          // 			:null
	          // 		}
	          // 	</div>
	          // 	<div className="mt-1 d-flex justify-content-evenly">
	          // 		<button className="btn btn-success"><FaCloudDownloadAlt /></button>
	          // 		{
	          // 			load ? <Spinner animation="grow"/>
	          // 			:<button className="btn btn-danger" ><FaTrash /></button>
	          // 		}
	          // 	</div>
	          // 	<div className="mt-1">
	          // 		<p><b>Share <FaRegShareSquare /></b></p>
	          // 		<div className="d-flex justify-content-evenly">
	          // 		<button className="btn btn-info" >Copy URL <FaRegCopy /></button>
	          // 		<button className="btn btn-info" >Email <FaMailBulk /></button>
	          // 		</div>
	          // 		{
	          // 			showmail && 
						//   <InputGroup className="mb-3 mt-2">
						//     <FormControl
						//       placeholder="Receiver Email"
						//       value={email}
						//       onChange={(e)=>setEmail(e.target.value)}
						//     />
						//     <Button variant="outline-secondary" id="button-addon2" >
						//       <AiOutlineSend />
						//     </Button>
						//   </InputGroup>	          			
	          // 		}
	          // 	</div>
	          // </div>

