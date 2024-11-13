import { IPost } from "@/interfaces/IPost";
import { formatDate } from "date-fns";
import Link from "next/link";
interface IPostItemProps {
  readonly post: IPost;
  readonly type: "large" | "medium" | "small";
  readonly showImage?: boolean;
}

const tagItemsMock = [
  { name: "Design", link: "#" },
  { name: "Development", link: "#" },
  { name: "Travel", link: "#" },
  { name: "Web-design", link: "#" },
  { name: "Marketing", link: "#" },
  { name: "Research", link: "#" },
];

function PostItem({ post, type, showImage = true }: IPostItemProps) {
  const { title, content, image, date, slug } = post;

  const postPath = `/posts/${slug}`;
  //   const imagePath = `/images/posts/post-slug/423-500x1000.jpg`;
  const imagePath = `/images/posts/post-slug/1024-1000x1000.jpg`;

  let formattedDate = "Data inválida";

  if (date) {
    const parsedDate = new Date(date);
    if (!isNaN(parsedDate.getTime())) {
      formattedDate = formatDate(parsedDate, "dd/MM/yyyy HH:mm");
    }
  }

  const firstSentence = content.split(". ")[0] + ".";

  return (
    <Link href={postPath}>
      <article className={`${type === "small" ? "flex-grow-0 pt-0" : ""}`}>
        {showImage && (
          <div
            className={`img-container ${
              type === "large" ? "img-container-larger" : "img-container-medium"
            }`}
          >
            <img
              className={`card-img-top img-fluid ${
                type === "large" ? "img-top-larger" : "img-top-medium"
              }`}
              src={imagePath}
              alt={title}
            />
          </div>
        )}

        <div>
          <h2 className={`card-title ${type === "small" ? "h5 my-4" : ""}`}>
            {type === "small" ? (
              <>
                <small>
                  <time className="article-date">{formattedDate}</time>
                </small>
                {` - ${title}`}
              </>
            ) : (
              title
            )}
          </h2>
          {type !== "small" && (
            <>
              <h6 className="mb-2">
                <div className="badge bg-secondary me-1 mt-2">Lifestyle</div>
              </h6>
              <small className="d-block mb-2">
                <time className="article-date">{formattedDate}</time>
              </small>
              <p className="card-text mb-3">{firstSentence}</p>
            </>
          )}
        </div>
        {type !== "small" && (
          <div className="d-flex justify-content-center flex-wrap">
            {tagItemsMock.map((tag) => (
              <span key={tag.name} className="badge bg-secondary me-1 mb-1">
                {tag.name}
              </span>
            ))}
          </div>
        )}
      </article>
    </Link>
  );
}

export default PostItem;
