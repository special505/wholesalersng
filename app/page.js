import Image from "next/image";
import Link from "next/link";
import { IoShirtSharp } from "react-icons/io5";
import { GiConverseShoe } from "react-icons/gi";
import { GiCoconuts } from "react-icons/gi";
import { IoIosCamera } from "react-icons/io";

export default function Home() {
  return (
    <main className="p-4 md:px-8 lg:px-16">
        <header className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            <div className="bg-gradient-to-b from-orange-400 via-yellow-500 to-orange-600 p-6 rounded-lg">
                <p className="border border-orange-500 p-3 rounded-lg text-center text-lg lg:text-2xl text-orange-900 mb-5">Hot Categories</p>
                <div className="grid grid-cols-2 gap-3">
                    <blockquote className="h-28 flex flex-col justify-center items-center gap-3 bg-white p-3 rounded-lg">
                        <IoShirtSharp className="text-4xl"/>
                        <Link href="#">Cloths</Link>
                    </blockquote>
                    <blockquote className="h-28 flex flex-col justify-center items-center gap-3 bg-white p-3 rounded-lg">
                        <GiConverseShoe className="text-4xl"/>
                        <Link href="#">Footwears</Link>
                    </blockquote>
                    <blockquote className="h-28 flex flex-col justify-center items-center gap-3 bg-white p-3 rounded-lg">
                        <GiCoconuts className="text-4xl"/>
                        <Link href="#">Raw Food</Link>
                    </blockquote>
                    <blockquote className="h-28 flex flex-col justify-center items-center gap-3 bg-white p-3 rounded-lg">
                        <IoIosCamera className="text-4xl"/>
                        <Link href="#">Electronics</Link>
                    </blockquote>
                </div>
            </div>

            <div className="flex flex-col gap-2 border border-gray-200 shadow-md rounded-lg">
               <Image 
               width={400}
               height={400}
                className="w-full h-[220px] rounded-lg" 
                src="/images/nigeria.jpg" 
                alt="product image"/>
                <ul className="flex items-center gap-2 px-2">
                    <li className="bg-green-600 text-green-100 p-1 rounded-full text-[8px]">Sponsored</li>
                    <li className="bg-orange-600 text-yellow-100 p-1 rounded-full text-[8px]">Hot</li>
                    <li className="text-gray-600">Wireless Bluetooth 5.0 Gaming Mouse</li>
                </ul>
                <ul className="flex justify-between gap-2 px-2">
                    <li className="text-xl text-gray-600">₦12,600</li>
                    <li className="flex flex-col items-center">
                        <span className="text-xs text-gray-400 uppercase">Supply</span>
                        <span className="text-md text-gray-600">760</span>
                    </li>
                    <li className="flex flex-col items-center">
                        <span className="text-xs text-gray-400 uppercase">MOQ</span>
                        <span className="text-md text-gray-600">2</span>
                    </li>
                </ul>
                <p className="text-xs text-gray-600 px-2">Available in black, white, and green colours. Customization and branding are available on demand</p>
                <p className="px-2 pb-4">
                    <Link className="bg-orange-600 text-yellow-100 text-xs text-center p-2 rounded-lg border-b-4 border-green-600" href="#">Open Details</Link>
                </p>
            </div>
            <div className="flex flex-col gap-2 border border-gray-200 shadow-md rounded-lg">
               <Image 
               width={400}
               height={400}
                className="w-full h-[220px] rounded-lg" 
                src="/images/nigeria.jpg" 
                alt="product image"/>
                <ul className="flex items-center gap-2 px-2">
                    <li className="bg-green-600 text-green-100 p-1 rounded-full text-[8px]">Sponsored</li>
                    <li className="bg-orange-600 text-yellow-100 p-1 rounded-full text-[8px]">Hot</li>
                    <li className="text-gray-600">Wireless Bluetooth 5.0 Gaming Mouse</li>
                </ul>
                <ul className="flex justify-between gap-2 px-2">
                    <li className="text-xl text-gray-600">₦12,600</li>
                    <li className="flex flex-col items-center">
                        <span className="text-xs text-gray-400 uppercase">Supply</span>
                        <span className="text-md text-gray-600">760</span>
                    </li>
                    <li className="flex flex-col items-center">
                        <span className="text-xs text-gray-400 uppercase">MOQ</span>
                        <span className="text-md text-gray-600">2</span>
                    </li>,
                </ul>
                <p className="text-xs text-gray-600 px-2">Available in black, white, and green colours. Customization and branding are available on demand</p>
                <p className="px-2 pb-4">
                    <Link className="bg-orange-600 text-yellow-100 text-xs text-center p-2 rounded-lg border-b-4 border-green-600" href="#">Open Details</Link>
                </p>
            </div>
            <div className="flex flex-col gap-2 border border-gray-200 shadow-md rounded-lg">
               <Image 
               width={400}
               height={400}
                className="w-full h-[220px] rounded-lg" 
                src="/images/nigeria.jpg" 
                alt="product image"/>
                <ul className="flex items-center gap-2 px-2">
                    <li className="bg-green-600 text-green-100 p-1 rounded-full text-[8px]">Sponsored</li>
                    <li className="bg-orange-600 text-yellow-100 p-1 rounded-full text-[8px]">Hot</li>
                    <li className="text-gray-600">Wireless Bluetooth 5.0 Gaming Mouse</li>
                </ul>
                <ul className="flex justify-between gap-2 px-2">
                    <li className="text-xl text-gray-600">₦12,600</li>
                    <li className="flex flex-col items-center">
                        <span className="text-xs text-gray-400 uppercase">Supply</span>
                        <span className="text-md text-gray-600">760</span>
                    </li>
                    <li className="flex flex-col items-center">
                        <span className="text-xs text-gray-400 uppercase">MOQ</span>
                        <span className="text-md text-gray-600">2</span>
                    </li>
                </ul>
                <p className="text-xs text-gray-600 px-2">Available in black, white, and green colours. Customization and branding are available on demand</p>
                <p className="px-2 pb-4">
                    <Link className="bg-orange-600 text-yellow-100 text-xs text-center p-2 rounded-lg border-b-4 border-green-600" href="#">Open Details</Link>
                </p>
            </div>
        </header>
    </main>
  );
}