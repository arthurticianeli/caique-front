import PostItem from "@/components/posts/post-item";
import "@/components/posts/styles.css";
import { postsMock } from "@/mocks/postsMock";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Caique Marquez Blog</title>
        <meta
          name="description"
          content="Notícias sobre Gramado - Rio Grande do Sul"
        />
      </Head>
      <section className="container">
        <h1>Notícias sobre Gramado - Rio Grande do Sul</h1>
        <div className="row g-5">
          <div className="col-12 col-md-3 order-2 order-md-1">
            {postsMock.slice(1, 2).map((post) => (
              <div className="h-100" key={post.slug}>
                <PostItem post={post} type="medium" />
              </div>
            ))}
          </div>
          <div className="col-12 col-md order-1 order-md-2">
            <div className="h-100">
              <PostItem post={postsMock[0]} type="large" />
            </div>
          </div>
          <div className="col-12 col-md-3 order-3">
            <div className=" h-100">
              <h2 className="text-center mb-4">Últimas notícias</h2>
              {postsMock.slice(1, 11).map((post) => (
                <PostItem
                  post={post}
                  type="small"
                  showImage={false}
                  key={post.slug}
                />
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
