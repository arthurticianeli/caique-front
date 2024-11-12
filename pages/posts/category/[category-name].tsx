import LoadingComponent from "@/components/loading/loading-component";

import useFetch from "@/hooks/useFetch";
import { IPost } from "@/interfaces/IPost";
import { postsMock } from "@/mocks/postsMock";

import Head from "next/head";
import { useRouter } from "next/router";

function CategoryPage() {
  const router = useRouter();
  const { category } = router.query;

  const { data: posts, isLoading } = useFetch<IPost[]>(
    category
      ? `https://jsonplaceholder.typicode.com/posts?category=${category}`
      : "",
    postsMock
  );

  if (isLoading) {
    return <LoadingComponent />;
  }

  return (
    <div>
      <Head>
        <title>{category}</title>
        <meta
          name="description"
          content={`Novidades sobre Gramado na categoria de ${category}`}
        />
      </Head>
      <h1>{category}</h1>
    </div>
  );
}

export default CategoryPage;
