import BannerComponent from "@/components/banners/banner-component";

import HtmlRenderer from "@/helpers/html-render";
import { useBanners } from "@/hooks/BannersContext";
import { IPost } from "@/interfaces/IPost";
import PostHeader from "./post-header";

interface IPostContentProps {
  readonly post: IPost;
}

function PostContent({ post }: IPostContentProps) {
  if (!post) {
    return null;
  }
  const { banners } = useBanners();

  console.log(post?.post_content)

  return (
    <article>
      <div className="bg-body-secondary">
        <BannerComponent banners={banners?.slice(0, 2)} fluid />
      </div>
      <PostHeader post={post} />
      <div className="container container-post mb-3" >
        <HtmlRenderer htmlContent={post?.post_content} />
      </div>
      <div className="bg-body-secondary">
        <BannerComponent banners={banners?.slice(2)} fluid />
      </div>
    </article >
  );
}

export default PostContent;
