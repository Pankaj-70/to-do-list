import React from "react";
import { useState } from "react";
import Layout from "./Layout";
import ToDoItems from "./ToDoItems";

export default function Input() {
	const [todos, setTodos] = useState([]);
	const [task, setTask] = useState("");
	const [date, setDate] = useState("");

	const performAction = () => {
		if (task === "" || date === "") {
			alert("Please fill all the fields");
			return;
		}
		var add = true;
		todos.map((todo, index) => {
			if (todo.task == task && todo.date == date) {
				alert("Already added in to do list");
				add = false;
				return;
			}
		});
		if (!add) return;
		let newToDo = { task, date };
		setTodos([...todos, newToDo]);
		setTask("");
		setDate("");
	};

	const deleteItem = (taskToDelete, dateToDelete) => {
		const updatedToDos = todos.filter((item) => {
			return item.task !== taskToDelete && item.date !== dateToDelete;
		});
		setTodos(updatedToDos);
	};

	const handleTaskChange = (e) => {
		setTask(e.target.value);
	};

	const handleDateChange = (e) => {
		setDate(e.target.value);
	};

	return (
		<>
			<Layout
				task={task}
				date={date}
				handleDateChange={handleDateChange}
				handleTaskChange={handleTaskChange}
				performAction={performAction}
			></Layout>
			<ToDoItems todos={todos} deleteItem={deleteItem}></ToDoItems>
		</>
	);
}
