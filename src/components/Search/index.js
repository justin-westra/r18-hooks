import React, { useState, useDeferredValue, useMemo } from 'react';
import { SearchResults } from 'components/SearchResults';

// Deferred value demo
// https://reactjs.org/docs/hooks-reference.html#usedeferredvalue
export const Search = () => {
  const [query, setQuery] = useState('');

  // Creates essentially a "deferred piece of state" for triggering renders
  const deferredQuery = useDeferredValue(query);
  const handleChange = ({ target: { value } }) => setQuery(value);

  // Memoizing prevents children from re-rendering during urgent updates
  const results = useMemo(() => <SearchResults query={deferredQuery} />, [deferredQuery]);
  return (
    <>
      <input value={query} onChange={handleChange} />
      {results}
      {/* <SearchResults query={deferredQuery} /> */}
    </>
  );
};
