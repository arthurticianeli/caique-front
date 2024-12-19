import useResponsiveItems from "@/hooks/useResponsiveItems";
import { ICarouselModalPost } from "@/interfaces/ICarouselModalPost";
import "bootstrap/dist/css/bootstrap.min.css";
import Link from "next/link";
import React, { useCallback, useState } from "react";
import CarouselModal from "./modal-story/carousel-modal";
import styles from "./post-highlights.module.css";

interface PostHighlightsProps {
    carouselStoryPosts: ICarouselModalPost[];
}

const PostHighlights: React.FC<PostHighlightsProps> = ({ carouselStoryPosts }) => {
    const [showModal, setShowModal] = useState(false);
    const [index, setIndex] = useState(0);
    const itemsToShow = useResponsiveItems();

    const handleClick = useCallback((index: number) => {
        setShowModal(true);
        setIndex(index);
    }, []);

    return (
        <>
            <div className={`container ${styles.container}`}>
                <div className="d-flex justify-content-between">
                    {carouselStoryPosts?.slice(0, itemsToShow).map((story, i) => (
                        <PostHighlightCard
                            key={i}
                            story={story}
                            onClick={() => handleClick(i)}
                        />
                    ))}
                    {/* "Mais Stories" */}
                    <div className="text-center mx-auto">
                        <Link href="/stories" style={{
                            textDecoration: "none",

                        }}>
                            <div
                                className={`${styles.circle} ${styles.moreStories}`}
                                role="button"
                                aria-label="Ver mais histórias"
                            >
                                <span className="display-6">+</span>
                            </div>
                            <p className={styles.title}>Ver mais</p>
                        </Link>
                    </div>
                </div>
                <CarouselModal
                    show={showModal}
                    onHide={() => setShowModal(false)}
                    post={carouselStoryPosts?.[index]}
                />
            </div>
            <div className={styles.background} />
        </>
    );
};

interface PostHighlightCardProps {
    story: ICarouselModalPost;
    onClick: () => void;
}

const PostHighlightCard: React.FC<PostHighlightCardProps> = ({ story, onClick }) => (
    <div
        className={`text-center ${styles.card}`}
        role="button"
        tabIndex={0}
        onClick={onClick}
        aria-label={`Veja mais sobre ${story.title}`}
    >
        <div
            className={`${styles.circle}`}
            style={{
                borderBottomColor: "#3d9ecf",
                backgroundImage: `url(/imagens/noticias/${story?.storyItem?.[0]?.image})`,
            }}
        />
        <p className={styles.title}>{story.title}</p>
    </div>
);

export default PostHighlights;
