import React from "react";

export const ProgressBar = (props) => {
	const { value } = props;
	const containerStyles = {
		height: 8,
		width: '100%',
		backgroundColor: "#D2D2D2",
		borderRadius: "10px",
	};

	const fillerStyles = {
		height: '100%',
		width: `${value}%`,
		backgroundColor: "#4640DE",
		borderRadius: 'inherit',
		textAlign: 'right'
	};


	return (
		<div style={containerStyles}>
			<div style={fillerStyles}>
			</div>
		</div>
	);
};
