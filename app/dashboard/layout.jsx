"use client"
import React, { useState } from 'react'
import DashboardNav from '../components/DashboardNav'
import { Karla } from "next/font/google"
const karla = Karla({
  subsets:['latin']
})
const Layout = ({ children }) => {
  const [showPanel, setShowPanel] = useState(true)
  const handleShowPanel = () => {
    setShowPanel(!showPanel)
  }
  return (
    <div className={`flex ${karla.className}`}>
      <aside className={`w-[20%] h-[100vh] hidden lg:block`}>
        <DashboardNav panel={{ handleShowPanel, showPanel }} />
      </aside>
      <main className='p-5 lg:p-14  lg:w-[80%] '>
        {children}
      </main>
    </div>
  )
}

export default Layout