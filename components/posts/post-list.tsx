import { IPost } from "@/interfaces/IPost";
import PostsGrid from "./posts-grid";

const PostList = ({ posts }: { posts: IPost[] }) => {
  return (
    <section>
      <h2>Posts</h2>
      <PostsGrid posts={posts} />
    </section>
  );
};

export default PostList;
