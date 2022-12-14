import axios from "axios";
import swal from "sweetalert";
import { baseUrl } from "../Url";
import React, { Component } from "react";
import { Navigate } from "react-router-dom";

class AgregarCliente extends Component {    
    correo = React.createRef();
    contrasena = React.createRef();
    nombre = React.createRef();
    edad = React.createRef();
    

    state = {
        cliente: {},
        status: null
    }

    changeState = () => {
        this.setState({
            cliente: {                
                "correo": this.correo.current.value,
                "contrasena": this.contrasena.current.value,
                "nombre": this.nombre.current.value,
                "edad": this.edad.current.value
                
            }
        })

        console.log(this.state);
    }

    agregarCliente = async (e) => {
        e.preventDefault();        
        console.log(typeof (this.correo.current.value), this.correo.current.value);
        console.log(typeof (this.contrasena.current.value), this.contrasena.current.value);
        console.log(typeof (this.nombre.current.value), this.nombre.current.value);
        console.log(typeof (this.edad.current.value), this.edad.current.value);        
        this.changeState();
        // axios.post("http://localhost:3000/api/agregarCliente", this.state.cliente)
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
            const response = await fetch(`${baseUrl}/agregarCliente`, {
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
            swal(
                "Cliente Agregado",
                "El Cliente se Agrego Correctamente",
                "success"                                                
            )
            return <Navigate to="/mostrarClientes" />
        }
        return (
            <React.Fragment>
                <h1>Agregar Cliente</h1>
                <form onSubmit={this.agregarCliente}>                    
                    <div className="mb-3">
                        <label for="correo" className="form-label">Correo</label>
                        <input type="email" className="form-control" id="correo" aria-describedby="emailHelp" placeholder="Digite el correo del cliente" name="correo" ref={this.correo} onChange={this.changeState} />
                    </div>
                    <div className="mb-3">
                        <label for="contrasena" className="form-label">Contrase??a</label>
                        <input type="password" className="form-control" id="contrasena" placeholder="Digite la contrase??a del cliente" name="contrasena" ref={this.contrasena} onChange={this.changeState} />
                    </div>
                    <div className="mb-3">
                        <label for="nombre" className="form-label">Nombre</label>
                        <input type="text" className="form-control" id="nombre" placeholder="Digite el nombre del cliente" name="nombre" ref={this.nombre} onChange={this.changeState} />
                    </div>
                    <div className="mb-3">
                        <label for="edad" className="form-label">Edad</label>
                        <input type="number" className="form-control" id="edad" placeholder="Digite la edad del cliente" name="edad" ref={this.edad} onChange={this.changeState} />
                    </div>                    
                    <input type="submit" className="btn btn-outline-info btn-lg p-10 mb-5" />
                </form>
            </React.Fragment>
        )
    }
}

export default AgregarCliente;