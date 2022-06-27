import { v4 as uuidv4 } from "uuid";
import React, { useEffect, useState } from "react";
import axios from "axios";

import "./CreateEditUser.css";

export const CreateEditUser = ({ mode, userToEdit, setTableData }) => {
  const [user, setUser] = useState(
    mode === "create" ? { id: uuidv4() } : { ...userToEdit }
  );

  const handleOnSetUser = (e) => {
    setUser((prev) => ({
      ...prev,
      [e.target.id]: e.target.value,
    }));
  };

  const handleCreateUser = (user) => {
    try {
      if (mode === "create") {
        axios
          .post(`${process.env.REACT_APP_BACKEND_URL}/add_user/`, {
            user,
          })
          .then((res) => {
            if (res.status === 201) {
              setTableData(prev => [...prev, user])
              setUser({ id: uuidv4() })
            }
          });
      } else {
        axios
          .post(`${process.env.REACT_APP_BACKEND_URL}/edit_user/`, {
            user,
          })
          .then((res) => console.log("res: ", res));
      }
    } catch (er) {
      console.error(er);
    }
  };

  return (
    <div>
      <h3>
        {mode === "create" ? "Create User" : `Edit User ${userToEdit.name}`}
      </h3>
      <div className="form">
        <label htmlFor="name">name:</label>
        <input
          type="text"
          id="name"
          name="name"
          value={user.name}
          onChange={(e) => handleOnSetUser(e)}
        />

        <label htmlFor="created">created at:</label>
        <input
          type="text"
          id="created"
          name="created"
          value={user.created}
          onChange={(e) => handleOnSetUser(e)}
        />

        <label htmlFor="updated">updated at:</label>
        <input
          type="text"
          id="updated"
          name="updated"
          value={user.updated}
          onChange={(e) => handleOnSetUser(e)}
        />

        <label htmlFor="owner">owner:</label>
        <input
          type="text"
          id="owner"
          name="owner"
          value={user.owner}
          onChange={(e) => handleOnSetUser(e)}
        />

        <button onClick={() => handleCreateUser(user)}>
          {mode === "create" ? "Create User" : "Save User"}
        </button>
      </div>
    </div>
  );
};
