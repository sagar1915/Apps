import Accordian from "./components/Accordian";
import Todo2 from "./components/Todo2";
import ProgressBar from "./components/ProgressBar";

function App() {
	return (
		<div className="flex flex-col justify-center align-middle text-center font-mono">
			<Todo2 />
			<Accordian />
			<ProgressBar />
		</div>
	);
}

export default App;
