import { Component } from "react";
import { BrowserRouter, Routes , Route } from "react-router-dom";
import AgregarUsuario from "../components/AgregarUsuario";
import Usuarios from "../components/Usuarios";
import Menu from "../components/Menu";
import EditarUsuario from "../components/EditarUsuario";


class Rutas extends Component{
    render(){
        return(
            <BrowserRouter>
                <Menu />
                <Routes>
                    <Route path="/" element={<div>HOME</div>} />
                    <Route path="/usuarios" element={<Usuarios />} />
                    <Route path="/agregarUsuario" element={<AgregarUsuario />} />
                    <Route path="/editarUsuario/:id" element={<EditarUsuario />} />
                </Routes>
            </BrowserRouter>
        );
    }
}

export {
    Rutas
}