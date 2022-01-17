import { useState } from 'react';
import './App.css';
import AddUser from './component/Users/AddUser';
import UsersList from './component/Users/UsersList';

const defaultUsers =[
  {id: 1,
  name: 'Jonas',
  age: '33'},
  {id: 2,
  name: 'Kate',
  age: '28'}
]

const App = () => {
const [users, setUsers] = useState(defaultUsers);

const setNewUser = (nameReceived, ageReceived) => {
  setUsers((prevUsers) => {
  return [{name: nameReceived, age: ageReceived, id: (users.length + 1)}, ...prevUsers]})
}

  return (
    <div >
      <AddUser onChangeSetNewUser={setNewUser}/>
      <UsersList users={users}/>
    </div>
  );
}

export default App;
