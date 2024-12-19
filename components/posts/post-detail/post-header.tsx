import useMediaQuery from "@/hooks/useMediaQuery";
import { IPost } from "@/interfaces/IPost";
import ImageVideo from "../image-video";

interface IPostHeaderProps {
  post: IPost;
}

function PostHeader({ post }: IPostHeaderProps) {
  const { isMobile } = useMediaQuery();

  return (
    <header>
      <div className="container container-post" >
        <h1>{post?.post_title}</h1>
        <time>
          <small>Publicado no dia de {post?.post_date}</small>
        </time>
      </div>
      <div className={`${isMobile ? "" : "container container-post"}`}>
        <ImageVideo post={post} showYoutubePlayer={!!post.post_video} />
      </div>
    </header >
  );
}

export default PostHeader;
