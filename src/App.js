import React from 'react';
import './App.css';
import {MyHeader} from "./components/header";
import {Subtitle} from "./components/subtitle";
import {ImgMediaCard} from "./components/card";

function App() {
  return (
    <div className="App">
     <MyHeader />
     <Subtitle/>
     <ImgMediaCard title="title" description="loremdsadasdsadasda"/>
    </div>
  );
}

export default App;
