import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import swal from "sweetalert";
import { Navigate } from "react-router-dom";

class Scores extends Component {
    state = {
        scores: [],
        status: null
    }

    componentWillMount() {
        this.mostrarScores();
    }

    mostrarScores = () => {
        axios.get("http://localhost:3000/api/mostrarScores")
            .then(res => {
                console.log("Scores");
                console.log(res.data.data);
                this.setState({
                    scores: res.data.data
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

                swal(
                    "Auto Eliminado",
                    "El Auto se Elimino Correctamente",
                    "success"                    
                )

                // window.location.reload(true)
            })
    }
    render() {                      
        console.log(this.state.scores);
        return (
            <React.Fragment>
                <h1>Listado de Scores</h1>
                <br />
                <Link to="/agregarScore" className="btn btn-outline-dark btn-lg p-10 mb-5">Agregar Score</Link>
                <table className="table">
                    <thead>
                        <tr>
                            <td>Id</td>
                            <td>Score</td>
                            <td>Descripcion</td>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.scores.map((score) => {
                                return (
                                    <React.Fragment>
                                        <tr>
                                            <td>{score._id}</td>
                                            <td>{score.score}</td>
                                            <td>{score.descripcion}</td>
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