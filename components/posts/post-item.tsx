import { IPost } from "@/interfaces/IPost";
import { formatDate } from "date-fns";
import Link from "next/link";

export enum EPostSize {
  SMALL = "small",
  MEDIUM = "medium",
  LARGE = "large",
}
interface IPostItemProps {
  readonly post: IPost;
  readonly size: EPostSize;
  readonly postFull?: boolean;
  readonly showImage?: boolean;
}

const postSizeClasses = {
  [EPostSize.SMALL]: "col-md-4",
  [EPostSize.MEDIUM]: "col-md-6",
  [EPostSize.LARGE]: "col-md-12",
};

const tagItemsMock = [
  { name: "Design", link: "#" },
  { name: "Development", link: "#" },
  { name: "Travel", link: "#" },
  { name: "Web-design", link: "#" },
  { name: "Marketing", link: "#" },
  { name: "Research", link: "#" },
  { name: "Managment", link: "#" },
];

function PostItem({
  post,
  size,
  postFull = true,
  showImage = false,
}: IPostItemProps) {
  const { title, content, image, date, slug } = post;

  const postPath = `/posts/${slug}`;
  const imagePath = `/images/posts/post-slug/1024-1000x1000.jpg`;
  // const imagePath = `/images/posts/post-slug/423-500x1000.jpg`;
  // const imagePath = `/images/posts/post-slug/${image}`;
  // const imagePath = `/images/posts/${slug}/${image}`;

  let formattedDate = "Data inválida";

  if (date) {
    const parsedDate = new Date(date);
    if (!isNaN(parsedDate.getTime())) {
      formattedDate = formatDate(parsedDate, "dd/MM/yyyy HH:mm");
    }
  }

  const endIndex = content.indexOf(" ", 150);
  const truncatedContent =
    content.substring(0, endIndex > 0 ? endIndex : 150) + "...";

  const showImageSmallSize = postFull || showImage;

  return (
    <div className={`card ${postSizeClasses[size]}`}>
      <Link href={postPath}>
        {postFull ? (
          <article className="card-body">
            <div
              className="card-img-top"
              style={{
                width: "",
                margin: "auto",
                backgroundColor: "#f0f0f0",
                maxWidth: "600px",
                maxHeight: "600px",
                borderRadius: 10,
                marginBottom: "15px",
              }}
            >
              <img
                src={imagePath}
                alt={title}
                style={{
                  width: "100%",
                  height: "auto",
                  maxWidth: "600px",
                  maxHeight: "600px",
                  objectFit: "contain",
                  borderRadius: 10,
                }}
              />
            </div>

            <h2 className="card-title">{title}</h2>
            <h6>
              <div className="link-button">Lifestyle</div>
            </h6>
            <time className="article-date">{formattedDate}</time>
            <p className="card-text">{truncatedContent}</p>
          </article>
        ) : (
          <article
            className="card-body"
            style={{
              display: "flex",
              flexDirection: "row",
            }}
          >
            {showImageSmallSize && (
              <div
                className="card-img-top"
                style={{
                  margin: "0 15px 0 0",
                  maxWidth: "150px",
                  maxHeight: "150px",
                }}
              >
                <img
                  src={imagePath}
                  alt={title}
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    borderRadius: 10,
                  }}
                />
              </div>
            )}
            <div>
              <h2 className="card-title">{title}</h2>
              <h6>
                <div className="link-button">Lifestyle</div>
              </h6>
              <time className="article-date">{formattedDate}</time>
            </div>
          </article>
        )}
      </Link>
      {postFull && (
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
          }}
        >
          {tagItemsMock.map((tag) => (
            <Link
              key={tag.name}
              href={tag.link}
              style={{
                display: "inline-block",
                padding: "5px 10px",
                margin: "5px",
                backgroundColor: "#f0f0f0",
                color: "#333",
                borderRadius: "5px",
                textDecoration: "none",
                fontSize: "14px",
                transition: "background-color 0.3s ease",
                textWrap: "nowrap",
                width: "fit-content",
              }}
            >
              {tag.name}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}

export default PostItem;
