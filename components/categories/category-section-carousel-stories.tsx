import { usePostsDestaque } from "@/hooks/PostsDestaqueContext";
import useFetch from "@/hooks/useFetch";
import useMediaQuery from "@/hooks/useMediaQuery";
import { ECategories } from "@/interfaces/ECategories";
import { IFetchResponse } from "@/interfaces/IFetchResponse";
import { IPost } from "@/interfaces/IPost";
import React from "react";
import PostItemCarousel from "../posts/post-item-carousel";
import PostItemStory from "../posts/post-item-story";


interface CategorySectionCarouselStoriesProps {
    category: ECategories;
}

const CategorySectionCarouselStories: React.FC<CategorySectionCarouselStoriesProps> = ({ category }) => {
    const { isMobile, isTablet, isSmall, isDesktopLg } = useMediaQuery();
    const { categoryCount } = usePostsDestaque();
    const { data } = useFetch<IFetchResponse<IPost>>(`https://new.caiquemarquez.com.br/app/api.php?noticias&cat=${category}&qtd=6&offset=${categoryCount[category]}`, {} as IFetchResponse<IPost>);

    if (isMobile || isSmall) return <PostItemCarousel posts={data.data} category={category} />
    if (isTablet || isDesktopLg) return <PostItemCarousel posts={data.data} category={category} grouped />
    return <PostItemStory posts={data.data?.slice(0, 5)} />
};

export default CategorySectionCarouselStories;