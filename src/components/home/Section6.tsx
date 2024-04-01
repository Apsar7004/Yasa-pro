import Link from "next/link"
import Image from "next/image"

export default function Section6(){
    return (
        <div className="py-20 bg-zinc-800">
        <div className=" text-center pb-8">
          <h2 className=" text-3xl text-white pb-3 font-medium">HAPPY CLIENTS</h2>
          <h1 className=" text-4xl text-yellow-500 font-bold">TESTIMONIALS</h1>
        </div>
        <div className=" lg:flex gap-8 justify-between p-8">
          <div className="pb-12 sm:px-32 lg:px-0">
            <p className="text-white">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consequuntur dicta eveniet sit facere accusantium impedit nihil odio, dolor eligendi laborum provident nam dolores voluptas voluptate placeat optio? Architecto, blanditiis sed.</p>
            <div className=" flex gap-5 my-5">
              <Image  className="rounded-full w-[70px] h-[70px] "
              src='/images/client1.jpeg'
              alt='client1'
              width={500}
              height={500}
              />
              <div className=" text-yellow-500 my-auto">
              <h1 className="text-2xl font-semibold">JAMES VFAT</h1>
              <h2 className="text-xl font-medium">BUSINESS MAN</h2>
              </div>
            </div>
          </div>
          <div className="pb-12 sm:px-32 lg:px-0">
          <p className="text-white">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consequuntur dicta eveniet sit facere accusantium impedit nihil odio, dolor eligendi laborum provident nam dolores voluptas voluptate placeat optio? Architecto, blanditiis sed.</p>
            <div className=" flex gap-5 my-5">
              <Image  className="rounded-full w-[70px] h-[70px]"
              src='/images/client2.jpeg'
              alt='client1'
              width={500}
              height={500}
              />
              <div className=" text-yellow-500 my-auto">
              <h1 className="text-2xl font-semibold">JAMES VFAT</h1>
              <h2 className="text-xl font-medium">BUSINESS MAN</h2>
              </div>
            </div>
          </div>
          <div className="pb-12 sm:px-32 lg:px-0">
          <p className="text-white">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consequuntur dicta eveniet sit facere accusantium impedit nihil odio, dolor eligendi laborum provident nam dolores voluptas voluptate placeat optio? Architecto, blanditiis sed.</p>
            <div className=" flex gap-5 my-5">
              <Image  className="rounded-full w-[70px] h-[70px]"
              src='/images/client3.jpeg'
              alt='client1'
              width={500}
              height={500}
              />
              <div className=" text-yellow-500 my-auto ">
              <h1 className="text-2xl font-semibold">JAMES VFAT</h1>
              <h2 className="text-xl font-medium">BUSINESS MAN</h2>
              </div>
            </div>
          </div>
        </div>
        <div className="text-center lg:text-end pb-4 lg:pr-28 ">
          <Link href='/' className="text-yellow-500 underline underline-offset-8 text-xl">VIEW MORE</Link>
        </div>
        
      </div>
   
    )
}