import { IPost } from "@/interfaces/IPost";
import Link from "next/link";
import { CategoryStory } from "../categories/category-story";
import PostItemPlayIcon from "./post-item-play-icon";
import styles from "./post-item-story.module.css";


interface PostStoryCardProps {
    post: IPost;

}

const PostItemStoryCard: React.FC<PostStoryCardProps> = ({ post }) => {
    if (!post) return null;

    const imageUrl = post.post_video ? `url(${post.post_image})` : `url(/imagens/noticias/${post.post_image})`
    const postUrl = `/posts/${post.post_slug}`;

    return (
        <Link href={postUrl} passHref className="w-100">
            <div className={styles.card} aria-label={`Leia mais sobre ${post.post_title}`}>
                <div
                    className={styles.imageContainer}
                    style={{ backgroundImage: imageUrl }}
                >
                    <div className={styles.overlay}>
                        <div className="position-absolute z-3 bottom-0">
                            <CategoryStory category={post.categoria_nome} />
                            <h5 className={styles.title}>{post.post_title}</h5>
                        </div>
                    </div>
                    {/* Ícone de play se for vídeo */}
                    {post.post_video && <PostItemPlayIcon stories />}
                </div>
            </div>
        </Link>
    );
};

export default PostItemStoryCard;
