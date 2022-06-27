import React, { useEffect, useState, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { CreateEditUser } from "../CreateUser/CreateEditUser";

import "./Table.css";

function Table() {
  const [tableData, setTableData] = useState([]);
  const [editUserTogle, setEditUserTogle] = useState(false);
  const [userToEdit, setUserToEdit] = useState({});
  const navigate = useNavigate();

  const delUser = useCallback((id) => {
    try {
      axios
        .delete(`${process.env.REACT_APP_BACKEND_URL}/user/${id}`)
        .then((res) => {
          console.log("\n res.data: ", res);
          if (res) setTableData(res.data);
        });
    } catch (error) {
      console.error(error);
    }
  }, []);

  useEffect(() => {
    try {
      axios.get(`${process.env.REACT_APP_BACKEND_URL}/`).then((res) => {
        if (res) setTableData(res.data);
      });
    } catch (error) {
      console.error(error);
    }
  }, []);

  const handleEditUser = (user) => {
    setEditUserTogle((prev) => !prev);
    setUserToEdit(user);
  };

  return (
    <div className="tablePage">
      <CreateEditUser mode="create" />
      <div className="tableContainer">
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
            {tableData.map(user => (
              <tr key={user.id}>
                <td>{user.id.split("-")[1]}</td>
                <td>{user.name}</td>
                <td>{user.created}</td>
                <td>{user.owner}</td>
                <td>
                  <div style={{ display: "flex" }}>
                    <p
                      className="view"
                      onClick={() => navigate(`user/${user.id}`)}
                    >
                      View
                    </p>
                    <p className="delButton" onClick={() => delUser(user.id)}>
                      Del
                    </p>
                    <p
                      className="editButton"
                      onClick={() => handleEditUser(user)}
                    >
                      Edit
                    </p>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        {editUserTogle && (
          <CreateEditUser mode="edit" userToEdit={userToEdit} />
        )}
      </div>
    </div>
  );
}

export default Table;
