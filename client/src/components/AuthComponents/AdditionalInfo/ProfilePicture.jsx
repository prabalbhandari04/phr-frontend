import React, { useContext, useState } from 'react'
 
import { BsCamera2 } from 'react-icons/bs'
import { AiOutlineClose } from 'react-icons/ai'

import Button from '../../Button'
import { UserContext } from '../../../context/UserContext'

// const dummyImage = [
//     'https://images.unsplash.com/photo-1559116315-702b0b4774ce?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8ZHVtbXl8ZW58MHx8MHx8&w=1000&q=80',
//     'https://us.123rf.com/450wm/pandavector/pandavector1901/pandavector190105596/126045803-vector-design-of-avatar-and-dummy-logo-collection-of-avatar-and-image-stock-symbol-for-web-.jpg?ver=6',
//     'https://us.123rf.com/450wm/happyvector071/happyvector0711904/happyvector071190416116/120957921-creative-illustration-of-default-avatar-profile-placeholder-isolated-on-background-art-design-grey-p.jpg?ver=6',
// ]

// const Select = styled.div`
//     position: absolute;
//     top: 0;
//     left: 0;
//     padding: 0.5rem;
//     width: 100%;
//     height: 100%;
//     display: flex;
//     justify-content: flex-end;
//     align-items: flex-start;
//     background-color: ${props => props.theme.primary}25;
//     backdrop-filter: blur(2px);
// `

const ProfilePicture = ({ setPercentage, setStep }) => {
    const { additionalData, setAdditionalData } = useContext(UserContext);

    const [error, setError] = useState(false);
    // const [selectedImage, setSelectedImage] = useState('')
    const [uploadedImage, setUploadedImage] = useState('')

    const handleImageChange = (e) => {
        //display image preview
        if (e.target.files && e.target.files[0]) {
            let img = e.target.files[0]
            setUploadedImage(URL.createObjectURL(img))
            setAdditionalData({ ...additionalData, profilePicture: e.target.files[0] })
        }
    }
    // const handleSelectDummy = (img) => {
    //     if(uploadedImage === '') {
    //         setSelectedImage(img)
    //         setAdditionalData({ ...additionalData, profilePicture: selectedImage })
    //         console.log(selectedImage)
    //     }
    // }

    // useEffect(() => {
    //     if(uploadedImage !== '') {
    //         setSelectedImage('')
    //     }
    // }, [uploadedImage])


    const handleNext = (e) => {
        e.preventDefault()
        console.log(additionalData.profilePicture)
        if(additionalData.profilePicture === '' || additionalData.profilePicture === undefined) {
            setError(true)
        } else {
            setError(false)
            setPercentage(66.66666667)
            setStep(3)
        }
    }
    const handleBack = (e) => {
        e.preventDefault()
        setPercentage(0)
        setStep(1)
    }
    
    return (
        <div className='px-4 py-2 w-full'>
            <form className='flex flex-col gap-y-4'>
                <div className='flex flex-col gap-y-2'>
                    <div className='flex gap-x-2 flex-wrap'>
                        <label className='text-sm font-light text-gray_dark'>Upload a profile picture</label>
                        <p className='text-sm font-extralight text-black'>(Preferable aspect ratio 1:1)</p>
                    </div>
                    {
                        uploadedImage ?
                        <div className='w-32 h-32 relative'>
                            <img src={uploadedImage} alt='profile' className='w-32 h-32 rounded object-cover' />
                            <div 
                                className='absolute -top-2 -right-2 text-lg p-1 bg-[red] text-white rounded-full' 
                                onClick={() => {
                                    setUploadedImage(''); 
                                    setAdditionalData({...additionalData, profile_picture: uploadedImage})
                                }}
                            >
                                <AiOutlineClose /> 
                            </div>
                        </div>
                        :
                        <div className='flex w-32 h-32 border-[1px] border-dashed rounded-[4px] border-gray_dark justify-center items-center'>
                            <input type='file' id='file' accept='.jpg, .png, .jpeg, .webp' className='hidden' onChange={handleImageChange}/>
                            <label htmlFor='file'>
                                <BsCamera2 className='text-xl text-priamry' />
                            </label>
                        </div>
                    }
                </div>
                {/* <div className='flex flex-col gap-y-2'>
                    <label className='text-sm font-light text-gray_dark'>Or choose any</label>
                    <div className='flex w-full justify-start gap-4 items-center'>
                        {
                            dummyImage.map((image, index) => (
                                <div className='relative w-32 h-32'>
                                    <img 
                                        src={image} 
                                        key={index} 
                                        alt='avatar' 
                                        className='w-32 h-32 rounded object-cover object-top' 
                                        onClick={() => {
                                            handleSelectDummy(image);
                                            setAdditionalData({...additionalData, profile_picture: image})
                                        }}
                                    />
                                    {
                                        selectedImage === image && 
                                        <Select>
                                            <AiOutlineCheck className='text-xl text-primary' />
                                        </Select>
                                    }
                                </div>
                            ))
                        }
                    </div>
                </div> */}
                {
                    error && <span className='text-[red] text-sm font-extralight'>Please upload image</span>
                }
                <div className='flex gap-x-4 mt-4'> {/* Button Groups */}
                    <Button strong={false} onClick={handleBack} value='Back' />
                    <Button strong={true} onClick={handleNext} value='Next' />
                </div>
                
            </form>
        </div>
    )
}

export default ProfilePicture