import React from "react";
import { useNavigate } from "react-router-dom";

const Userlist = () => {
  const navigate = useNavigate();
  const users = [
    { _id: 1, name: "John", address: "kathmandu" },
    { _id: 2, name: "Aryash", address: "Pokhara" },
    { _id: 3, name: "Bijay", address: "Baudha" },
    { _id: 4, name: "sashank", address: "Biratnagar" },
    { _id: 5, name: "Diom", address: "Kathmandu" },
  ];
  const handleUser = (user_Id, userName) => {
    navigate(`/${user_Id}/${userName}`);
  };
  return (
    <div className="container mt-4">
      <h1>Users List</h1>
      <ul>
        {users.map((user) => {
          return (
            <li onClick={() => handleUser(user._id, user.name)} key={user._id}>
              {user.name}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Userlist;
