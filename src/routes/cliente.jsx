import { Component } from "react";
import { BrowserRouter, Routes , Route } from "react-router-dom";
import { AgregarCliente } from "../components/cliente/AgregarCliente";
import { Clientes} from "../components/cliente/MostrarClientes";
import Menu from "../components/Menu";
import { EditarCliente } from "../components/cliente/EditarCliente";


class Rutas extends Component{
    render(){
        return(
            <BrowserRouter>
                <Menu />
                <Routes>
                    <Route path="/" element={<div>HOME</div>} />
                    <Route path="/mostrarClientes" element={<Clientes />} />
                    <Route path="/agregarCliente" element={<AgregarCliente />} />
                    <Route path="/editarCliente/:id" element={<EditarCliente />} />
                </Routes>
            </BrowserRouter>
        );
    }
}

export {
    Rutas
}