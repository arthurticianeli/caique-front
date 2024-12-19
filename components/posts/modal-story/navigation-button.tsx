import React from "react";

interface NavigationButtonProps {
    direction: "prev" | "next";
    onClick: () => void;
}

const NavigationButton: React.FC<NavigationButtonProps> = ({
    direction,
    onClick,
}) => {
    return (
        <>
            <button
                onClick={onClick}
                className="d-flex align-items-center justify-content-center position-absolute"
                style={{
                    width: "50px",
                    height: "50px",
                    borderRadius: "50%",
                    backgroundColor: "#fff",
                    boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.2)",
                    border: "none",
                    zIndex: 100,
                    top: "50%",
                    transform: "translateY(-50%)",
                    [direction === "prev" ? "left" : "right"]: "-80px", // Alinha à esquerda ou à direita
                    cursor: "pointer",
                }}
            >
                <span
                    style={{
                        display: "inline-block",
                        width: "10px",
                        height: "10px",
                        borderTop: "2px solid black",
                        borderRight: "2px solid black",
                        transform:
                            direction === "prev" ? "rotate(-135deg)" : "rotate(45deg)", // Gira a seta para a direção
                    }}
                ></span>
            </button>
            <div
                className="position-absolute top-0 bottom-0 w-50"
                onClick={onClick}
                style={{ cursor: "pointer", zIndex: 10, [direction === "prev" ? "left" : "right"]: 0 }}
            />

        </>
    );
};

export default NavigationButton;
