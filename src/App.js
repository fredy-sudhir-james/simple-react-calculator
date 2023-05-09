import { useState } from 'react';
import Display from './components/Display';
import ButtonsPanel from './components/ButtonsPanel';
import {calculate, insertNumber, insertDecimal, insertOperator, insertSign} from './helper/calculate';
import './App.css';

function App() {
	const [state, setState] = useState({
		display: null,
		prevDisplay: null,
		next: null,
		operation: null,
	});

	console.log( 'State ', state);

	const handleNumbers = ( number ) => {
		setState(insertNumber(state, number.target.value))
	}

	const handleOperations = ( operator ) => {
		setState(insertOperator(state, operator.target.value))
	}

	const handleTotal = () => {
		setState(calculate(state))
	}

	const handleDecimal = () => {
		setState(insertDecimal(state))
	}

	const handleSign = () => {
		setState(insertSign(state))
	}

	const handleClear = () => {
		setState( {
			display: null,
			prevDisplay: null,
			next: null,
			operation: null,
		} )
	}

	return (
		<div className='app-component'>
			<Display display={state.display} next={state.next} prevDisplay={state.prevDisplay}/>
			<ButtonsPanel numberClick={handleNumbers} operatorClick={handleOperations} calculateTotal={handleTotal} decimalClick={handleDecimal} clearEverything={handleClear} arithmeticSign={handleSign}/>
		</div>
	);
}

export default App;
