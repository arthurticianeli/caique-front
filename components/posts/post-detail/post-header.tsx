import Image from "next/image";

interface IPostHeaderProps {
  readonly title: string;
  readonly image: string;
}

function PostHeader({ title, image }: IPostHeaderProps) {
  return (
    <header>
      <h1>{title}</h1>
      <Image src={image} alt={title} width={200} height={150} />
    </header>
  );
}

export default PostHeader;
