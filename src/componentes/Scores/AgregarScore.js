import axios from "axios";
import React from "react";
import { Navigate } from "react-router-dom";

class AgregarScore extends React.Component {
    score = React.createRef();
    descripcion = React.createRef();

    state = {
        score: {},
        status: null
    }

    changeState = () => {
        this.setState({
            score: {
                "score": this.score.current.value,
                "descripcion": this.descripcion.current.value
            }
        })

        console.log(this.state);
    }

    agregarScore = async (e) => {
        e.preventDefault();
        console.log(typeof (this.score.current.value), this.score.current.value);
        console.log(typeof (this.descripcion.current.value), this.descripcion.current.value);
        this.changeState();
        // axios.post("http://localhost:3000/api/agregarScore", this.state.score)
        //     .then(res => {
        //         this.setState({
        //             status: "success",
        //         })
        //     })
        //     .catch(function (error) {
        //         console.log(error)
        //     })

        try {
            console.log("body enviado", this.state.score)
            const response = await fetch('http://localhost:3000/api/agregarScore', {
                method: 'POST',
                headers: {
                    'Accept': 'application/json, text/plain, */*',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(this.state.score)
            })
            this.setState({
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
            return <Navigate to="/mostrarScores" />
        }
        return (
            <React.Fragment>
                <h1>Agregar Score</h1>
                <form onSubmit={this.agregarScore}>
                    <div className="mb-3">
                        <label for="score" className="form-label">Score</label>
                        <input type="text" className="form-control" id="score" placeholder="Digite el score" name="score" ref={this.score} onChange={this.changeState} />
                    </div>
                    <div className="mb-3">
                        <label for="descripcion" className="form-label">Descripcion</label>
                        <input type="text" className="form-control" id="descripcion" placeholder="Digite la descripcion del score" name="descripcion" ref={this.descripcion} onChange={this.changeState} />
                    </div>
                    <input type="submit" className="btn btn-outline-info btn-lg p-10 mb-5" />
                </form>
            </React.Fragment>
        )
    }
}

export default AgregarScore;