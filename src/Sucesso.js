import "./Sucesso.css";
import { Link, useLocation } from 'react-router-dom';

function Sucesso() {
    const {state} = useLocation();
    
    return (
        <div className="sucesso">
            <span className="titulo">Pedido feito <br/>com sucesso!</span>
            <div className="infosFinalizar">
                <div className="caixaInfo">
                    <h1 className="subtitulos">Filme e sessão</h1>
                    <p className="infoSucesso">{state.titulo}</p>
                    <p className="infoSucesso">{state.data} {state.hora}</p>
                </div>
                <div className="caixaInfo">
                    <h1 className="subtitulos">Ingressos</h1>
                    {state.numeroAssento.map(assento => 
                        <p key={assento} className="infoSucesso">Assento {assento}</p>
                    )}
                </div>
                <div className="caixaInfo">
                    <h1 className="subtitulos">Comprador</h1>
                    <p className="infoSucesso">Nome: {state.nome}</p>
                    <p className="infoSucesso">CPF: {state.CPF}</p>
                </div>
            </div>
            <Link to="/">
                <div className="reserva">
                    <span>Voltar pra Home</span>
                </div>
            </Link>
        </div>
    );
}

export default Sucesso;