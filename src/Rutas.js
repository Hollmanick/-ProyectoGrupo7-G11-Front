import React, { Component } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Alquileres from "./componentes/Alquileres/Alquileres";
import AgregarAlquiler from "./componentes/Alquileres/AgregarAlquiler";
import EditarAlquiler from "./componentes/Alquileres/EditarAlquiler";
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
                </Routes>
            </BrowserRouter>
        );
    }
}

export default Rutas;