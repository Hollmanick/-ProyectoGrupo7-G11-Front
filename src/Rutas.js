import React, { Component } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
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
                    <Route path="/mostrarScores" element={<Scores />} />
                    <Route path="/agregarScore" element={<AgregarScore />} />
                    <Route path="/editarScore/:id" element={<EditarScore />} />
                </Routes>
            </BrowserRouter>
        );
    }
}

export default Rutas;