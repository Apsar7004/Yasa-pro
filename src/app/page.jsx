"use client"
import Image from "next/image"
import Section1 from "../components/home/Section1"
import Section2 from "../components/home/Section2"
import Section3 from "../components/home/Section3"
import Section4 from "../components/home/Section4"
import Link from "next/link"

export default function Home() {

  return (
    <>
      <Section1 />
      <Section2 />
      <hr className="h-1"></hr>
      <Section3 />
      <hr className="h-1"></hr>
      <Section4 />
      <div>
        <div className=" bg-yellow-500 py-16">
        <h1 className=" text-2xl font-bold  text-center pb-10">LAUNCHING SOON</h1>
        <div className="flex flex-col-reverse justify-around gap-10 md:flex-row">
          <div className="my-auto mx-auto lg:mx-0">
            <div>
            <h1 className=" text-2xl font-semibold pb-6 max-md:text-center">LAUNCHING SOON</h1>
            <p className="w-[300px] lg:w-[500px]">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Hic est et qui ullam iure, magnam sit ut quis voluptates, distinctio quam doloremque laborum repudiandae, earum quidem unde voluptatibus. Animi, optio.</p>
            </div>
            <div className="flex gap-3 pt-6 justify-around">
              <Link href="/">
            <Image src='/images/playstore.png'
            alt="mobile image"
            height={70}
            width={150}/></Link>
            <Link href='/about'>
             <Image src='/images/appstore.png'
            alt="mobile image"
            height={70}
            width={150}/></Link>

            </div>
          </div>
          <div className="mx-auto lg:mx-0">
            <Image src='/images/phonemok.png'
            alt="mobile image"
            height={350}
            width={350}/>
          </div>
        </div>
        </div>
      </div>
 
  </>
  )
}