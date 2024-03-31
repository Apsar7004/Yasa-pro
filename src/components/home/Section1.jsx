import Image from "next/image";

export default function Section1(){
    return(
        <div className="bg-cover bg-center bg-black bg-opacity-70 bg-blend-overlay" style={{ backgroundImage: "url('/images/home-bg-image.jpg')" }}> 
        <div className="pt-48 pb-16 2xl:pb-72 max-lg:flex gap-8 md:gap-2 max-md:flex-col lg:pb-64" >
         
       
          <div className="p-5 md:text-left lg:ml-[50%] lg:mr-[10%] text-center">
            <h1 className="lg:text-5xl text-4xl font-bold text-yellow-400 mb-5">BOOK A RIDE</h1>
            <p className="lg:text-3xl text-2xl font-medium text-white text-wrap">YASA go sort you with the best ride experience</p>
            </div>
            <div >
            <Image  className="static rotate-[9deg] w-4/5  m-auto lg:absolute lg:rotate-0 lg:w-3/4"
            src='/images/home-car.png'
            alt="car-image"
            width={721}
            height={346}
            />
          </div>
        </div>
        </div>  
    )
}