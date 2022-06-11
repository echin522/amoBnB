import React from 'react'

const Progress_bar = ({bgcolor, progress}) => {
	
	let progressNumber;
	let innerProgress;
	console.log(progress)
	if (typeof progress !== "undefined") {
		innerProgress = 0;
		progressNumber = "-";
	} else if (typeof progress === "string") {
		innerProgress = progress;
		progressNumber = parseFloat(progress).toFixed(1);
	}
		

	const progressContainer = {
		height: "4px",
		width: '30%',
		backgroundColor: 'whitesmoke',
		borderRadius: 1000,
	}
	
	const innerProgressBar = {
		height: '100%',
		width: `${(innerProgress / 5) * 100}%`,
		backgroundColor: bgcolor,
	    borderRadius:40,
		textAlign: 'right'
	}

	return (
		<>
			<div className='progress-bar' style={progressContainer}>
				<div style={innerProgressBar}>
				</div>
			</div>
			<p className='progress-number'>{progressNumber}</p>
		</>
	)
}

export default Progress_bar;
