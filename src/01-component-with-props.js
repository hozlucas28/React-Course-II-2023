/* --------------------------------------------------------------------------
 * APUNTES:
 * 		   Las funciones puras son aquellas que siempre me retornan los
 * 		   mismo, mientras que las impuras no aseguran un retorno, como lo
 * 		   seria una API que puede llegar a fallar y no retornar nada.
-------------------------------------------------------------------------- */

const MyComponent = ({ myProp }) => {
	return <div>{myProp}</div>;
};

const App = () => {
	return <MyComponent myProp="¡Hola Mundo!" />;
};

export default App;
