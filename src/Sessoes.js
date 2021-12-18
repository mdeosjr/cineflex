import axios from "axios";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react"
import Sessao from "./Sessao.js";
import "./Sessoes.css";


function Sessoes() {
    const { idFilme } = useParams();
    const [sessao, setSessao] = useState([]);
    const [rodape, setRodape] = useState();

    useEffect(() => {
        const promessa = axios.get(`https://mock-api.driven.com.br/api/v4/cineflex/movies/${idFilme}/showtimes`)

        promessa.then(resposta => {
            setRodape(resposta.data)
            setSessao(resposta.data.days);
        })
    }, []);

    return (
        <>
            <span className="titulo">Selecione o horário</span>
            <div className="sessoes">
                {sessao.map(info => <Sessao diaSemana={info.weekday} data={info.date} sessoes={info.showtimes} key={info.id}/>)}
            </div>
            {(!rodape) ? <span>Carregando...</span> 
            : 
            <footer className="descricaoFilme">
                <div className="borda">
                    <img src={rodape.posterURL} alt={rodape.title}></img>
                </div>
                <p>{rodape.title}</p>
            </footer>
            } 
        </>
    )
}

export default Sessoes;