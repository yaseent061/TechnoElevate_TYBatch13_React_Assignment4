import React from 'react'
import { useHistory } from 'react-router'
import { useContext } from 'react'
import { loginContext } from '../context/loginContext'
export default function Home() {
    const context = useContext(loginContext)
    const history = useHistory()
    const redirect =()=>{
        if(context.login === false){
            history.push('/login')
        }
        else{
            history.push('/playlist')
        }
    }
    return (
        <div className="container d-flex flex-column justify-content-center align-items-center" style={{height:'90vh'}}>
            <h1 >Create your own playlist</h1>
            <button className="btn btn-success mt-5" onClick={redirect}>Get started</button>

        </div>
    )
}
