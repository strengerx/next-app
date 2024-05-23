import getWikiSearchData from "@/lib/getWikiSearchData";
import React, { Suspense } from "react";
import SearchResults from "./components/SearchResults";

const SearchKey = async ({ params: { searchKey } }) => {
    let wikiData;

    try {
        wikiData = await getWikiSearchData(searchKey);
    } catch (error) {
        console.error("Error fetching data:", error);
        return (
            <>
                <h2 className="my-5 text-2xl text-green-700">Search Result Page</h2>
                <h3>Error fetching data</h3>
            </>
        );
    }

    const searchResults = wikiData?.query?.search || [];

    return (
        <>
            <h2 className="my-5 text-2xl text-green-700">Search Result Page</h2>
            <Suspense fallback={<h6 className="text-slate-200">Loading...</h6>}>
                {searchResults.length > 0 ? (
                    searchResults.map((result) => (
                        <SearchResults key={result.pageid} result={result} />
                    ))
                ) : (
                    <h3>{searchKey.replaceAll("%20", " ")} not found</h3>
                )}
            </Suspense>
        </>
    );
};

export async function generateMetadata({ params: { searchKey } }) {
    let wikiData;

    try {
        wikiData = await getWikiSearchData(searchKey);
    } catch (error) {
        console.error("Error fetching metadata:", error);
        return { title: `${searchKey.replaceAll("%20", " ")} not found` };
    }

    const searchResults = wikiData?.query?.search || [];

    return {
        title: searchResults.length > 0 ? searchKey.replaceAll("%20", " ") : `${searchKey.replaceAll("%20", " ")} not found`,
        description: searchResults.length > 0
            ? "Search results for your query."
            : "No results found for your query.",
    };
}

export default SearchKey;

