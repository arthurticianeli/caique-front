import useMediaQuery from "@/hooks/useMediaQuery";
import { IPost } from "@/interfaces/IPost";
import Image from 'next/image';
import React from 'react';
import { CategoryBadge } from "../categories/category-badge";
import YoutubeEmbed from "../videos/youtube-embed";
import PostItemPlayIcon from "./post-item-play-icon";


interface Props {
    post: IPost
    small?: boolean
    width?: number
    height?: number
    showYoutubePlayer?: boolean
}

const ImageVideo: React.FC<Props> = ({ post, small = false, width = 1000, height = 1000, showYoutubePlayer }) => {

    if (!post) {
        return null;
    }

    const { post_video, post_image, post_title, categoria_nome, } = post
    const { isMobile } = useMediaQuery();

    const imageUrl = post_video ? post_image : `/imagens/noticias/${post_image}`

    return (
        <div className="position-relative">
            {small ? (
                <div className="ratio ratio-16x9">
                    <Image src={imageUrl} alt={post_title} width={width} height={height} className="rounded-3" />
                </div>
            ) : (
                <div className={`ratio ratio-16x9 my-3 m-auto ${isMobile ? "p-0" : ""} `}>
                    {showYoutubePlayer && post_video ? <YoutubeEmbed url={post_video} /> : <Image src={imageUrl} alt={post_title} width={width} height={height} className={`${isMobile ? "" : "rounded-3"}`} />}

                </div>
            )}
            {!showYoutubePlayer && <CategoryBadge category={categoria_nome} />}
            {!showYoutubePlayer && post_video && <PostItemPlayIcon />}
        </div>
    );
};

export default ImageVideo;

