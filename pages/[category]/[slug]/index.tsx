import PostContent from "@/components/posts/post-detail/post-content";
import useFetch from "@/hooks/useFetch";
import { IPost } from "@/interfaces/IPost";
import Head from "next/head";
import { useRouter } from "next/router";



function PostPage() {

    const { slug } = useRouter().query;

    if (!slug) return null;

    const { data } = useFetch<IPost>(`https://new.caiquemarquez.com.br/app/noticia-end.php?slug=${slug}`, {} as IPost);

    return (
        <div style={{ marginTop: "120px" }}>
            <Head>
                <title>{data.post_title}</title>
                <meta name="description" content={data.post_title} />
            </Head>
            <PostContent post={data} key={data?.post_slug} />
        </div>
    );
}

export default PostPage;