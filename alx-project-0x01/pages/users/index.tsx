import Header from "@/components/layout/Header";
import React from "react";
import UserCard from "@/components/common/UserCard";
import { UserProps } from "@/interfaces";

const Users: React.FC<{ posts: UserProps[] }> = ({ posts }) => {
  return (
    <>
     <Header />
      <h1 className="text-3xl font-bold">Users</h1>
      {/* User list or content goes here */}
      <main className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 p-6">
      {posts.map((user) => (
        <UserCard key={user.id} user={user} />
      ))}
    </main>
    </>
  );
};

export default Users;

export async function getStaticProps() {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const posts = await response.json();

  return {
    props: {
      posts,
    },
  };
}

