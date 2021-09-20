
const Planet = ({ planet, setPlanetInfo }) => {
  return (
    <div className='planet-block' onClick={ () => setPlanetInfo(planet) }>
      <div className='planet-name'>{planet.name}</div>
      <div className='planet-climate'>Climate: {planet.climate}</div>
      <div className='planet-population'>Population: {planet.population}</div>
    </div>
  );
};

export default Planet;