import { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import DeleteUser from './components/DeleteUser';
import Header from './components/Header';
import UserCard from './components/UserCard';
import UsersForm from './components/UsersForm';
import UsersList from './components/UsersList';
import { getUsers, postUser, deleteUser, updateUser } from './JS/services';

const BASE_URL = 'https://users-crud-node-b6rp.onrender.com/';

function App() {
  const { reset } = useForm();

  const [users, setUsers] = useState([]);

  const [shownForm, setShownForm] = useState(false);
  const [editingMode, setEditingMode] = useState(false);
  const [userEditing, setUserEditing] = useState(null);

  const [deletingUser, setDeletingUser] = useState(false);
  const [deleteUserName, setDeleteUserName] = useState(null);
  const [deleteUserLastName, setDeleteUserLastName] = useState(null);
  const [deleteUserId, setDeleteUserId] = useState(null);

  const handleGetUsers = async () => {
    try {
      const data = await getUsers(BASE_URL);
      setUsers(data);
    } catch (error) {
      console.log(error);
    }
  };

  const handlePost = async (object) => {
    try {
      editingMode
        ? await handleUpdate(userEditing, object)
        : await postUser(BASE_URL, object);
      setShownForm(false);
      await handleGetUsers();
      reset();
    } catch (error) {
      console.log(error);
    }
  };

  const handleDelete = async (id) => {
    try {
      await deleteUser(BASE_URL, id);
    } catch (error) {
      console.log(error);
    }
  };

  const handleUpdate = async (userEditing, userUpdated) => {
    const userId = userEditing.id;
    await updateUser(BASE_URL, userUpdated, userId);

    setShownForm(false);
    setEditingMode(false);
    setUserEditing(null);
  };

  const formToggle = () => {
    !shownForm ? setShownForm(true) : setShownForm(false);
    if (editingMode) setEditingMode(false);
  };

  const deleteUserToggle = async (userName, userLastName, id) => {
    if (!deletingUser) {
      setDeletingUser(true);
      setDeleteUserName(userName);
      setDeleteUserLastName(userLastName);
      setDeleteUserId(id);
    } else {
      await handleDelete(deleteUserId);
      await handleGetUsers();
      setDeletingUser(false);
      setDeleteUserName(null);
      setDeleteUserLastName(null);
      setDeleteUserId(null);
    }
  };

  const avoidDeleting = () => {
    setDeletingUser(false);
    setDeleteUserName(null);
    setDeleteUserLastName(null);
    setDeleteUserId(null);
  };

  useEffect(() => {
    handleGetUsers();
  }, []);

  return (
    <div className="App h-full w-[100%] flex flex-col items-center gap-4 transition">
      <Header formToggle={formToggle} />
      {shownForm && !deletingUser && (
        <UsersForm
          handlePost={handlePost}
          editingMode={editingMode}
          userEditing={userEditing}
          setEditingMode={setEditingMode}
          formToggle={formToggle}
        />
      )}
      {deletingUser && !shownForm && (
        <DeleteUser
          deleteUserToggle={deleteUserToggle}
          deleteUserName={deleteUserName}
          deleteUserLastName={deleteUserLastName}
          deleteUserId={deleteUserId}
          avoidDeleting={avoidDeleting}
        />
      )}
      <main className="min-h-[70vh] max-w-[1300px] flex flex-col justify-center items-center">
        <UsersList children>
          {users &&
            !shownForm &&
            !deletingUser &&
            users.map((user) => (
              <UserCard
                key={user.id}
                user={user}
                handleDelete={handleDelete}
                setShownForm={setShownForm}
                setEditingMode={setEditingMode}
                setUserEditing={setUserEditing}
                deleteUserToggle={deleteUserToggle}
              />
            ))}
        </UsersList>
      </main>
    </div>
  );
}

export default App;
