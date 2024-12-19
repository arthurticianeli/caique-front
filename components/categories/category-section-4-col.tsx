import { usePostsDestaque } from "@/hooks/PostsDestaqueContext";
import useFetch from "@/hooks/useFetch";
import { ECategories } from "@/interfaces/ECategories";
import { IFetchResponse } from "@/interfaces/IFetchResponse";
import React from "react";
import { IPost } from "../../interfaces/IPost";
import PostItem from "../posts/post-item";
import LayoutCategory from "./layout-category";


interface CategorySection4ColProps {
    category: ECategories;
}

const CategorySection4Col: React.FC<CategorySection4ColProps> = ({ category }) => {
    const { categoryCount } = usePostsDestaque();
    const { data } = useFetch<IFetchResponse<IPost>>(`https://new.caiquemarquez.com.br/app/api.php?noticias&cat=${category}&qtd=6&offset=${categoryCount[category]}`, {} as IFetchResponse<IPost>);
    return (
        <LayoutCategory category={category}>
            {data.data?.slice(0, 4).map((post) => (
                <div
                    key={post.post_slug}
                    className={`col-12 col-sm-6 col-lg-3 p-0 px-md-2`}
                >
                    <PostItem post={post} type={"medium"} />
                </div>
            ))}
        </LayoutCategory>
    );
};

export default CategorySection4Col;
