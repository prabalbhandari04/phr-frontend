/* This example requires Tailwind CSS v2.0+ */
import { useState,useEffect } from 'react'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import ActionNavBar from './Records/ActionNavBar'
import Folder from './Records/Folder/Folder'
import FileCard from './Records/File/FileCard'
import FileDetailsModal from './Records/File/FileDetailsModal'
import { useSelector} from 'react-redux'

export default function Records() {
  const auth = useSelector(state => state.auth)
    const {user} = auth
    const [userId] = useState(user._id)
  const [files,setFiles] = useState([])
  const [folders,setFolders] = useState([])

  useEffect(() => {
		fetch(`/file/my-file/${userId}`)
		.then( res => {
				return res.json();
		})
		.then(files => {
				setFiles(files);
        console.log(files)
		})
	}, [files,userId])

  useEffect(() => {
		fetch(`/folder/myfolders/${userId}`)
		.then( res => {
				return res.json();
		})
		.then(folders => {
				setFolders(folders);
		})
	}, [folders,userId])

  return (
    <>
      
      <div className="min-h-full">
      <h1 className='text-3xl font-bold uppercase text-black'>
            Records 
        </h1>
          <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
            {/* ActionBar */}
            <Disclosure as="nav" className="bg-gray-800">
      {({ open }) => (
        <>
        {/* upload file and create folder */}
          <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
            <div className="relative flex items-center justify-between h-16">
              <ActionNavBar />
            </div>
          </div>
          
          
        </>
      )}
    </Disclosure>

            <div class="container mx-auto mt-6">
              <div class="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-6 gap-2">
                {folders && folders.map((folder, _id) => (
                  <Folder key={folder._id} folder={folder} />
                ))}
                {files && files.map((file, _id) => (
                  <FileDetailsModal key={file._id} file={file} />
                ))}
                
              </div>
            </div>
          </div>
      </div>

      
    </>
  )
}


