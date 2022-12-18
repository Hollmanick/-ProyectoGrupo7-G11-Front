import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import swal from "sweetalert";

class Scores extends Component {
    state = {
        scores: []
    }

    componentWillMount() {
        this.mostrarScores();
    }

    mostrarScores = () => {
        axios.get("http://localhost:3000/api/mostrarScores")
            .then(res => {
                console.log("Scores");
                console.log(res.data.doc);
                this.setState({
                    scores: res.data.doc
                });
            })
            .catch(error => {
                console.log(error);
            })
    }

    eliminarScore = (id) => {
        axios.delete("http://localhost:3000/api/eliminarScore/" + id)
            .then(res => {
                this.setState({
                    status: "delete"
                });

                //window.location.reload(true);

                swal(
                    "Score Eliminado",
                    "El Score se Elimino Correctamente",
                    "success"
                )
            })
    }
    render() {
        console.log(this.state.scores);
        return (
            <React.Fragment>
                <h1>Scores</h1>
                <Link to="/agregarScore" className="btn btn-dark">Agregar Score</Link>
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
                            this.state.scores.map((score) => {
                                return (
                                    <React.Fragment>
                                        <tr>
                                            <td>{score._id}</td>
                                            <td>{score.fechaEntrega}</td>
                                            <td>{score.fechaDevolucion}</td>
                                            <td>{score.estatus}</td>
                                            <td>
                                                <Link to={"/editarScore/" + score._id} className="btn btn-success">Editar</Link>
                                                <button className="btn btn-danger ms-3" onClick={
                                                    () => {
                                                        this.eliminarScore(score._id)
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

export default Scores;