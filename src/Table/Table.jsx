import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

import "./Table.css";

function Table() {
  const [tableData, setTableData] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    try {
      axios.get(process.env.REACT_APP_BACKEND_URL).then((res) => {
        if (res) setTableData(res.data);
      });
    } catch (error) {
      console.error(error);
    }
  }, []);

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
        <tbody>
          {tableData.map((user) => {
            return (
              <tr key={user.id}>
                <td>{user.id}</td>
                <td>{user.name}</td>
                <td>{user.created}</td>
                <td>{user.owner}</td>
                <td>
                  <p
                    className="view"
                    onClick={() => navigate(`user/${user.id}`)}
                  >
                    View
                  </p>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default Table;
