import React from 'react'
import { RiArrowDownSLine } from 'react-icons/ri'

const InputDropDown = () => {
    return (
        <>
            <div className='bg-[#edf2f7] p-5 flex mt-3 rounded-md justify-between'>
                <input type={"text"} className='w-[100%] bg-transparent outline-none placeholder:text-sm ' placeholder='Click to Select' />
                <div className='text-gray-100 border-l flex justify-center items-center pl-3'>
                    <RiArrowDownSLine size={15} />
                </div>

            </div>
        </>
    )
}

export default InputDropDown