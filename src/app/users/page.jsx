import React from 'react';
import getData from '@/lib/getData';
import Link from 'next/link';

export const metadata = {
    title: "user information"
}

const UsersData = async () => {

    const usersCollection = getData();
    const users = await usersCollection

    return (
        <div>
            <h1 className='mt-5 text-2xl text-green-700'>users information</h1>
            <ul>
                {users && users.length > 0 ? (
                    users.map((user) =>
                        <li key={user.id}>
                            <Link className='hover:text-red-500' href={`users/${user.id}`}>{user.name}</Link>
                        </li>)
                ) : (
                    <li>No data found</li>
                )}
            </ul>
        </div>
    );
};

export default UsersData;