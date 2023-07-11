import React, { useState, useEffect } from 'react';
import './App.css'; 

function Animals() {
  const [animals, setAnimals] = useState([]);

  useEffect(() => {
    fetch('http://127.0.0.1:5000/animals')
      .then(response => response.json())
      .then(data => setAnimals(data))
      .catch(error => console.log(error));
  }, []);

  return (
    <div className="animals-container"> 
      {animals.map(animal => (
        <div key={animal.id} className="animal">
          <h2>{animal.name}</h2>
          <p>ID: {animal.id}</p>
          <p>Gender: {animal.gender}</p>
          <img src={animal.image} alt={animal.name} />
          <p>Description: {animal.description}</p>
        </div>
      ))}
    </div>
  );
}

export default Animals;
