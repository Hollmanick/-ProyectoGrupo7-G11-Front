import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import swal from "sweetalert";
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
        axios.get("http://localhost:3000/api/mostrarAlquileres")
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
        axios.delete("http://localhost:3000/api/eliminarAlquiler/" + id)
            .then(res => {
                this.setState({
                    status: "delete"
                });

                //window.location.reload(true);

                swal(
                    "Alquiler Eliminado",
                    "El Alquiler se Elimino Correctamente",
                    "success"
                )
            })
    }
    render() {
        // if (this.state.status === "delete") {
        //     return <Navigate to="/mostrarAlquileres" />
        // }                        
        console.log(this.state.alquileres);
        return (
            <React.Fragment>
                <h1>Alquileres</h1>
                <Link to="/agregarAlquiler" className="btn btn-dark">Agregar Alquiler</Link>
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
                            this.state.alquileres.map((alquiler) => {
                                return (
                                    <React.Fragment>
                                        <tr>
                                            <td>{alquiler._id}</td>
                                            <td>{alquiler.fechaEntrega}</td>
                                            <td>{alquiler.fechaDevolucion}</td>
                                            <td>{alquiler.estatus}</td>
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