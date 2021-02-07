export const addTodo = (content) => ({
	type: "ADD_TODO",
	payload: {
		content,
	},
});
export const deleteTodo = (id) => ({
	type: "DELETE",
	payload: {
		id,
	},
});
export const complete = (id) => ({
	type: "COMPLETE",
	payload: {
		id,
	},
});
export const done = (id) => ({
	type: "DONE",
	payload: {
		id,
	},
});
