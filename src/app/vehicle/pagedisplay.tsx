// "use client"

// import Image from "next/image";
// import { useEffect, useState } from "react";



// function Features(){
//     const [data,setdata] = useState('');
//     let getdata = async () =>{
//     try {
//         const response = await fetch('/api/uploadimage', {method: 'GET'});
//         if(response.status === 200){
//             const data = await response.json();
//             console.log(data.user)
//             setdata(data.user);
//         }
//       } catch (error) {
//         console.error('Error:', error);
//       }
//     }

//     useEffect(()=>{
//         getdata()}
//         ,[])
//     return (
//         <div>
//         <h1>hello</h1>
//        {data === '' ? null : data.map((item, index) => (
//     <div key={index}>
//       <h2>Driver: {item.driver}</h2>
//       <p>License Number: {item.licenseNumber}</p>
//       <p>Manager: {item.manager}</p>
//       <p>Purchase Date: {item.purchaseDate}</p>
//       <p>Registration: {item.registration}</p>
//       <p>Trips Count: {item.tripsCount}</p>
//       <p>Vehicle ID: {item.vehicleId}</p>
//       <p>Vehicle Type: {item.vehicleType}</p>
//       <p>Vehicle Number:{item.vehicleNumber}</p>
//       {/* Render image */}
//       {item.image && item.image.map((image, imgIndex) => (
//         // <img key={imgIndex} src={image} alt={`Image ${imgIndex}`} />
//         <Image 
//         key={imgIndex}
//               src={image}
//               alt="company image"
//               width={200}
//               height={200}
//             />
//       ))}
//     </div>
//   ))}
//         </div>
//     )
// }
// export default Features;
