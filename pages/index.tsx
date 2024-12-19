import BannerComponent from "@/components/banners/banner-component";

import CategorySection3Col from "@/components/categories/category-section-3-col";
import CategorySection4Col from "@/components/categories/category-section-4-col";
import CategorySectionCarouselStories from "@/components/categories/category-section-carousel-stories";
import CategorySectionSmall from "@/components/categories/category-section-small";
import DestaqueCategory from "@/components/categories/destaque-category";
import LayoutCategory from "@/components/categories/layout-category";
import PostHighlights from "@/components/posts/post-highlights";
import { useBanners } from "@/hooks/BannersContext";
import { ECategories } from "@/interfaces/ECategories";
import modalStoriePostsMock from "@/mocks/modalStoriePostos";
import "../styles/custom.css";

export default function Home() {
  const { banners } = useBanners();

  return (
    <section className="sectionCustom">
      <PostHighlights carouselStoryPosts={modalStoriePostsMock} />

      <BannerComponent banners={banners?.slice(0, 2)} />

      <DestaqueCategory />

      <LayoutCategory category={ECategories.geral}>
        <CategorySectionCarouselStories category={ECategories.geral} />
      </LayoutCategory>

      <BannerComponent banners={banners?.slice(2, 5)} />

      <CategorySection3Col category={ECategories.gramado_talks} />
      <CategorySection4Col category={ECategories.programa_do_caique} />

      <BannerComponent banners={banners?.slice(5, 8)} />

      <CategorySectionSmall category={ECategories.politica} />
      <LayoutCategory category={ECategories.turismo}>
        <CategorySectionCarouselStories category={ECategories.turismo} />
      </LayoutCategory>

      <BannerComponent banners={banners?.slice(8, 11)} />

      <CategorySection4Col category={ECategories.economia} />
      <CategorySectionSmall category={ECategories.cultura} />

      <BannerComponent banners={banners?.slice(11)} />
    </section>
  );
}
