import React, { useState, useEffect } from 'react';
import './App.css';

function Animals() {
  const [animals, setAnimals] = useState([]);
  const [selectedAnimal, setSelectedAnimal] = useState(null);
  const [updatedFields, setUpdatedFields] = useState({});

  useEffect(() => {
    fetchAnimals();
  }, []);

  const fetchAnimals = () => {
    fetch('http://127.0.0.1:5000/animals')
      .then(response => response.json())
      .then(data => setAnimals(data))
      .catch(error => console.log(error));
  };

  const deleteAnimal = (animal_Id) => {
    fetch(`http://127.0.0.1:5000/animals/${animal_Id}`, {
      method: 'DELETE'
    })
      .then(response => {
        if (response.ok) {
          fetchAnimals();
        } else {
          throw new Error('Failed to delete animal');
        }
      })
      .catch(error => console.error(error))
  };

  const showUpdateForm = (animal) => {
    setSelectedAnimal(animal);
    setUpdatedFields(animal);
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setUpdatedFields(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const updateAnimal = () => {
    fetch(`http://127.0.0.1:5000/animals/${selectedAnimal.id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(updatedFields)
    })
      .then(response => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error('Failed to update animal');
        }
      })
      .then(updatedAnimalData => {
        const updatedAnimalList = animals.map(animal => {
          if (animal.id === updatedAnimalData.id) {
            return updatedAnimalData;
          } else {
            return animal;
          }
        });

        setAnimals(updatedAnimalList);
        setSelectedAnimal(null);
        setUpdatedFields({});
      })
      .catch(error => console.error(error));
  };

  const toggleDescription = (animalId) => {
    setAnimals(prevAnimals => {
      return prevAnimals.map(animal => {
        if (animal.id === animalId) {
          return {
            ...animal,
            isDescriptionVisible: !animal.isDescriptionVisible
          };
        }
        return animal;
      });
    });
  };

  return (
    <div className="animals-container">
      {animals.map(animal => (
        <div key={animal.id} className="animal">
          <h2>{animal.name}</h2>
          <p>Gender: {animal.gender}</p>
          <img src={animal.image} alt={animal.name} />
          {selectedAnimal && selectedAnimal.id === animal.id ? (
            <div>
              <input type="text" name="name" value={updatedFields.name || ''} onChange={handleInputChange} />
              <input type="text" name="gender" value={updatedFields.gender || ''} onChange={handleInputChange} />
              {/* <input type="image" alt="image" name="image" value={updatedFields.image || ''} onChange={handleInputChange} /> */}
              <input type="text" name="description" value={updatedFields.description || ''} onChange={handleInputChange} />
              <button onClick={updateAnimal}>Update</button>
            </div>
          ) : (
            <div>
              {animal.isDescriptionVisible ? (
                <div>
                  <p>Description: {animal.description}</p>
                  <button className="button-hide-description" onClick={() => toggleDescription(animal.id)}>Hide Description</button>
                </div>
              ) : (
                <div>
                  <button className="button-show-description" onClick={() => toggleDescription(animal.id)}>Show Description</button>
                </div>
              )}
              <button onClick={() => deleteAnimal(animal.id)}>Delete Animal</button>
              <button onClick={() => showUpdateForm(animal)}>Update Animal</button>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

export default Animals;