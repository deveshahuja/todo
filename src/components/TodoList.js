import React from "react";
import { connect } from "react-redux";
import { done, deleteTodo } from "../actionCreators";
const TodoList = (props) => {
	return (
		<ul style={{ listStyleType: "none" }}>
			{props.todos.map((todo, index) => (
				<li key={index}>
					<input type="checkbox" name="done" checked={todo.done} onClick={() => props.dispatch(done(todo.id))}></input>
					{todo.content}
					<button onClick={() => props.dispatch(deleteTodo(todo.id))}>delete</button>
				</li>
			))}
		</ul>
	);
};
const mapStateToProps = (state) => ({ todos: state });
export default connect(mapStateToProps)(TodoList);
