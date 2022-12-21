import axios from "axios";
import React from "react";
import { Navigate } from "react-router-dom";

class AgregarAuto extends React.Component {
    nombre = React.createRef();
    marca = React.createRef();
    estatus = React.createRef();

    state = {
        auto: {},
        status: null
    }

    changeState = () => {
        this.setState({
            auto: {
                nombre: this.nombre.current.value,
                marca: this.marca.current.value,
                estatus: this.estatus.current.value
            }
        })

        console.log(this.state);
    }

    agregarAuto = (e) => {
        e.preventDefault();
        console.log(this.nombre.current.value);
        console.log(this.marca.current.value);
        console.log(this.estatus.current.value);
        this.changeState();
        axios.post("http://localhost:3000/api/agregarAuto", this.state.auto)
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
            return <Navigate to="/Autos" />
        }
        return (
            <React.Fragment>
                <h1>AgregarAuto</h1>
                <form onSubmit={this.agregarAuto}>
                    <div className="mb-3">
                        <label for="nombre" className="form-label">Fecha_Entrega</label>
                        <input type="datetime-local" className="form-control" id="nombre" placeholder="Digite su fecha de entrega en formato: 2022-09-09T00:00:00" name="nombre" ref={this.nombre} onChange={this.changeState} />
                    </div>
                    <div className="mb-3">
                        <label for="marca" className="form-label">Fecha_Devolucion</label>
                        <input type="datetime-local" className="form-control" id="marca" placeholder="Digite su fecha de devolucion en formato: 2022-09-09T00:00:00" name="marca" ref={this.marca} onChange={this.changeState} />
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

export default AgregarAuto;