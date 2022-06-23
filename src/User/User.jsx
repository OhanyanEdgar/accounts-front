import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

import "./User.css";

export const User = () => {
  const [user, setUser] = useState([]);
  const params = useParams();

  useEffect(() => {
    axios.get(`http://localhost:5000/user/${params.id}`).then((res) => {
      const user = res.data;
      console.log("user: ", user);
      setUser(user);
    });
  }, [params.id]);

  return (
    <div>
      <table className="user">
        <tr>
          <td>ID</td>
          <td>{user.id}</td>
        </tr>
        <tr>
          <td>Name</td>
          <td>{user.name}</td>
        </tr>
        <tr>
          <td>Owner</td>
          <td>{user.owner}</td>
        </tr>
        <tr>
          <td>Created On</td>
          <td>{user.created}</td>
        </tr>
        <tr>
          <td>Updated On</td>
          <td>{user.updated}</td>
        </tr>
      </table>
    </div>
  );
};
