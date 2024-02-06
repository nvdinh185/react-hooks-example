import { useState } from 'react';
import UserTable from './tables/UserTable';
import AddUserForm from './forms/AddUserForm';
import EditUserForm from './forms/EditUserForm';

const intialUsers = [
  { id: 0, name: 'NodeJS', username: 'floppydiskette' },
  { id: 1, name: 'Angular', username: 'siliconeidolon' },
  { id: 2, name: 'ReactJS', username: 'benisphere' }
];

const App = () => {
  const [users, setUsers] = useState(intialUsers);

  const [currentUser, setCurrentUser] = useState();
  const [editing, setEditing] = useState(false);
  const [adding, setAdding] = useState(false);

  const handleAddUser = async (user) => {
    user.id = users.length;
    setUsers([...users, user]);
    setAdding(false);
  }

  const hadleDeleteUser = async (id) => {
    setAdding(false);
    setEditing(false);
    setUsers(users.filter((user) => user.id !== id));
  }

  const handleUpdateUser = async (updatedUser) => {
    setEditing(false);
    setUsers(users.map(user => (user.id === updatedUser.id ? updatedUser : user)));
  }

  const callUpdateUser = (user) => {
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
                updateUser={handleUpdateUser}
              />
            </>
          ) : adding ? (
            <>
              <h2>Add user</h2>
              <AddUserForm setAdding={setAdding} addUser={handleAddUser} />
            </>
          ) : <button onClick={() => setAdding(true)}>Add new user</button>}
        </div>
        <div className="flex-large">
          <h2>View users</h2>
          <UserTable users={users} editUser={callUpdateUser} deleteUser={hadleDeleteUser} />
        </div>
      </div>
    </div>
  );
}

export default App