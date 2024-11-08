import PostContent from "@/components/posts/post-detail/post-content";
import { IPost } from "@/interfaces/IPost";
import { GetStaticPropsContext, GetStaticPropsResult } from "next";
import Head from "next/head";
import { postsMock } from "..";

interface PostPageProps {
  post: IPost;
}

function PostPage({ post }: Readonly<PostPageProps>) {
  return (
    <>
      <Head>
        <title>{post.title}</title>
        <meta name="description" content={post.title} />
      </Head>
      <PostContent post={post} key={post.slug} />
    </>
  );
}

export async function getStaticProps(
  context: GetStaticPropsContext
): Promise<GetStaticPropsResult<PostPageProps>> {
  const { params } = context;
  const { slug } = params as { slug: string };

  const post = postsMock.find((p) => p.slug === slug) || postsMock[0];
  return {
    props: {
      post,
    },
    revalidate: 600,
  };
}

export async function getStaticPaths() {
  return {
    paths: postsMock.map((post) => ({ params: { slug: post.slug } })),
    fallback: false,
  };
}

export default PostPage;
