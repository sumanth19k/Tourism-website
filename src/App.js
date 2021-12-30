import React, { useState, useEffect } from "react";
import { data } from "./data";
import Loading from "./Loading";
import Tours from "./Tours";
// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN
// const url = "https://course-api.com/react-tours-project";
function App() {
  const [loading, setLoading] = useState(true);
  const [tours, setTours] = useState([]);
  const [admin, setAdmin] = useState(data);
  const removeTour = (id) => {
    const newTours = tours.filter((tour) => tour.id !== id);
    setAdmin(newTours);
  };
  const loadTour = () => {
    // const resp = await fetch(url);
    // const tour = await resp.json();
    setLoading(false);
    setTours(admin);
  };
  useEffect(() => {
    loadTour();
  });
  if (loading) {
    return (
      <main>
        <Loading />
      </main>
    );
  }
  if (tours.length === 0) {
    return (
      <main>
        <div className="title">
          <h2>No tours left</h2>
          <div className="underline"></div>
          <button className="btn" onClick={() => window.location.reload(false)}>
            Refresh
          </button>
        </div>
      </main>
    );
  }
  return (
    <main>
      <Tours tours={tours} removeTour={removeTour} />
    </main>
  );
}

export default App;
