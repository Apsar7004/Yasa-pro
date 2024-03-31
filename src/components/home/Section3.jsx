
import Image from "next/image"

import {Card, CardActionArea, CardActions, CardContent, Typography,} from "@mui/material"
import Link from "next/link"
export default function Section3(){
    return (
        
      
      <div className=" bg-yellow-500 ">
      <h1 className=" text-4xl font-bold pt-20 pb-10  text-center">OUR TARIIFS</h1>
      <div className="flex flex-col lg:flex-row lg:justify-around gap-6 py-10 lg:px-10">
    <Card className="w-[400px] max-sm:w-[350px] max-lg:w-[600px] max-lg:mx-auto">
    <CardActionArea>
    <Image src="/images/economi.jpg" alt="business class cars" height={150} width={250} className="mx-auto"/>
      <CardContent>
        <Typography gutterBottom variant="h5" component="div" className=" font-bold">
          ECONOMY CLASS
        </Typography>
        <Typography variant="body2" color="text.secondary" className=" text-gray-900 text-base pt-2">
      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iste voluptas laudantium magni vitae et, corrupti quos suscipit nobis possimus, a soluta expedita consequatur. Totam quibusdam et vel porro, minus cum?
        </Typography>
        <Typography gutterBottom variant="h5" component="div" className=" font-bold text-yellow-600 mt-5">
        Rate : $ 20
        </Typography>
      </CardContent>
    </CardActionArea>
    <CardActions>
    <Link href='/' className="bg-black text-white mx-auto px-8 py-2 font-semibold">Read More</Link>
    </CardActions>
  </Card>
  <Card className="w-[400px] max-sm:w-[350px] max-lg:w-[600px] max-lg:mx-auto">
    <CardActionArea>
    <Image src="/images/standard.jpg" alt="business class cars" height={150} width={250} className="mx-auto"/>
      <CardContent>
        <Typography gutterBottom variant="h5" component="div" className=" font-bold">
          STANDARD CLASS
        </Typography>
        <Typography variant="body2" color="text.secondary" className=" text-gray-900 text-base pt-2">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laborum, sed officia excepturi laboriosam id nulla? Accusamus, cumque laudantium corporis ex veniam debitis tenetur, dolor quod sunt quis reprehenderit dolorem molestiae!
        </Typography>
        <Typography gutterBottom variant="h5" component="div" className=" font-bold text-yellow-600 mt-5">
        Rate : $ 50
        </Typography>
      </CardContent>
    </CardActionArea>
    <CardActions>
    <Link href='/' className="bg-black text-white mx-auto px-8 py-2 font-semibold">Read More</Link>
    </CardActions>
  </Card>
  <Card className="w-[400px] max-sm:w-[350px] max-lg:w-[600px] max-lg:mx-auto">  
    <CardActionArea>
    
      <Image src="/images/business.jpg" alt="business class cars" height={150} width={250} className="mx-auto"/>
      <CardContent>
        <Typography gutterBottom variant="h5" component="div" className=" font-bold">
          BUSINESS CLASS
        </Typography>
        <Typography variant="body2" color="text.secondary" className=" text-gray-900 text-base pt-2">
       Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo porro, esse, nesciunt eos repellendus necessitatibus sint quam reprehenderit error, quia assumenda molestias quos ipsum mollitia quas ducimus quasi itaque molestiae.
        </Typography>
        <Typography gutterBottom variant="h5" component="div" className=" font-bold text-yellow-600 mt-5">
          Rate : $ 100
        </Typography>
      </CardContent>
    </CardActionArea>
    <CardActions>
    <Link href='/' className="bg-black text-white mx-auto px-8 py-2 font-semibold">Read More</Link>
    </CardActions>
  </Card>
  </div>
    </div>
    )
}
