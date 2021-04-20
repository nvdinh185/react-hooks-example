import React, { Fragment, useState, useEffect } from 'react'
import UserTable from './tables/UserTable'
import AddUserForm from './forms/AddUserForm'
import EditUserForm from './forms/EditUserForm'

import axios from 'axios'

const App = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const res = await axios(`http://localhost:8080/get-users`);
      setUsers(res.data);
    }
    fetchData();
  }, []);

  const initialFormState = { id: null, name: '', username: '' };

  const [currentUser, setCurrentUser] = useState(initialFormState);
  const [editing, setEditing] = useState(false);
  const [adding, setAdding] = useState(false);

  const addNewUser = () => {
    setAdding(true);
  }

  const addUser = (user) => {
    user.id = users.length;
    axios.post('http://localhost:8080/add-user', { user });
    setUsers([...users, user]);
    setAdding(false);
  }

  const deleteUser = (id) => {
    setEditing(false);
    setUsers(users.filter((user) => user.id !== id));
  }

  const updateUser = (id, updatedUser) => {
    setEditing(false);
    setUsers(users.map(user => (user.id === id ? updatedUser : user)));
  }

  const editRow = (user) => {
    setEditing(true);
    setCurrentUser({ id: user.id, name: user.name, username: user.username });
  }

  return (
    <div className="container">
      <h1>CRUD App with Hooks</h1>
      <div className="flex-row">
        <div className="flex-large">
          {editing ? (
            <Fragment>
              <h2>Edit user</h2>
              <EditUserForm
                setEditing={setEditing}
                currentUser={currentUser}
                updateUser={updateUser}
              />
            </Fragment>
          ) : adding ? (
            <Fragment>
              <h2>Add user</h2>
              <AddUserForm setAdding={setAdding} addUser={addUser} />
            </Fragment>
          ) : <button onClick={addNewUser}>Add new user</button>}
        </div>
        <div className="flex-large">
          <h2>View users</h2>
          <UserTable users={users} editRow={editRow} deleteUser={deleteUser} />
        </div>
      </div>
    </div>
  );
}

export default App