import { ECategories } from "./ECategories";

export type IPost = {
  id: number;
  id_categoria: number;
  id_album: number;
  post_date: string;
  post_content: string;
  post_title: string;
  post_subtitle: string;
  post_status: string;
  post_slug: string;
  post_image: string;
  post_leg: string;
  post_imgcredits: string;
  post_video: string;
  post_videoc: string;
  post_parent: number;
  categoria_nome: ECategories;
};