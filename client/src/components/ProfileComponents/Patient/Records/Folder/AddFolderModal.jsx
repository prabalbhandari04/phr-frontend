import React from "react";
import axios from "axios";
import { useSelector } from "react-redux";


export default function AddFolderModal() {
  const [showModal, setShowModal] = React.useState(false);
  const [folderName, setFolderName] = React.useState("");
  const auth = useSelector(state => state.auth)
    const {user, isLogged} = auth

  const handleFolder = () => {
    axios.post('/folder/create-folder/'+user._id, {
      foldername: folderName
    }).then(res => {
      alert("Folder Created")
    }
    ).catch(err => {
      console.log(err)
    } )
  }

  const createFolder  = () => {
    handleFolder()
    setShowModal(false);
  }

  return (
    <>

				<button onClick={() => setShowModal(true)} class="bg-white text-white-800 font-bold py-2 px-4 rounded inline-flex items-center mr-6 mt-6 mb-6 border-2 border-cyan-800">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M9 13h6m-3-3v6m-9 1V7a2 2 0 012-2h6l2 2h6a2 2 0 012 2v8a2 2 0 01-2 2H5a2 2 0 01-2-2z" /></svg>
                <span>Create Folder</span>
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
                    Add Folder
                  </h3>
                </div>
                {/*body*/}
                <div className="relative p-6 flex-auto">
												<form className="mt-8 space-y-6" action="#" method="POST">
										<input type="hidden" name="remember" defaultValue="true" />
										<div className="rounded-md shadow-sm -space-y-px">
											<div>
												<label htmlFor="email-address" className="sr-only">
													Folder Name
												</label>
												<input
													onChange={(e) => setFolderName(e.target.value)}
													required
													className="appearance-none rounded-none relative block
													w-full px-3 py-2 border border-gray-300
													placeholder-gray-500 text-gray-900 rounded-t-md
													focus:outline-none focus:ring-indigo-500
													focus:border-indigo-500 focus:z-10 sm:text-sm"
													placeholder="Folder Name"
												/>
											</div>
										</div>
									</form>
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
                  <button
                    className="px-8 py-2 bg-black text-white text-base font-medium mr-4"
                    type="button"
                    onClick={createFolder}
                  >
                    Save
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