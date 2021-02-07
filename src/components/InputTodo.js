import React from "react";
import { connect } from "react-redux";
import { addTodo } from "../actionCreators";

const InputTodo = (props) => {
	return (
		<form
			onSubmit={(event) => {
				event.preventDefault();
				props.dispatch(addTodo(event.target.content.value));
				event.target.content.value = "";
			}}
		>
			<input type="text" name="content" />
			<button>add</button>
		</form>
	);
};

export default connect()(InputTodo);
