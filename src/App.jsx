import { useEffect, useState } from 'react'
import './App.css'
import UserForm from './components/UserForm'
import axios from 'axios'
import ListUsers from './components/ListUsers'

function App() {
  const [isVisible, setIsVisible] = useState(false);
  const [users,setUsers]=useState([])
  const [userSelected,setUserSelected]=useState(null)

  useEffect(()=>{
    axios.get("http://144.126.218.162:9000/users/")
    .then(res=>setUsers(res.data))
  },[])
const getUsers=()=>{
  axios.get("http://144.126.218.162:9000/users/")
    .then(res=>setUsers(res.data))
}
const selectedUsers=(user)=>{
setUserSelected(user)
}
const deleteSelectUser=()=> setUserSelected(null);

  return (

    <div className="App">
      <header>
      <h1>
    APP-USERS   
        </h1>
        <button onClick={() => setIsVisible(!isVisible)}>Register User</button> 
      {isVisible && 
      <UserForm getUsers={getUsers}
      userSelected={userSelected}
      deleteSelectUser={deleteSelectUser}
      />}</header>
      
      <body>
      <ListUsers users={users}
      selectedUsers={selectedUsers}
      getUsers={getUsers}
      /></body>
    </div>
  )
}

export default App
