
import { BoltIcon, ClockIcon, Cog8ToothIcon, StarIcon } from "@heroicons/react/24/outline"

export default function Section4(){
    return (
        <div className=" bg-yellow-500 ">
        <h1 className=" text-4xl font-bold pt-16  text-center">WE DO MORE THAN YOU WISH</h1>
      <div className="flex flex-col gap-12 pt-20 lg:px-28 lg:justify-around lg:flex-row">
        
      <div className="flex gap-8 px-10">
        <div>
            <StarIcon className=" w-16 h-16 p-4 rounded-full bg-gray-800 text-yellow-500"/>
            </div>
            <div>
              <h1 className="text-2xl font-bold pb-3">HOME PICKUP</h1>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima soluta reiciendis dolorem dicta labore eligendi </p>
             
            </div>
        </div>
        <div className="flex gap-8 px-10">
            <div><ClockIcon className=" w-16 h-16 p-4 rounded-full bg-gray-800 text-yellow-500"/></div>
            <div>
              <h1 className="text-2xl font-bold pb-3">FAST BOOKING</h1>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima soluta reiciendis dolorem dicta labore eligendi </p>
            </div>
        </div>

      </div>
      <div className="flex flex-col gap-12 mt-12 pb-40 lg:px-28 lg:justify-around lg:flex-row">
        
        <div className="flex gap-8 px-10">
          <div>
              <BoltIcon className=" w-16 h-16 p-4 rounded-full bg-gray-800 text-yellow-500"/>
              </div>
              <div>
                <h1 className="text-2xl font-bold pb-3">BOMUSES FOR RIDES</h1>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laboriosam, error!</p>
              </div>
          </div>
          <div className="flex gap-8 px-10">
              <div><Cog8ToothIcon className=" w-16 h-16 p-4 rounded-full bg-gray-800 text-yellow-500"/></div>
              <div>
                <h1 className="text-2xl font-bold pb-3">GPS SEARCHING</h1>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laboriosam, error!</p>
              </div>
          </div>

        </div>
      </div>

    )
}