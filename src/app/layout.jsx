"use client"
import React from "react"
import Navbar from "../components/nav/Navbar"
import "./globals.css"
import { Roboto} from "next/font/google"
import { usePathname } from "next/navigation";

const roboto = Roboto({ subsets: ['latin'] , weight:['400','700']});
export default function RootLayout({ children }) {

  let pathname = usePathname();
 
  return(
  
    <html lang="en">
      <head>
        <title>yasa-project</title>
      </head>
      <body className={`${roboto.className}`} >
      {pathname !== '/agent' && <Navbar />}
       {children}
    
        </body>
    </html>
  )
}