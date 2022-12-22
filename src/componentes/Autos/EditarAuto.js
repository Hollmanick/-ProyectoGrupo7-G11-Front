import axios from "axios";
import swal from "sweetalert";
import { baseUrl } from "../Url";
import React, { Component } from "react";
import { Navigate } from "react-router-dom";

class EditarAuto extends Component {
    path = null;
    url = [];
    autoId = null

    nombre = React.createRef();
    marca = React.createRef();
    ano = React.createRef();
    descripcion = React.createRef();
    img = React.createRef();

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
        axios.get(`${baseUrl}/mostrarAuto/${id}`)
            .then(res => {
                this.setState({
                    auto: res.data.data
                })
                console.log(res.data.data);
            })
            .catch(error => {

                console.log(error);

            })
    }

    editarAuto = (e) => {
        e.preventDefault();
        console.log(this.nombre.current.value);
        console.log(this.marca.current.value);
        console.log(this.ano.current.value);
        console.log(this.descripcion.current.value);
        var auto = {
            nombre: this.nombre.current.value,
            marca: this.marca.current.value,
            ano: this.ano.current.value,
            descripcion: this.descripcion.current.value,
            img: this.img.current.value
        }

        axios.put(`${baseUrl}/editarAuto/${this.autoId}`, auto)
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
                "Auto Editado",
                "El Auto se Edito Correctamente",
                "success"                                                
            )
            return <Navigate to="/mostrarAutos" />
        }
        return (
            <React.Fragment>
                <h1>Editar Auto</h1>
                <form onSubmit={this.editarAuto}>
                    <div className="mb-3">
                        <label for="nombre" className="form-label">Nombre</label>
                        <input type="text" className="form-control" id="nombre" placeholder="Digite el nombre del auto" defaultValue={this.state.auto.nombre} ref={this.nombre} />
                    </div>
                    <div className="mb-3">
                        <label for="marca" className="form-label">Marca</label>
                        <input type="text" className="form-control" id="marca" placeholder="Digite la marca del auto" defaultValue={this.state.auto.marca} ref={this.marca} />
                    </div>
                    <div className="mb-3">
                        <label for="ano" className="form-label">Año</label>
                        <input type="number" className="form-control" id="ano" aria-describedby="emailHelp" placeholder="Digite el año del auto" defaultValue={this.state.auto.ano} ref={this.ano} />
                    </div>
                    <div className="mb-3">
                        <label for="descripcion" className="form-label">Descripcion</label>
                        <input type="text" className="form-control" id="descripcion" aria-describedby="emailHelp" placeholder="Digite la descripcion del auto" defaultValue={this.state.auto.descripcion} ref={this.descripcion} />
                    </div>
                    <div className="mb-3">
                        <label for="img " className="form-label">img </label>
                        <input type="text" className="form-control" id="img " aria-describedby="emailHelp" placeholder="Digite la url para la img  del auto" defaultValue={this.state.auto.img } ref={this.img } />
                    </div>
                    <input type="submit" className="btn btn-outline-info btn-lg p-10 mb-5" />
                </form>
            </React.Fragment>
        );
    }
}

export default EditarAuto;