import axios from "axios";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import Assento from "./Assento.js";
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

    return (
        <>
        <div className="telaAssentos">
            <span className="titulo">Selecione o(s) assento(s)</span>
            <div className="assentos">
                <Assento idSessao={idSessao} assentos={assentos}/>
            </div>
            <div className="legenda">
                <div className="caixaAssento">                                                                                                      
                    <div className="assento selecionado"></div>
                    <span>Selecionado</span>
                </div>
                <div className="caixaAssento">
                    <div className="assento true"></div>
                    <span>Disponível</span>
                </div>
                <div className="caixaAssento">
                    <div className="assento false"></div>
                    <span>Indisponível</span>
                </div>
            </div>
            <div className="infosClientes">
                <span className="tituloInput">Nome do comprador:</span>
                <input placeholder="Digite seu nome..."></input>
                <span className="tituloInput">CPF do comprador:</span>
                <input placeholder="Digite seu CPF..."></input>
            </div>
            <div className="reserva">
                <span>Reservar assento(s)</span>
            </div>
        </div>
            {(!rodape) ? <span>Carregando...</span> 
            : 
            <footer className="descricaoFilme">
                <div className="borda">
                    <img src={rodape.movie.posterURL} alt={rodape.movie.title}></img>
                </div>
                <div className="infos">
                    <p>{rodape.movie.title}</p>
                    <p>{rodape.day.weekday} - {rodape.day.date}</p>
                </div>
            </footer>
            } 
        </>
    )
}

export default Assentos;