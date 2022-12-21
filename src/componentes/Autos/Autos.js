import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import swal from "sweetalert";

class Autos extends Component {
    state = {
        autos: []
    }

    componentWillMount() {
        this.mostrarAutos();
    }

    mostrarAutos = () => {
        axios.get("http://localhost:3000/api/mostrarAutos")
            .then(res => {
                console.log("Autos");
                console.log(res.data.doc);
                this.setState({
                    autos: res.data.doc
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
        console.log(this.state.autos);
        return (
            <React.Fragment>
                <h1>Autos</h1>
                <Link to="/agregarAuto" className="btn btn-dark">Agregar Auto</Link>
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
                            this.state.autos.map((auto) => {
                                return (
                                    <React.Fragment>
                                        <tr>
                                            <td>{auto._id}</td>
                                            <td>{auto.fechaEntrega}</td>
                                            <td>{auto.fechaDevolucion}</td>
                                            <td>{auto.estatus}</td>
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