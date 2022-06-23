import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

import "./Table.css";

function JsonDataDisplay() {
  const [jsonData, setJsonData] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    axios.get("http://localhost:5000/").then((res) => {
      const users = res.data;
      setJsonData(users);
    });
  }, []);

  const DisplayData = jsonData.map((user) => {
    return (
      <tr>
        <td>{user.id}</td>
        <td>{user.name}</td>
        <td>{user.created}</td>
        <td>{user.owner}</td>
        <td>
          <p className="view" onClick={() => navigate(`user/${user.id}`)}>
            View
          </p>
        </td>
      </tr>
    );
  });

  return (
    <div>
      <table className="table table-striped">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Created On</th>
            <th>Owner</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>{DisplayData}</tbody>
      </table>
    </div>
  );
}

export default JsonDataDisplay;
