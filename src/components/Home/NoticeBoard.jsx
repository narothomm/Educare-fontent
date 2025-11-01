import React from 'react'
import { FaRegBell } from 'react-icons/fa'

const NoticeBoard = () => {
    return (
        <div className='h-full w-[345px]'>
            <div className='text-white bg-gradient-to-r from-primary to-secondary h-[50px] rounded-t-xl flex gap-1 items-center justify-center'>
                <FaRegBell className='text-1.5xl mt-1' />
                <h3 className='text-1.5xl font-semibold'>Notice Board</h3>
            </div>
            <div className='border border-gray-400 h-[390px] rounded-b-xl'></div>
        </div>
    )
}

export default NoticeBoard
