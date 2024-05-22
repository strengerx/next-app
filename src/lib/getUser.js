export default async function getUser({ userID }) {
    const res = await fetch(`https://jsonplaceholder.typicode.com/users/${userID}`)
    if (!res.ok) return undefined
    return res.json();
}
