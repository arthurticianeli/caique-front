import { faYoutube } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import styles from './post-item-play-icon.module.css';

interface PostItemPlayIconProps {
    stories?: boolean;
}

const PostItemPlayIcon: React.FC<PostItemPlayIconProps> = ({ stories }) => {
    return (
        <>
            <div className={`${styles.youtubePlayIcon}`}>
                <FontAwesomeIcon icon={faYoutube} style={{ fontSize: `${stories ? "4em" : "2em"}`, color: "red" }} />
            </div>
            <div className={`${styles.youtubePlayIconWhiteBackground}`} />
        </>

    );
};

export default PostItemPlayIcon;