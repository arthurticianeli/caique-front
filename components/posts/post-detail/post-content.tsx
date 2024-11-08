import { IPost } from "@/interfaces/IPost";
import PostHeader from "./post-header";

interface IPostContentProps {
  readonly post: IPost;
}

function PostContent({
  post: { title, content, image, date, slug },
}: IPostContentProps) {
  const imagePath = `/images/posts/${slug}/${image}`;
  return (
    <article>
      <PostHeader image={imagePath} title={title} />
      <p>{content}</p>
      {slug}
    </article>
  );
}

export default PostContent;
