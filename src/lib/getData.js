export default async function getData() {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    if (!response.ok) return undefined
    return response.json();
}