import { extractFirstSentence, getEnumKeyByValue } from "@/helpers/functions";
import { bgColor } from "@/interfaces/BgColors";
import { ECategories } from "@/interfaces/ECategories";
import { IPost } from "@/interfaces/IPost";
import Link from "next/link";
import ImageVideo from "./image-video";
import styles from "./post-item.module.css"; // Importando classes CSS para evitar estilos inline

interface IPostItemProps {
  readonly post: IPost;
  readonly type: "list" | "large" | "medium" | "small";
}

const PostItem: React.FC<IPostItemProps> = ({ post, type }) => {
  if (!post) return null;

  const { post_title, post_content, post_slug, categoria_nome } = post;

  const postPath = `/${getEnumKeyByValue(ECategories, categoria_nome)}/${post_slug}`;
  const firstSentence = extractFirstSentence(post_content);

  // Renderização para o tipo "list"
  const renderList = () => (
    <div className="d-flex row">
      <ul>
        <li style={{ listStyle: "outside", color: categoria_nome ? bgColor[categoria_nome] : "defaultColor" }}>
          <h6 className={styles.listTitle}>{post_title}</h6>
        </li>
      </ul>
    </div>
  );

  // Renderização para o tipo "small"
  const renderSmall = () => (
    <div className={`clearfix ${styles.container}`}>
      <div className={`${styles.imageContainer} float-start`}>
        <ImageVideo
          post={post}
          small
        />
      </div>
      <div>
        <h6 className={styles.smallTitle}>{post_title}</h6>
        <p className={styles.smallText}>{firstSentence}</p>
      </div>
    </div>
  );

  // Renderização padrão para "medium" e "large"
  const renderDefault = () => (
    <>
      <ImageVideo post={post} />
      <div className="container">
        <h2 className={type === "medium" ? styles.mediumTitle : styles.largeTitle}>
          {post_title}
        </h2>
        <p>{firstSentence}</p>
      </div>
    </>
  );

  const renderPostContent = () => {
    switch (type) {
      case "list":
        return renderList();
      case "small":
        return renderSmall();
      default:
        return renderDefault();
    }
  };

  return (
    <Link href={postPath} passHref>
      <article className={styles.postItem}>
        {renderPostContent()}
      </article>
    </Link>
  );
};

export default PostItem;
