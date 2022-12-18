import axios from "axios";
import React, { Component } from "react";
import { Navigate } from "react-router-dom";

class EditarMensaje extends Component {
    path = null;
    url = [];
    mensajeId = null

    titulo = React.createRef();
    descripcion = React.createRef();

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
                    mensaje: res.data.data
                })
                console.log(res.data.data);
            })
            .catch(error => {

                console.log(error);

            })
    }

    editarMensaje = (e) => {
        e.preventDefault();
        console.log(this.titulo.current.value);
        console.log(this.descripcion.current.value);
        var mensaje = {
            titulo: this.titulo.current.value,
            descripcion: this.descripcion.current.value
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
            return <Navigate to="/mostrarMensajes" />
        }
        return (
            <React.Fragment>
                <h1>Editar Mensaje</h1>
                <form onSubmit={this.editarMensaje}>
                    <div className="mb-3">
                        <label for="titulo" className="form-label">Titulo</label>
                        <input type="text" className="form-control" id="titulo" placeholder="Digite el titulo del mensaje" defaultValue={this.state.mensaje.titulo} ref={this.titulo} />
                    </div>
                    <div className="mb-3">
                        <label for="descripcion" className="form-label">Descripcion</label>
                        <input type="text" className="form-control" id="descripcion" aria-describedby="emailHelp" placeholder="Digite la descripcion del mensaje" defaultValue={this.state.mensaje.descripcion} ref={this.descripcion} />
                    </div>
                    <input type="submit" className="btn btn-primary" />
                </form>
            </React.Fragment>
        );
    }
}

export default EditarMensaje;