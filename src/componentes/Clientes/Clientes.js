import axios from "axios";
import swal from "sweetalert";
import { baseUrl } from "../Url";
import { Link } from "react-router-dom";
import React, { Component } from "react";
// import { Navigate } from "react-router-dom";

class Clientes extends Component {
    state = {
        clientes: [],
        status: null
    }

    componentWillMount() {
        this.mostrarClientes();
    }

    mostrarClientes = () => {
        axios.get(`${baseUrl}/mostrarClientes`)
            .then(res => {
                console.log("Clientes");
                console.log(res.data.data);
                this.setState({
                    clientes: res.data.data
                });
            })
            .catch(error => {
                console.log(error);
            })
    }

    eliminarCliente = (id) => {
        axios.delete(`${baseUrl}/eliminarCliente/${id}`)
            .then(res => {
                this.setState({
                    status: "delete"
                });               

                swal(
                    "Cliente Eliminado",
                    "El Cliente se Elimino Correctamente",
                    "success"                    
                )

                // window.location.reload(true)
            })
    }
    render() {                    
        console.log(this.state.clientes);
        return (
            <React.Fragment>
                <h1>Listado de Clientes</h1>
                <br />
                <Link to="/agregarCliente" className="btn btn-outline-dark btn-lg p-10 mb-5">Agregar Cliente</Link>
                <table className="table">
                    <thead>
                        <tr>
                            <td>Imagen</td>
                            <td>Id</td>
                            <td>Correo</td>
                            <td>Nombre</td>
                            <td>Edad</td>
                            <td>Accion</td>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.clientes.map((cliente,i) => {
                                return (
                                    <React.Fragment>
                                        <tr key={i}>
                                            <img src={cliente.img} style={{"max-height": "50px", "max-width": "50px" }}/>
                                            <td>{cliente._id}</td>
                                            <td>{cliente.correo}</td>
                                            <td>{cliente.nombre}</td>
                                            <td>{cliente.edad}</td>
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