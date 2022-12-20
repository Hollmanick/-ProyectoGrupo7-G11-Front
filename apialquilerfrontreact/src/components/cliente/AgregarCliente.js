// import axios from "axios";
import React from "react";
import { Navigate } from "react-router-dom";

class AgregarCliente extends React.Component {
    email = React.createRef();
    contrasena = React.createRef();
    nombre = React.createRef();
    edad = React.createRef();
    // fechaEntrega = React.createRef();
    // fechaDevolucion = React.createRef();
    // estatus = React.createRef();

    state = {
        cliente: {},
        status: null
    }

    changeState = () => {
        this.setState({
            cliente: {                
                // "fechaEntrega": this.fechaEntrega.current.value,
                // "fechaDevolucion": this.fechaDevolucion.current.value,
                // "estatus": this.estatus.current.value
                "email": this.email.current.value,
                "contrasena": this.contrasena.current.value,
                "nombre": this.nombre.current.value,
                "edad": this.edad.current.value
            }
        })

        console.log(this.state);
    }

    agregarCliente = async (e) => {
        e.preventDefault();
        console.log(typeof (this.state.cliente), this.state.cliente);
        
        this.changeState();
        // axios.post("http://localhost:3000/api/agregarcliente", this.state.cliente)
        //     .then(res => {
        //         this.setState({
        //             status: "success",
        //         })
        //     })
        //     .catch(function (error) {
        //         console.log(error)
        //     })

        try {
            console.log("body enviado", this.state.cliente)
            const response = await fetch('http://localhost:3000/api/cliente', {
                method: 'POST',
                headers: {
                    'Accept': 'application/json, text/plain, */*',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(this.state.cliente)
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
            return <Navigate to="/mostrarClientes"/>
        }
        return (
            <React.Fragment>
                <h1>AgregarCliente</h1>
                <form onSubmit={this.agregarCliente}>
                    <div className="mb-3">
                        <label for="email" className="form-label">Email</label>
                        <input type="email" className="form-control" id="email" placeholder="Digite su email" name="email" ref={this.email} onChange={this.changeState} />
                    </div>
                    <div className="mb-3">
                        <label for="contrasena" className="form-label">Contraseña</label>
                        <input type="password" className="form-control" id="contrasena" placeholder="Digite su contrasena" name="contrasena" ref={this.contrasena} onChange={this.changeState} />
                    </div>
                    <div className="mb-3">
                        <label for="nombre" className="form-label">Nombre</label>
                        <input type="text" className="form-control" id="nombre" placeholder="Digite su nombre" name="nombre" ref={this.nombre} onChange={this.changeState} />
                    </div>
                    <div className="mb-3">
                        <label for="edad" className="form-label">Edad</label>
                        <input type="number" className="form-control" id="edad" placeholder="Digite su edad" name="edad" ref={this.edad} onChange={this.changeState} />
                    </div>
                    <input type="submit" className="btn btn-primary" />
                </form>
            </React.Fragment>
        )
    }
}

export {
    AgregarCliente
};