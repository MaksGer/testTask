import React from 'react';
import { Box } from '@material-ui/core';
import { ReactComponent as Logo } from '../images/Boon.svg';
import { ReactComponent as PersonIcon } from '../images/Person.svg';


export function MyHeader() {
	const tabs = ['Raise money for..', 'Take a tour', 'Pricing', 'Projects', 'Category'];
	return(

		<Box className="header-row-container header-container SF-font">
				<Box >
					<Logo />
				</Box>
			<Box className="header-tabs-container">
				{tabs.map((item, index) => {
					return (<Box ml="40px" className="header-tab" key={index}>
						{item}
					</Box>
					)
				})}
			</Box>
			<Box className="header-person-icon">
				<Box><PersonIcon/></Box>
			</Box>
		</Box>
	)
}
