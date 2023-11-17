import React from 'react'
import Modal from '../Modal'
import { RiArrowDownSLine } from 'react-icons/ri'
import InputDropDown from '@/app/components/InputDropDown'

const page = () => {
  return (
    <Modal color="text-blue-500">
      <div className="px-10">
        <h1 className='mb-5 text-2xl font-bold text-blue-500'>Mini KYC Information</h1>
        <p className='text-xs mb-10'>Fill the form below so we can have a better understanding of who you are.</p>

        <div>
          <p className='font-semibold'>Gender</p>
          <div>

            <InputDropDown />
          </div>
        </div>
      </div>
    </Modal>
  )
}

export default page