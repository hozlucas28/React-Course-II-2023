import { useReducer, useState } from 'react';

const start = { counter: 0 };

const reducer = (state, action) => {
	switch (action.type.toUpperCase()) {
		case 'INCREASE':
			return { counter: state.counter + 1 };
			break;

		case 'DECREASE':
			return { counter: state.counter - 1 };
			break;

		case 'SET':
			return { counter: action.payload };
			break;

		default:
			return state;
			break;
	}
};

const App = () => {
	const [state, dispatch] = useReducer(reducer, start);
	const [value, setValue] = useState(0);

	return (
		<div>
			Contador: {state.counter}
			<input
				type="number"
				value={value}
				onChange={(e) => setValue(e.target.value)}
			/>
			<button onClick={() => dispatch({ type: 'Increase' })}>Más</button>
			<button onClick={() => dispatch({ type: 'Decrease' })}>Menos</button>
			<button onClick={() => dispatch({ type: 'Set', payload: value })}>
				Set
			</button>
		</div>
	);
};

export default App;
