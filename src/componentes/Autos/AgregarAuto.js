import axios from "axios";
import swal from "sweetalert";
import { baseUrl } from "../Url";
import React, { Component } from "react";
import { Navigate } from "react-router-dom";

class AgregarAuto extends Component {
    nombre = React.createRef();
    marca = React.createRef();
    ano = React.createRef();
    descripcion = React.createRef();
    img = React.createRef();

    state = {
        auto: {},
        status: null
    }

    changeState = () => {
        this.setState({
            auto: {                
                "nombre": this.nombre.current.value,
                "marca": this.marca.current.value,
                "ahno": this.ano.current.value,
                "descripcion": this.descripcion.current.value,
                "img": this.img.current.value
            }
        })

        console.log(this.state);
    }

    agregarAuto = async (e) => {
        e.preventDefault();
        console.log(typeof (this.nombre.current.value), this.nombre.current.value);
        console.log(typeof (this.marca.current.value), this.marca.current.value);
        console.log(typeof (this.ano.current.value), this.ano.current.value);
        console.log(typeof (this.descripcion.current.value), this.descripcion.current.value);
        this.changeState();
        // axios.post("http://localhost:3000/api/agregarAuto", this.state.auto)
        //     .then(res => {
        //         this.setState({
        //             status: "success",
        //         })
        //     })
        //     .catch(function (error) {
        //         console.log(error)
        //     })

        try {
            console.log("body enviado", this.state.auto)
            const response = await fetch(`${baseUrl}/agregarAuto`, {
                method: 'POST',
                headers: {
                    'Accept': 'application/json, text/plain, */*',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(this.state.auto)
            })
            await this.setState({
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
                "Auto Agregado",
                "El Auto se Agrego Correctamente",
                "success"                                                
            )
            return <Navigate to="/mostrarAutos" />
        }
        return (
            <React.Fragment>
                <h1>Agregar Auto</h1>
                <form onSubmit={this.agregarAuto}>
                    <div className="mb-3">
                        <label for="nombre" className="form-label">Nombre</label>
                        <input type="text" className="form-control" id="nombre" placeholder="Digite el nombre del auto" name="nombre" ref={this.nombre} onChange={this.changeState} />
                    </div>
                    <div className="mb-3">
                        <label for="marca" className="form-label">Marca</label>
                        <input type="text" className="form-control" id="marca" placeholder="Digite la marca del auto" name="marca" ref={this.marca} onChange={this.changeState} />
                    </div>
                    <div className="mb-3">
                        <label for="ahno" className="form-label">Año</label>
                        <input type="number" className="form-control" id="ahno" placeholder="Digite el año del auto" name="ahno" ref={this.ahno} onChange={this.changeState} />
                    </div>
                    <div className="mb-3">
                        <label for="descripcion" className="form-label">Descripcion</label>
                        <input type="text" className="form-control" id="descripcion" placeholder="Digite la descripcion del auto" name="descripcion" ref={this.descripcion} onChange={this.changeState} />
                    </div>
                    <div className="mb-3">
                        <label for="img" className="form-label">img</label>
                        <input type="text" className="form-control" id="img" placeholder="Digite la url para la img del auto" name="img" ref={this.img} onChange={this.changeState} />
                    </div>
                    <input type="submit" className="btn btn-outline-info btn-lg p-10 mb-5" />
                </form>
            </React.Fragment>
        )
    }
}

export default AgregarAuto;