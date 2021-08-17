import React from 'react';

type PaginationPropsType = {
    totalResults: string
    onPageChanged: (page: number) => void
}

export const Pagination: React.FC<PaginationPropsType> = ({
                                                              totalResults,
                                                              onPageChanged,
                                                          }) => {
    let pagesCount = Math.ceil((+totalResults) / 10)
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }

    let renderingPages = pages.map((p, index) => {
        return <span
            key={index}
            onClick={(e) => {
                onPageChanged(p)
            }}
        >{p}</span>
    })

    return (
        <>
            {renderingPages}
        </>
    );
}