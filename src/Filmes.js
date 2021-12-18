import { useState, useEffect } from 'react'
import axios from 'axios'

import Filme from './Filme.js';
import "./Filmes.css";

function Filmes() {
    const [filmes, setFilmes] = useState([]);

    useEffect(() => {
        const promessa = axios.get("https://mock-api.driven.com.br/api/v4/cineflex/movies");

        promessa.then(resposta => {
            setFilmes(resposta.data);
        })
    }, []);

    return (
    <>
        <div className="filmes">
            <span className="titulo">Selecione o filme</span>
            <div className="listaFilmes">
                {filmes.map(filme => <Filme posterURL={filme.posterURL} title={filme.title} id={filme.id} key={filme.overview}/>)}
            </div>
        </div>
    </>
  );
}

export default Filmes;