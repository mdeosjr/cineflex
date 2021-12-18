import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./Header.js";
import Filmes from "./Filmes.js";
import Sessoes from "./Sessoes.js";

function App() {
  return (
    <>
        <Header/>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Filmes/>}></Route>
                <Route path="/sessoes/:idFilme" element={<Sessoes/>}></Route>
                {/* <Route path="/assentos" element={<Assentos/>}></Route> */}
            </Routes>
        </BrowserRouter>
    </>
  )
}

export default App;