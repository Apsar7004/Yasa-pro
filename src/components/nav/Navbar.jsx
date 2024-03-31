'use client'
import React, { useState } from "react"
import Image from "next/image"
import Navlinks from "./Navlinks"
import { ArrowDownIcon } from "@heroicons/react/24/outline"
 // import { usePathname } from "next/navigation";

const links = [
  {
    title: "HOME",
    path: "/",
  },
  {
    title: "ABOUT",
    path: "/about",
  },
  {
    title: "FEATURES",
    path: "/features",
  },
  {
    title: "BLOG",
    path: "/blog",
  },
  {
    title: "CONTACTS",
    path: "/contacts",
  }

];

export default function Navbar() {

  const [sidenav,setSidenav] = useState(false);

  // let pathname = usePathname();
  // console.log(pathname)
  return (
    <>
  {/* <div className="h-screen bg-cover bg-center bg-black bg-opacity-70 bg-blend-overlay" style={{ backgroundImage: "url('/images/home-bg-image.jpg')" }}> */}

  <div className="flex w-[95%] justify-between p-4 absolute">   
      <Image
        src="/images/yasa-logo2.png"
        alt="Logo"
        width={110} 
        height={110} 
      />
      <div className="text-white font-bold text-base content-start p-4  flex gap-12 max-md:hidden">
        {links.map((value,i)=>(<Navlinks value={value} key={i} />))}
      </div>
      <div className=" font-bold my-auto z-20 md:hidden pr-4">
      <ArrowDownIcon className={`w-8 transition-all duration-1000 rotate-0 ${sidenav ? ' rotate-[180deg] text-yellow-400':"text-white" }`} onClick={()=>setSidenav(!sidenav)}/>
       
      </div>

     
      </div>

      <div className={`text-white font-bold p-10 flex flex-col gap-12 md:hidden absolute bg-black bg-opacity-90 h-[100%] justify-center z-10 transition-all duration-1000 right-0 ${sidenav ? "top-0" : "top-[-1250px]" }`}>
        {links.map((value,i)=>(<Navlinks value={value} key={i} />))}
      </div>
 
   
      {/* </div> */}
     
  
  </>
  )
}