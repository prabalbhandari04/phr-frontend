import React, { useRef, useState } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import "./drop-file-input.css";
import { ImageConfig } from '../../../../utils/ImageConfig/ImageConfig'; 
import uploadImg from '../../../../assets/images/cloud-upload-regular-240.png';

const DropFileInput = props => {

    const wrapperRef = useRef(null);

    const [fileList, setFileList] = useState([]);
    
    const onDragEnter = () => wrapperRef.current.classList.add('dragover');

    const onDragLeave = () => wrapperRef.current.classList.remove('dragover');

    const onDrop = () => wrapperRef.current.classList.remove('dragover');

    const onFileDrop = (e) => {
        const newFile = e.target.files[0];
        if (newFile) {
            const updatedList = [...fileList, newFile];
            setFileList(updatedList);
            props.onFileChange(updatedList);
        }
        
    }

    let formData = new FormData();

    const onFileChange = (e) => {
        alert('onFileChange');
        console.log(e.target.files[0])
        if(e.target && e.target.files[0]){
            formData.append("file", e.target.files[0]);
        }
    }
    
    const SubmitFileData = (e) => {
        
        axios.post("/file/upload/62db68fca2db4f0055330c5a", 
        {formData}
        ).then(res => {
            alert('SubmitFileData');
            console.log(res);
        }).catch(err => {
            console.log(err);
        })
    }

    
    
        const fileRemove = (file) => {
        const updatedList = [...fileList];
        updatedList.splice(fileList.indexOf(file), 1);
        setFileList(updatedList);
        props.onFileChange(updatedList);
    }

    return (
        <>
            {/* <div
                ref={wrapperRef}
                className="drop-file-input"
                onDragEnter={onDragEnter}
                onDragLeave={onDragLeave}
                onDrop={onDrop}
            > */}
            <div>
                {/* <div className="drop-file-input__label">
                    <img src={uploadImg} alt="" />
                    <p>Drop your files here</p>
                </div> */}
                {/* <input type="file" value="" onChange={onFileDrop}/> */}

                
                


            </div>
            {
                fileList.length > 0 ? (
                    <div className="drop-file-preview">
                        <p className="drop-file-preview__title">
                            Ready to upload
                        </p>
                        {
                            fileList.map((item, index) => (
                                <div key={index} className="drop-file-preview__item">
                                    <img src={ImageConfig[item.type.split('/')[1]] || ImageConfig['default']} alt="" />
                                    <div className="drop-file-preview__item__info">
                                        <p>{item.name}</p>
                                        <p>{item.size}B</p>
                                    </div>
                                    <span className="drop-file-preview__item__del" onClick={() => fileRemove(item)}>x</span>
                                </div>
                            ))
                        }
                    </div>
                ) : null
            }


            
        </>
    );
}

DropFileInput.propTypes = {
    onFileChange: PropTypes.func
}

export default DropFileInput;