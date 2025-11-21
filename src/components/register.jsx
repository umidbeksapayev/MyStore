import React, { useState } from "react";
import { Input } from "../ui";

const Register = () => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
  return (
    <div className="text-center mt-5">
      <div className="form-signin w-25 m-auto p-4 shadow rounded" style={{ backgroundColor: "#e3f2fd" }}>
        <h3 className="mb-4 fw-bold">Register</h3>

          <Input state={name} setState={setName} lable={'Username...'}/>

          <Input state={email} setState={setEmail} lable={'Email...'}/>

          <Input state={password} setState={setPassword} lable={'Password...'}/>

        <button className="btn btn-primary w-100 py-2 fw-semibold">Register</button>
      </div>
    </div>
  );
};

export default Register;
