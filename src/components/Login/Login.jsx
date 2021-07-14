import React, { useContext } from 'react'
import { useHistory } from 'react-router-dom'
import { loginContext } from '../context/loginContext'

export default function Login() {
    const context = useContext(loginContext)
    const history = useHistory()
    const handleSubmit =()=>{
        history.push('/')
        context.changeLogin()
    }
    return (
        <form className="container mt-5" style={{width:'500px'}} onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
          <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
          <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
          <input type="password" className="form-control" id="exampleInputPassword1"/>
        </div>
        <div className="mb-3 form-check">
          <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
          <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
    )
}
