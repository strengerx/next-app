import Link from 'next/link'
import React from 'react'

const NotFoundUser = () => {
    return (<>
        <div className="flex w-full justify-center items-center flex-col gap-3">
            <h2 className='font-mono text-slate-100 text-2xl'>404 | page not found</h2>
            <Link href={"/"} className='text-red-600'>back to home</Link>
        </div>
    </>)
}

export default NotFoundUser