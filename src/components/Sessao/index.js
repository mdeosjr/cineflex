import { Link } from 'react-router-dom'
import './style.css';

function Sessao({diaSemana, data, sessoes}) {
    return (
        <div className="sessao">
            <span className="dias">{diaSemana} - {data}</span>
            <div className="horarios">
                {sessoes.map(horas => 
                    <Link to={`/assentos/${horas.id}`} key={horas.id}>
                        <div className="hora">{horas.name}</div>
                    </Link>)
                }
            </div>
        </div>
  );
}

export default Sessao;