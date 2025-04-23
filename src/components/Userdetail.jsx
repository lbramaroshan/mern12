import React from "react";
import { useParams } from "react-router-dom";

const User = () => {
  const params = useParams();
  const { user_Id, userName } = params; //de/re structuring
  return (
    <div className="container">
      <h3>This is user detail</h3>
      <p>user id: {user_Id}</p>
      <p>user name: {userName}</p>
    </div>
  );
};

export default User;
