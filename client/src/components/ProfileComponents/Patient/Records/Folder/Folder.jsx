import React,{useState,useEffect} from 'react';
import {Card,Dropdown} from 'react-bootstrap';
import {FaFolder} from 'react-icons/fa';
import {Link} from 'react-router-dom';
import {useDispatch,useSelector} from 'react-redux';

import { GoKebabVertical } from "react-icons/go";

import {toast} from 'react-toastify';


const Folder = ({folder}) =>{

	const [loading,setLoading] = useState(false);
	const [delid,setDelid] = useState('');
	const dispatch = useDispatch();
	const {auth} = useSelector(state=>state.auth);


	return(
		<>
		{/* <Card body>
			<Link to={`/profile/patient`} className="folderlinks">
			<FaFolder /> <span>Folder Name</span>
			</Link>
			<Dropdown as="span">
				<Dropdown.Toggle as="span">
					<GoKebabVertical />
				</Dropdown.Toggle>
				<Dropdown.Menu>
					<Dropdown.Item tag={Link} to='#'>Delete</Dropdown.Item>
				</Dropdown.Menu>
			</Dropdown>			
		</Card> */}
		{/* Folder */}
		<div className='w-full py-8 px-8 lg:px-0 lg:py-0 lg:flex-1 rounded flex justify-center items-center flex-col'>
			<Link to={`/subfolder/`+folder._id} state={{ foldername: folder.foldername , folderId : folder._id }} className="folderlinks">
                    <h1 className='text-xl font-bold uppercase'> <svg xmlns="http://www.w3.org/2000/svg" class="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z" />
                  </svg></h1>
                    <div className='w-1/2 h-[2px]'/>
                    <p className='text-sm font-bold'>{folder.foldername}</p>
				</Link>
    </div>
		</>
		)
}

export default Folder;