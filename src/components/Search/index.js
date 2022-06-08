import React, { useState } from "react";
import { SearchResults } from "components/SearchResults";

// Deferred value demo
// https://reactjs.org/docs/hooks-reference.html#usedeferredvalue
export const Search = () => {
    const [query, setQuery] = useState("");

    const handleChange = ({ target: { value } }) => setQuery(value);

    return (
        <>
            <input value={query} onChange={handleChange} />
            <SearchResults query={query} />
        </>
    );
};
