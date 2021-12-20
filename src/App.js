import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Filmes from "./components/Filmes";
import Sessoes from "./components/Sessoes";
import Assentos from "./components/Assentos";
import Sucesso from "./components/Sucesso";

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