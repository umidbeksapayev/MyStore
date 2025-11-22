import { useState } from "react"
import { Input } from "../ui"
import { useDispatch, useSelector } from "react-redux"
import { loginUserStart } from "../slice/auth"

const Login = () => {
    const [name, setName] = useState('')
    const [password, setPassword] = useState('')
    const dispatch = useDispatch()
    const {isLoading} = useSelector(state => state.auth)
    

    const loginHandler =()=>{
      dispatch(loginUserStart())
    }
  return (
   <div className="text-center mt-5">
      <div className="form-signin w-25 m-auto p-4 shadow rounded" style={{ backgroundColor: "#e3f2fd" }}>
        <h3 className="mb-4 fw-bold">Login</h3>

          <Input state={name} setState={setName} lable={'Username...'}/>

          <Input state={password} setState={setPassword} lable={'Password...'}/>

        <button onClick={loginHandler} disabled={isLoading} className="btn btn-primary w-100 py-2 fw-semibold">{ isLoading ? 'loading...':'Login'}</button>
      </div>
    </div>
  )
}

export default Login
