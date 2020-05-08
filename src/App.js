import React from 'react';
import './App.css';
import {MyHeader} from "./components/header";
import {Subtitle} from "./components/subtitle";
import {ImgMediaCard} from "./components/card";
import {cardData} from "./data/cardData.js"

function App() {
	const img = [
		require("./images/card1.png"),
		require("./images/card2.png"),
		require("./images/card3.png"),
		require("./images/card4.png"),
		require("./images/card5.png"),
		require("./images/card6.png")
	];

	return (
		<div className="App">
			<div className="header-shadow">
				<MyHeader/>
			</div>
			<div className="container">
				<Subtitle/>
				<div className="container-list">
					{cardData.map((item, index) => {
						return (
							<ImgMediaCard data={item} key={index} link={img[index]}/>
						)
					})}
				</div>
				<div className="modal">
				</div>
			</div>
		</div>
	);
}

export default App;
