import "./Sucesso.css";
import loading from "./assets/loading.gif";

function Sucesso({rodapeAssentos}) {
    if (rodapeAssentos.length === 0) {
        return (
            <img className="loading" src={loading} alt="Carregando..."></img> 
        )
    }

    return (
        <div className="sucesso">
            <h1 className="subtitulos">Filme e sessão</h1>
                <p className="infoSucesso">{rodapeAssentos.movie.title}</p>
                <p className="infoSucesso">{rodapeAssentos.day.weekday} {rodapeAssentos.day.date}</p>
            <h1 className="subtitulos">Ingressos</h1>
            <h1 className="subtitulos">Comprador</h1>
        </div>
    );
}

export default Sucesso;