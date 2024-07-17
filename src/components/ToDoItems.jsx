import React from "react";

export default function ToDoItems({ todos = [], deleteItem }) {
	return (
		<div>
			<ul>
				{todos.map((todo, index) => (
					<li key={index} type="none">
						<span>
							{todo.task} ----------- {todo.date}
						</span>
						<button
							className="btn btn-danger"
							onClick={() => {
								deleteItem(todo.task, todo.date);
							}}
						>
							Delete
						</button>
					</li>
				))}
			</ul>
		</div>
	);
}
