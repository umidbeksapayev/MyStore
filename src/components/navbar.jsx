import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className="navbar navbar-light"  style={{backgroundColor: "#e3f2fd"}}>
         <div className ="container-fluid">
            <Link to={'/'} className="navbar-brand fw-bold p-3">My Store</Link>
            <div className='ml-5'>
                <Link className="btn" type="submit" to={'/login'}>Login</Link>
                <Link className="btn btn-outline-success" type="submit" to={'/register'}>Register</Link>
            </div>
        </div>
    </nav>
  )
}

export default Navbar
