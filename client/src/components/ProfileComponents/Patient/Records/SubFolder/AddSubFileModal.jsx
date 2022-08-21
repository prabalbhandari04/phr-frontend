import React from "react";
import axios from "axios";
import { useLocation } from "react-router-dom";
import DropSubFile from "./DropSubFile";
import { useSelector } from "react-redux";

export default function AddSubFileModal() {

  const [showModal, setShowModal] = React.useState(false);
  let formData = new FormData();
  const location = useLocation();
  const {  folderId } = location.state;
  const auth = useSelector(state => state.auth)
  const {user} = auth

    const onFileChange = (e) => {
        alert('onFileChange');
        console.log(e.target.files[0])
        if(e.target && e.target.files[0]){
            formData.append("file", e.target.files[0]);
            formData.append("folderId", folderId);
        }
    }
    const SubmitFileData = (e) => {
        
        axios.post("/file/upload/"+user._id, 
        {formData}
        ).then(res => {
            alert('SubmitFileData');
            console.log("filedadded"+res);
        }).catch(err => {
            console.log(err);
        })
    }
  return (
    <>

<button onClick={() => setShowModal(true)} class="font-20  bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center  border-2 border-cyan-300">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M9 13h6m-3-3v6m5 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>
                <span>Upload Sub File</span>
                </button>
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
                    Upload Sub File
                  </h3>
                </div>
                {/*body*/}
                <div className="relative p-6 flex-auto">
												{/* file uploader */}
												<DropSubFile />
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