import React,{useState} from 'react';
import { AiFillFolderAdd,AiFillFileAdd } from "react-icons/ai";
import AddSubFileModal from './AddSubFileModal';

const ActionNavBarSub = () =>{

	const [show,setShow] = useState(false);
	const [showfile,setShowFile] = useState(false);
  	const handleClose = () => setShow(false);
  	const handleShow = () => setShow(true);	
  	const handleCloseFile = () =>setShowFile(false);
  	const handleShowFile = () =>setShowFile(true);

	return(
			<div className="action__bar">
				{/* <span onClick={handleShow}><AiFillFolderAdd /></span>
				<span onClick={handleShowFile}><AiFillFileAdd /></span>
				<AddFolderModal show={show} handleClose={handleClose} id={id}/>
				<AddFileModal showfile={showfile} handleCloseFile={handleCloseFile} id={id}/> */}
				
				<div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
                <div className="flex-shrink-0 flex items-center">
                  <AddSubFileModal />
                </div>
              </div>
			</div>
		)
}

export default ActionNavBarSub;