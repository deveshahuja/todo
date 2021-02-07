let lastId = 0;
const reducer = (state = [], action) => {
	if (action.type === "ADD_TODO") {
		return [
			...state,
			{
				id: ++lastId,
				content: action.payload.content,
				done: false,
			},
		];
	} else if (action.type === "DELETE") {
		return [...state.filter((todo) => action.payload.id !== todo.id)];
	} else if (action.type === "DONE") {
		return [
			...state.map((todo) => {
				if (action.payload.id === todo.id) todo.done = !todo.done;
				return todo;
			}),
		];
	} else return state;
};
export default reducer;
