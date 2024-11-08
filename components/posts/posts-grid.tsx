import { IPost } from "@/interfaces/IPost";
import PostItem from "./post-item";

interface IPostsGridProps {
  posts: IPost[];
}

function PostsGrid({ posts }: IPostsGridProps) {
  return (
    <ul>
      {posts.map((post) => (
        <PostItem post={post} key={post.slug} />
      ))}
    </ul>
  );
}

export default PostsGrid;
