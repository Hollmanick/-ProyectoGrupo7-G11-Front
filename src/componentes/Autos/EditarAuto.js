import axios from "axios";
import React, { Component } from "react";
import { Navigate } from "react-router-dom";

class EditarAuto extends Component {
    path = null;
    url = [];
    autoId = null

    fechaEntrega = React.createRef();
    fechaDevolucion = React.createRef();
    estatus = React.createRef();

    state = {
        auto: {},
        status: null
    }

    componentWillMount() {
        this.path = window.location.pathname;
        console.log(this.path);
        this.url = this.path.split("/");
        console.log(this.url);
        this.autoId = this.url[2];
        console.log(this.autoId);
        this.mostrarAuto(this.autoId);
    }

    mostrarAuto = (id) => {
        axios.get("http://localhost:3000/api/mostrarAuto/" + id)
            .then(res => {
                this.setState({
                    auto: res.data.auto
                })
                console.log(res.data.auto);
            })
            .catch(error => {

                console.log(error);

            })
    }

    editarAuto = (e) => {
        e.preventDefault();
        console.log(this.fechaEntrega.current.value);
        console.log(this.fechaDevolucion.current.value);
        console.log(this.estatus.current.value);
        var auto = {
            fechaEntrega: this.fechaEntrega.current.value,
            fechaDevolucion: this.fechaDevolucion.current.value,
            estatus: this.estatus.current.value
        }

        axios.put("http://localhost:3000/api/editarAuto/" + this.autoId, auto)
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
                <h1>Editar Auto</h1>
                <form onSubmit={this.editarAuto}>
                    <div className="mb-3">
                        <label for="fechaEntrega" className="form-label">Fecha_Entrega</label>
                        <input type="datetime-local" className="form-control" id="fechaEntrega" placeholder="Digite su fecha de entrega en formato: 2022-09-09T00:00:00" defaultValue={this.state.auto.fechaEntrega} ref={this.fechaEntrega} />
                    </div>
                    <div className="mb-3">
                        <label for="fechaDevolucion" className="form-label">Fecha_Devolucion</label>
                        <input type="datetime-local" className="form-control" id="fechaDevolucion" placeholder="Digite su fecha de devolucion en formato: 2022-09-09T00:00:00" defaultValue={this.state.auto.fechaDevolucion} ref={this.fechaDevolucion} />
                    </div>
                    <div className="mb-3">
                        <label for="estatus" className="form-label">Estatus</label>
                        <input type="text" className="form-control" id="estatus" aria-describedby="emailHelp" placeholder="Completo o Cancelado" defaultValue={this.state.auto.estatus} ref={this.estatus} />
                    </div>
                    <input type="submit" className="btn btn-primary" />
                </form>
            </React.Fragment>
        );
    }
}

export default EditarAuto;