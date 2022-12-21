import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import swal from "sweetalert";

class Mensajes extends Component {
    state = {
        mensajes: []
    }

    componentWillMount() {
        this.mostrarMensajes();
    }

    mostrarMensajes = () => {
        axios.get("http://localhost:3000/api/mostrarMensajes")
            .then(res => {
                console.log("Mensajes");
                console.log(res.data.doc);
                this.setState({
                    mensajes: res.data.doc
                });
            })
            .catch(error => {
                console.log(error);
            })
    }

    eliminarMensaje = (id) => {
        axios.delete("http://localhost:3000/api/eliminarMensaje/" + id)
            .then(res => {
                this.setState({
                    status: "delete"
                });

                //window.location.reload(true);

                swal(
                    "Mensaje Eliminado",
                    "El Mensaje se Elimino Correctamente",
                    "success"
                )
            })
    }
    render() {
        console.log(this.state.mensajes);
        return (
            <React.Fragment>
                <h1>Mensajes</h1>
                <Link to="/agregarMensaje" className="btn btn-dark">Agregar Mensaje</Link>
                <table className="table">
                    <thead>
                        <tr>
                            <td>Id</td>
                            <td>Fecha_Entrega</td>
                            <td>Fecha_Devolucion</td>
                            <td>Estatus</td>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.mensajes.map((mensaje) => {
                                return (
                                    <React.Fragment>
                                        <tr>
                                            <td>{mensaje._id}</td>
                                            <td>{mensaje.fechaEntrega}</td>
                                            <td>{mensaje.fechaDevolucion}</td>
                                            <td>{mensaje.estatus}</td>
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