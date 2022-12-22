import axios from "axios";
import React, { Component } from "react";
import { Navigate } from "react-router-dom";
import swal from "sweetalert";
import { baseUrl } from "../Url";

class EditarCliente extends Component {
    path = null;
    url = [];
    clienteId = null

    email = React.createRef();
    contrasena = React.createRef();
    nombre = React.createRef();
    edad = React.createRef();

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
        axios.get(`${baseUrl}/mostrarCliente/${id}`)
            .then(res => {
                this.setState({
                    cliente: res.data.data
                })
                console.log(res.data.data);
            })
            .catch(error => {
                console.log(error);
            })
    }

    editarCliente = (e) => {
        e.preventDefault();
        console.log(this.email.current.value);
        console.log(this.nombre.current.value);
        console.log(this.edad.current.value);
        var cliente = {
            email: this.email.current.value,
            contrasena: this.contrasena.current.value,
            nombre: this.nombre.current.value,
            edad: this.edad.current.value
        }

        axios.put(`${baseUrl}/editarCliente/${this.clienteId}`, cliente)
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
            swal(
                "Cliente Editado",
                "El Cliente se Edito Correctamente",
                "success"                                                
            )
            return <Navigate to="/mostrarClientes" />
        }
        return (
            <React.Fragment>
                <h1>Editar Cliente</h1>
                <form onSubmit={this.editarCliente} className='container my-3'>
                    <div className="mb-3">
                        <label for="email" className="form-label">Email</label>
                        <input type="email" className="form-control" id="email" placeholder="Digite su Email" defaultValue={this.state.cliente.email} ref={this.email} />
                    </div>
                    <div className="mb-3">
                        <label for="contrasena" className="form-label">Contrasena</label>
                        <input type="password" className="form-control" id="contrasena" placeholder="Digite su contrasena" defaultValue={this.state.cliente.contrasena} ref={this.contrasena} />
                    </div>
                    <div className="mb-3">
                        <label for="nombre" className="form-label">Nombre</label>
                        <input type="text" className="form-control" id="nombre" placeholder="Digite su Nombre" defaultValue={this.state.cliente.nombre} ref={this.nombre} />
                    </div>
                    <div className="mb-3">
                        <label for="edad" className="form-label">Edad</label>
                        <input type="number" className="form-control" id="edad" aria-describedby="emailHelp" placeholder="Digite su edad" defaultValue={this.state.cliente.edad} ref={this.edad} />
                    </div>
                    <input type="submit" className="btn btn-primary" />
                </form>
            </React.Fragment>
        );
    }
}

export default EditarCliente;