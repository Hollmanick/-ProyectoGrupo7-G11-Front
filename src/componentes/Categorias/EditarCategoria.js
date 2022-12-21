import axios from "axios";
import swal from "sweetalert";
import { baseUrl } from "../Url";
import React, { Component } from "react";
import { Navigate } from "react-router-dom";

class EditarCategoria extends Component {
    path = null;
    url = [];
    categoriaId = null

    nombre = React.createRef();
    descripcion = React.createRef();

    state = {
        categoria: {},
        status: null
    }

    componentWillMount() {
        this.path = window.location.pathname;
        console.log(this.path);
        this.url = this.path.split("/");
        console.log(this.url);
        this.categoriaId = this.url[2];
        console.log(this.categoriaId);
        this.mostrarCategoria(this.categoriaId);
    }

    mostrarCategoria = (id) => {
        axios.get(`${baseUrl}/mostrarCategoria/${id}`)
            .then(res => {
                this.setState({
                    categoria: res.data.data
                })
                console.log(res.data.data);
            })
            .catch(error => {

                console.log(error);

            })
    }

    editarCategoria = (e) => {
        e.preventDefault();
        console.log(this.nombre.current.value);
        console.log(this.descripcion.current.value);
        var categoria = {
            nombre: this.nombre.current.value,
            descripcion: this.descripcion.current.value
        }

        axios.put(`${baseUrl}/editarCategoria/${this.categoriaId}`, categoria)
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
                "Categoria Editada",
                "La Categoria se Edito Correctamente",
                "success"                                                
            )
            return <Navigate to="/mostrarCategorias" />
        }
        return (
            <React.Fragment>
                <h1>Editar Categoria</h1>
                <form onSubmit={this.editarCategoria}>
                    <div className="mb-3">
                        <label for="nombre" className="form-label">Nombre</label>
                        <input type="text" className="form-control" id="nombre" placeholder="Digite el nombre de la categoria" defaultValue={this.state.categoria.nombre} ref={this.nombre} />
                    </div>
                    <div className="mb-3">
                        <label for="descripcion" className="form-label">Descripcion</label>
                        <input type="text" className="form-control" id="descripcion" aria-describedby="emailHelp" placeholder="Digite la descripcion de la categoria" defaultValue={this.state.categoria.descripcion} ref={this.descripcion} />
                    </div>
                    <input type="submit" className="btn btn-outline-info btn-lg p-10 mb-5" />
                </form>
            </React.Fragment>
        );
    }
}

export default EditarCategoria;