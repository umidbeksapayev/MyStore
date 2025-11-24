import React, { useState } from "react";
import { Input } from "../ui";
import { useDispatch, useSelector } from "react-redux";
import { signUserSuccess, singUserFailure, signUserStart } from "../slice/auth";
import AuthService from '../service/auth'

const Register = () => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const dispatch  = useDispatch()
    const {isLoading} = useSelector(state => state.auth)
    const registerHandler = async()=>{
      dispatch(signUserStart())
      const user = {username: name, email, password}
      try {
        const response = await AuthService.userRegister(user)
        console.log(response.data);
        
        dispatch(signUserSuccess(response.user))
      
      } catch (error) {
        dispatch(singUserFailure(error.response.data.errors))
      }
    }
  return (
    <div className="text-center mt-5">
      <div className="form-signin w-25 m-auto p-4 shadow rounded" style={{ backgroundColor: "#e3f2fd" }}>
        <h3 className="mb-4 fw-bold">Register</h3>

          <Input state={name} setState={setName} lable={'Username...'}/>

          <Input state={email} setState={setEmail} lable={'Email...'}/>

          <Input state={password} setState={setPassword} lable={'Password...'}/>

        <button onClick={registerHandler} disabled={isLoading} className="btn btn-primary w-100 py-2 fw-semibold">{isLoading ? 'Loading...':'Register'}</button>
      </div>
    </div>
  );
};

export default Register;
