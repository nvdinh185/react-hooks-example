import { useState, useEffect } from 'react';
import UserTable from './tables/UserTable';
import AddUserForm from './forms/AddUserForm';
import EditUserForm from './forms/EditUserForm';
import { v4 as uuidv4 } from 'uuid';

import axios from 'axios';

const App = () => {
  const urlServer = 'http://localhost:8080';
  const [users, setUsers] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const res = await axios(urlServer + '/get-users');
      setUsers(res.data);
    }
    fetchData();
  }, []);

  const [currentUser, setCurrentUser] = useState();
  const [editing, setEditing] = useState(false);
  const [adding, setAdding] = useState(false);

  const addNewUser = () => {
    setAdding(true);
  }

  const addUser = async (user) => {
    user.id = uuidv4();
    await axios.post(urlServer + '/add-user', { user });
    setUsers([...users, user]);
    setAdding(false);
  }

  const deleteUser = async (id) => {
    setAdding(false);
    setEditing(false);
    await axios.post(urlServer + '/del-user', { id });
    setUsers(users.filter((user) => user.id !== id));
  }

  const updateUser = async (updatedUser) => {
    setEditing(false);
    await axios.post(urlServer + '/edit-user', { updatedUser });
    setUsers(users.map(user => (user.id === updatedUser.id ? updatedUser : user)));
  }

  const editUser = (user) => {
    setAdding(false);
    setEditing(true);
    setCurrentUser({ id: user.id, name: user.name, username: user.username });
  }

  return (
    <div className="container">
      <h1>CRUD App with Hooks</h1>
      <div className="flex-row">
        <div className="flex-large">
          {editing ? (
            <>
              <h2>Edit user</h2>
              <EditUserForm
                setEditing={setEditing}
                currentUser={currentUser}
                updateUser={updateUser}
              />
            </>
          ) : adding ? (
            <>
              <h2>Add user</h2>
              <AddUserForm setAdding={setAdding} addUser={addUser} />
            </>
          ) : <button onClick={addNewUser}>Add new user</button>}
        </div>
        <div className="flex-large">
          <h2>View users</h2>
          <UserTable users={users} editUser={editUser} deleteUser={deleteUser} />
        </div>
      </div>
    </div>
  );
}

export default App