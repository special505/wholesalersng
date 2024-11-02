
import Link from "next/link";

export function Footer () {
	return (
	<footer className="min-[68px] lg:h[68px] flex flex-col md:flex-row justify-between items-center bg-gray-300 px-2 md:px-12 lg:p-16">
		<div>
			<p className ="text-2x1 text-gray-800 mb-1" >Wholesalers NG </p>
			<p className ="text-gray-600 text-xs"> &copy; 2024 All Righter Reserved </p>
		</div>

		<ul className= "flex items-center">
			<li className= "text-xs text-gray-600">
				<Link href="#"> Site Map </Link>
			</li> 
			
			<li className= "text-xs text-gray-600">
			<Link href="#"> terms of use </Link>

			</li>


		</ul>
	</footer>
	)
}