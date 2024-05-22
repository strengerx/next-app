import React from 'react'

export default async function getWikiSearchData(searchKey) {
    const wikiParams = new URLSearchParams({
        action: "query",
        list: "search",
        srsearch: searchKey,
        format: "json",
        origin: "*"
    });

    const response = await fetch("https://en.wikipedia.org/w/api.php?" + wikiParams)
    return response.json()
}
