import { Link } from 'react-router-dom'
import "./style.css";

function Filme({posterURL, title, id}) {
  return (
      <>
        <Link to={`/sessoes/${id}`}>
            <div className="filme">
                <img src={posterURL} alt={title}></img>
            </div>
        </Link>
      </>
  );
}

export default Filme;