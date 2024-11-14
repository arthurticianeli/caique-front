import { ECategory, IPost } from "@/interfaces/IPost";
import React from "react";
import PostItem from "../posts/post-item";

interface MainCategoryProps {
  posts: IPost[];
  category: ECategory;
  layout: ELayoutCategories;
}

export enum ELayoutCategories {
  LAYOUT1 = 1,
  LAYOUT2 = 2,
  LAYOUT3 = 3,
  LAYOUT4 = 4,
}

const MainCategory: React.FC<MainCategoryProps> = ({
  posts,
  category,
  layout,
}) => {
  const filteredPosts = posts.filter((post) => post.category === category);

  const renderLayout = (layout: number) => {
    switch (layout) {
      case ELayoutCategories.LAYOUT1:
        return (
          <div className="row">
            {filteredPosts.slice(0, 4).map((post) => (
              <div key={post.slug} className="col-12 col-sm-6 col-md-3">
                <PostItem post={post} type="large" />
              </div>
            ))}
          </div>
        );
      case ELayoutCategories.LAYOUT2:
        return (
          <div className="row">
            {filteredPosts.slice(0, 2).map((post) => (
              <div key={post.slug} className="col-12 col-md-4">
                <PostItem post={post} type="medium" />
              </div>
            ))}
            <div className="col-12 col-sm-6 col-md-4">
              {filteredPosts.slice(2, 4).map((post) => (
                <div key={post.slug} className="col-12 ">
                  <PostItem post={post} type="small" />
                </div>
              ))}
            </div>
          </div>
        );
      case ELayoutCategories.LAYOUT3:
        return (
          <div className="row">
            {filteredPosts.slice(0, 4).map((post) => (
              <div key={post.slug} className="col-12 col-md-3">
                <PostItem post={post} type="medium" />
              </div>
            ))}
          </div>
        );
      case ELayoutCategories.LAYOUT4:
        return (
          <div className="row">
            <div className="col-12 col-sm-6 col-md-4">
              {filteredPosts.slice(2, 4).map((post) => (
                <div key={post.slug} className="col-12 ">
                  <PostItem post={post} type="small" />
                </div>
              ))}
            </div>
            {filteredPosts.slice(0, 2).map((post) => (
              <div key={post.slug} className="col-12 col-md-4">
                <PostItem post={post} type="medium" />
              </div>
            ))}
          </div>
        );
      default:
        return null;
    }
  };

  return <div>{renderLayout(layout)}</div>;
};

export default MainCategory;
