import { useState } from "react";
import { CiEdit } from "react-icons/ci";
import { MdDeleteForever } from "react-icons/md";
import { v4 as uuidv4 } from "uuid";
const items = [
	{
		id: uuidv4(),
		name: "wake up",
		description: "desc 1",
		completed: false,
	},
	{
		id: uuidv4(),
		name: "brush",
		description: "desc 2",
		completed: false,
	},
	{
		id: uuidv4(),
		name: "bath",
		description: "desc 3",
		completed: false,
	},
	{
		id: uuidv4(),
		name: "go to office",
		description: "desc 4",
		completed: false,
	},
];

const Todo2 = () => {
	const [todos, setTodos] = useState(items);
	const [newTodo, setNewTodo] = useState({ name: "", description: "" });
	const [editData, setEditData] = useState({ name: "", description: "" });
	const [editId, setEditId] = useState(null);

	const handleAddTodo = () => {
		if (newTodo.name.trim() && newTodo.description.trim()) {
			let newT = {
				id: uuidv4(),
				name: newTodo.name,
				description: newTodo.description,
				completed: false,
			};
			setTodos([...todos, newT]);
			setNewTodo({ name: "", description: "" });
		}
	};

	const handleToggle = (id) => {
		setTodos(
			todos.map((t) => (t.id == id ? { ...t, completed: !t.completed } : t))
		);
		// console.log(todos);
	};

	const handleDelete = (id) => {
		setTodos(todos.filter((t) => (t.id === id ? "" : t)));
	};

	const handleEdit = (id, name, description) => {
		setEditId(id);
		setEditData({ name, description });
	};

	const handleUpdatedData = () => {
		setTodos(
			todos.map((t) =>
				t.id == editId
					? { ...t, name: editData.name, description: editData.description }
					: t
			)
		);
		setEditId(null);
	};

	return (
		<div className="text-gray-500 font-mono  border">
			<h1 className="font-bold text-5xl">Todo</h1>
			<div className="flex flex-col items-center my-5">
				{/* inputs  */}
				<div className="flex flex-col space-y-3 my-5 w-[50%] text-gray-500">
					<input
						type="text"
						value={newTodo.name}
						className="p-1 rounded"
						placeholder="Todo"
						onChange={(e) => setNewTodo({ ...newTodo, name: e.target.value })}
					/>
					<input
						type="text"
						value={newTodo.description}
						className="p-1 rounded"
						placeholder="Description"
						onChange={(e) =>
							setNewTodo({ ...newTodo, description: e.target.value })
						}
					/>
					<button className="rounded border p-1" onClick={handleAddTodo}>
						Add Todo
					</button>
				</div>

				{/* Todos section  */}
				<div className="w-[50%] space-y-2">
					{todos.map((todo, i) => (
						<div key={i} className="flex justify-between border p-2 rounded-md">
							{/* Todos */}
							<div className="flex space-x-5">
								<input type="checkbox" onChange={() => handleToggle(todo.id)} />
								{editId !== todo.id ? (
									<div className="flex space-x-5 items-center">
										<h1 className={`${todo.completed ? "line-through" : ""} font-bold`}>
											{todo.name}
										</h1>
										<h1 className="font-extralight text-xs">
											{todo.description}
										</h1>
									</div>
								) : (
									<div className="space-x-2 *:rounded ">
										<input
											type="text"
											className="w-[30%] px-2 bg-green-100 "
											value={editData.name}
											placeholder="Todo"
											onChange={(e) =>
												setEditData({ ...editData, name: e.target.value })
											}
										/>
										<input
											type="text"
											className="w-[30%] px-2 bg-green-100"
											placeholder="Description"
											value={editData.description}
											onChange={(e) =>
												setEditData({
													...editData,
													description: e.target.value,
												})
											}
										/>
										<button
											className="bg-green-400 px-3"
											onClick={handleUpdatedData}
										>
											Update
										</button>
									</div>
								)}
							</div>
							{/* Buttons  */}
							<div className="flex space-x-5">
								<CiEdit
									className="size-5 text-green-500"
									onClick={() =>
										handleEdit(todo.id, todo.name, todo.description)
									}
								/>
								<MdDeleteForever
									className="size-5 text-red-500"
									onClick={() => handleDelete(todo.id)}
								/>
							</div>
						</div>
					))}
				</div>
			</div>
		</div>
	);
};

export default Todo2;
