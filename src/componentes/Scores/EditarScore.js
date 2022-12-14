import axios from "axios";
import swal from "sweetalert";
import { baseUrl } from "../Url";
import React, { Component } from "react";
import { Navigate } from "react-router-dom";

class EditarScore extends Component {
    path = null;
    url = [];
    scoreId = null

    score = React.createRef();
    descripcion = React.createRef();

    state = {
        score: {},
        status: null
    }

    componentWillMount() {
        this.path = window.location.pathname;
        console.log(this.path);
        this.url = this.path.split("/");
        console.log(this.url);
        this.scoreId = this.url[2];
        console.log(this.scoreId);
        this.mostrarScore(this.scoreId);
    }

    mostrarScore = (id) => {
        axios.get(`${baseUrl}/mostrarScore/${id}`)
            .then(res => {
                this.setState({
                    score: res.data.data
                })
                console.log(res.data.data);
            })
            .catch(error => {

                console.log(error);

            })
    }

    editarScore = (e) => {
        e.preventDefault();
        console.log(this.score.current.value);
        console.log(this.descripcion.current.value);
        var score = {
            score: this.score.current.value,
            descripcion: this.descripcion.current.value
        }

        axios.put(`${baseUrl}/editarScore/${this.scoreId}`, score)
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
                "Score Editado",
                "El Score se Edito Correctamente",
                "success"                                                
            )
            return <Navigate to="/mostrarScores" />
        }
        return (
            <React.Fragment>
                <h1>Editar Score</h1>
                <form onSubmit={this.editarScore}>
                    <div className="mb-3">
                        <label for="score" className="form-label">Score</label>
                        <input type="text" className="form-control" id="score" placeholder="Digite el score" defaultValue={this.state.score.score} ref={this.score} />
                    </div>
                    <div className="mb-3">
                        <label for="descripcion" className="form-label">Descripcion</label>
                        <input type="text" className="form-control" id="descripcion" aria-describedby="emailHelp" placeholder="Digite la descripcion del score" defaultValue={this.state.score.descripcion} ref={this.descripcion} />
                    </div>
                    <input type="submit" className="btn btn-outline-info btn-lg p-10 mb-5" />
                </form>
            </React.Fragment>
        );
    }
}

export default EditarScore;