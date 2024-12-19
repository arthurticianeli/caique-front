import { IPost } from '@/interfaces/IPost';
import React from 'react';
import PostItemStoryCard from './post-item-story-card';

interface PostItemStoryProps {
    posts: IPost[];
}

const PostItemStory: React.FC<PostItemStoryProps> = ({ posts }) => {
    return (
        <div className="container">
            <div className="d-flex flex-wrap gap-3 justify-content-start"> {/* Flexbox com espaçamento */}
                {posts?.map((post) => (
                    <div key={post.post_slug} style={{ flex: '1' }}>
                        <PostItemStoryCard post={post} />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default PostItemStory;
