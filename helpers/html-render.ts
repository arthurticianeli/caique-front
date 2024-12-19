import React from 'react';
import { convertStringToHtml } from './functions';


const HtmlRenderer: React.FC<{ htmlContent: string }> = ({ htmlContent }) => {
    const parsedHtml = convertStringToHtml(htmlContent);

    return <div dangerouslySetInnerHTML={ { __html: parsedHtml } } />;
};

export default HtmlRenderer;