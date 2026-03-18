import "./App.css";
import { useState } from "react";
import AnimalShow from "./AnimalShow";

function getRandomeAnimal() {
  const animals = ["bird", "cat", "cow", "dog", "gator", "horse"];

  return animals[Math.floor(Math.random() * animals.length)];
}

function App() {
  //const [count, setCount] = useState(0);
  const [animals, setAnimals] = useState([]);

  const handleClick = () => {
    //setCount(count+5);
    setAnimals([...animals, getRandomeAnimal()]);
  };

  const renderedAnimals = animals.map((animal, index) => {
    return <AnimalShow type={animal} key={index} />;
  });

  return (
    <div className="app">
      <button onClick={handleClick}>Add Animal</button>
      <div className="animal-list">{renderedAnimals}</div>
    </div>
  );

  //return <div><button onClick={() => console.log('Button clicked!')}>Add</button></div>
}

export default App;
