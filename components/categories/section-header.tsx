import { getEnumCategoriesKeyValue } from '@/helpers/functions';
import { ECategories } from '@/interfaces/ECategories';
import Link from 'next/link';
import React from 'react';

interface SectionHeaderProps {
    category: ECategories;
}

const SectionHeader: React.FC<SectionHeaderProps> = ({ category }) => {

    const url = `${getEnumCategoriesKeyValue(ECategories.politica)}`

    return (
        <div className="d-flex justify-content-between my-3 container">
            <Link href={`/${url}`} className='d-flex justify-content-center align-items-center'>
                <h3 className='m-0' style={{ fontWeight: "bold" }}>{category}</h3>
            </Link>
            <Link href={`/${url}`}>
                <button className="btn btn-outline-primary">Ver todos</button>
            </Link>
        </div>
    );
};

export default SectionHeader;