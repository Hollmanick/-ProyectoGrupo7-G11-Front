import axios from "axios";
import swal from "sweetalert";
import { baseUrl } from "../Url";
import React, { Component } from "react";
import { Navigate } from "react-router-dom";

class AgregarAlquiler extends Component {
    fechaEntrega = React.createRef();
    fechaDevolucion = React.createRef();
    estatus = React.createRef();

    state = {
        alquiler: {},
        status: null
    }

    changeState = () => {
        this.setState({
            alquiler: {
                "fechaEntrega": this.fechaEntrega.current.value,
                "fechaDevolucion": this.fechaDevolucion.current.value,
                "estatus": this.estatus.current.value
            }
        })

        console.log(this.state);
    }

    agregarAlquiler = async (e) => {
        e.preventDefault();
        console.log(typeof (this.fechaEntrega.current.value), this.fechaEntrega.current.value);
        console.log(typeof (this.fechaDevolucion.current.value), this.fechaDevolucion.current.value);
        console.log(typeof (this.estatus.current.value), this.estatus.current.value);
        this.changeState();
        // axios.post("http://localhost:3000/api/agregarAlquiler", this.state.alquiler)
        //     .then(res => {
        //         this.setState({
        //             status: "success",
        //         })
        //     })
        //     .catch(function (error) {
        //         console.log(error)
        //     })

        try {
            console.log("body enviado", this.state.alquiler)
            const response = await fetch(`${baseUrl}/agregarAlquiler`, {
                method: 'POST',
                headers: {
                    'Accept': 'application/json, text/plain, */*',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(this.state.alquiler)
            })
            this.setState({
                status: "success",
            })
            const data = await response.json() // Convertir respuesta a formato json
            console.log(data)
        } catch (error) {
            console.error(error)
        }
    }
    render() {
        if (this.state.status === "success") {
            swal(
                "Alquiler Agregado",
                "El Alquiler se Agrego Correctamente",
                "success"                                                
            )
            return <Navigate to="/mostrarAlquileres" />
        }
        return (
            <React.Fragment>
                <h1>Agregar Alquiler</h1>
                <form onSubmit={this.agregarAlquiler}>
                    <div className="mb-3">
                        <label for="fechaEntrega" className="form-label">Fecha Entrega</label>
                        <input type="datetime-local" className="form-control" id="fechaEntrega" placeholder="Digite su fecha de entrega en formato: 2022-09-09T00:00:00" name="fechaEntrega" ref={this.fechaEntrega} onChange={this.changeState} />
                    </div>
                    <div className="mb-3">
                        <label for="fechaDevolucion" className="form-label">Fecha Devolucion</label>
                        <input type="datetime-local" className="form-control" id="fechaDevolucion" placeholder="Digite su fecha de devolucion en formato: 2022-09-09T00:00:00" name="fechaDevolucion" ref={this.fechaDevolucion} onChange={this.changeState} />
                    </div>
                    <div className="mb-3">
                        <label for="estatus" className="form-label">Estatus</label>
                        <input type="text" className="form-control" id="estatus" placeholder="Digite el estatus del alquiler (Completo o Cancelado)" name="estatus" ref={this.estatus} onChange={this.changeState} />
                    </div>
                    <input type="submit" className="btn btn-outline-info btn-lg p-10 mb-5" />
                </form>
            </React.Fragment>
        )
    }
}

export default AgregarAlquiler;