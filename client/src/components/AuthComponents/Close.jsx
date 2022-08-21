import React from 'react'
import Button from '../Button'

const Close = ({ handleClose, handleCancel }) => {
  return (
    <div className='bg-white w-11/12 md:w-2/3 xl:w-1/3 flex flex-col gap-y-4 rounded p-4'>
        <div className='flex flex-col border-b-[1px] border-b-gray_light'>
            <h1 className='text-xl font-bold'>Are you sure?</h1>
            <p className='text-sm font-light'>You will lose all the details stored</p>
        </div>

        <div className='flex gap-x-4'>
            <Button value='Yes' strong={false} onClick={handleClose} />
            <Button value='No' strong={true} onClick={handleCancel} />
        </div>
    </div>
  )
}

export default Close