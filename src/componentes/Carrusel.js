import React from "react";

class Carrusel extends React.Component {
    render() {
        return (
            <div id="carouselExampleFade" className="carousel slide carousel-fade" data-bs-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src="imagenes/ChevroletSail.png" className="d-block w-100" alt="Chevrolet Sail" />
                    </div>
                    <div className="carousel-item">
                        <img src="imagenes/KiaSportage.png" className="d-block w-100" alt="Kia Sportage" />
                    </div>
                    <div className="carousel-item">
                        <img src="imagenes/NissanVersa.png" className="d-block w-100" alt="Nissan Versa" />
                    </div>
                </div>
                <button className="carousel-control-prev btn btn-button dark" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Anterior</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Siguiente</span>
                </button>
            </div>
        );
    }
}

export default Carrusel;
