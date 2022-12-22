import React, { Component } from "react";
import axios from "axios";
import swal from "sweetalert";
import { Navigate } from "react-router-dom";

class EliminarAlquiler extends Component {   
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

                if (this.state.status === "delete") {
                    swal(
                        "Alquiler Editado",
                        "El Alquiler se Edito Correctamente",
                        "success"                                                
                    )
                    return <Navigate to="/mostrarAlquileres" />
                }
                
                // window.location.reload(true)
            })
    }    
}

export default EliminarAlquiler;