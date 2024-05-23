import React, { Suspense } from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import UserInfo from "./components/page";
import getPosts from "@/lib/getPosts";
import getUser from "@/lib/getUser";
import getData from "@/lib/getData";

const SingleUser = async ({ params: { userID } }) => {
    try {
        const [user, posts] = await Promise.all([
            getUser({ userID }),
            getPosts({ userID })
        ]);

        if (!user?.id) return notFound();

        return (
            <>
                <h2 className="my-5 text-2xl text-green-700">Single User Information</h2>
                <h3>UserID: {user.id}</h3>
                <h3>Name: {user.name}</h3>
                <h4 className="text-2xl text-green-700 pt-4 pb-2">All Posts</h4>
                <Suspense fallback={<h2>Loading...</h2>}>
                    <UserInfo posts={posts} />
                </Suspense>
                <Link className="text-red-500 lowercase" href="/users">
                    Back to Users
                </Link>
            </>
        );
    } catch (error) {
        console.error("Error fetching user or posts:", error);
        return notFound();
    }
};

export async function generateStaticParams() {
    try {
        const users = await getData();
        return users.map((user) => ({
            userID: user.id.toString(),
        }));
    } catch (error) {
        console.error("Error generating static params:", error);
        return [];
    }
}

export async function generateMetadata({ params: { userID } }) {
    try {
        const user = await getUser({ userID });

        if (!user?.name) {
            return { title: "User ID not found" };
        }

        return {
            title: user.name,
            description: `Profile and posts for user ${user.name}.`
        };
    } catch (error) {
        console.error("Error generating metadata:", error);
        return { title: "Error fetching user data" };
    }
}

export default SingleUser;
