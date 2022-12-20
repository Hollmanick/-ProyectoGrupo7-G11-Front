import axios from "axios";
import React from "react";
import { Navigate } from "react-router-dom";

class AgregarUsuario extends React.Component{
    nombre = React.createRef();
    apellido = React.createRef();
    correo = React.createRef();
    pass = React.createRef();

    state = {
        usuario: {},
        status: null
    }

    changeState = () => {
        this.setState({
            usuario:{
                name:this.nombre.current.value,
                surname:this.apellido.current.value,
                email:this.correo.current.value,
                password:this.pass.current.value
            }
        })

        console.log(this.state);
    }

    guardarUsuario = (e) => {
        e.preventDefault();
        console.log(this.nombre.current.value);
        console.log(this.apellido.current.value);
        this.changeState();
        axios.post("http://localhost:3000/api/guardarUsuario",this.state.usuario)
            .then(res => {
                this.setState({
                    status:"success",
                })
            })
            .catch(function(error){
                console.log(error)
            })
    }
    render(){
        if(this.state.status === "success"){
            return <Navigate to = "/Usuarios" />
        }
        return(
            <React.Fragment>
                <h1>AgregarUsuario</h1>
                <form onSubmit={this.guardarUsuario}>
                    <div className="mb-3">
                        <label for="nombre" className="form-label">Nombre</label>
                        <input type="text" className="form-control" id="nombre" placeholder="Ingrese su Nombre"  name = "nombre" ref={this.nombre} onChange={this.changeState} />
                    </div>
                    <div className="mb-3">
                        <label for="apellido" className="form-label">Apellido</label>
                        <input type="text" className="form-control" id="apellido" placeholder="Ingrese su Apellido" name = "apellido" ref={this.apellido} onChange={this.changeState} />
                    </div>
                    <div className="mb-3">
                        <label for="correo" className="form-label">Correo</label>
                        <input type="email" className="form-control" id="correo" aria-describedby="emailHelp" placeholder="Ingrese su Correo" name = "correo" ref={this.correo} onChange={this.changeState} />
                    </div>
                    <div className="mb-3">
                        <label for="pass" className="form-label">Contraseña</label>
                        <input type="password" className="form-control" id="pass" placeholder="Ingrese su Contraseña" name = "pass" ref={this.pass} onChange={this.changeState} />
                    </div>
                    <input type="submit" className="btn btn-primary" />
                </form>
            </React.Fragment>
        )
    }
}

export default AgregarUsuario;