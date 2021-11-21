import React from 'react'
import { BrowserRouter, Link, Route, withRouter } from 'react-router-dom'

import Register from './admin/Register'
import Login from "./admin/Login"
import AdminAccount from './admin/AdminAccount'
import Home from './Home'
import AdminCourses from './admin/AdminCourses'

const NavBar = (props) => {

    const { isLoggedIn, handleAuth } = props

    return (

            <div>
            <Link to="/"> Home | </Link>
                { isLoggedIn ? 
                    ( <React.Fragment> 
                        <Link to="/admin/account"> Account | </Link>
                        <Link to="/admin/courses"> Courses | </Link> 
                        <Link onClick = {(e)=>{ 
                            e.preventDefault()
                            localStorage.removeItem('token')
                            alert(`successfully logged-out.`)
                            handleAuth()
                            props.history.push('/')
                            }}> Logout 
                        </Link> 
                    </React.Fragment> ) 
                    : 
                    ( <React.Fragment>
                        <Link to="/admin/register" > Register | </Link>
                        <Link to="/admin/login"> Login </Link>
                    </React.Fragment> )
                }
                
                <Route exact path="/" component={Home} />
                <Route exact path="/admin/register" component = { Register }  />
                <Route exact path="/admin/login" render = { (props) => {
                        return <Login { ...props } handleAuth = { handleAuth } /> 
                    }}   />
                <Route exact path="/admin/account"  render = { (props) => {
                        return <AdminAccount { ...props } isLoggedIn = { isLoggedIn } /> 
                    }}   />
                <Route exact path="/admin/courses"  render = { (props) => {
                        return <AdminCourses { ...props } isLoggedIn = { isLoggedIn } /> 
                    }}  />
            </div>
        
    )
}

export default withRouter(NavBar)

