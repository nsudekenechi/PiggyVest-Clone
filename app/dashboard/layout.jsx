import DashboardNav from '../components/DashboardNav'
import { Karla } from "next/font/google"
const karla = Karla({
  subsets: ['latin']
})
const Layout = ({children,sidebar}) => {
  
  
  return (
    <div className={`flex ${karla.className} relative `}>
      <aside className={`w-[20%] h-[100vh] hidden lg:block`}>
        <DashboardNav />
      </aside>
      <main className='relative p-5 lg:p-14  lg:w-[80%]' style={{overflowY:"auto", height:"100vh"}}>
        {children}
       </main>
       {sidebar}
    </div>
  )
}

export default Layout