import React, { useState, useEffect } from 'react';

function Adoptions() {
  const [adoptions, setAdoptions] = useState([]);

  useEffect(() => {
    fetch(' http://127.0.0.1:5555/adoptions')
      .then(response => response.json())
      .then(data => setAdoptions(data))
      .catch(error => console.log(error));
  }, []);

  return (
    <div>
      {adoptions.map(adoption => (
        <div key={adoption.id}>
          <h2>Adoption ID: {adoption.id}</h2>
          <p>Adopter ID: {adoption.adopter_id}</p>
          <p>Animal ID: {adoption.animal_id}</p>
        </div>
      ))}
    </div>
  );
}

export default Adoptions;
