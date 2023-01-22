/* --------------------------------------------------------------------------
 * IMPORTANTE:
 *  			  - <useEffect()> = Se ejecuta cada vez que las dependencias,
 * 									pasadas a través del arreglo, han sido
 * 									modificadas. Si el arreglo se encuentra
 * 									vacío, se ejecutara una única vez.
-------------------------------------------------------------------------- */

import { useState, useEffect, Component } from 'react';

// Hook del tipo <useState>
const useCounter = (start) => {
	const [counter, setCounter] = useState(start);

	const increase = () => {
		setCounter(counter + 1);
	};

	return [counter, increase];
};

// Componente de clase
class Interval extends Component {
	interval = '';

	componentDidMount() {
		this.interval = setInterval(() => console.log(this.props.counter), 1000);
	}

	componentWillUnmount() {
		clearInterval(this.interval);
	}

	render() {
		return <p>Intervalo</p>;
	}
}

// Componente de funcional
// const Interval = ({ counter }) => {
// 	useEffect(() => {
// 		const i = setInterval(() => console.log(counter), 1000);
// 		return () => clearInterval(i); // Se desuscribe el intervalo cuando la dependencia cambia.
// 	}, [counter]);

// 	return <p>Intervalo</p>;
// };

// Aplicación funcional
const App = () => {
	const [counter, increase] = useCounter(0);

	useEffect(() => {
		document.title = counter;
	}, [counter]);

	return (
		<div>
			Contador: {counter}
			<button onClick={increase}>Incrementar</button>
			<Interval counter={counter} />
		</div>
	);
};

export default App;
