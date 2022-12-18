import axios from "axios";
import React from "react";
import { Navigate } from "react-router-dom";

class AgregarCategoria extends React.Component {
    nombre = React.createRef();    
    descripcion = React.createRef();

    state = {
        categoria: {},
        status: null
    }

    changeState = () => {
        this.setState({
            categoria: {                
                "nombre": this.nombre.current.value,
                "descripcion": this.descripcion.current.value
            }
        })

        console.log(this.state);
    }

    agregarCategoria = async (e) => {
        e.preventDefault();
        console.log(typeof (this.nombre.current.value), this.nombre.current.value);
        console.log(typeof (this.descripcion.current.value), this.descripcion.current.value);
        this.changeState();
        // axios.post("http://localhost:3000/api/agregarCategoria", this.state.categoria)
        //     .then(res => {
        //         this.setState({
        //             status: "success",
        //         })
        //     })
        //     .catch(function (error) {
        //         console.log(error)
        //     })

        try {
            console.log("body enviado", this.state.categoria)
            const response = await fetch('http://localhost:3000/api/agregarCategoria', {
                method: 'POST',
                headers: {
                    'Accept': 'application/json, text/plain, */*',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(this.state.categoria)
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
            return <Navigate to="/mostrarCategorias" />
        }
        return (
            <React.Fragment>
                <h1>Agregar Categoria</h1>
                <form onSubmit={this.agregarCategoria}>
                    <div className="mb-3">
                        <label for="nombre" className="form-label">Nombre</label>
                        <input type="text" className="form-control" id="nombre" placeholder="Digite el nombre de la categoria" name="nombre" ref={this.nombre} onChange={this.changeState} />
                    </div>
                    <div className="mb-3">
                        <label for="descripcion" className="form-label">Descripcion</label>
                        <input type="text" className="form-control" id="descripcion" placeholder="Digite la descripcion de la categoria" name="descripcion" ref={this.descripcion} onChange={this.changeState} />
                    </div>
                    <input type="submit" className="btn btn-primary" />
                </form>
            </React.Fragment>
        )
    }
}

export default AgregarCategoria;