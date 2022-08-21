import React , {useEffect} from 'react'
import { useParams } from 'react-router-dom'
import { useSelector } from 'react-redux'
import axios from 'axios'
import FileDetailsModal from '../File/FileDetailsModal'
import { useLocation } from 'react-router-dom'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import ActionNavBar from '../ActionNavBar'
import ActionNavBarSub from './ActionNavBarSub'
import Folder from '../Folder/Folder'

const SubFolder = () => {

  const {id} = useParams()
  const location = useLocation()
  const {foldername , folderId} = location.state
  const auth = useSelector(state => state.auth)
  const {isLogged, user} = auth
  const [sub, Setsub] = React.useState([])
  const [subFiles, SetsubFiles] = React.useState([])
  useEffect(() => {
		const res = axios.post('http://localhost:5000/folder/sub-folder/'+user._id,{parentId:folderId})
    res.then(res => {
      Setsub(res.data)
      const files = res.data.files
      SetsubFiles(files)
       
    }
    )

	}, [subFiles])


    return (
        
      <div className="min-h-full">
      <h1 className='text-3xl font-bold uppercase text-black'>
            {foldername}
        </h1>
          <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
            {/* ActionBar */}
            <Disclosure as="nav" className="bg-gray-800">
      {({ open }) => (
        <>
        {/* upload file and create folder */}
          <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
            <div className="relative flex items-center justify-between h-16">
              <ActionNavBarSub />
            </div>
          </div>
          
          
        </>
      )}
    </Disclosure>

            <div class="container mx-auto mt-6">
              <div class="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-6 gap-2">
              {subFiles && subFiles.map((file, _id) => (
                  <FileDetailsModal key={file._id} file={file} />
                ))}
              </div>
            </div>
          </div>
      </div>


    )
}

export default SubFolder;

