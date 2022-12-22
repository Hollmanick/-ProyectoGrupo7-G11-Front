import axios from "axios";
import swal from "sweetalert";
import { baseUrl } from "../Url";
import { Link } from "react-router-dom";
import React, { Component } from "react";
import { Navigate } from "react-router-dom";

class Alquileres extends Component {
    state = {
        alquileres: [],
        status: null
    }

    componentWillMount() {
        this.mostrarAlquileres();
    }

    mostrarAlquileres = () => {
        axios.get(`${baseUrl}/mostrarAlquileres`)
            .then(res => {
                console.log("Alquileres");
                console.log(res.data.data);
                this.setState({
                    alquileres: res.data.data
                });
            })
            .catch(error => {
                console.log(error);
            })
    }

    eliminarAlquiler = (id) => {
        axios.delete(`${baseUrl}/eliminarAlquiler/${id}`)
            .then(res => {
                this.setState({
                    status: "delete"
                }); 
                
                swal(
                    "Alquiler Eliminado",
                    "El Alquiler se Elimino Correctamente",
                    "success"                                                
                )

                // if (this.state.status === "delete") {
                //     swal(
                //         "Alquiler Editado",
                //         "El Alquiler se Elimino Correctamente",
                //         "success"                                                
                //     )
                //     return <Navigate to="/mostrarAlquileres" />
                // }
                
                // window.location.reload(true)
            })
    }

    render() {                             
        console.log(this.state.alquileres);
        return (
            <React.Fragment>
                <h1>Listado de Alquileres</h1>
                <br />
                <Link to="/agregarAlquiler" className="btn btn-outline-dark btn-lg p-10 mb-5">Agregar Alquiler</Link>
                <table className="table">
                    <thead>
                        <tr>
                            <td>Id</td>
                            <td>Fecha Entrega</td>
                            <td>Fecha Devolucion</td>
                            <td>Status</td>
                            <td>Accion</td>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.alquileres.map((alquiler) => {
                                return (
                                    <React.Fragment>
                                        <tr>
                                            <td>{alquiler._id}</td>
                                            <td>{alquiler.fechaEntrega}</td>
                                            <td>{alquiler.fechaDevolucion}</td>
                                            <td>{alquiler.status}</td>
                                            <td>
                                                <Link to={"/editarAlquiler/" + alquiler._id} className="btn btn-success">Editar</Link>
                                                <button className="btn btn-danger ms-3" onClick={
                                                    () => {
                                                        this.eliminarAlquiler(alquiler._id)                                                        
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

export default Alquileres;