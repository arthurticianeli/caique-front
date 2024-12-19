import { ECategories } from "@/interfaces/ECategories";
import React from "react";


const CarouselComponent: React.FC<{ category: ECategories; indicators: React.ReactNode, inner: React.ReactNode }> = ({
    category,
    indicators,
    inner,
}) => {
    return (
        <div id={`carouselDesktop${category}`} className="carousel slide container" data-bs-ride="carousel">
            {/* Indicadores */}
            <div className="carousel-indicators">
                {indicators}
            </div>

            {/* Itens do Carrossel */}
            <div className="carousel-inner">
                {inner}
            </div>

            {/* Controles */}
            <button
                className="carousel-control-prev"
                type="button"
                data-bs-target={`#carouselDesktop${category}`}
                data-bs-slide="prev"
            >
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button
                className="carousel-control-next"
                type="button"
                data-bs-target={`#carouselDesktop${category}`}
                data-bs-slide="next"
            >
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
        </div>
    );
};

export default CarouselComponent;