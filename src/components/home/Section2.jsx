"use client"
import { Autocomplete,CircularProgress,TextField} from "@mui/material"
import Image from "next/image";
import { useState } from "react";

export default function Section2(){
    
  const [name,setName] = useState()
  const [phone,setPhone] = useState()
  const [from,setFrom] = useState()
  const [to,setTo] = useState()
  const [when,setWhen] = useState()   
  const [top100Films,settop100films] = useState([])
  
//  relative bottom-[100px] z-[-999]

function handlesubmit(e){
  e.preventDefault();
  console.log(name,phone,from,to,when)
}

    return (

<div className="bg-yellow-500 py-8 2xl:pt-48 xl:pt-32 lg:pt-20 md:flex justify-around pb-28">
<div className="px-8  text-center md:text-left my-10 md:w-6/12 md:my-auto ">
  <h1 className=" text-2xl font-semibold pb-8">BEST IN TOWN</h1>
  <p className=" pb-4 text-xl text-gray-900">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fugit dolorum fugiat, ex natus quidem accusamus, aut officia consequatur recusandae aperiam, consectetur molestias. Error explicabo nostrum ullam quod deserunt pariatur aperiam.</p>
  <p className=" text-xl text-gray-900"> Lorem ipsum dolor sit amet consectetur adipisicing elit. Id dicta est tempora eaque distinctio aperiam molestias aut, atque minima maiores, quidem totam laboriosam voluptates necessitatibus illo. Reiciendis architecto fugiat cum?</p>
</div>

<div className="lg:w-4/12 shadow-xl shadow-black">
  <h1 className=" font-bold text-white text-[25px] bg-black text-center py-5">BOOK A RIDE</h1>
  
  <form className="flex flex-col gap-10 relative bg-white px-10 py-6">
  <TextField className="h-[33px]" id="standard-basic" label="Name" variant="standard" value={name} onChange={(e)=>setName(e.target.value)} />
  
  <TextField className="h-[33px]"  id="standard-basic" label="Phone" variant="standard" type="number" value={phone} onChange={(e)=>setPhone(e.target.value)}/>

  <div className="flex gap-2">
  <Image
  className="pt-4 mr-4"
src="/images/src-des.png"
alt="Logo"
width={40} 
height={140} 
/>
<div className="flex-1 flex flex-col gap-10">
  <TextField className=" h-[33px]"  id="standard-basic" label="From" variant="standard"  value={from} onChange={(e)=>setFrom(e.target.value)}/>
  
  <TextField className=" h-[33px]"  id="standard-basic" label="To" variant="standard" value={to} onChange={(e)=>setTo(e.target.value)}/>
  </div>
  </div>

  <Autocomplete
      id="location-input"
      options={top100Films}
      inputValue={when}
      onInputChange={(event,newval)=>{
        setWhen(newval)
        setTimeout(()=>{
          settop100films(['Amadeus',
          'Toy Story 3', 
          'Logan', 
          'Dangal',
          'The Sting'])
        },3000)
      }}
     
      renderInput={(params) => (
        <TextField
          {...params}
          label="When"
          variant="standard"
        />
      )}
    />



<button className="bg-black text-white mx-auto px-8 py-2 font-semibold" onClick={(e)=>handlesubmit(e)}>SUBMIT</button>
  </form>
</div>

</div>
    )
}