import getPosts from '@/lib/getPosts'
import getUser from '@/lib/getUser'
import Link from 'next/link'
import React from 'react'

const SingleUser = async ({ params: { userID } }) => {

    const userPromise = getUser({ userID })
    const postsPromise = getPosts({ userID })
    const [user, posts] = await Promise.all([userPromise, postsPromise])

    return (<>
        <h2 className='my-5 text-2xl text-green-700'>single user information</h2>

        <h3>userID: {user.id}</h3>
        <h3>name: {user.name}</h3>
        <h4 className='text-2xl text-green-700 pt-4 pb-2'>all posts</h4>
        {posts && posts.length > 0 ?
            posts.map(post => (
                <article className='md:w-[600px]  p-4 border border-red-500 mb-4' key={post.id}>
                    <h4 className='text-lg text-orange-500 mb-2'>{post.title}</h4>
                    <p className=''>{post.body}</p>
                </article>
            ))
            : <p>no posts found</p>}

        <Link className='text-red-500 lowercase' href={"/users"}>back to users</Link>
    </>)
}

export default SingleUser