const Navbar = () => {
	return (
		<div className="container mx-auto py-[1.2rem] flex justify-between align-center">
    		<h1 className="font-semi-bold text-xl">Jobless</h1>
    		<ul className="flex gap-x-8 list-none">
		      <li className="font-medium hover:text-black"><a href="#">Home</a></li>
		      <li className="font-regular text-slate-600 hover:text-black"><a href="#">Discover</a></li>
		      <li className="font-regular text-slate-600 hover:text-black"><a href="#">Post a Job</a></li>
		      <li className="font-regular text-slate-600 hover:text-black"><a href="#">Contact Us</a></li>
		    </ul>
    		<a href="#" className="rounded px-[10px] py-[5px] font-md border-[2px] border-slate-400 hover:text-white hover:bg-blue " >Sign Up</a>
		</div>
	)
}

export default Navbar