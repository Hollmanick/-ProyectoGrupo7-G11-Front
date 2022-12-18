import axios from "axios";
import React, { Component } from "react";
import { Navigate } from "react-router-dom";

class EditarMensaje extends Component {
    path = null;
    url = [];
    mensajeId = null

    fechaEntrega = React.createRef();
    fechaDevolucion = React.createRef();
    estatus = React.createRef();

    state = {
        mensaje: {},
        status: null
    }

    componentWillMount() {
        this.path = window.location.pathname;
        console.log(this.path);
        this.url = this.path.split("/");
        console.log(this.url);
        this.mensajeId = this.url[2];
        console.log(this.mensajeId);
        this.mostrarMensaje(this.mensajeId);
    }

    mostrarMensaje = (id) => {
        axios.get("http://localhost:3000/api/mostrarMensaje/" + id)
            .then(res => {
                this.setState({
                    mensaje: res.data.mensaje
                })
                console.log(res.data.mensaje);
            })
            .catch(error => {

                console.log(error);

            })
    }

    editarMensaje = (e) => {
        e.preventDefault();
        console.log(this.fechaEntrega.current.value);
        console.log(this.fechaDevolucion.current.value);
        console.log(this.estatus.current.value);
        var mensaje = {
            fechaEntrega: this.fechaEntrega.current.value,
            fechaDevolucion: this.fechaDevolucion.current.value,
            estatus: this.estatus.current.value
        }

        axios.put("http://localhost:3000/api/editarMensaje/" + this.mensajeId, mensaje)
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
            return <Navigate to="/Mensajes" />
        }
        return (
            <React.Fragment>
                <h1>Editar Mensaje</h1>
                <form onSubmit={this.editarMensaje}>
                    <div className="mb-3">
                        <label for="fechaEntrega" className="form-label">Fecha_Entrega</label>
                        <input type="datetime-local" className="form-control" id="fechaEntrega" placeholder="Digite su fecha de entrega en formato: 2022-09-09T00:00:00" defaultValue={this.state.mensaje.fechaEntrega} ref={this.fechaEntrega} />
                    </div>
                    <div className="mb-3">
                        <label for="fechaDevolucion" className="form-label">Fecha_Devolucion</label>
                        <input type="datetime-local" className="form-control" id="fechaDevolucion" placeholder="Digite su fecha de devolucion en formato: 2022-09-09T00:00:00" defaultValue={this.state.mensaje.fechaDevolucion} ref={this.fechaDevolucion} />
                    </div>
                    <div className="mb-3">
                        <label for="estatus" className="form-label">Estatus</label>
                        <input type="text" className="form-control" id="estatus" aria-describedby="emailHelp" placeholder="Completo o Cancelado" defaultValue={this.state.mensaje.estatus} ref={this.estatus} />
                    </div>
                    <input type="submit" className="btn btn-primary" />
                </form>
            </React.Fragment>
        );
    }
}

export default EditarMensaje;