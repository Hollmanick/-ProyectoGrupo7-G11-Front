import axios from "axios";
import swal from "sweetalert";
import { baseUrl } from "../Url";
import { Link } from "react-router-dom";
import React, { Component } from "react";
import { Navigate } from "react-router-dom";

class Mensajes extends Component {
    state = {
        mensajes: [],
        status: null
    }

    componentWillMount() {
        this.mostrarMensajes();
    }

    mostrarMensajes = () => {
        axios.get(`${baseUrl}/mostrarMensajes`)
            .then(res => {
                console.log("Mensajes");
                console.log(res.data.data);
                this.setState({
                    mensajes: res.data.data
                });
            })
            .catch(error => {
                console.log(error);
            })
    }

    eliminarMensaje = (id) => {
        axios.delete(`${baseUrl}/eliminarMensaje/${id}`)
            .then(res => {
                this.setState({
                    status: "delete"
                });               

                swal(
                    "Mensaje Eliminado",
                    "El Mensaje se Elimino Correctamente",
                    "success"                    
                )

                // window.location.reload(true)
            })
    }
    render() {                     
        console.log(this.state.mensajes);
        return (
            <React.Fragment>
                <h1>Listado de Mensajes</h1>
                <br />
                <Link to="/agregarMensaje" className="btn btn-outline-dark btn-lg p-10 mb-5">Agregar Mensaje</Link>
                <table className="table">
                    <thead>
                        <tr>
                            <td>Id</td>
                            <td>Titulo</td>
                            <td>Descripcion</td>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.mensajes.map((mensaje) => {
                                return (
                                    <React.Fragment>
                                        <tr>
                                            <td>{mensaje._id}</td>
                                            <td>{mensaje.titulo}</td>
                                            <td>{mensaje.descripcion}</td>
                                            <td>
                                                <Link to={"/editarMensaje/" + mensaje._id} className="btn btn-success">Editar</Link>
                                                <button className="btn btn-danger ms-3" onClick={
                                                    () => {
                                                        this.eliminarMensaje(mensaje._id)
                                                    }
                                                }>
                                                    Eliminar
                                                </button>
                                            </td>
                                        </tr>
                                    </React.Fragment>
                                )
                            })
                        }
                    </tbody>
                </table>
            </React.Fragment>
        );
    }
}

export default Mensajes;