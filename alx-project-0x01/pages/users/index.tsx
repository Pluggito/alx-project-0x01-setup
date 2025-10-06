import React, { useState } from "react";
import UserCard from "@/components/common/UserCard";
import UserModal from "@/components/common/UserModal";
import { UserData } from "@/interfaces";

export async function getStaticProps() {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const posts = await response.json();

  return { props: { posts } };
}

const Users: React.FC<{ posts: UserData[] }> = ({ posts }) => {
  const [users, setUsers] = useState<UserData[]>(posts);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleAddUser = (user: UserData) => {
    setUsers([...users, user]);
  };

  return (
    <div className="p-6">
      <button
        onClick={() => setIsModalOpen(true)}
        className="bg-blue-500 text-white px-4 py-2 rounded-md mb-6"
      >
        Add User
      </button>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {users.map((user) => (
          <UserCard key={user.id} {...user} />
        ))}
      </div>

      <UserModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onAddUser={handleAddUser}
        onSubmit={handleAddUser}
      />
    </div>
  );
};

export default Users;
