"use client"
import Image from "next/image"
import { Bars3Icon, BellIcon, EnvelopeIcon, GlobeAltIcon} from "@heroicons/react/24/outline"
import { MenuItem, Select } from "@mui/material"
import { useEffect, useState } from "react";

import { AdminPanelSettingsOutlined, ChecklistOutlined, CommuteOutlined, CurrencyExchangeOutlined, CurrencyExchangeRounded, ListAltRounded, LockOpenRounded, PeopleAltOutlined, PersonOutlineOutlined, SettingsOutlined, WidgetsOutlined, WidgetsRounded } from "@mui/icons-material";
import { usePathname } from "next/navigation";

function TripPortal(){
    const [trips,settrips] = useState([])
    const [age, setAge] = useState(10);
    const pathname = usePathname();
    function convert24To12(time24) {
      // Split the time string into hours and minutes
      let [hours, minutes] = time24.split(':');
      
      // Convert hours from string to number
      hours = parseInt(hours, 10);
      
      // Determine the period (AM/PM)
      const period = hours >= 12 ? 'PM' : 'AM';
      
      // Convert hours to 12-hour format
      hours = hours % 12 || 12; // If hours is 0 or 12, convert it to 12
      
      // Format minutes to always be two digits
      minutes = minutes.padStart(2, '0');
      
      // Return the formatted time
      return `${hours}:${minutes} ${period}`;
  }
    
    const handleChange = (event) => {
      setAge(event.target.value);
    };

    let getdata = async () =>{
      try {
          const response = await fetch('/api/tripdetails', {method: 'GET'});
          if(response.status === 200){
              const data = await response.json();
              console.log(data.user)
             
              data.user.map((trip) =>{
                let [d, t] = trip.timeDate.split('T');
                trip.date = d;
                trip.time = convert24To12(t);

              })
              settrips(data.user);
          }
        } catch (error) {
          console.error('Error:', error);
        }
      }
  
      useEffect(()=>{
          getdata()}
          ,[])
  
    return (
        <div className="h-screen flex flex-col  bg-light-cyan  font-montserrat">
            <div id="TopNav" className="flex py-1 justify-between bg-white text-sm">
                <div className="flex gap-3">
                    <Image 
                        src='/images/name1.png'
                        alt='Company logo'
                        width={140}
                        height={60}
                    />
                    <Bars3Icon className="w-[50px] h-[25px] my-auto"/>
                </div>
                <div className="flex gap-5 pr-3">
                    
                    <div className="w-50 flex">
                    <GlobeAltIcon className="w-[30px] h-[25px] my-auto"/>
                    <Select
                      value={age}
                      className="w-full"
                      onChange={handleChange}
                      sx={{
                        '& .MuiOutlinedInput-notchedOutline': {
                          border: 'none',
                        },
                        '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                          border: 'none',
                        },
                        '&:hover .MuiOutlinedInput-notchedOutline': {
                          border: 'none',
                        },
                        outline: 'none',
                      }}
            
                    >
                      <MenuItem value={10}>English</MenuItem>
                      <MenuItem value={20}>French</MenuItem>
                      <MenuItem value={30}>Tamil</MenuItem>
                    </Select>
                    </div>
                    <BellIcon className="w-[50px] h-[25px] my-auto" />
                    <EnvelopeIcon className="w-[50px] h-[25px] my-auto" />
                    <div className="flex gap-3">
                        <Image  className="rounded-full w-[40px] h-[40px] my-auto"
                         src={'/images/client2.jpeg'}
                         alt="user image"
                         width={100}
                         height={100}   
                        />
                        <div className=" text-sm my-auto">
                            <p className=" text-gray-500">OWNER</p>
                            <h1 className=" font-semibold">NANDY</h1>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex-grow flex">
                <div id="LeftNav" className="w-72 bg-white mt-1 flex flex-col gap-6 pt-4 text-coolGray text-sm">
                <div className="px-6">
                    <h1 className="mb-2 text-gray-500">MENU</h1>
                    <div className="flex gap-3 py-2 px-4 rounded-2xl bg-yellow-500 text-white font-medium">
                        <WidgetsOutlined fontSize="small" />
                        <p>Dashboard</p>
                    </div>
                </div>
                <div className="px-6">
                    <h1 className="mb-2  text-gray-500">TRANSPORTATION</h1>
                    <div className={pathname==='/admin/TripPortal'?"flex gap-3 py-2 px-4 bg-teal-700 rounded-2xl font-medium text-white":"flex gap-3 py-2 px-4 "}><ListAltRounded fontSize="small" /> <p>Trip Portal</p></div>
                    <div className="flex gap-3 py-2 px-4  "><CommuteOutlined fontSize="small" /> <p>Vehicle</p></div>
                    <div className="flex gap-3 py-2 px-4  "><PersonOutlineOutlined fontSize="small" /><p>Drivers</p></div>
                    
                </div>
                <div className="px-6">
                    <h1 className="mb-2  text-gray-500">MANAGEMENT</h1>
                    <div className="flex gap-3 py-2 px-4 "><PeopleAltOutlined fontSize="small" /> <p>Employees</p></div>
                    <div className="flex gap-3 py-2 px-4 "><CurrencyExchangeRounded fontSize="small" /> <p>Expenses</p></div>
                    <div className="flex gap-3 py-2 px-4 "><AdminPanelSettingsOutlined fontSize="small" /> <p>Access Control</p></div>
                    <div className="flex gap-3 py-2 px-4 "><SettingsOutlined fontSize="small" /> <p>Settings</p></div>
                </div>
                </div>
                <div id="content" className="w-full py-4 px-10 ">
                    <div className="flex justify-between">
                      <div>
                        <h1 className="text-2xl font-bold text-coolGray">Trip List</h1>
                        <p className=" text-gray-500 mt-2">Your all trips are listed below</p>
                      </div>
                      <div className="flex gap-4 my-auto pt-4">
                        <p className="py-2 px-3 bg-white text-coolGray rounded-lg" >search</p>
                        <p className="py-2 px-3 bg-white text-coolGray rounded-lg" >filters</p>
                        <p className="py-2 px-3 bg-white text-coolGray rounded-lg" >column</p>
                        <p className="py-2 px-3 bg-white text-coolGray rounded-lg" >create new</p>
                      </div>
                    </div> 
                    <div className=" pt-6">
                    <table className="w-full divide-y bg-white text-sm">
                        <thead >
                          <tr>
                            <th className="px-6 py-3 text-center  text-coolGray tracking-wider">
                              TRIP ID
                            </th>
                            <th className="px-6 py-3 text-center  text-coolGray tracking-wider">
                              Vehicle Type
                            </th>
                            <th className="px-6 py-3 text-center  text-coolGray tracking-wider">
                              Vehicle Number
                            </th>
                            <th className="px-6 py-3 text-center  text-coolGray tracking-wider">
                              Trip Date
                            </th>
                            <th className="px-6 py-3 text-center  text-coolGray tracking-wider">
                              Trip Time
                            </th>
                            <th className="px-6 py-3 text-center  text-coolGray tracking-wider">
                              Destination
                            </th>
                            <th className="px-6 py-3 text-center  text-coolGray tracking-wider">
                              Status
                            </th>
                            <th className="px-6 py-3 "></th>
                          </tr>
                        </thead>
                        <tbody className="bg-white divide-y divide-gray-200">
                            {/* {trips.map((trip) => ( key={trip.tripId} */ }
                            {trips.map((trip) => (
                              <tr key={1}>
                                <td className="px-6 py-2 text-center">{trip._id}</td>
                                <td className="px-6 py-2 text-center">{trip.vehicleType}</td>
                                <td className="px-6 py-2 text-center">{trip.driverId}</td>
                                <td className="px-6 py-2 text-center">{trip.date}</td>
                                <td className="px-6 py-2 text-center">{trip.time}</td>
                                <td className="px-6 py-2 text-center">{trip.drop}</td>
                                <td className="px-6 py-2 text-center">na</td>
                                <td className="px-6 py-2 ">
                                  <button className=" bg-teal-700 text-white py-1 px-4 rounded">
                                    view
                                  </button>
                                </td>
                              </tr>
                            ))}
                        </tbody>
                    </table>
                    </div> 
                </div>
            </div>
        </div>
    )
}

export default TripPortal