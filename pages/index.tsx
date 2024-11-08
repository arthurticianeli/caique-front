import PostsGrid from "@/components/posts/posts-grid";
import { IPost } from "@/interfaces/IPost";
import Head from "next/head";

export const postsMock: IPost[] = [
  {
    title: "Post Title",
    content:
      "Considerado um dos políticos mais experientes do atual cenário político gramadense, o vereador e candidato à reeleição, Rafael Ronsoni, do Progressistas, em meio à campanha segue realizando novas filiações ao partido. O Progressistas de Gramado já é considerado o maior da região em número de filiados e Ronsoni desponta como um dos principais na captação de novos membros da sigla. Segundo Ronsoni, a chegada de novos filiados acontece após a comunidade perceber o desenvolvimento de Gramado através das administrações Progressistas. “As filiações confirmam a aprovação dos gramadenses. É de conhecimento de todos que não medimos esforços para levar desenvolvimento e qualidade de vida a todos”, explica o vereador, que busca sua sexta reeleição. Na convenção municipal, o Progressistas anunciou a filiação de 3 mil. De acordo com o candidato, todos os dias é procurado para realizar a entrada de novos membros ao partido. “Quero agradecer a todos que de uma maneira muito especial tem feito contato, principalmente pelas redes sociais manifestando o desejo de se filiar. Todos são bem-vindos”, comenta Rafael Ronsoni.",
    image: "post-image.png",
    date: "2022-02-10",
    slug: "post-slug",
  },
];

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
      <section>
        <h2>Posts</h2>
        <PostsGrid posts={postsMock} />
      </section>
    </>
  );
}
