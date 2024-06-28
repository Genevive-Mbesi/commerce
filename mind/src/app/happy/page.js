// /src/app/happy/page.js

import React from 'react';

// Fetch data directly in the component
const fetchEmotions = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/users');
  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }
  return res.json();
};

const Emotions = async () => {
  const emotions = await fetchEmotions();

  return (
    <div>
      How are you???
      {emotions.map((emotion) => (
        <div key={emotion.id}>
          <a>
            <h3>{emotion.name}</h3>
          </a>
        </div>
      ))}
    </div>
  );
};

export default Emotions;
