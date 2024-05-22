import getPosts from '@/lib/getPosts'
import getUser from '@/lib/getUser'
import getData from '@/lib/getData'
import React, { Suspense } from 'react'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import UserInfo from './components/page'

const SingleUser = async ({ params: { userID } }) => {

    const userPromise = getUser({ userID })
    const postsPromise = getPosts({ userID })
    const [user, posts] = await Promise.all([userPromise, postsPromise])

    if (!user?.id) return notFound()

    return (<>
        <h2 className='my-5 text-2xl text-green-700'>single user information</h2>

        <h3>userID: {user.id}</h3>
        <h3>name: {user.name}</h3>
        <h4 className='text-2xl text-green-700 pt-4 pb-2'>all posts</h4>
        <Suspense fallback={<h2>Loading...</h2>}>
            <UserInfo posts={posts} />
        </Suspense>
        <Link className='text-red-500 lowercase' href={"/users"}>back to users</Link>
    </>)
}

export async function generateStaticParams() {
    const res = getData()
    const users = await res
    return users.map((user) => ({
        userID: user.id.toString(),
    }))
}

export async function generateMetadata({ params: { userID } }) {
    const userPromise = getUser({ userID })
    const user = await userPromise

    if (!user?.name) {
        return { title: "userID not found" }
    }

    return {
        title: user.name,
        description: "Note that the MediaWiki Action API and the MediaWiki JavaScript API are both modular"
    }
}

export default SingleUser