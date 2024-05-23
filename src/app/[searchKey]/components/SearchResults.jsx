import React from "react";

const SearchResults = ({ result }) => {
    return (
        <>
            <article className="md:w-[600px] p-4 border border-red-500 mb-4">
                <h4 className="text-lg text-orange-500 mb-2">{result.title}</h4>
                <p
                    dangerouslySetInnerHTML={{ __html: result.snippet }}
                    className=""
                ></p>
            </article>
        </>
    );
};

export default SearchResults;
