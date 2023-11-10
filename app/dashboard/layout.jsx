import React from 'react'
import DashboardNav from '../components/DashboardNav'

const Layout = ({ children }) => {
  return (
    <div className='grid grid-cols-7'>
      <aside className='col-span-1'>
        <DashboardNav />
      </aside>
      <main className='col-span-5 h-[200vh]'>
        {children}
      </main>
    </div>
  )
}

export default Layout