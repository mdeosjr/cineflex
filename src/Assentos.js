import axios from "axios";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import "./Assentos.css";

function Assentos() {
    const { idSessao } = useParams();
    const [assentos, setAssentos] = useState([]);
    const [rodape, setRodape] = useState();

    useEffect(() => {
        const promessa = axios.get(`https://mock-api.driven.com.br/api/v4/cineflex/showtimes/${idSessao}/seats`)

        promessa.then(resposta => {
            setRodape(resposta.data)
            setAssentos(resposta.data.seats);
        })
    }, []);
    console.log(rodape);

    return (
        <>
            <span className="titulo">Selecione o(s) assento(s)</span>
            <div className="assentos">
                {assentos.map(assento => <div className="assento">{assento.name}</div>)}
            </div>
            <div className="legenda">
                <div className="selecionado"></div>
                <div className="disponivel"></div>
                <div className="indisponivel"></div>
            </div>
            {(!rodape) ? <span>Carregando...</span> 
            : 
            <div className="descricaoFilme">
                <div className="borda">
                    <img src={rodape.movie.posterURL} alt={rodape.movie.title}></img>
                </div>
                <div className="infos">
                    <p>{rodape.movie.title}</p>
                    <p>{rodape.day.weekday} - {rodape.day.date}</p>
                </div>
            </div>
            } 
        </>
    )
}

export default Assentos;