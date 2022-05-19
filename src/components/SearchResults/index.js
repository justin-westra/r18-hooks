import React from 'react';
import userList from 'mocks/mockUsers.json';

export const SearchResults = ({ query }) => {
  console.log({ query, userList });
  if (!query) {
    return <p>Type anything to begin your search</p>;
  }
  const filteredList = userList.filter(({ name }) => name.toLowerCase().includes(query.toLowerCase()));
  return (
    <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>USER</th>
        </tr>
      </thead>
      <tbody>
        {filteredList.map(({ guid, name }) => (
          <tr key={guid}>
            <td>{guid}</td>
            <td>{name}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};
