export default async function getPosts({ userID }) {
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts?userId=${userID}`)
    if (!res.ok) throw new Error('Failed to fetch data')
    return res.json();
}
