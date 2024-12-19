import React from 'react';

import { usePostsDestaque } from '@/hooks/PostsDestaqueContext';
import PostItem from '../posts/post-item';

const DestaqueCategory: React.FC = () => {
    const { posts } = usePostsDestaque()

    return (
        <div className="shadow-lg mb-3 px-0 p-sm-3 container rounded-3">
            <div className="row mx-0">
                {/* Post principal */}
                <div className="col-12 col-lg-9 mb-3 p-0 px-sm-3">
                    <PostItem post={posts[0]} type="large" />
                    <div className="row px-4">
                        {posts?.slice(3, 9).map((post) => (
                            <div className="col-12 col-md-4" key={post?.post_slug}>
                                <PostItem post={post} type="list" />
                            </div>
                        ))}
                    </div>
                </div>

                {/* Posts adicionais */}
                <div className="col-12 col-lg-3 p-0 px-sm-3">
                    <div className="row">
                        {posts?.slice(1, 3).map((post) => (
                            <div className="col-12 col-lg-12" key={post?.post_slug}>
                                <PostItem post={post!} type="medium" />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DestaqueCategory;
