import axios from "axios";
import React, { Component } from "react";
import { Navigate } from "react-router-dom";

class EditarAlquiler extends Component {
    path = null;
    url = [];
    alquilerId = null

    fechaEntrega = React.createRef();
    fechaDevolucion = React.createRef();
    estatus = React.createRef();

    state = {
        alquiler: {},
        status: null
    }

    componentWillMount() {
        this.path = window.location.pathname;
        console.log(this.path);
        this.url = this.path.split("/");
        console.log(this.url);
        this.alquilerId = this.url[2];
        console.log(this.alquilerId);
        this.mostrarAlquiler(this.alquilerId);
    }

    mostrarAlquiler = (id) => {
        axios.get("http://localhost:3000/api/mostrarAlquiler/" + id)
            .then(res => {
                this.setState({
                    alquiler: res.data.data
                })
                console.log(res.data.data);
            })
            .catch(error => {

                console.log(error);

            })
    }

    editarAlquiler = (e) => {
        e.preventDefault();
        console.log(this.fechaEntrega.current.value);
        console.log(this.fechaDevolucion.current.value);
        console.log(this.estatus.current.value);
        var alquiler = {
            fechaEntrega: this.fechaEntrega.current.value,
            fechaDevolucion: this.fechaDevolucion.current.value,
            estatus: this.estatus.current.value
        }

        axios.put("http://localhost:3000/api/editarAlquiler/" + this.alquilerId, alquiler)
            .then(res => {
                this.setState({
                    status: "success",
                })
            })
            .catch(function (error) {
                console.log(error)
            })
    }
    render() {
        if (this.state.status === "success") {
            return <Navigate to="/mostrarAlquileres" />
        }
        return (
            <React.Fragment>
                <h1>Editar Alquiler</h1>
                <form onSubmit={this.editarAlquiler}>
                    <div className="mb-3">
                        <label for="fechaEntrega" className="form-label">Fecha Entrega</label>
                        <input type="datetime-local" className="form-control" id="fechaEntrega" placeholder="Digite su fecha de entrega en formato: 2022-09-09T00:00:00" defaultValue={this.state.alquiler.fechaEntrega} ref={this.fechaEntrega} />
                    </div>
                    <div className="mb-3">
                        <label for="fechaDevolucion" className="form-label">Fecha Devolucion</label>
                        <input type="datetime-local" className="form-control" id="fechaDevolucion" placeholder="Digite su fecha de devolucion en formato: 2022-09-09T00:00:00" defaultValue={this.state.alquiler.fechaDevolucion} ref={this.fechaDevolucion} />
                    </div>
                    <div className="mb-3">
                        <label for="estatus" className="form-label">Estatus</label>
                        <input type="text" className="form-control" id="estatus" aria-describedby="emailHelp" placeholder="Digite el estatus del alquiler (Completo o Cancelado)" defaultValue={this.state.alquiler.estatus} ref={this.estatus} />
                    </div>
                    <input type="submit" className="btn btn-outline-info btn-lg p-10 mb-5" />
                </form>
            </React.Fragment>
        );
    }
}

export default EditarAlquiler;