import React, {useState} from 'react';
import { Box } from '@material-ui/core';
import { ReactComponent as Logo } from '../images/Boon.svg';
import { ReactComponent as PersonIcon } from '../images/Person.svg';


export function MyHeader() {
	const tabs = ['Raise money for..', 'Take a tour', 'Pricing', 'Projects', 'Categories'];
	const [isMenuOpen, setMenuOpen] = useState(false);

	const handleMenu = () => {
		console.log('click');
		setMenuOpen(!isMenuOpen);
	};
	return(

		<Box className="header-container SF-font" flexDirection={{xs: "row-reverse", sm: "row"}}>
				<Box className="logo-wrapper">
					<Logo />
					<div className="logo-figures">
						<div className="logo-figures-part top-left"></div>
						<div className="logo-figures-part top-right"></div>
						<div className="logo-figures-part bottom-left"></div>
						<div className="logo-figures-part bottom-right"></div>
					</div>
				</Box>
			<Box className="header-tabs-container" display={{xs: 'none', sm: 'flex'}}>
				{tabs.map((item, index) => {
					return (<Box ml={{sm: "15px", md: "40px"}} className="header-tab" key={index}>
						{item}
					</Box>
					)
				})}
			</Box>
			<Box className="icon" ml={{xs: null, sm: "auto"}} mr={{xs: "auto", sm: null}}>
				<Box onClick={handleMenu}>
					<Box className="header-person-icon" display={{xs: 'none', sm:'flex'}}><PersonIcon/></Box>
					<Box className="burger" display={{xs: 'block', sm: 'none'}} >
						<div className={isMenuOpen ? "burger-line burger-line-left" : "burger-line"}></div>
						<div className={isMenuOpen ? "burger-line burger-line-right" : "burger-line"}></div>
					</Box>
				</Box>
			</Box>
			<Box display={isMenuOpen ? "flex" : "none"}
			     className="menu-list-container"
			     width={{xs: "100%", sm: "276px"}}
			     right={{xs: "0", sm: "5%"}}
			     top={{xs: "100%", sm: "110%"}}>
				<Box className="user-info" px={{xs: "18px", sm: "25px"}}>
					<div className="user-name">Username</div>
					<div className="user-email">example@mail.com</div>
				</Box>
				<div className="menu-list-wrapper">
					<Box px={{xs: "18px", sm: "25px"}}>
					<ul className="menu-list">
						<li className="menu-item">Favourite projects <span className="menu-item-label">21</span></li>
						<li className="menu-item">Profile settings</li>
						<li className="menu-item">Profile settings</li>
					</ul>
				</Box>
				</div>
					<div className="menu-logout">Logout</div>
			</Box>
		</Box>
	)
}
