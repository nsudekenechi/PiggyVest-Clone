"use client"
import React, { useState } from 'react'
import DashboardNav from '../components/DashboardNav'

const Layout = ({ children }) => {
  const [showPanel, setShowPanel] = useState(true)
  const handleShowPanel = () => {
    setShowPanel(!showPanel)
  }
  return (
    <div className='flex'>
      <aside className={`w-[20%] h-[100vh] `}>
        <DashboardNav panel={{ handleShowPanel, showPanel }} />
      </aside>
      <main className=' p-14  w-[80%] '>
        {children}
      </main>
    </div>
  )
}

export default Layout