import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import swal from "sweetalert";

class Clientes extends Component {
    state = {
        clientes: []
    }

    componentWillMount() {
        this.mostrarClientes();
    }

    mostrarClientes = () => {
        axios.get("http://localhost:3000/api/mostrarClientes")
            .then(res => {
                console.log("Clientes");
                console.log(res.data.doc);
                this.setState({
                    clientes: res.data.doc
                });
            })
            .catch(error => {
                console.log(error);
            })
    }

    eliminarCliente = (id) => {
        axios.delete("http://localhost:3000/api/eliminarCliente/" + id)
            .then(res => {
                this.setState({
                    status: "delete"
                });

                //window.location.reload(true);

                swal(
                    "Cliente Eliminado",
                    "El Cliente se Elimino Correctamente",
                    "success"
                )
            })
    }
    render() {
        console.log(this.state.clientes);
        return (
            <React.Fragment>
                <h1>Clientes</h1>
                <Link to="/agregarCliente" className="btn btn-dark">Agregar Cliente</Link>
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
                            this.state.clientes.map((cliente) => {
                                return (
                                    <React.Fragment>
                                        <tr>
                                            <td>{cliente._id}</td>
                                            <td>{cliente.fechaEntrega}</td>
                                            <td>{cliente.fechaDevolucion}</td>
                                            <td>{cliente.estatus}</td>
                                            <td>
                                                <Link to={"/editarCliente/" + cliente._id} className="btn btn-success">Editar</Link>
                                                <button className="btn btn-danger ms-3" onClick={
                                                    () => {
                                                        this.eliminarCliente(cliente._id)
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

export default Clientes;