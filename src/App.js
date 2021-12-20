import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import Header from "./Header.js";
import Filmes from "./Filmes.js";
import Sessoes from "./Sessoes.js";
import Assentos from "./Assentos.js";
import Sucesso from "./Sucesso.js";

function App() {
  const [rodapeSessoes, setRodapeSessoes] = useState([]);
  const [rodapeAssentos, setRodapeAssentos] = useState([]);

  return (
        <BrowserRouter>
            <Header/>
            <Routes>
                <Route path="/" element={<Filmes/>}></Route>
                <Route 
                  path="/sessoes/:idFilme" 
                  element={<Sessoes 
                    rodapeSessoes={rodapeSessoes} 
                    setRodapeSessoes={setRodapeSessoes}
                    />}>
                </Route>
                <Route 
                  path="/assentos/:idSessao" 
                  element={<Assentos 
                    rodapeAssentos={rodapeAssentos} 
                    setRodapeAssentos={setRodapeAssentos}
                    />}>
                </Route>
                <Route 
                  path="/sucesso" 
                  element={<Sucesso
                    rodapeAssentos={rodapeAssentos}
                    setRodapeAssentos={setRodapeAssentos}
                    />}>
                </Route>
            </Routes>
        </BrowserRouter>
  )
}

export default App;