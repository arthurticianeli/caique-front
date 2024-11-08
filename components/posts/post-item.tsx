import { formatDate } from "date-fns";
import Image from "next/image";
import Link from "next/link";
import { IPost } from "./posts-grid";

interface IPostItemProps {
  post: IPost;
}

function PostItem({ post }: IPostItemProps) {
  const { title, content, image, date, slug } = post;

  const postPath = `/posts/${slug}`;
  const imagePath = `/images/posts/${slug}/${image}`;

  let formattedDate = "Data inválida";

  if (date) {
    const parsedDate = new Date(date);
    if (!isNaN(parsedDate.getTime())) {
      formattedDate = formatDate(parsedDate, "dd/MM/yyyy HH:mm");
    }
  }

  return (
    <li>
      <Link href={postPath}>
        <div>
          <Image
            src={imagePath}
            alt={title}
            width={300}
            height={200}
            // layout="responsive"
          />
        </div>
        <h2>{title}</h2>
        <time>{formattedDate}</time>
        <p>{content}</p>
      </Link>
    </li>
  );
}

export default PostItem;
