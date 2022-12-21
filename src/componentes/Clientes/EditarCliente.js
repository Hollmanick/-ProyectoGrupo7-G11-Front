import axios from "axios";
import React, { Component } from "react";
import { Navigate } from "react-router-dom";

class EditarCliente extends Component {
    path = null;
    url = [];
    clienteId = null

    fechaEntrega = React.createRef();
    fechaDevolucion = React.createRef();
    estatus = React.createRef();

    state = {
        cliente: {},
        status: null
    }

    componentWillMount() {
        this.path = window.location.pathname;
        console.log(this.path);
        this.url = this.path.split("/");
        console.log(this.url);
        this.clienteId = this.url[2];
        console.log(this.clienteId);
        this.mostrarCliente(this.clienteId);
    }

    mostrarCliente = (id) => {
        axios.get("http://localhost:3000/api/mostrarCliente/" + id)
            .then(res => {
                this.setState({
                    cliente: res.data.cliente
                })
                console.log(res.data.cliente);
            })
            .catch(error => {

                console.log(error);

            })
    }

    editarCliente = (e) => {
        e.preventDefault();
        console.log(this.fechaEntrega.current.value);
        console.log(this.fechaDevolucion.current.value);
        console.log(this.estatus.current.value);
        var cliente = {
            fechaEntrega: this.fechaEntrega.current.value,
            fechaDevolucion: this.fechaDevolucion.current.value,
            estatus: this.estatus.current.value
        }

        axios.put("http://localhost:3000/api/editarCliente/" + this.clienteId, cliente)
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
            return <Navigate to="/Clientes" />
        }
        return (
            <React.Fragment>
                <h1>Editar Cliente</h1>
                <form onSubmit={this.editarCliente}>
                    <div className="mb-3">
                        <label for="fechaEntrega" className="form-label">Fecha_Entrega</label>
                        <input type="datetime-local" className="form-control" id="fechaEntrega" placeholder="Digite su fecha de entrega en formato: 2022-09-09T00:00:00" defaultValue={this.state.cliente.fechaEntrega} ref={this.fechaEntrega} />
                    </div>
                    <div className="mb-3">
                        <label for="fechaDevolucion" className="form-label">Fecha_Devolucion</label>
                        <input type="datetime-local" className="form-control" id="fechaDevolucion" placeholder="Digite su fecha de devolucion en formato: 2022-09-09T00:00:00" defaultValue={this.state.cliente.fechaDevolucion} ref={this.fechaDevolucion} />
                    </div>
                    <div className="mb-3">
                        <label for="estatus" className="form-label">Estatus</label>
                        <input type="text" className="form-control" id="estatus" aria-describedby="emailHelp" placeholder="Completo o Cancelado" defaultValue={this.state.cliente.estatus} ref={this.estatus} />
                    </div>
                    <input type="submit" className="btn btn-primary" />
                </form>
            </React.Fragment>
        );
    }
}

export default EditarCliente;