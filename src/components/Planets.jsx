import React, { useState } from "react";
import { useQuery } from "react-query";
import "./styles/Planets.css";

// components
import Planet from './Planet';

const fetchPlanets = async (page = 0) => {
  const res = await fetch(`https://swapi.dev/api/planets/?page=${page}`);
  return await res.json();
};

const Planets = () => {
  const [page, setPage] = useState(1);
  const [planetInfo, setPlanetInfo] = useState({});

  // fetching planets
  let { isLoading, isError, data, isPreviousData } = useQuery(
    ["planets", page],
    () => fetchPlanets(page),
    { keepPreviousData: true }
  );

  console.log(data);

  const LoadingComponent = () => (
    <div className="loading-planets">
      <div className="loading-container">
        <div className="circ-1 circ"></div>
        <div className="circ-2 circ"></div>
        <div className="circ-3 circ"></div>
        <div className="circ-4 circ"></div>
      </div>

      <div className="loading-text">Planets loading...</div>
    </div>
  )

  return (
    <div className='planets'>
      {isError && <div>Error has occured...</div>}

      <div className='planet-block-container'>
        <PageButtons
          isLoading={isLoading}
          setPage={setPage}
          isPreviousData={isPreviousData}
          data={data}
        />

        <div className='planet-block-wrapper'>
          {isLoading ? <LoadingComponent /> :
            data.results.map((planet) => (
              <Planet
                key={planet.name}
                planet={planet}
                setPlanetInfo={setPlanetInfo}
              />
            ))}
        </div> 

        <PageButtons
          isLoading={isLoading}
          setPage={setPage}
          isPreviousData={isPreviousData}
          data={data}
        />
      </div>

      <PlanetInfoBlock planetInfo={planetInfo} />
    </div>
  );
};

const PageButtons = ({ isLoading, setPage, isPreviousData, data }) => {
  return (
    <div
      className='button-container'
      style={{ display: isLoading ? "none" : "flex" }}
    >
      <button
        onClick={() => {
          setPage((oldPage) => oldPage - 1);
        }}
        disabled={isPreviousData || !data?.previous}
      >
        Prev
      </button>

      <button
        onClick={() => {
          setPage((oldPage) => oldPage + 1);
        }}
        disabled={isPreviousData || !data?.next}
      >
        Next
      </button>
    </div>
  );
};

const PlanetInfoBlock = ({ planetInfo }) => {

  if (!planetInfo.name) return (
    <div className="click-planets">Click the Planets for more Information.</div>
  );

  return (
    <div className="planet-info-container">
      <div className="header">{planetInfo.name}</div>

      <div className="planet-sub-info">

        <StyledSpan spanTitle={"Rotation Period:"} spanValue={ planetInfo.rotation_period }/>

        <StyledSpan spanTitle={"Orbital Period:"} spanValue={ planetInfo.orbital_period }/>

        <StyledSpan spanTitle={"Population:"} spanValue={ planetInfo.population }/>

        <StyledSpan spanTitle={"Diameter:"} spanValue={ planetInfo.diameter }/>

        <StyledSpan spanTitle={"Climate:"} spanValue={ planetInfo.climate }/>

        <StyledSpan spanTitle={"Terrain:"} spanValue={ planetInfo.terrain }/>

        <StyledSpan spanTitle={"Surface Water:"} spanValue={ planetInfo.surface_water }/>

      </div>
    </div>
  );
};

const StyledSpan = ({ spanTitle, spanValue }) => (
  <div className="styled-span"> 
    <div className="span-title">{spanTitle}</div>
    <div className="span-title blacked">{spanValue}</div>
  </div>
)
export default Planets;
