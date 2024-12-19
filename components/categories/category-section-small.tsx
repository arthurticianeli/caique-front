import { usePostsDestaque } from "@/hooks/PostsDestaqueContext";
import useFetch from "@/hooks/useFetch";
import { ECategories } from "@/interfaces/ECategories";
import { IFetchResponse } from "@/interfaces/IFetchResponse";
import { IPost } from "@/interfaces/IPost";
import React from "react";
import PostItem from "../posts/post-item";
import LayoutCategory from "./layout-category";


interface CategorySectionSmallProps {
    category: ECategories;
}

const CategorySectionSmall: React.FC<CategorySectionSmallProps> = ({ category }) => {
    const { categoryCount } = usePostsDestaque();
    const { data } = useFetch<IFetchResponse<IPost>>(`https://new.caiquemarquez.com.br/app/api.php?noticias&cat=${category}&qtd=6&offset=${categoryCount[category]}`, {} as IFetchResponse<IPost>);

    return (
        <LayoutCategory category={category}>
            {data.data?.slice(0, 4).map((post) => (
                <div
                    key={post.post_slug}
                    className={`col-12 col-lg-6 p-0 px-md-2`}
                >
                    <PostItem post={post} type={"small"} />
                </div>
            ))}
        </LayoutCategory>
    );
};

export default CategorySectionSmall;
