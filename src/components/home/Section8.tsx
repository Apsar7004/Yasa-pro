import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PhoneIcon from '@mui/icons-material/Phone';
import MarkunreadIcon from '@mui/icons-material/Markunread';
import Link from "next/link"
export default function Section8(){
    return (
        <div className=" bg-zinc-800 flex flex-col gap-16 py-24 px-7 lg:px-16 lg:flex-row">
        <div className=" text-white">
          <h1 className=" text-xl font-medium pb-4">ABOUT US</h1>
          <hr className="h-1 bg-yellow-500 border-0 mb-8"></hr>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Inventore eligendi magni quos fuga, maiores iusto nisi voluptatum maxime, enim iste sequi doloribus mollitia laborum ab! Suscipit pariatur nostrum fugiat tempore.</p>
          <div className="flex text-yellow-500 justify-start gap-6 pt-8">
          <Link href='/'><InstagramIcon className="w-8 h-8" /></Link>
          <Link href='/'><FacebookIcon  className="w-8 h-8" /></Link>
          <Link href='/'><TwitterIcon   className="w-8 h-8" /></Link>
          </div>
        </div>
        <div className=" text-white">
        <h1 className=" text-xl font-medium pb-4">DOWNLOAD</h1>
          <hr className="h-1 bg-yellow-500 border-0  mb-8"></hr>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quisquam porro aliquid illo recusandae enim eligendi autem rerum! Reiciendis dignissimos</p>
          <div className="flex flex-col gap-3 text-yellow-500 pt-4">
            <Link href="/about">Android Play Store</Link>
            <Link href="/blog">Apple App Store</Link>
          </div>
        </div>
        <div className=" text-white">
        <h1 className=" text-xl font-medium pb-4">CONTACTS</h1>
          <hr className="h-1 bg-yellow-500 border-0  mb-8"></hr>
          <div className="flex gap-5">
            <LocationOnIcon className="w-8 h-8"/>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Delectus asperiores, iste animi molestias officiis nulla nostrum perferendis quae, corrupti unde nesciunt, debitis iusto consectetur voluptatibus! Consequatur illum omnis perferendis minima.</p>
          </div>
          <div className="flex gap-5 pt-4">
            <PhoneIcon className="w-8 h-8"/>
            <p>230-6654-9461</p>
          </div>
          <div className="flex gap-5 pt-4">
            <MarkunreadIcon className="w-8 h-8"/>
            <p>YASA@rides.com</p>
          </div>
        </div>
      </div>
    )
}