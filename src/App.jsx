import React from "react";
import Input from "./components/Input";
import Heading from "./components/Heading";
import "./App.css";
import ToDoItems from "./components/ToDoItems";
import { useState } from "react";

export default function App() {
	return (
		<div className="container">
			<div className="container inside-container">
				<Heading></Heading>
				<Input></Input>
				<ToDoItems></ToDoItems>
			</div>
		</div>
	);
}
