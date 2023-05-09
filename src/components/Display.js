export default function Display({display, next, prevDisplay}) {
	let displayVal = 0;
	if ( display && next ) {
		displayVal = display + next
	} else if ( display && ! next ) {
		displayVal = display
	} else if ( ! display && next ) {
		displayVal = next
	}
	return(
		<div className="app-display">
			{
				prevDisplay &&
				<p className="app-display__previous">{prevDisplay}</p>
			}
			<p className="app-display__total">{displayVal}</p>
		</div>
	)
}
