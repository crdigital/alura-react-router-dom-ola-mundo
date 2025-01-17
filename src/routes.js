import { BrowserRouter, Routes, Route } from "react-router-dom";
import PaginaPadrao from "componentes/PaginaPadrao";
import Inicio from "./paginas/Inicio";
import SobreMim from "./paginas/Sobremim";
import NaoEncontrada from "paginas/NaoEncontrada";
import { Menu } from "./componentes/Menu";
import { Rodape } from "componentes/Rodape";
import Post from "paginas/Post";

function AppRoutes() {
  return (
    <BrowserRouter>

      <Menu />

      <Routes>
        <Route path='/' element={<PaginaPadrao />}>
          <Route
            index
            element={<Inicio />}
          />
          <Route 
            path="sobremim"
            element={<SobreMim/>}
          />
        </Route>  

        <Route 
            path="posts/:id"
            element={<Post />}
        />      

        <Route 
            path="*"
            element={<NaoEncontrada />}
          />
      </Routes>

      <Rodape />
    </BrowserRouter>
  )
}

export default AppRoutes;
