import axios from "axios";
import React from "react";
import { Navigate } from "react-router-dom";

class AgregarMensaje extends React.Component {
    fechaEntrega = React.createRef();
    fechaDevolucion = React.createRef();
    estatus = React.createRef();

    state = {
        mensaje: {},
        status: null
    }

    changeState = () => {
        this.setState({
            mensaje: {
                fechaEntrega: this.fechaEntrega.current.value,
                fechaDevolucion: this.fechaDevolucion.current.value,
                estatus: this.estatus.current.value
            }
        })

        console.log(this.state);
    }

    agregarMensaje = (e) => {
        e.preventDefault();
        console.log(this.fechaEntrega.current.value);
        console.log(this.fechaDevolucion.current.value);
        console.log(this.estatus.current.value);
        this.changeState();
        axios.post("http://localhost:3000/api/agregarMensaje", this.state.mensaje)
            .then(res => {
                this.setState({
                    status: "success",
                })
            })
            .catch(function (error) {
                console.log(error)
            })
    }
    render() {
        if (this.state.status === "success") {
            return <Navigate to="/Mensajes" />
        }
        return (
            <React.Fragment>
                <h1>AgregarMensaje</h1>
                <form onSubmit={this.agregarMensaje}>
                    <div className="mb-3">
                        <label for="fechaEntrega" className="form-label">Fecha_Entrega</label>
                        <input type="datetime-local" className="form-control" id="fechaEntrega" placeholder="Digite su fecha de entrega en formato: 2022-09-09T00:00:00" name="fechaEntrega" ref={this.fechaEntrega} onChange={this.changeState} />
                    </div>
                    <div className="mb-3">
                        <label for="fechaDevolucion" className="form-label">Fecha_Devolucion</label>
                        <input type="datetime-local" className="form-control" id="fechaDevolucion" placeholder="Digite su fecha de devolucion en formato: 2022-09-09T00:00:00" name="fechaDevolucion" ref={this.fechaDevolucion} onChange={this.changeState} />
                    </div>
                    <div className="mb-3">
                        <label for="estatus" className="form-label">Estatus</label>
                        <input type="text" className="form-control" id="estatus" placeholder="Ingrese estatus Completo o Cancelado" name="estatus" ref={this.estatus} onChange={this.changeState} />
                    </div>
                    <input type="submit" className="btn btn-primary" />
                </form>
            </React.Fragment>
        )
    }
}

export default AgregarMensaje;