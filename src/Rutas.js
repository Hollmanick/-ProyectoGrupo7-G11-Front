import React, { Component } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Alquileres from "./componentes/Alquileres/Alquileres";
import AgregarAlquiler from "./componentes/Alquileres/AgregarAlquiler";
import EditarAlquiler from "./componentes/Alquileres/EditarAlquiler";
import Autos from "./componentes/Autos/Autos";
import AgregarAuto from "./componentes/Autos/AgregarAuto";
import EditarAuto from "./componentes/Autos/EditarAuto";
import Categorias from "./componentes/Categorias/Categorias";
import AgregarCategoria from "./componentes/Categorias/AgregarCategoria";
import EditarCategoria from "./componentes/Categorias/EditarCategoria";
import Clientes from "./componentes/Clientes/Clientes";
import AgregarCliente from "./componentes/Clientes/AgregarCliente";
import EditarCliente from "./componentes/Clientes/EditarCliente";
import Mensajes from "./componentes/Mensajes/Mensajes";
import AgregarMensaje from "./componentes/Mensajes/AgregarMensaje";
import EditarMensaje from "./componentes/Mensajes/EditarMensaje";
import Scores from "./componentes/Scores/Scores";
import AgregarScore from "./componentes/Scores/AgregarScore";
import EditarScore from "./componentes/Scores/EditarScore";
import Menu from "./componentes/Menu";

class Rutas extends Component {
    render() {
        return (
            <BrowserRouter>
                <Menu />
                <Routes>
                    <Route path="/" element={<div>GRUPO7-G11</div>} />
                    <Route path="/mostrarAlquileres" element={<Alquileres />} />
                    <Route path="/agregarAlquiler" element={<AgregarAlquiler />} />
                    <Route path="/editarAlquiler/:id" element={<EditarAlquiler />} />
                    <Route path="/mostrarAutos" element={<Autos />} />
                    <Route path="/agregarAuto" element={<AgregarAuto />} />
                    <Route path="/editarAuto/:id" element={<EditarAuto />} />
                    <Route path="/mostrarCategorias" element={<Categorias />} />
                    <Route path="/agregarCategoria" element={<AgregarCategoria />} />
                    <Route path="/editarCategoria/:id" element={<EditarCategoria />} />
                    <Route path="/mostrarClientes" element={<Clientes />} />
                    <Route path="/agregarCliente" element={<AgregarCliente />} />
                    <Route path="/editarCliente/:id" element={<EditarCliente />} />
                    <Route path="/mostrarMensajes" element={<Mensajes />} />
                    <Route path="/agregarMensaje" element={<AgregarMensaje />} />
                    <Route path="/editarMensaje/:id" element={<EditarMensaje />} />
                    <Route path="/mostrarScores" element={<Scores />} />
                    <Route path="/agregarScore" element={<AgregarScore />} />
                    <Route path="/editarScore/:id" element={<EditarScore />} />
                </Routes>
            </BrowserRouter>
        );
    }
}

export default Rutas;