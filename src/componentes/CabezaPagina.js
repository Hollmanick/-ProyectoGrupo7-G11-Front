import React from "react";

class CabezaPagina extends React.Component {
    render() {
        return (
            <div>
                <h1><strong>Alquiler de carros en Bogotá Colombia</strong></h1>
                <img data-src="https://storage.googleapis.com/alquilatucarrocom/images/carros.png" class="img-fluid mx-auto lazyloaded" title="alquiler de carros en Bogotá" alt="alquiler de carros en Bogotá" src="https://storage.googleapis.com/alquilatucarrocom/images/carros.png" />

                <p>En Alquilatucarro rent a car Bogotá, tomar un servicio de alquiler de vehiculos es sencillo, únicamente necesita su Cédula o documento de identidad, su licencia de conducir y su tarjeta visa o mastercard con cupo disponible. con esto su alquiler de carros en Bogotá estará listo. Le damos la bienvenida para que se convierta en nuestro siguiente cliente satisfecho ya que contamos con varios años ofreciendo el más bajo precio en el alquiler de carros. Realice la reserva de su coche sin pagos anticipados (No requiere dinero para reservar), le ofrecemos autos para estrenar ya que renovamos nuestros autos cada dos años para que pueda conocer nuestra hermosa ciudad de Bogotá, tranquilo y confortable en sus traslados de trabajo o viaje de turismo.</p>

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