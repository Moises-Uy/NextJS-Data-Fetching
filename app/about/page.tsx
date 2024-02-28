import React from "react";
interface User {
  id: number;
  name: string;
}

const AboutPage = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users", {
    next: { revalidate: 10 },
  });
  const users: User[] = await res.json();
  return (
    <>
      <h1>Users</h1>
      <hr />
      <ul>
        {new Date().toLocaleTimeString()}
        {users.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </>
  );
};
export default AboutPage;
