import React, { useState, useEffect } from 'react';
import Loading from './components/Loading';
import Tours from './components/Tours';
import data from './data';
import './App.css';

// const url = 'https://course-api.netlify.app/api/react-tours-project';

function App() {
  const [loading, setLoading] = useState(true);
  const [tours, setTours] = useState([]);

  const fetchTours = async () => {
    setLoading(true);
    const response = await fetch(data);
    const tours = await response.json();
    console.log(tours);
  };

  useEffect(() => {
    fetchTours();
  }, []);

  if (loading) {
    return (
      <main>
        <Loading />
      </main>
    );
  }
  return (
    <main>
      <Tours />
    </main>
  );
}

export default App;
