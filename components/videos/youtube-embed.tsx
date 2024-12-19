import { useState } from "react";

import useInView from "@/hooks/useInView";
import styles from "./youtube-embed.module.css";

interface YoutubeEmbedProps {
    url: string;
    width?: number | string;
    height?: number | string;
    className?: string;
}

const YoutubeEmbed: React.FC<YoutubeEmbedProps> = ({
    url,
    width = "100%",
    height = "100%",
    className = "",
}) => {
    const [isLoaded, setIsLoaded] = useState(false);
    const [ref, inView] = useInView({ rootMargin: "200px" }); // Lazy loading otimizado

    // Extração do ID do vídeo a partir da URL
    const videoId = url.split("v=")[1]?.split("&")[0];
    const embedUrl = `https://www.youtube-nocookie.com/embed/${videoId}`;

    const handleLoad = () => {
        setIsLoaded(true);
    };

    return (
        <div
            ref={ref as React.RefObject<HTMLDivElement>}
            className={`${styles.embedContainer} ${className}`}
            style={{ width, height }}
        >
            {inView ? (
                <iframe
                    className={styles.iframe}
                    src={embedUrl}
                    width="100%"
                    height="100%"
                    onLoad={handleLoad}
                    loading="lazy"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    title="Embedded YouTube Video"
                />
            ) : (
                // Placeholder com a thumbnail do vídeo
                <div
                    className={styles.placeholder}
                    style={{
                        backgroundImage: `url(https://img.youtube.com/vi/${videoId}/hqdefault.jpg)`,
                    }}
                >
                    <div className={styles.playButton}>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="white"
                            width="48px"
                            height="48px"
                        >
                            <path d="M8 5v14l11-7z" />
                        </svg>
                    </div>
                </div>
            )}
            {!isLoaded && inView && (
                <div className={styles.loadingOverlay}>
                    <span>Carregando...</span>
                </div>
            )}
        </div>
    );
};

export default YoutubeEmbed;
