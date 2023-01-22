/* --------------------------------------------------------------------------
 * APUNTES:
 * 		   En este archivo se demuestra un caso de uso del junto <useState>
 * 		   con <useReducer>.
 *
 *
 * IMPORTANTE:
 *  			  - <useReducer> = Se trata de un <useState> que recibe una
 * 								   función que ejecuta la lógica y un estado
 * 								   inicial, se utiliza cuando la lógica a
 * 								   ejecutar es compleja para usar <useState>.
-------------------------------------------------------------------------- */

import { useState, useReducer } from 'react';

const start = { counter: 0 };

const reducer = (state, action) => {
	switch (action.type.toUpperCase()) {
		case 'INCREASE':
			return { counter: state.counter + 1 };

		case 'DECREASE':
			return { counter: state.counter - 1 };

		case 'SET':
			return { counter: action.payload };

		default:
			return state;
	}
};

const App = () => {
	const [value, setValue] = useState(0);
	const [state, dispatch] = useReducer(reducer, start);

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
