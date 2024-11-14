import { IPost } from "@/interfaces/IPost";
import { formatDate } from "date-fns";
import Image from "next/image";
import Link from "next/link";
interface IPostItemProps {
  readonly post: IPost;
  readonly type: "large" | "medium" | "small";
  readonly showImage?: boolean;
}

function PostItem({ post, type, showImage = true }: IPostItemProps) {
  const { title, content, image, date, slug, category, tags } = post;

  const postPath = `/posts/${slug}`;
  const imagePath = `/images/posts/post-slug/${image}`;

  let formattedDate = "Data inválida";

  if (date) {
    const parsedDate = new Date(date);
    if (!isNaN(parsedDate.getTime())) {
      formattedDate = formatDate(parsedDate, "dd/MM/yyyy HH:mm");
    }
  }

  const firstSentence = content.split(". ")[0] + ".";

  const renderPostContent = () => {
    switch (type) {
      case "small":
        return (
          <div className="d-flex row">
            {showImage ? (
              <>
                <Image
                  className="img-small-side"
                  src={imagePath}
                  alt={title}
                  width={150}
                  height={150}
                  style={{ objectFit: "cover" }}
                />
                <div>
                  <h6 className="mt-2">{title}</h6>
                </div>
              </>
            ) : (
              <div>
                <div>
                  <ul>
                    <li style={{ listStyle: "outside" }}>
                      <h6>{title}</h6>
                    </li>
                  </ul>
                </div>
              </div>
            )}
          </div>
        );

      case "medium":
        return (
          <>
            <div className="ratio ratio-16x9">
              <Image
                className="img-medium"
                src={imagePath}
                alt={title}
                layout="fill"
                style={{ objectFit: "cover" }}
              />
            </div>

            <div className="badge bg-secondary me-1 mt-2">{category}</div>

            <h3>{title}</h3>
            <p>{firstSentence}</p>
          </>
        );
      case "large":
        return (
          <>
            <div className="ratio ratio-16x9">
              <Image
                className="img-large"
                src={imagePath}
                alt={title}
                layout="fill"
                style={{ objectFit: "cover" }}
              />
            </div>

            <div className="badge bg-secondary me-1 mt-2">{category}</div>

            <h2>{title}</h2>
            <p>{firstSentence}</p>
          </>
        );
      default:
        return null;
    }
  };

  return (
    <Link href={postPath}>
      <article className={`${type === "small" ? "flex-grow-0 pt-0" : ""}`}>
        {renderPostContent()}
      </article>
    </Link>
  );
}

export default PostItem;
