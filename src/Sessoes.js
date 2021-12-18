import axios from "axios";
import { useParams } from "react-router-dom";

function Sessoes() {
    const {idFilme} = useParams();
    const promessa = axios.get(`https://mock-api.driven.com.br/api/v4/cineflex/movies/${idFilme}/showtimes`)
    promessa.then(resposta => console.log(resposta.data.days))

    return (
        <>
            <h2 className="titulo">Selecione o horário</h2>
            <div className="sessoes">
                <div className="sessao">
                </div>
            </div>
        </>
    )
}

export default Sessoes;