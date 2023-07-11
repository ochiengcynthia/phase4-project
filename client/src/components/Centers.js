import React, { useState, useEffect } from 'react';

function Centers() {
  const [centers, setCenters] = useState(null);

  useEffect(() => {
    fetch('http://127.0.0.1:5000/centers')
      .then(response => response.json())
      .then(data => setCenters(data))
      .catch(error => console.log(error));
  }, []);

  return (
    <div>
      {centers && centers.map(center => (
        <div key={center.id}>
          <h2>{center.name}</h2>
          <p>ID: {center.id}</p>
          <p>Location: {center.location}</p>
        </div>
      ))}
    </div>
  );
}

export default Centers;
