import { ECategories } from '@/interfaces/ECategories';
import React from 'react';
import SectionHeader from './section-header';


interface LayoutCategoryProps {
    category: ECategories;
    children: React.ReactNode;
}

const LayoutCategory: React.FC<LayoutCategoryProps> = ({ category, children }) => {
    return (
        <div className="container my-5">
            <SectionHeader category={category} />
            <div className="row">
                {children}
            </div>
        </div>
    );
};

export default LayoutCategory;