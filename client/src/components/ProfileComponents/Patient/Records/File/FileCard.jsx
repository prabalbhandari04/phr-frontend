import React,{useState} from 'react';
import {Card} from 'react-bootstrap';
import {FaFileAlt} from 'react-icons/fa';
import FileDetailsModal from './FileDetailsModal';


const FileCard = ({file}) =>{

	const [detailshow,setDetailShow] = useState(false);

	const handleDetailClose = () => setDetailShow(false);
	const handleDetailOpen = () =>setDetailShow(true);
	
	return(
		<>
		{/* <Card body onClick={handleDetailOpen}>
			<FaFileAlt /> <span>{data?.fileurl?.split('files/')[1]}</span>
		</Card>
		<FileDetailsModal detailshow={detailshow} handleDetailClose={handleDetailClose} data={data}/> */}
		{/* File */}
		
		<FileDetailsModal detailshow={detailshow} handleDetailClose={handleDetailClose} data={file}/>
		</>
		)
}

export default FileCard;