import React from "react";
import { UserProps } from "@/interfaces";

const UserCard: React.FC<UserProps> = (user) => {
  return (
    <div className="border rounded-md p-4 shadow-md bg-white hover:shadow-lg transition-all duration-300">
      <h2 className="text-xl font-semibold mb-1">{user.name}</h2>
      <p className="text-gray-600">@{user.username}</p>
      <p className="text-sm text-gray-500">{user.email}</p>
      <div className="mt-3 text-sm">
        <p>
          <strong>Company:</strong> {user.company.name}
        </p>
        <p>
          <strong>Website:</strong> {user.website}
        </p>
        <p>
          <strong>City:</strong> {user.address.city}
        </p>
      </div>
    </div>
  );
};

export default UserCard;
