import { animals } from './animals';
import React from 'react';
import ReactDOM from 'react-dom';

const title = '';

const background = (
  <img className="background" alt="ocean" src="/images/ocean.jpg" />
);

const showBackground = true;

let images = [];
for(let animal in animals){
  images.push(<img 
  key={animal} 
  className="animal" 
  alt={animal} 
  src={animals[animal].image} 
  aria-label={animal} 
  role="button" 
  onClick={displayFact}/>)
}

function displayFact(e) {
  let randomIndex = Math.floor(Math.random() * animals[e.target.alt].facts.length);
  let randomFact = animals[e.target.alt].facts[randomIndex];
  document.getElementById("fact").innerHTML = randomFact;
}

const animalFacts = (
  <div>
    <h1>{title === '' ?  'Click an animal for a fun fact' : title}</h1>
    {showBackground && background }
    <div className="animals">
    {images}
    </div>
    <p id="fact"></p>
  </div>
);

ReactDOM.render(animalFacts, document.getElementById('root'));
