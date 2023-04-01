const data: cardProps[] = [{
	job: "Front-End Developer",
	img: "/figma.svg",
	title: "Figma",
	desc: "we are looking for an experienced front-end developer to join our team",
	skill: "Rust",
	price: "$70.000-$90.000",
	activeCard: true
},
{
	job: "Data Scientist",
	img: "/facebook.svg",
	title: "Facebook",
	desc: "we are seeking a data scientist to join our team",
	skill: "Python",
	price: "$100.000-$130.000",
	activeCard: false
},
{
	job: "Technical Writer",
	img: "/vercel.svg",
	title: "Vercel",
	desc: "we are seeking a Technical Writer to join our team",
	skill: "documentation",
	price: "$60.000-$80.000",
	activeCard: false
}]

type cardProps = {
	job: string;
	img: string;
	title: string;
	desc: string;
	skill: string;
	price: string;
	activeCard: boolean;
}

const Card = ({job, img, title, desc, skill, price, activeCard}: cardProps) => {
	return (
		<div className={"p-[15px] rounded shadow-md " + (activeCard ? "bg-blue text-white" : "bg-white text-slate-600")} >
			<div className="flex gap-x-3">
				<img src={img} />
				<span>
			      <h2 className="font-semi-bold" >{job}</h2>
			      <p className=" text-base" >{title}</p>
			    </span>
			</div>
    		<p className="my-5 ">{desc}</p>
    		<div className={"flex justify-between align-center pt-[10px] border-t border-slate-300 font-semi-bold " + (activeCard ? "text-white" : "text-black") }>
		      <p className="py-[5px] px-[10px] rounded-full bg-slate-300" >{skill}</p>
		      <p>{price}</p>
		    </div>
		</div>
	)
}

const Featured = () => {
	return (
		<div className="container mb-[3rem]">
			<h1 className='font-semi-bold' >Featured jobs</h1>
			<div className="grid sm:grid-cols-1 md:grid-cols-3 gap-4 mt-4 ">
				{
					data.map(item => (
						<Card {...item}/>
					))
				}
			</div>
		</div>
	)
}

export default Featured