/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";

const Bar = ({ value = 0 }) => {
	const [percent, setPercent] = useState(0);

	useEffect(() => {
		setPercent(Math.min(100, Math.max(value, 0)));
	}, [value]);

	return (
		<div className="flex flex-col justify-center items-center space-y-5">
			<h1 className="text-2xl font-bold ">Progress Bar</h1>

			<div className="w-[500px] h-[50px] border rounded-3xl overflow-hidden relative flex items-center justify-center">
				<span
					className={`absolute z-10 ${
						percent > 49 ? "text-black" : "text-white"
					}`}
				>
					{percent.toFixed()}%
				</span>
				<div
					className={`absolute top-0 left-0 h-full ${
						percent > 49 ? "bg-red-400 " : "bg-green-400"
					}`}
					style={{ width: `${percent}%` }}
				></div>
			</div>
		</div>
	);
};

const ProgressBar = () => {
	const [valueT, setValue] = useState(0);

	useEffect(() => {
		setInterval(() => {
			setValue((val) => val + 1);
		}, 100);
	}, []);

	return <Bar value={valueT} />;
};

export default ProgressBar;
