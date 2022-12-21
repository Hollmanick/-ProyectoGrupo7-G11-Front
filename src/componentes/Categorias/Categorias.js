import axios from "axios";
import swal from "sweetalert";
import { baseUrl } from "../Url";
import { Link } from "react-router-dom";
import React, { Component } from "react";
import { Navigate } from "react-router-dom";

class Categorias extends Component {
    state = {
        categorias: [],
        status: null
    }

    componentWillMount() {
        this.mostrarCategorias();
    }

    mostrarCategorias = () => {
        axios.get(`${baseUrl}/mostrarCategorias`)
            .then(res => {
                console.log("Categorias");
                console.log(res.data.data);
                this.setState({
                    categorias: res.data.data
                });
            })
            .catch(error => {
                console.log(error);
            })
    }

    eliminarCategoria = (id) => {
        axios.delete(`${baseUrl}/eliminarCategoria/${id}`)
            .then(res => {
                this.setState({
                    status: "delete"
                });               

                swal(
                    "Categoria Eliminada",
                    "La Categoria se Elimino Correctamente",
                    "success"                    
                )

                // window.location.reload(true)
            })
    }
    render() {                       
        console.log(this.state.categorias);
        return (
            <React.Fragment>
                <h1>Listado de Categorias</h1>
                <br />
                <Link to="/agregarCategoria" className="btn btn-outline-dark btn-lg p-10 mb-5">Agregar Categoria</Link>
                <table className="table">
                    <thead>
                        <tr>
                            <td>Id</td>
                            <td>Nombre</td>
                            <td>Descripcion</td>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.categorias.map((categoria) => {
                                return (
                                    <React.Fragment>
                                        <tr>
                                            <td>{categoria._id}</td>
                                            <td>{categoria.nombre}</td>
                                            <td>{categoria.descripcion}</td>
                                            <td>
                                                <Link to={"/editarCategoria/" + categoria._id} className="btn btn-success">Editar</Link>
                                                <button className="btn btn-danger ms-3" onClick={
                                                    () => {
                                                        this.eliminarCategoria(categoria._id)
                                                    }
                                                }>
                                                    Eliminar
                                                </button>
                                            </td>
                                        </tr>
                                    </React.Fragment>
                                )
                            })
                        }
                    </tbody>
                </table>
            </React.Fragment>
        );
    }
}

export default Categorias;