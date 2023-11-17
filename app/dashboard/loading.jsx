'use client'
import { usePathname } from "next/navigation"
const loading = () => {
    const pathname = usePathname()
    return !pathname.includes("sidebar") && <div className=' h-[100vh] flex items-center justify-center '>

        <span className="loading loading-dots loading-lg gap-x-10"></span>
    </div>
}

export default loading