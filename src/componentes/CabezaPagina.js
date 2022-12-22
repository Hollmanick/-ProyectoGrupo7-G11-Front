import React from "react";

class CabezaPagina extends React.Component {
    render() {
        return (
            <div>
                <h1><strong>Alquiler de carros en Colombia</strong></h1>
                <img data-src="https://storage.googleapis.com/alquilatucarrocom/images/carros.png" class="img-fluid mx-auto lazyloaded" title="alquiler de carros en Colombia" alt="alquiler de carros en Bogotá" src="https://storage.googleapis.com/alquilatucarrocom/images/carros.png" />

                <p>En Grupo Seven tomar un servicio de alquiler de vehiculos es sencillo, únicamente necesita su licencia de conducción y registrarse en nuestra pagina. Con esto su alquiler de carros en Colombia estará listo. Le damos la bienvenida para que se convierta en nuestro siguiente cliente satisfecho ya que contamos con el más bajo precio en el mercado de alquiler de carros. Realice la reserva de su coche sin pagos anticipados (No requiere dinero para reservar), le ofrecemos autos para estrenar en los que podra conocer nuestro hermoso pais, tranquilo y confortable en sus traslados de trabajo o viaje de turismo.</p>

                <div class="row">
                    <div class="col-md"></div>
                    <div class="col-md">
                        <h4><strong>Mayor Cobertura</strong></h4>
                        <img data-src="https://storage.googleapis.com/alquilatucarrocom/landing2020/images/cobertura.svg" width="65" height="65" class="img-fluid mx-auto lazyloaded" alt="cobertura" src="https://storage.googleapis.com/alquilatucarrocom/landing2020/images/cobertura.svg" />
                    </div>

                    <div class="col-md">
                        <h4><strong>Mejor Protección</strong></h4>
                        <img data-src="https://storage.googleapis.com/alquilatucarrocom/landing2020/images/proteccion.svg" width="65" height="65" class="img-fluid mx-auto lazyloaded" alt="proteccion" src="https://storage.googleapis.com/alquilatucarrocom/landing2020/images/proteccion.svg" />
                    </div>
                    <div class="col-md"></div>
                </div>
            </div>
        );
    }
}

export default CabezaPagina;