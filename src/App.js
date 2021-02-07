import InputTodo from "./components/InputTodo";
import TodoList from "./components/TodoList";
import Stats from "./components/Stats";
function App() {
	return (
		<div>
			<h1>TODO</h1>
			<Stats />
			<InputTodo />
			<TodoList />
		</div>
	);
}

export default App;
