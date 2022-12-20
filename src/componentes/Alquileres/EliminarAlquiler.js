import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import swal from "sweetalert";
import { Navigate } from "react-router-dom";

class EliminarAlquiler extends Component {   
    state = {
        alquileres: [],
        status: null
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