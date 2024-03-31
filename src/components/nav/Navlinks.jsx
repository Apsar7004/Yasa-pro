"use client"
import React from "react";
import Link from "next/link"
import { usePathname } from "next/navigation"


function Navlinks({value}){

    let pathname = usePathname();


    return (
        
        <Link href={value.path} className={pathname===value.path ? "text-yellow-400 font-semibold" : "font-medium"}>{value.title}</Link>
    )
}

export default Navlinks