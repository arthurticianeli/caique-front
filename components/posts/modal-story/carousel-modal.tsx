import { ICarouselModalPost } from "@/interfaces/ICarouselModalPost";
import "bootstrap/dist/css/bootstrap.min.css";
import React, { useEffect } from "react";
import NavigationButton from "./navigation-button";


interface CarouselModalProps {
    show: boolean;
    onHide: () => void;
    post: ICarouselModalPost;
}

const CarouselModal: React.FC<CarouselModalProps> = ({ show, onHide, post }) => {

    const [currentStory, setCurrentStory] = React.useState(0);

    // Avança para o próximo story
    const nextStory = () => {
        if (currentStory < post.storyItem.length - 1) {
            setCurrentStory(currentStory + 1);
        } else {
            setCurrentStory(0);
            onHide();
        }
    };

    // Retorna para o story anterior
    const prevStory = () => {
        if (currentStory > 0) {
            setCurrentStory(currentStory - 1);
        }
    };

    useEffect(() => {
        if (show) {
            document.body.style.overflow = "hidden"; // Remove rolagem do body
        } else {
            document.body.style.overflow = "auto"; // Restaura a rolagem
        }

        return () => {
            document.body.style.overflow = "auto"; // Garante que a rolagem volta ao normal ao desmontar
        };
    }, [show]);


    return (
        <div
            className={`modal fade ${show ? "show d-block" : "d-none"}`}
            tabIndex={-1}
            onClick={onHide}
        >
            <div
                className="modal-dialog modal-dialog-centered modal-fullscreen"
                onClick={(e) => e.stopPropagation()} // Evita fechar ao clicar no conteúdo
            >
                <div className="modal-content bg-dark border-0">
                    {/* Conteúdo principal */}
                    <div
                        className="d-flex align-items-center justify-content-center"
                        style={{
                            height: "100vh",
                            backgroundImage: `url(${post.storyItem[currentStory].image})`,
                            backgroundSize: "cover",
                            backgroundPosition: "center",
                            position: "relative",
                        }}
                    >
                        <div
                            style={{
                                width: "100%",
                                height: "100%",
                                backgroundImage: `url(/imagens/noticias/${post.storyItem[currentStory].image})`,
                                backgroundSize: "cover",
                                backgroundPosition: "center",
                                filter: "blur(100px)",
                                position: "absolute",
                                top: 0,
                                left: 0,
                            }}
                        />
                        <div
                            style={{
                                backgroundImage: `url(/imagens/noticias/${post.storyItem[currentStory].image})`,
                                backgroundSize: "cover",
                                backgroundPosition: "center",
                                display: "flex",
                                alignItems: "flex-end",
                                justifyContent: "flex-end",
                                position: "absolute",
                                bottom: 0,
                                left: 0,
                                right: 0,
                                height: "100%",
                                width: "375px",
                                margin: "auto",
                                zIndex: 2,
                            }}
                        >
                            <NavigationButton direction="prev" onClick={prevStory} />
                            <NavigationButton direction="next" onClick={nextStory} />

                            {/* Barra de progresso */}
                            <div
                                className="d-flex position-absolute top-0 start-0 w-100 px-2 pt-2"
                                style={{ zIndex: 10 }}
                            >
                                {post.storyItem.map((_, index) => (
                                    <div
                                        key={index}
                                        className="progress mx-1"
                                        style={{
                                            flex: 1,
                                            height: "4px",
                                            background: "rgba(255, 255, 255, 0.3)",
                                        }}
                                    >
                                        <div
                                            className="progress-bar"
                                            role="progressbar"
                                            style={{
                                                width: `${index <= currentStory ? "100%" : "0%"}`,
                                                transition: "width 0.5s linear",
                                                background: "#fff",
                                            }}
                                        ></div>
                                    </div>
                                ))}
                            </div>
                            {/* Sobreposição de gradiente */}
                            <div
                                style={{
                                    position: "absolute",
                                    bottom: 0,
                                    left: 0,
                                    right: 0,
                                    height: "50%",
                                    background:
                                        "linear-gradient(transparent, rgba(0, 0, 0, 0.8))",
                                    zIndex: 3,
                                }}
                            />

                        </div>
                        {/* Sobreposição de texto */}
                        <div
                            className="text-white text-center position-absolute"
                            style={{ bottom: "50px", zIndex: 4 }}
                        >
                            <h5 className="fw-bold text-black px-2 d-inline-block" style={{
                                background: "#3d9ecf"
                            }}>
                                {post.storyItem[currentStory].title}
                            </h5>
                            <p className="mt-2 text-white">{post.storyItem[currentStory].text}</p>
                        </div>



                        {/* Botão de fechar */}
                        <button
                            className="btn-close btn-close-white position-absolute top-0 end-0 m-3"
                            style={{ zIndex: 5 }}
                            aria-label="Close"
                            onClick={onHide}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CarouselModal;
