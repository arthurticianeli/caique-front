import { usePostsDestaque } from "@/hooks/PostsDestaqueContext";
import useFetch from "@/hooks/useFetch";
import { ECategories } from "@/interfaces/ECategories";
import { IFetchResponse } from "@/interfaces/IFetchResponse";
import { IPost } from "@/interfaces/IPost";
import React from "react";
import PostItem from "../posts/post-item";
import LayoutCategory from "./layout-category";


interface CategorySection3ColProps {
    category: ECategories;
}

const CategorySection3Col: React.FC<CategorySection3ColProps> = ({ category }) => {
    const { categoryCount } = usePostsDestaque();
    const { data } = useFetch<IFetchResponse<IPost>>(`https://new.caiquemarquez.com.br/app/api.php?noticias&cat=${category}&qtd=6&offset=${categoryCount[category]}`, {} as IFetchResponse<IPost>);

    return (
        <LayoutCategory category={category}>
            {data.data?.slice(0, 3).map((post) => (
                <div
                    key={post.post_slug}
                    className={`col-12 col-md-4 p-0 px-sm-2`}
                >
                    <PostItem post={post} type={"medium"} />
                </div>
            ))}

        </LayoutCategory>
    );
};

export default CategorySection3Col;
