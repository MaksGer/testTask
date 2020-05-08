import React, {useState} from 'react';
import {Box} from '@material-ui/core';
import {ReactComponent as SearchIcon} from '../images/stroke.svg';
import {ReactComponent as FiltersIcon} from '../images/filtersIcon.svg';
import {FiltersPopupList} from "./filtersPopupList";
import {useTheme} from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';


export function Subtitle() {
	const [isFiltersOpen, setFiltersOpen] = useState(false);
	const filtersCategories = ['Popular', 'Recent', 'Most funded'];
	let activeCategory = filtersCategories[0];

	const handleFiltersPopup = () => {
		setFiltersOpen(!isFiltersOpen);
	};

	const useMediaDown = (breakpoint) => {
		const theme = useTheme();
		return useMediaQuery(theme.breakpoints.down(breakpoint));
	};

	return (
		<Box className="subheader-wrapper">
			<Box className="subheader-container"
			     borderTop={{xs: null, sm: "1px solid #EAEAEA"}}
			     borderBottom={{xs: null, sm: "1px solid #EAEAEA"}}
			     flexDirection={{xs: "column", sm:"row"}}>
				<Box className="subtitle-input" width={{xs: "100%", sm: "455px"}}>
					<input placeholder="Search for projects" className="input"/>
					<Box>
						<SearchIcon className="search-icon"/>
					</Box>
				</Box>
				<Box mt={{xs: "16px", sm: null}} ml={{xs: null, sm: "11px"}}>
					<button className="filters-button" onClick={handleFiltersPopup}>
						<div>Filters</div>
						<div><FiltersIcon className="filters-icon"/></div>
					</button>
				</Box>
				<Box className="subtitle-categories" display={{xs: "none", sm: "flex"}}>
					{filtersCategories.map((item, index) => {
						return (
							<Box
								className={activeCategory === item ?
									"filters-categories-item active-item-color" : "filters-categories-item item-color"}
								key={index}>
								{item}
							</Box>
						)
					})}
				</Box>
			</Box>
			<Box display={isFiltersOpen ? "flex" : "none"} className="filters-list-container SF-font">
				<div className="filters-popup-wrapper">
					<Box display={{xs: "none", sm: "block"}}>
						<h5 className="filters-list-title">Categories</h5>
					</Box>
					<Box display={{xs: "flex", sm: "none"}} className="subtitle-categories" m={0} mr="auto" mb="26px">
						{filtersCategories.map((item, index) => {
							return (
								<Box
									className={activeCategory === item ?
										"filters-categories-item active-item-color" : "filters-categories-item item-color"}
									ml={0}
									mr="27px"
									key={index}>
									{item}
								</Box>
							)
						})}
					</Box>
					<Box display={{xs: "none", sm: "block"}}><FiltersPopupList/></Box>
					<Box className="subtitle-categories" display={{xs: "flex", sm: "none"}}>
						<ul className="filters-list">
							<li className="filters-list-item">
								<div className="filters-list-item-icon">
									<img src={require("../images/filters-icon/business.svg")} alt=""/>
								</div>
								<div className="filters-list-item-title">Business</div>
								<div className="filters-list-item-label">34</div>
							</li>
							<li className="filters-list-item">
								<div className="filters-list-item-icon">
									<img src={require("../images/filters-icon/community.svg")} alt=""/>
								</div>
								<div className="filters-list-item-title">Community</div>
								<div className="filters-list-item-label">32</div>
							</li>
							<li className="filters-list-item">
								<div className="filters-list-item-icon">
									<img src={require("../images/filters-icon/camera.svg")} alt=""/>
								</div>
								<div className="filters-list-item-title">Creative</div>
									<div className="filters-list-item-label">28</div>
							</li>
						</ul>
					</Box>
					<Box className="filters-submit-button" display={{xs: "none", sm: "block"}}>
						<button className="filters-button">Submit</button>
					</Box>
					<Box className="select" display={{xs: 'block', sm: 'none'}}>
						{/*<CustomizedSelects/>*/}
					</Box>
				</div>
			</Box>
		</Box>
	)
}
