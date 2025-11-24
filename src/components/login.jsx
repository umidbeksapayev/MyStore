import { useState } from "react"
import { Input } from "../ui"
import { useDispatch, useSelector } from "react-redux"
import {signUserStart, signUserSuccess, singUserFailure } from "../slice/auth"
import AuthService from "../service/auth"

const Login = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const dispatch = useDispatch()
    const {isLoading} = useSelector(state => state.auth)
    

    const loginHandler  = async() =>{
      dispatch(signUserStart())
      const user = {email, password}
      try {
        const response = await AuthService.userLogin(user) 
        dispatch(signUserSuccess(response.user))
        console.log(response);
        
      } catch (error) {
        dispatch(singUserFailure(error.response.data.errors))
        console.log(error.response.data.errors);
        
      }
    }
  return (
   <div className="text-center mt-5">
      <div className="form-signin w-25 m-auto p-4 shadow rounded" style={{ backgroundColor: "#e3f2fd" }}>
        <h3 className="mb-4 fw-bold">Login</h3>

          <Input state={email} setState={setEmail} lable={'Email...'}/>

          <Input state={password} setState={setPassword} lable={'Password...'}/>

        <button onClick={loginHandler} disabled={isLoading} className="btn btn-primary w-100 py-2 fw-semibold">{ isLoading ? 'loading...':'Login'}</button>
      </div>
    </div>
  )
}

export default Login
