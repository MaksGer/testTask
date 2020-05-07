import React from 'react';
import { Box } from '@material-ui/core';
import { ReactComponent as SearchIcon } from '../images/stroke.svg';
import { ReactComponent as FiltersIcon } from '../images/filtersIcon.svg';

export function Subtitle() {
	const filtersCategories = ['Popular', 'Recent', 'Most funded'];
	let activeCategory = filtersCategories[0];
	function setActiveLink(index) {
		console.log(index);
		// activeCategory = filtersCategory[index];
	};

	return(
		<Box className="header-row-container subheader-container">
			<Box className="subtitle-input">
				<input placeholder="Search for projects" className="input" />
				<Box>
					<SearchIcon className="search-icon"/>
				</Box>
			</Box>
				<button className="filters-button">
					<div>Filters</div>
					<div><FiltersIcon className="filters-icon"/></div>
				</button>
			<Box className="subtitle-categories">
				{filtersCategories.map((item, index) => {
					return (
						<div
							className={activeCategory === item ?
								"filters-categories-item active-item-color" : "filters-categories-item item-color"}
							key={index}
							onClick={setActiveLink(index)}>
							{item}
						</div>
					)
				})}
			</Box>
		</Box>
	)
}
