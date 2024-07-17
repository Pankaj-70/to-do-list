import React from "react";

export default function Layout(props) {
	return (
		<div>
			<div className="container text-center">
				<div className="row">
					<div className="col">
						<input
							type="text"
							placeholder="Task..."
							value={props.task}
							onChange={props.handleTaskChange}
						/>
					</div>
					<div className="col">
						<input
							type="date"
							value={props.date}
							onChange={props.handleDateChange}
						/>
					</div>
					<div className="col">
						<button className="btn btn-success" onClick={props.performAction}>
							ADD
						</button>
					</div>
				</div>
			</div>
		</div>
	);
}
