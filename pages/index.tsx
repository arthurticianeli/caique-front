import BannerComponent from "@/components/banners/banner-component";
import MainCategory, {
  ELayoutCategories,
} from "@/components/categories/main-category";
import PostItem from "@/components/posts/post-item";
import { ECategory } from "@/interfaces/IPost";
import { postsMock } from "@/mocks/postsMock";

export default function Home() {
  return (
    <section className="container mt-3">
      <BannerComponent numberOfBanners={2} startIndex={0} />
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
          <div className="h-100" style={{ paddingLeft: "15px" }}>
            {postsMock.slice(1, 13).map((post) => (
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
      <BannerComponent numberOfBanners={3} startIndex={2} />
      <MainCategory
        posts={postsMock}
        category={ECategory.BUSINESS}
        layout={ELayoutCategories.LAYOUT1}
      />
      <BannerComponent numberOfBanners={3} startIndex={5} />
      <MainCategory
        posts={postsMock}
        category={ECategory.ENVIRONMENT}
        layout={ELayoutCategories.LAYOUT2}
      />
      <BannerComponent numberOfBanners={2} startIndex={8} />
      <MainCategory
        posts={postsMock}
        category={ECategory.HEALTH}
        layout={ELayoutCategories.LAYOUT3}
      />
      <BannerComponent numberOfBanners={2} startIndex={10} />
      <MainCategory
        posts={postsMock}
        category={ECategory.SCIENCE}
        layout={ELayoutCategories.LAYOUT4}
      />
    </section>
  );
}
