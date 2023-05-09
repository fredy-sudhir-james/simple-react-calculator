import { create, all } from 'mathjs'

const config = { }
const math = create(all, config)

export function calculate(state) {
	let display;
	if ( ! state.display && ! state.next ) {
		return state
	}

	display     = state.display ? ( state.next ? state.display + state.next :  state.display ) : state.next ? state.next : 0
	const total = math.evaluate(display)
	return {display: null, next: total, operation: null, prevDisplay: display };
}

export function insertNumber( state, number ) {
	let dis  = null

	// Condition for initial state and the number is 0, do nothing.
	if ( ! state.next && number === '0' ) {
		return state
	} else { // Update the next text.
		dis = state.next ? state.next + number : number;
	}

	return {...state, next: dis, operation: null}
}

export function insertDecimal( state ) {
	// Return state if decimal is the last button clicked or the next number has decimal
	if ( state.next.indexOf('.') > -1 ) {
		return state;
	}

	let newNext
	// When current is empty, meaning when a number button is not clicked yet.
	if ( ! state.next ) {
		newNext = '0.'
	} else {
		newNext = state.next + '.'
	}
	return { ...state, next: newNext, operation: null }
}

export function insertOperator( state, operator ) {
	// Do nothing if the first key press if an operator.
	if ( ! state.display && ! state.next ) {
		return state
	}
	let display
	if ( state.next ) {
		display = state.display ? state.display + state.next : state.next
	} else {
		display = state.display
	}

	// If the previous click was an operator.
	if ( state.operation ) {
		display = display.slice(0, -1) + operator
	} else {
		display = display + operator
	}

	//when an operator is click
	return { ...state, operation: operator, next: null, display }
}

export function insertSign( state ) {
	if ( ! state.next ) {
		return state
	}

	let newNext = state.next * -1

	return { ...state, next: newNext }
}
