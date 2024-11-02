"use client"
import{ useState } from "react";
import Link from "next/link";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdCancelPresentation } from "react-icons/md"; 

export function Navbar () {
	const [menuControl,setMenuControl] = useState(false);
	return (
		<>
		<nav className="h-[60px] flex justify-between items-center px-2 md:px-12 lg:px-16">
			<ul className="flex items-center gap-4">
				<li className="text-x1">Wholesalers Ng </li>
				<li><Link href="#" className="text-md">Home </Link></li>
			</ul>

			<ul className="hidden lg:flex items-center gap-4">
			<li><Link href="#" className="text-md">Categories </Link></li>
			<li><Link href="#" className="text-md">Contact Us</Link></li>
			<li><Link href="#" className="text-md">Sign up </Link></li>
			</ul>
		
		<div className="hidden lg:flex items-center gap-4">
			{
			!menuControl ? 
			<GiHamburgerMenu onClick={() => setMenuControl(true)} className="text-2xl text-gray-700"/>:
			<MdCancelPresentation onClick={() => setMenuControl(false)} className="text-2xl text-gray-700"/>
			}
		</div>

		{/*for mobile menu */}
		{
		menuControl ? 
			<ul className="absolute top-[60px] w-full bg-white shadow-md flex flex-col gap-4 border-gray-200 p-4">
			<li><Link href="#" className="text-md">Categories </Link></li>
			<li><Link href="#" className="text-md">Contact Us</Link></li>
			<li><Link href="#" className="text-md">Sign up </Link></li>
			</ul>
			:
			null
		}
		</nav>
		</>
	)
}