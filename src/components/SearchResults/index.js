import React, { useDeferredValue, useMemo } from "react";
import userList from "mocks/mockUsers.json";

export const SearchResults = ({ query }) => {
    // Convert the incoming query into a deferred value
    // React judges when it's safe to update deferredQuery to match query
    const deferredQuery = useDeferredValue(query);

    // Notice the difference in the console between these two
    console.log({ query, deferredQuery });

    // Because our memoized list depends on the deferredQuery and not query, we can leverage useDeferredValue
    const filteredList = useMemo(() => {
        const finishedList = [];
        userList.forEach((user) => {
            if (
                user.name.toLowerCase().includes(query.toLowerCase()) ||
                !query
            ) {
                finishedList.push(
                    <tr key={user.guid}>
                        <td>{user.guid}</td>
                        <td>{user.name}</td>
                    </tr>
                );
            }
        });
        return finishedList;
    }, [query]);
    return (
        <table>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>USER</th>
                </tr>
            </thead>
            <tbody>{filteredList}</tbody>
        </table>
    );
};
