"use client";
import Link from 'next/link'
import React from 'react'
import { dashboardNavs } from './uidata'
import { usePathname } from 'next/navigation';
const DashboardNav = () => {
  const pathname = usePathname()

  return (
    <nav className='bg-[#062863] h-[100vh] fixed w-[20vw] p-10 pl-5 '>
      <ul>
        {dashboardNavs.map((item, index) => {
          const href = `/dashboard${item.right == "home" ? "" : item.right == "invest" ? "/investify" : `/${item.right}`}`
          return (
            // Adding more margin bottom in first nav
            <li key={index} className={`${index == 0 ? "mb-[35%]" : index == 4 ? "mb-[65%]" : "mb-7"}`}>
              {/* Using div for first nav item and Link for other nav items */}
              {index < 1 ?
                <div className='grid grid-cols-3 justify-between'>
                  {item.left}
                  <Link href={"/"} className="col-span-2">
                    {item.right}
                  </Link>
                </div> :
                // Adding active to navs when nav have the same path with pathname or
                // pathname == href that is when we are on home nav
                <Link href={href} className={`capitalize duration-500 ${pathname.split("/")[2] == href.split("/")[2] || pathname == href ? "translate-x-2" : "translate-x-0"} grid grid-cols-3 items-center px-2 `}>
                  {item.left}
                  <span className={`text-sm py-2  pl-5 col-span-2 rounded-t-lg rounded-br-lg ${pathname.split("/")[2] == href.split("/")[2] || pathname == href ? "bg-white" : "text-white"}`}> {item.right}</span>
                </Link>
              }
            </li>
          )
        })}

      </ul>
    </nav>
  )
}

export default DashboardNav