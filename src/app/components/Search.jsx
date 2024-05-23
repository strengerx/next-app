"use client";

import { useRouter } from "next/navigation";
import React, { useState } from "react";

const Search = () => {
    const [search, setSearch] = useState("");
    const router = useRouter();

    const handleFormOnSubmit = (e) => {
        e.preventDefault();
        setSearch("");
        router.push(`/${search}/`);
    };

    return (
        <>
            <form autoComplete="off" onSubmit={handleFormOnSubmit} action="">
                <input
                    autoComplete="off"
                    className="text-slate-800"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    type="text"
                    name="search"
                    placeholder="Search..."
                />
                <button className="ml-2" type="submit">
                    search
                </button>
            </form>
        </>
    );
};

export default Search;
