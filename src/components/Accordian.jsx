import { useState } from "react";
import { FaAngleDown } from "react-icons/fa";
/* eslint-disable react/prop-types */
const data = [
	{
		head: "Heading 1",
		description:
			"Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam error enim accusantium. Non unde, iure sapiente qui quasi doloremque aliquam quae itaque blanditiis, ipsam tempora similique vel sit illum. Saepe.",
	},
	{
		head: "Heading 2",
		description:
			"Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam error enim accusantium. Non unde, iure sapiente qui quasi doloremque aliquam quae itaque blanditiis, ipsam tempora similique vel sit illum. Saepe.",
	},
	{
		head: "Heading 3",
		description:
			"Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam error enim accusantium. Non unde, iure sapiente qui quasi doloremque aliquam quae itaque blanditiis, ipsam tempora similique vel sit illum. Saepe.",
	},
];

const Acc = ({ items, openId, handleOpen }) => {
	return (
		<div className="flex flex-col">
			<button className="border py-2 text-left px-2" onClick={handleOpen}>
				<div className="flex justify-between items-center">
					{items.head}
					<FaAngleDown />
				</div>
			</button>
			<h1
				className={`overflow-hidden transition-all duration-500 ease-in-out ${
					openId ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
				}`}
			>
				{" "}
				{items.description}
			</h1>
		</div>
	);
};

const Accordian = () => {
	const [open, setOpen] = useState(null);

	const handleOpen = (id) => {
		setOpen(open == id ? null : id);
	};
	return (
		<div className="text-gray-500 border">
			<h1 className="text-5xl font-bold">Accordian</h1>
			<div>
				{data.map((item, i) => (
					<Acc
						items={item}
						key={i}
						openId={open === i}
						handleOpen={() => handleOpen(i)}
					/>
				))}
			</div>
		</div>
	);
};

export default Accordian;
