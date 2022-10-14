import axios from 'axios';
import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';

const UserForm = ({getUsers , userSelected,deleteSelectUser}) => {
  const { register, handleSubmit , reset } = useForm()
  useEffect(()=>{
    if(userSelected){
      reset(userSelected)
    }
  },[userSelected])

  const submit = (data) => {
    if(userSelected){
      axios.put(
        `http://144.126.218.162:9000/users/${userSelected.id}/`, data)
      .then(()=> getUsers())
    }else{
    axios.post("http://144.126.218.162:9000/users/", data)
    .then(()=> getUsers())
      .catch(error => console.log(error.response))}
      clear()
  }

  const clear = () => {
    reset({
      first_name:"",
      last_name:"",
      birthday:"",
      email:"",
      password:""
    })
    deleteSelectUser()
  }

  return (
    <form onSubmit={handleSubmit(submit)}>
      <div className="input-container">
        <label htmlFor="first_name"><b>FirstName</b></label>
        <input type="text" id="first_name" {...register("first_name")}
        />
      </div>
      <div className="input-container">
        <label htmlFor="last_name">LastName</label>
        <input type="text" id="last_name" {...register("last_name")}
        />
      </div>
      <div className="input-container">
        <label htmlFor="birthday">Birthday</label>
        <input type="date" id="birthday" {...register("birthday")}
        />
      </div>
      <div className="input-container">
        <label htmlFor="email">Email</label>
        <input type="text" id="email" {...register("email")}
        />
      </div>
      <div className="input-container">
        <label htmlFor="password">Password</label>
        <input type="text" id="password" {...register("password")}
        />
      </div>
      <button className='submit'>Submit</button>
      <button className='submit' onClick={clear} type="button">clear</button>
    </form>
  );
};

export default UserForm;
