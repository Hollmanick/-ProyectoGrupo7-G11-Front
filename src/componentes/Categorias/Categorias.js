import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import swal from "sweetalert";

class Categorias extends Component {
    state = {
        categorias: []
    }

    componentWillMount() {
        this.mostrarCategorias();
    }

    mostrarCategorias = () => {
        axios.get("http://localhost:3000/api/mostrarCategorias")
            .then(res => {
                console.log("Categorias");
                console.log(res.data.doc);
                this.setState({
                    categorias: res.data.doc
                });
            })
            .catch(error => {
                console.log(error);
            })
    }

    eliminarCategoria = (id) => {
        axios.delete("http://localhost:3000/api/eliminarCategoria/" + id)
            .then(res => {
                this.setState({
                    status: "delete"
                });

                //window.location.reload(true);

                swal(
                    "Categoria Eliminado",
                    "El Categoria se Elimino Correctamente",
                    "success"
                )
            })
    }
    render() {
        console.log(this.state.categorias);
        return (
            <React.Fragment>
                <h1>Categorias</h1>
                <Link to="/agregarCategoria" className="btn btn-dark">Agregar Categoria</Link>
                <table className="table">
                    <thead>
                        <tr>
                            <td>Id</td>
                            <td>Fecha_Entrega</td>
                            <td>Fecha_Devolucion</td>
                            <td>Estatus</td>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.categorias.map((categoria) => {
                                return (
                                    <React.Fragment>
                                        <tr>
                                            <td>{categoria._id}</td>
                                            <td>{categoria.fechaEntrega}</td>
                                            <td>{categoria.fechaDevolucion}</td>
                                            <td>{categoria.estatus}</td>
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