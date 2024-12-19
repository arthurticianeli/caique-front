import { ECategories } from "@/interfaces/ECategories";
import { IPost } from "@/interfaces/IPost";
import React from "react";
import PostItemStoryCard from "./post-item-story-card";

interface PostItemCarouselProps {
    posts: IPost[];
    category: ECategories;
    grouped?: boolean; // Define se os itens devem ser agrupados
}

const PostItemCarousel: React.FC<PostItemCarouselProps> = ({ posts, category, grouped = false }) => {
    const groupedPosts = grouped ? chunkArray(posts, 3) : posts?.map((post) => [post]); // Se não agrupado, cria arrays com 1 item cada

    return (
        <div id={`carousel${category}`} className="carousel slide" data-bs-ride="carousel">
            {/* Inner (Conteúdo do Carousel) */}
            <div className="carousel-inner">
                {groupedPosts?.map((group, index) => (
                    <div key={index} className={`carousel-item ${index === 0 ? "active" : ""}`}>
                        <div className={grouped ? "row" : ""}>
                            {group?.map((post) => (
                                <div
                                    key={post.post_slug}
                                    className={grouped ? "col-md-4 d-flex justify-content-center" : ""}
                                >
                                    <PostItemStoryCard post={post} />
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>

            {/* Indicadores Abaixo */}
            <div className="carousel-indicators mt-3 d-flex justify-content-center" >
                {groupedPosts?.map((_, index) => (
                    <button
                        key={index}
                        type="button"
                        data-bs-target={`#carousel${category}`}
                        data-bs-slide-to={index}
                        className={index === 0 ? "active" : ""}
                        aria-current={index === 0 ? "true" : undefined}
                        aria-label={`Slide ${index + 1}`}
                    ></button>
                ))}
            </div>

            {/* Controles */}
            <button
                className="carousel-control-prev"
                type="button"
                data-bs-target={`#carousel${category}`}
                data-bs-slide="prev"
            >

                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button
                className="carousel-control-next"
                type="button"
                data-bs-target={`#carousel${category}`}
                data-bs-slide="next"
            >
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
        </div>
    );
};

// Função utilitária para agrupar itens
const chunkArray = <T,>(array: T[], size: number): T[][] =>
    Array.from({ length: Math.ceil(array?.length / size) }, (_, i) =>
        array.slice(i * size, i * size + size)
    );

export default PostItemCarousel;
