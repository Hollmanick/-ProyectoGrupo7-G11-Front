import React from "react";

class CabezaPagina extends React.Component {
    render() {
        return (
            <div>
                <h1><strong>Alquiler de carros en Colombia</strong></h1>
                <img data-src="https://storage.googleapis.com/alquilatucarrocom/images/carros.png" class="img-fluid mx-auto lazyloaded" title="alquiler de carros en Colombia" alt="alquiler de carros en Colombia" src="https://storage.googleapis.com/alquilatucarrocom/images/carros.png" />

                <p>En el Grupo SEVEN ofrecemos sevicios de renta de vehiculos. Contamos con vehiculos a precios bajos. Realice su reserva sin pagos anticipados, le ofrecemos autos para estrenar y para usar en todo tipo de terrenos, que se adaptan a nuestra topografía.</p>

                <div class="row">
                    <div class="col-md"></div>
                    <div class="col-md">
                        <h4><strong>Mas Cobertura</strong></h4>
                        <img data-src="https://storage.googleapis.com/alquilatucarrocom/landing2020/images/cobertura.svg" width="65" height="65" class="img-fluid mx-auto lazyloaded" alt="cobertura" src="https://storage.googleapis.com/alquilatucarrocom/landing2020/images/cobertura.svg" />
                    </div>

                    <div class="col-md">
                        <h4><strong>Mayor Protección</strong></h4>
                        <img data-src="https://storage.googleapis.com/alquilatucarrocom/landing2020/images/proteccion.svg" width="65" height="65" class="img-fluid mx-auto lazyloaded" alt="proteccion" src="https://storage.googleapis.com/alquilatucarrocom/landing2020/images/proteccion.svg" />
                    </div>
                    <div class="col-md"></div>
                </div>
            </div>
        );
    }
}

export default CabezaPagina;