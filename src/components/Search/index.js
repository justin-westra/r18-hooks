import React, { useState, useDeferredValue, useMemo } from 'react';
import { SearchResults } from 'components/SearchResults';

export const Search = () => {
  const [query, setQuery] = useState('');
  const deferredQuery = useDeferredValue(query);
  const handleChange = ({ target: { value } }) => setQuery(value);
  const results = useMemo(() => <SearchResults query={deferredQuery} />, [deferredQuery]);
  return (
    <>
      <input value={query} onChange={handleChange} />
      {results}
      {/* <SearchResults query={deferredQuery} /> */}
    </>
  );
};
