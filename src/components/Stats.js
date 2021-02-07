import React from "react";
import { connect } from "react-redux";
const Stats = (props) => {
	let doneCount = props.todos.filter((todo) => todo.done).length;
	let remCount = props.todos.filter((todo) => !todo.done).length;
	return (
		<div>
			<h3>done: {doneCount}</h3>
			<h3>remaining: {remCount}</h3>
		</div>
	);
};
const mapStateToProps = (state) => ({ todos: state });
export default connect(mapStateToProps)(Stats);
