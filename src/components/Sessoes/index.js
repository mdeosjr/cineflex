import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react"
import Sessao from "../Sessao";
import loading from "../../assets/loading.gif";
import botaoVoltar from "../../assets/turn.png";
import "./style.css";

function Sessoes() {
    const { idFilme } = useParams();
    const [sessao, setSessao] = useState([]);
    const [rodapeSessoes, setRodapeSessoes] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        const promessa = axios.get(`https://mock-api.driven.com.br/api/v4/cineflex/movies/${idFilme}/showtimes`)

        promessa.then(resposta => {
            setRodapeSessoes(resposta.data)
            setSessao(resposta.data.days);
        })
    }, []);

    if (sessao.length === 0) {
        return (
            <img className="loading" src={loading} alt="Carregando..."></img> 
        )
    }

    return (
        <>
            <button className="botaoVoltar" onClick={() => navigate(-1)} alt="Voltar">Voltar</button>
            <div className="sessoes">
                <span className="titulo">Selecione o horário</span>
                {sessao.map(info => 
                    <Sessao 
                        diaSemana={info.weekday} 
                        data={info.date} 
                        sessoes={info.showtimes} 
                        key={info.id} 
                    />
                )}
            </div>
            <footer className="descricaoFilme">
                <div className="borda">
                    <img src={rodapeSessoes.posterURL} alt={rodapeSessoes.title}></img>
                </div>
                <p>{rodapeSessoes.title}</p>
            </footer>
        </>
    )
}

export default Sessoes;