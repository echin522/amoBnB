import React from 'react'

const Progress_bar = ({bgcolor, progress}) => {
	
	const progressContainer = {
		height: "4px",
		width: '30%',
		backgroundColor: 'whitesmoke',
		borderRadius: 1000,
	}
	
	const innerProgressBar = {
		height: '100%',
		width: `${progress}%`,
		backgroundColor: bgcolor,
	    borderRadius:40,
		textAlign: 'right'
	}
		
	return (
        <div style={progressContainer}>
            <div style={innerProgressBar}>
                {/* <p>{progress}</p> */}
            </div>
        </div>
	)
}

export default Progress_bar;
