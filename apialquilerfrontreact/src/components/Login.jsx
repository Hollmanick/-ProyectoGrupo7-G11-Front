import React, {Component} from 'react';

class LogIn extends Component {
    

    render () {
        return(
            <div>
                <h1>Hola Mundo desde componente</h1>
                <button className='btn btn-warning'>Iniciar sesion</button>
            </div>
        )
    }
}

export {
    LogIn
}