import { Link } from 'react-router-dom';
import './styles/Nav.css';

const Nav = () => {
  return (
    <nav>
      <div className="logo">
        <span className="star-wars">Star Wars</span> from swapi.dev
      </div>

      <div className="button-container">

        <Link to="/planets">
          <button>
            Planets
          </button>
        </Link>
        
        <Link to="/planets">
          <button>
            Works
          </button>
        </Link>

        <Link to="/planets">
          <button>
            Contact
          </button>
        </Link>

      </div>
    </nav>
  )
}

export default Nav;