import { Link } from 'react-router-dom';
import './style.css';

function Header() {
  return (
    <Link to={`/`}>
      <header className="header">
          <h1>CINEFLEX</h1>
      </header>
    </Link> 
  )
}

export default Header;