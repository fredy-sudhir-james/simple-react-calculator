export default function ButtonsPanel({numberClick, operatorClick, calculateTotal, decimalClick, clearEverything, arithmeticSign}) {

	return(
		<div className="buttons-container">
			<div className="buttons-row">
				<button className="btn dark-grey" value="ac" onClick={clearEverything}>A/C</button>
				<button className="btn dark-grey" value="+-" onClick={arithmeticSign}>+/-</button>
				<button className="btn dark-grey" value="%" onClick={operatorClick}>%</button>
				<button className="btn orange" value="/" onClick={operatorClick}>/</button>
			</div>
			<div className="buttons-row">
				<button className="btn" value="7" onClick={numberClick}>7</button>
				<button className="btn" value="8" onClick={numberClick}>8</button>
				<button className="btn" value="9" onClick={numberClick}>9</button>
				<button className="btn orange" value="*" onClick={operatorClick}>x</button>
			</div>
			<div className="buttons-row">
				<button className="btn" value="4" onClick={numberClick}>4</button>
				<button className="btn" value="5" onClick={numberClick}>5</button>
				<button className="btn" value="6" onClick={numberClick}>6</button>
				<button className="btn orange" value="-" onClick={operatorClick}>-</button>
			</div>
			<div className="buttons-row">
				<button className="btn" value="1" onClick={numberClick}>1</button>
				<button className="btn" value="2" onClick={numberClick}>2</button>
				<button className="btn" value="3" onClick={numberClick}>3</button>
				<button className="btn orange" value="+" onClick={operatorClick}>+</button>
			</div>
			<div className="buttons-row">
				<button className="btn wide" value="0" onClick={numberClick}>0</button>
				<button className="btn" value="." onClick={decimalClick}>.</button>
				<button className="btn orange" value="=" onClick={calculateTotal}>=</button>
			</div>
		</div>
	)
}
