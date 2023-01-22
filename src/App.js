/* --------------------------------------------------------------------------
 * IMPORTANTE:
 *  			  - <useRef> = Me permite referenciar el componente.
-------------------------------------------------------------------------- */

import { useRef } from 'react';

const App = () => {
	const ref = useRef();
	const inputRef = useRef();

	const onClick = () => {
		console.log(ref.current);
	};

	const focus = () => {
		inputRef.current.focus();
	};

	return (
		<div>
			<input ref={inputRef} />
			<button onClick={focus}>Focus</button>
			<div
				onClick={onClick}
				ref={ref}
			>
				¡Hola Mundo!
			</div>
		</div>
	);
};

export default App;
