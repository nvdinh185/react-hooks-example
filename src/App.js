import { useState } from 'react';
import UserTable from './tables/UserTable';
import AddUserForm from './forms/AddUserForm';
import EditUserForm from './forms/EditUserForm';

const intialUsers = [
  { id: 0, name: 'NodeJS', username: 'floppydiskette' },
  { id: 1, name: 'Angular', username: 'siliconeidolon1' },
  { id: 2, name: 'ReactJS', username: 'benisphere1' }
];

const App = () => {
  const [users, setUsers] = useState(intialUsers);

  const [currentUser, setCurrentUser] = useState();
  const [editing, setEditing] = useState(false);
  const [adding, setAdding] = useState(false);

  const addNewUser = () => {
    setAdding(true);
  }

  const addUser = async (user) => {
    user.id = users.length;
    setUsers([...users, user]);
    setAdding(false);
  }

  const deleteUser = async (id) => {
    setAdding(false);
    setEditing(false);
    setUsers(users.filter((user) => user.id !== id));
  }

  const updateUser = async (updatedUser) => {
    setEditing(false);
    setUsers(users.map(user => (user.id === updatedUser.id ? updatedUser : user)));
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
          <UserTable users={users} editRow={editRow} deleteUser={deleteUser} />
        </div>
      </div>
    </div>
  );
}

export default App