import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

import "./User.css";

export const User = () => {
  const [user, setUser] = useState([]);
  const params = useParams();

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_BACKEND_URL}/user/${params.id}`)
      .then((res) => {
        if (res) setUser(res.data)
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
