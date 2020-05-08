import React from 'react';

// This component needs refactor and should be rewritten with map function. But I hadn't enough time to solve problem
// with webpack's function "require" for path to images.

export function FiltersPopupList() {
	return (
		<ul className="filters-list">
			<li className="filters-list-item">
				<div className="filters-list-item-icon">
					<img src={require("../images/filters-icon/business.svg")} alt=""/>
				</div>
				<div className="filters-list-item-title">Business</div>
			</li>
			<li className="filters-list-item">
				<div className="filters-list-item-icon">
					<img src={require("../images/filters-icon/community.svg")} alt=""/>
				</div>
				<div className="filters-list-item-title">Community</div>
			</li>
			<li className="filters-list-item">
				<div className="filters-list-item-icon">
					<img src={require("../images/filters-icon/camera.svg")} alt=""/>
				</div>
				<div className="filters-list-item-title">Creative</div>
			</li>
			<li className="filters-list-item">
				<div className="filters-list-item-icon">
					<img src={require("../images/filters-icon/competition.svg")} alt=""/>
				</div>
				<div className="filters-list-item-title">Competition</div>
			</li>
			<li className="filters-list-item">
				<div className="filters-list-item-icon">
					<img src={require("../images/filters-icon/event.svg")} alt=""/>
				</div>
				<div className="filters-list-item-title">Event</div>
			</li>
			<li className="filters-list-item">
				<div className="filters-list-item-icon">
					<img src={require("../images/filters-icon/faith.svg")} alt=""/>
				</div>
				<div className="filters-list-item-title">Faith</div>
			</li>
			<li className="filters-list-item">
				<div className="filters-list-item-icon">
					<img src={require("../images/filters-icon/wedding.svg")} alt=""/>
				</div>
				<div className="filters-list-item-title">Newlywed</div>
			</li>
			<li className="filters-list-item">
				<div className="filters-list-item-icon">
					<img src={require("../images/filters-icon/sport.svg")} alt=""/>
				</div>
				<div className="filters-list-item-title">Sports</div>
			</li>
			<li className="filters-list-item">
				<div className="filters-list-item-icon">
					<img src={require("../images/filters-icon/wishes.svg")} alt=""/>
				</div>
				<div className="filters-list-item-title">Wishes</div>
			</li>
			<li className="filters-list-item">
				<div className="filters-list-item-icon">
					<img src={require("../images/filters-icon/memorial.svg")} alt=""/>
				</div>
				<div className="filters-list-item-title">Memorial</div>
			</li>
			<li className="filters-list-item">
				<div className="filters-list-item-icon">
					<img src={require("../images/filters-icon/home.svg")} alt=""/>
				</div>
				<div className="filters-list-item-title">Family</div>
			</li>
			<li className="filters-list-item">
				<div className="filters-list-item-icon">
					<img src={require("../images/filters-icon/traveling.svg")} alt=""/>
				</div>
				<div className="filters-list-item-title">Travel</div>
			</li>
			<li className="filters-list-item">
				<div className="filters-list-item-icon">
					<img src={require("../images/filters-icon/gift.svg")} alt=""/>
				</div>
				<div className="filters-list-item-title">Volunteer</div>
			</li>
			<li className="filters-list-item">
				<div className="filters-list-item-icon">
					<img src={require("../images/filters-icon/computer.svg")} alt=""/>
				</div>
				<div className="filters-list-item-title">Education</div>
			</li>
			<li className="filters-list-item">
				<div className="filters-list-item-icon">
					<img src={require("../images/filters-icon/nonprofit.svg")} alt=""/>
				</div>
				<div className="filters-list-item-title">Nonprofit</div>
			</li>
			<li className="filters-list-item">
				<div className="filters-list-item-icon">
					<img src={require("../images/filters-icon/animals.svg")} alt=""/>
				</div>
				<div className="filters-list-item-title">Animals</div>
			</li>
			<li className="filters-list-item">
				<div className="filters-list-item-icon">
					<img src={require("../images/filters-icon/medicine.svg")} alt=""/>
				</div>
				<div className="filters-list-item-title">Medical</div>
			</li>
			<li className="filters-list-item">
				<div className="filters-list-item-icon">
					<img src={require("../images/filters-icon/emergency.svg")} alt=""/>
				</div>
				<div className="filters-list-item-title">Emergency</div>
			</li>
		</ul>

	)
}
