/* --------------------------------------------------------------------------
 * REGLAS DE LOS HOOKS:
 *
 * 	1° = No deben ser llamados en loops.
 * 	2° = Deben llamarse en un componente de React o en Hook personalizado.
 * 	3° = Deben ser llamados en el nivel más alto del componente, idealmente
 * 		 en la primer línea del mismo.
 * 	4° = Cuando creemos un Hook personalizado debe comenzar con <use...>.
-------------------------------------------------------------------------- */

import { useState } from 'react';

// Hook personalizado
const useCounter = (start) => {
	const [counter, setCounter] = useState(start);

	const increase = () => {
		setCounter(counter + 1);
	};

	return [counter, increase];
};

// Componente de clase
// class App extends Component {
// 	state = {
// 		counter: 0
// 	};

// 	increase = () => {
// 		this.setState({ counter: this.state.counter + 1 });
// 	};

// 	render() {
// 		return (
// 			<div>
// 				Contador: {this.state.counter}
// 				<button onClick={this.increase}>Incrementar</button>
// 			</div>
// 		);
// 	}
// }

// Componente funcional
const App = () => {
	const [counter, increase] = useCounter(0);

	return (
		<div>
			Contador: {counter}
			<button onClick={increase}>Incrementar</button>
		</div>
	);
};

export default App;
