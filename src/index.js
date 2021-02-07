import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";

import { Provider } from "react-redux";
import store from "./store";
import { addTodo } from "./actionCreators";

// const unsubscribe = store.subscribe(() => {
// 	console.log(store.getState());
// });

// store.dispatch(addTodo("new new new"));

// unsubscribe();

ReactDOM.render(
	<React.StrictMode>
		<Provider store={store}>
			<App />
		</Provider>
	</React.StrictMode>,
	document.getElementById("root")
);
