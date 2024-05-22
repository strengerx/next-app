import getWikiSearchData from '@/lib/getWikiSearchData'
import React, { Suspense } from 'react'
import SearchResults from './components/SearchResults'

const SearchKey = async ({ params: { searchKey } }) => {

    const wikiPromise = getWikiSearchData(searchKey)
    const wikiData = await wikiPromise
    return (<>
        <h2 className='my-5 text-2xl text-green-700'>search result page</h2>

        <Suspense fallback={<h6>Loading...</h6>}>
            {wikiData?.query?.search && wikiData?.query?.search.length > 0 ?
                wikiData.query.search.map(result => (
                    <SearchResults key={result.pageid} result={result} />
                ))
                : <h3>{searchKey.replace("%20", " ")} not found</h3>}
        </Suspense>
    </>)
}

export async function generateMetadata({ params: { searchKey } }) {
    const wikiPromise = getWikiSearchData(searchKey)
    const wikiData = await wikiPromise

    if (!wikiData?.query?.search.length > 0) {
        return { title: `${searchKey.replace("%20", " ")} not found` }
    }

    return {
        title: searchKey.replace("%20", " "),
        description: "Note that the MediaWiki Action API and the MediaWiki JavaScript API are both modular"
    }
}


export default SearchKey