import axios from "axios";
import React from "react";
import { Navigate } from "react-router-dom";

class AgregarMensaje extends React.Component {
    titulo = React.createRef();
    descripcion = React.createRef();

    state = {
        mensaje: {},
        status: null
    }

    changeState = () => {
        this.setState({
            mensaje: {
                "titulo": this.titulo.current.value,
                "descripcion": this.descripcion.current.value
            }
        })

        console.log(this.state);
    }

    agregarMensaje = async (e) => {
        e.preventDefault();
        console.log(typeof (this.titulo.current.value), this.titulo.current.value);
        console.log(typeof (this.descripcion.current.value), this.descripcion.current.value);
        this.changeState();
        // axios.post("http://localhost:3000/api/agregarMensaje", this.state.mensaje)
        //     .then(res => {
        //         this.setState({
        //             status: "success",
        //         })
        //     })
        //     .catch(function (error) {
        //         console.log(error)
        //     })

        try {
            console.log("body enviado", this.state.mensaje)
            const response = await fetch('http://localhost:3000/api/agregarMensaje', {
                method: 'POST',
                headers: {
                    'Accept': 'application/json, text/plain, */*',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(this.state.mensaje)
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
            return <Navigate to="/mostrarMensajes" />
        }
        return (
            <React.Fragment>
                <h1>Agregar Mensaje</h1>
                <form onSubmit={this.agregarMensaje}>
                    <div className="mb-3">
                        <label for="titulo" className="form-label">Titulo</label>
                        <input type="text" className="form-control" id="titulo" placeholder="Digite el titulo del mensaje" name="titulo" ref={this.titulo} onChange={this.changeState} />
                    </div>
                    <div className="mb-3">
                        <label for="descripcion" className="form-label">Descripcion</label>
                        <input type="text" className="form-control" id="descripcion" placeholder="Digite la descripcion del mensaje" name="descripcion" ref={this.descripcion} onChange={this.changeState} />
                    </div>
                    <input type="submit" className="btn btn-outline-info btn-lg p-10 mb-5" />
                </form>
            </React.Fragment>
        )
    }
}

export default AgregarMensaje;