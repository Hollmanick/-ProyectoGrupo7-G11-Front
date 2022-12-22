import axios from "axios";
import swal from "sweetalert";
import { baseUrl } from "../Url";
import { Link } from "react-router-dom";
import React, { Component } from "react";
import { Navigate } from "react-router-dom";
import AgregarAlquiler from '../Alquileres/AgregarAlquiler'

class Autos extends Component {
    state = {
        autos: [],
        status: null
    }

    componentWillMount() {
        this.mostrarAutos();
    }

    mostrarAutos = () => {
        axios.get(`${baseUrl}/mostrarAutos`)
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
        axios.delete(`${baseUrl}/eliminarAuto/${id}`)
            .then(res => {
                this.setState({
                    status: "delete"
                });               

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
                <h1>Listado de Autos</h1>
                <br />
                <Link to="/agregarAuto" className="btn btn-outline-dark btn-lg p-10 mb-5">Agregar Auto</Link>
                <section class="wrapper">
                    <div class="container">
                        <div class="row row-cols-1 row-cols-md-3 g-4">
                            {
                                this.state.autos.map((auto,i) => {
                                    return (
                                        <React.Fragment>
                                            <div class="col">
                                                <div class="card btn btn-outline-dark h-100 mb-3">
                                                    <div class="text-center">
                                                        <img src={auto.img} class="card-img-top rounded" style={{"max-height": "360px", "max-width": "300px" }}/>
                                                    </div>
                                                    <div class="card-body">
                                                        <h5 class="card-title text-truncate">{auto.nombre}</h5>
                                                        <p class="card-text text-truncate">{auto.descripcion}</p>
                                                        <p class="card-text text-truncate"><small class="text-muted">{auto.marca}</small></p>
                                                        <Link to={"/editarAuto/" + auto._id} className="btn btn-success">Editar</Link>
                                                        <button className="btn btn-danger my-3" onClick={
                                                            () => {
                                                                this.eliminarCliente(auto._id)                                                        
                                                            }
                                                        }>
                                                            Eliminar
                                                        </button>
                                                        <Link to={"/agregarAlquiler/" + auto._id} className="btn btn-primary my-3">Alquilar</Link>
                                                        {/* <a href="" class="stretched-link" ></a> */}
                                                    </div>
                                                </div>
                                            </div>
                                        </React.Fragment>
                                    )
                                })
                            }
                        </div>
                    </div>
                </section>
            </React.Fragment>
        );
    }
}

export default Autos;