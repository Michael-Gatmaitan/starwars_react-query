import React, { useState } from 'react';
import { usePaginatedQuery } from 'react-query';

const fetchPlanets = async (key, page) => {
  const res = await fetch(`https://swapi.dev/api/planets/?page=${page}`);
  return await res.json();
}

const Planets = () => {

  const [page, setPage] = useState(1);

  // fetching planets
  const {
    resolvedData, 
    latestData,
    status
  } = usePaginatedQuery(['planets', page], fetchPlanets);

  return (
    <div className="planets">
      {status === 'error' && <div>Error has occured...</div>}

      <div className="planets-block-container">
        {!status === 'loading' && resolvedData.results.map(planet => <Planet planet={planet} />)}
      </div>

      <button 
        onClick={() => { setPage(oldPage => oldPage + 1)}}
        disabled={!latestData || !latestData.next}
      >Next Page</button>
    </div>
  )
};

const Planet = ({ planet }) => {
  return (
    <div className="planet-block">
      <h3>{planet.name}</h3>
    </div>
  )
}

export default Planets;