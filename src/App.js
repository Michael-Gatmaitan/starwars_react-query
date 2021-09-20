import React from 'react';

// Components
import Nav from './components/Nav';
import Planets from './components/Planets';
import MoreInfo from './components/MoreInfo';

function App() {

  return (
    <div className="appBody">

      <Nav />
      <Planets />

      <MoreInfo />
      
    </div>
  );
}

export default App;
