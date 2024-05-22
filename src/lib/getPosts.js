export default async function getPosts({ userID }) {
    const res = await fetch(
        `https://jsonplaceholder.typicode.com/posts?userId=${userID}`,
        { next: { revalidate: 60 } }
    )

    if (!res.ok) return undefined
    return res.json();
}
