import React from 'react'

const UserInfo = ({ posts }) => {
    return (<>
        {posts && posts.length > 0 ?
            posts.map(post => (
                <article className='md:w-[600px]  p-4 border border-red-500 mb-4' key={post.id}>
                    <h4 className='text-lg text-orange-500 mb-2'>{post.title}</h4>
                    <p className=''>{post.body}</p>
                </article>
            ))
            : <p>no posts found</p>}
    </>)
}

export default UserInfo