import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import swal from "sweetalert";
import { Navigate } from "react-router-dom";

class Autos extends Component {
    state = {
        autos: [],
        status: null
    }

    componentWillMount() {
        this.mostrarAutos();
    }

    mostrarAutos = () => {
        axios.get("http://localhost:3000/api/mostrarAutos")
            .then(res => {
                console.log("Autos");
                console.log(res.data.data);
                this.setState({
                    autos: res.data.data
                });
            })
            .catch(error => {
                console.log(error);
            })
    }

    eliminarAuto = (id) => {
        axios.delete("http://localhost:3000/api/eliminarAuto/" + id)
            .then(res => {
                this.setState({
                    status: "delete"
                });

                //window.location.reload(true);

                swal(
                    "Auto Eliminado",
                    "El Auto se Elimino Correctamente",
                    "success"
                )
            })
    }
    render() {
        // if (this.state.status === "delete") {
        //     return <Navigate to="/mostrarAutos" />
        // }                        
        console.log(this.state.autos);
        return (
            <React.Fragment>
                <h1>Autos</h1>
                <Link to="/agregarAuto" className="btn btn-dark">Agregar Auto</Link>
                <table className="table">
                    <thead>
                        <tr>
                            <td>Id</td>
                            <td>Nombre</td>
                            <td>Marca</td>
                            <td>Año</td>
                            <td>Descripcion</td>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.autos.map((auto) => {
                                return (
                                    <React.Fragment>
                                        <tr>
                                            <td>{auto._id}</td>
                                            <td>{auto.nombre}</td>
                                            <td>{auto.marca}</td>
                                            <td>{auto.ahno}</td>
                                            <td>{auto.descripcion}</td>
                                            <td>
                                                <Link to={"/editarAuto/" + auto._id} className="btn btn-success">Editar</Link>
                                                <button className="btn btn-danger ms-3" onClick={
                                                    () => {
                                                        this.eliminarAuto(auto._id)                                                        
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

export default Autos;