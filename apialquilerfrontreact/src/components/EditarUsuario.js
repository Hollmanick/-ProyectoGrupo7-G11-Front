import React, { Component } from "react";

class EditarUsuario extends Component {
    path = null;
    url =[];
    usuarioId = null

    componentWillUnmount() {
        this.path = window.location.pathname;
        console.log(this.path);
        this.url = this.path.split("/");
        console.log(this.url);
        this.usuarioId = this.url[2];
        console.log(this.usuarioId);
    }
    render() {
        return (
            <React.Fragment>
                <h1>Editar Usuario</h1>
                <form>
                    <div className="mb-3">
                        <label for="nombre" className="form-label">Nombre</label>
                        <input type="text" className="form-control" id="nombre" placeholder="Nombre" />
                    </div>
                    <div className="mb-3">
                        <label for="apellido" className="form-label">Apellido</label>
                        <input type="text" className="form-control" id="apellido" placeholder="Apellido" />
                    </div>
                    <div className="mb-3">
                        <label for="correo" className="form-label">Correo</label>
                        <input type="email" className="form-control" id="correo" aria-describedby="emailHelp" placeholder="Correo" />
                    </div>
                    <div className="mb-3">
                        <label for="pass" className="form-label">Contraseña</label>
                        <input type="password" className="form-control" id="pass" placeholder="Contraseña" />
                    </div>
                    <input type="submit" className="btn btn-primary" />
                </form>
            </React.Fragment>
        );
    }
}

export default EditarUsuario;