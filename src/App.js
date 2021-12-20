import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./Header.js";
import Filmes from "./Filmes.js";
import Sessoes from "./Sessoes.js";
import Assentos from "./Assentos.js";
import Sucesso from "./Sucesso.js";

function App() {
  
  return (
        <BrowserRouter>
            <Header/>
            <Routes>
                <Route 
                  path="/" 
                  element={<Filmes/>}>
                </Route>
                <Route 
                  path="/sessoes/:idFilme" 
                  element={<Sessoes />}>
                </Route>
                <Route 
                  path="/assentos/:idSessao" 
                  element={<Assentos />}>
                </Route>
                <Route 
                  path="/sucesso" 
                  element={<Sucesso />}>
                </Route>
            </Routes>
        </BrowserRouter>
  )
}

export default App;